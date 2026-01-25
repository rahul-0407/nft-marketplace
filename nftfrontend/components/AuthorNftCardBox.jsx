'use client'

import React,{useState} from 'react'
import NFTCardTwo from './NFTCardTwo'
import FollowerTabCard from './FollowerTabCard'

const AuthorNftCardBox = ({collectiables,created,like,follower,following}) => {

  const collectibleArray = [
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png",
    "./nft-image-2.png"
  ]

  const createdArray = [
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png"
  ]

  const likeArray = [
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png",
    "./nft-image-2.png"
  ]

  const followingArray = [
    { bg: "./creatorbackground-3.jpeg", avatar: "./user-3.png", name: "Aman Verma", price: "7.540 ETH" },
    { bg: "./creatorbackground-4.jpg", avatar: "./user-4.png", name: "Rohit Singh", price: "5.120 ETH" },
    { bg: "./creatorbackground-9.jpg", avatar: "./user-5.png", name: "Neha Patel", price: "11.004 ETH" },
    { bg: "./creatorbackground-6.jpg", avatar: "./user-6.png", name: "Karan Shah", price: "6.899 ETH" },
    { bg: "./creatorbackground-10.jpg", avatar: "./user-7.png", name: "Ankit Jain", price: "8.777 ETH" },
    { bg: "./creatorbackground-8.jpg", avatar: "./user-8.png", name: "Pooja Mehta", price: "10.320 ETH" },
  ];

  const followerArray = [
    { bg: "./creatorbackground-3.jpeg", avatar: "./user-3.png", name: "Aman Verma", price: "7.540 ETH" },
    { bg: "./creatorbackground-4.jpg", avatar: "./user-4.png", name: "Rohit Singh", price: "5.120 ETH" },
    { bg: "./creatorbackground-9.jpg", avatar: "./user-5.png", name: "Neha Patel", price: "11.004 ETH" },
    { bg: "./creatorbackground-6.jpg", avatar: "./user-6.png", name: "Karan Shah", price: "6.899 ETH" },
    { bg: "./creatorbackground-10.jpg", avatar: "./user-7.png", name: "Ankit Jain", price: "8.777 ETH" },
    { bg: "./creatorbackground-8.jpg", avatar: "./user-8.png", name: "Pooja Mehta", price: "10.320 ETH" },
  ];

  return (
    <div className='AuthorNFTCardBox w-full mb-56'>
      {collectiables && <NFTCardTwo NFTData={collectibleArray}/>}
      {created && <NFTCardTwo NFTData={createdArray}/>}
      {like && <NFTCardTwo NFTData={likeArray}/>}
      {follower && (
        <div className='AuthorNFTCardBox_box w-[80%] mx-auto my-0 grid gap-8 grid-cols-4'>{followerArray.map((el, i)=><FollowerTabCard el={el} i={i}/>)}</div>
      )}
      {following && (
        <div className='AuthorNFTCardBox_box'>{followingArray.map((el, i)=><FollowerTabCard el={el} i={i}/>)}</div>
      )}
    </div>
  )
}

export default AuthorNftCardBox