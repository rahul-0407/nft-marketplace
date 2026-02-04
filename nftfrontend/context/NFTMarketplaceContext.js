'use client'

import React,{useState, useContext, useEffect} from 'react'
import web3Modal from "web3modal"
import { ethers } from 'ethers'
import {Router} from "next/router"

import {NFTMarketplaceAddress, NFTMarketplaceABI} from "./constants"

export const NFTMarketplaceContext = React.createContext()

const NFTMarketplaceProvider = ({children}) => {

    const title = "Discover, collect, and sell NFTs"

  return (
    <NFTMarketplaceContext.Provider value={{title}}>
        {children}
    </NFTMarketplaceContext.Provider>
  )
}

export default NFTMarketplaceProvider