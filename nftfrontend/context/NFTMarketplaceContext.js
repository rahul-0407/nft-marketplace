"use client";

import React, { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

export const NFTMarketplaceContext = React.createContext();

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider,
  );

const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();

    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();

    return fetchContract(signer);
  } catch (error) {
    console.error("Error connecting to contract:", error);
  }
};

const NFTMarketplaceProvider = ({ children }) => {
  const title = "Discover, collect, and sell NFTs";

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install metaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account found");
      }

      console.log(currentAccount)
    } catch (error) {
      console.log("Something wrong while connecting to the wallet");
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install metaMask");
      const accounts = await window.ethereum.request({
        method: "eth_reqAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log("error while coneccting to the wallet");
    }
  };

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log("Error uploading to ipfs");
    }
  };

  const createNFT = async (formInput, fileUrl, router) => {
    const { name, description, price } = formInput;

    if (!name || !description || !price || !fileUrl)
      return console.log("data is missing");

    const data = JSON.stringify({ name, description, image: fileUrl });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      await createSale(url, price);
    } catch (error) {}
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUints(formInputPrice, "ether");
      const contract = await connectingWithContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(url, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait()
    } catch (error) {
      console.log("error while creating sale");
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.provider.JsonRpcProvider()
      const contract = fetchContract(provider)

      const data = await contract.fetchMarketItem();
      // console.log(data)

      const items = await Promise.all(
        data.map(
          async({tokenId, seller, owner, price: unformattedPrice}) => {
            const tokenURI = await contract.tokenURI(tokenId)

            const {data: {image, name, description},}= await axios.get(tokenURI)
            const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether")

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller, 
              owner,
              image,
              name,
              description,
              tokenURI
            }
          }
        )
      )

      return items;

    } catch (error) {
      console.log("error while fetching")
    }
  }

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {

      const contract = connectingWithContract()

      const data = type == "fetchItemsListed" ? await contract.fetchItemsListed() : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async({tokenId, seller, owner, price: unformattedPrice}) => {
            const tokenURI = await contract.tokenURI(tokenId)

            const {data: {image, name, description},}= await axios.get(tokenURI)
            const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether")

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller, 
              owner,
              image,
              name,
              description,
              tokenURI
            }
          }
        )
      )

      return items;

      
    } catch (error) {
      console.log("error while fethcing listed nfts")
    }
  }

  const buyNFT = async (nft) => {
    try {

      const contract = await connectingWithContract();
      const price = ethers.utils.parseUnits(nft.price.toString(),"ether");


      const transaction = await contract.createMarketSale(nft.tokenId,{value: price})

      await transaction.wait()
      
    } catch (error) {
      console.log("error while buying nft")
    }
  }

  return (
    <NFTMarketplaceContext.Provider
      value={{
        title,
        checkIfWalletIsConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs, 
        fetchMyNFTsOrListedNFTs,
        connectingWithContract,
        buyNFT,
        currentAccount
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceProvider;
