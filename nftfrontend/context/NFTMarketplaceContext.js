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
    signerOrProvider,
  );

// Polygon Amoy testnet chainId
const EXPECTED_CHAIN_ID = 80002n;
const EXPECTED_CHAIN_ID_HEX = "0x13882";

const connectingWithContract = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.BrowserProvider(connection);

  const network = await provider.getNetwork();

  // Validate the wallet is on the correct network
  if (network.chainId !== EXPECTED_CHAIN_ID) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: EXPECTED_CHAIN_ID_HEX }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: EXPECTED_CHAIN_ID_HEX,
              chainName: "Polygon Amoy Testnet",
              nativeCurrency: {
                name: "Polygon Amoy",
                symbol: "POL",
                decimals: 18,
              },
              rpcUrls: [
                "https://polygon-amoy.g.alchemy.com/v2/gvSAhY8S8dFMTxxMZBZCG",
              ],
              blockExplorerUrls: ["https://amoy.polygonscan.com/"],
            },
          ],
        });
      } else {
        throw new Error(
          "Please switch your wallet to Polygon Amoy testnet to use this app.",
        );
      }
    }
    // Reconnect after network switch
    const newProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await newProvider.getSigner();
    return fetchContract(signer);
  }

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
            value: listingPrice,
          })
        : await contract.resellToken(id, price, {
            value: listingPrice,
          });

      await transaction.wait();
    } catch (err) {
      if (err.code === "CALL_EXCEPTION") {
        setError(
          "Contract call failed. Make sure your wallet is connected to Polygon Amoy testnet and the contract is deployed.",
        );
      } else {
        setError(err.message || "Transaction failed");
      }
    }
  };

  const fetchNFTs = async () => {
    try {
      const contract = await connectingWithContract();

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
        }),
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
        }),
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
