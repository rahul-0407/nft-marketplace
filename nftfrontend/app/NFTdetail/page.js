'use client'

import React,{useState, useEffect, useContext} from 'react'
import Button from '@/components/Button'
import Category from '@/components/Category'
import Brand from '@/components/Brand'
import NFTDetailsPage from '@/components/NFTDetailsPage'
import { useRouter } from 'next/navigation'

import { NFTMarketplaceContext } from '@/context/NFTMarketplaceContext'

const NFTdetails = () => {

  const {} = useContext(NFTMarketplaceContext)

  const [nft, setNft] = useState({
    image:"",
    tokenId:"",
    name:"",
    owner:"",
    price:"",
    seller:"",
  })

  const router = useRouter();
  useEffect(()=>{
    if(!router.isReady) return;
    setNft(router.query)
  })

  return (
    <div>
        <NFTDetailsPage/>
        <Category/>
        <Brand/>
    </div>
  )
}

export default NFTdetails