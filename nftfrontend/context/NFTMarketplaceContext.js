"use client";

import React, { useEffect, useState } from "react";
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
    signerOrProvider
  );

const connectingWithContract = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.BrowserProvider(connection);
  const signer = await provider.getSigner();
  return fetchContract(signer);
};

const NFTMarketplaceProvider = ({ children }) => {
  const title = "Discover, collect, and sell NFTs";
  const router = useRouter();

  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  const uploadToIPFSHandler = async (file) => {
    try {
      const url = await uploadToIPFS(file);
      return url;
    } catch (err) {
      setError(err.message);
    }
  };

  const createNFT = async (name, price, image, description) => {
    try {
      if (!name || !description || !price || !image)
        throw new Error("All fields are required");

      const data = { name, description, image };
      const url = await uploadJSONToIPFS(data);

      await createSale(url, price, false);
      router.push("/searchPage");
    } catch (err) {
      setError(err.message);
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
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const meta = await axios.get(tokenURI);

          return {
            price: ethers.formatUnits(price.toString(), "ether"),
            tokenId: Number(tokenId),
            seller,
            owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
            tokenURI,
          };
        })
      );

      return items;
    } catch (err) {
      setError(err.message);
      return [];
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithContract();

      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      if (!data || data.length === 0) return [];

      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const meta = await axios.get(tokenURI);

          return {
            price: ethers.formatUnits(price.toString(), "ether"),
            tokenId: Number(tokenId),
            seller,
            owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
            tokenURI,
          };
        })
      );

      return items;
    } catch (err) {
      setError(err.message);
      return [];
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
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        title,
        currentAccount,
        connectWallet,
        checkIfWalletIsConnected,
        uploadToIPFS: uploadToIPFSHandler,
        createNFT,
        createSale,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        connectingWithContract,
        error,
        setError,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceProvider;
