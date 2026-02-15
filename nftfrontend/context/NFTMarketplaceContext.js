"use client";

import React, { useEffect, useState, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";
import axios from "axios";
import { uploadToIPFS, uploadJSONToIPFS } from "@/lib/ipfsClient";
import { useRouter } from "next/navigation";

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
  const router = useRouter()

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

      console.log(currentAccount);
    } catch (error) {
      console.log("Something wrong while connecting to the wallet");
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install metaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("error while connecting to the wallet");
    }
  };

  // Upload file to IPFS using Pinata
  const uploadToIPFSHandler = async (file) => {
    try {
      const url = await uploadToIPFS(file);
      return url;
    } catch (error) {
      console.error("IPFS upload error:", error);
      throw error;
    }
  };

  // Create NFT - Upload metadata and create sale
  const createNFT = async (
    name,
    price,
    image,
    description,
    router
  ) => {

    if (!name || !description || !price || !image) {
      console.error("Missing required fields");
      return;
    }

    const data = { name, description, image };

    try {
      // Upload metadata JSON to IPFS
      const url = await uploadJSONToIPFS(data);
      console.log("Metadata uploaded to:", url);

      // Create sale on blockchain
      await createSale(url, price, false);
    } catch (error) {
      console.error("Create NFT failed:", error);
      throw error;
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log(transaction)
      console.log("Sale created successfully!");
      router.push('/searchPage')
    } catch (error) {
      console.error("Error while creating sale:", error);
      throw error;
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether",
            );

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          },
        ),
      );

      return items;
    } catch (error) {
      console.error("Error while fetching NFTs:", error);
      throw error;
    }
  };

  useEffect(()=>{
    fetchNFTs();
  },[])

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithContract();

      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether",
            );

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          },
        ),
      );

      return items;
    } catch (error) {
      console.error("Error while fetching listed NFTs:", error);
      throw error;
    }
  };

  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithContract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      console.log("NFT purchased successfully!");
      router.push("/author")
    } catch (error) {
      console.error("Error while buying NFT:", error);
      throw error;
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        title,
        checkIfWalletIsConnected,
        connectWallet,
        uploadToIPFS: uploadToIPFSHandler,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        connectingWithContract,
        buyNFT,
        currentAccount,
        createSale,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceProvider;