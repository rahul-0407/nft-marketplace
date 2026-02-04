"use client";

import React, { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

export const NFTMarketplaceContext = React.createContext();

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
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

   const title = "Discover, collect, and sell NFTs"

   const [currentAccount, setCurrentAccount] = useState("")

   const checkIfWalletIsConnected = async () => {
    try {
        if(!window.ethereum) return console.log("Install metaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })
        if(accounts.length){
            setCurrentAccount(accounts[0])
        } else {
            console.log("No Account found")
        }
    } catch (error) {
        console.log("Something wrong while connecting to the wallet")
    }
   }

  return (
    <NFTMarketplaceContext.Provider value={{ title, checkIfWalletIsConnected }}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceProvider;
