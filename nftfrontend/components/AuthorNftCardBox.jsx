'use client'

import React,{useState} from 'react'
import NFTCardTwo from './NFTCardTwo'
import FollowerTabCard from './FollowerTabCard'

const AuthorNftCardBox = ({collectiables,created,like,follower,following, nfts, myNFTS}) => {

  // const likeArray = [
  //   "/nft-image-1.png",
  //   "/nft-image-2.png",
  //   "/nft-image-3.png",
  //   "/nft-image-1.png",
  //   "/nft-image-2.png"
  // ]

  const followingArray = [
    { bg: "/creatorbackground-3.jpeg", avatar: "/user-3.png", name: "Aman Verma", price: "7.540 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-4.jpg", avatar: "/user-4.png", name: "Rohit Singh", price: "5.120 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-9.jpg", avatar: "/user-5.png", name: "Neha Patel", price: "11.004 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-6.jpg", avatar: "/user-6.png", name: "Karan Shah", price: "6.899 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-10.jpg", avatar: "/user-7.png", name: "Ankit Jain", price: "8.777 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-8.jpg", avatar: "/user-8.png", name: "Pooja Mehta", price: "10.320 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
  ];

  const followerArray = [
    { bg: "/creatorbackground-3.jpeg", avatar: "/user-3.png", name: "Aman Verma", price: "7.540 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" },
    { bg: "/creatorbackground-4.jpg", avatar: "/user-4.png", name: "Rohit Singh", price: "5.120 ETH" , seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" },
    { bg: "/creatorbackground-1.jpeg", avatar: "/user-5.png", name: "Neha Petal", price: "11.004 ETH" , seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" },
    { bg: "/creatorbackground-6.jpg", avatar: "/user-6.png", name: "Karan Shah", price: "6.899 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-9.jpg", avatar: "/user-7.png", name: "Ankit Jain", price: "8.777 ETH", seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"  },
    { bg: "/creatorbackground-8.jpg", avatar: "/user-8.png", name: "Pooja Mehta", price: "10.320 ETH" , seller:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" },
  ];

  return (
    <div className='AuthorNFTCardBox w-full mb-56'>
     
      {collectiables && nfts && nfts.length > 0 && <NFTCardTwo NFTData={nfts}/>}
      
      
      {created && myNFTS && myNFTS.length > 0 && <NFTCardTwo NFTData={myNFTS}/>}
      
      {like && <NFTCardTwo NFTData={nfts}/>}
      
      {follower && (
        <div className='AuthorNFTCardBox_box w-[80%] mx-auto my-0 grid gap-8 grid-cols-4'>
          {followerArray.map((el, i)=><FollowerTabCard key={i} data={el} i={i}/>)}
        </div>
      )}
      
      {following && (
        <div className='AuthorNFTCardBox_box w-[80%] mx-auto my-0 grid gap-8 grid-cols-4'>
          {followingArray.map((el, i)=><FollowerTabCard key={i} data={el} i={i}/>)}
        </div>
      )}
    </div>
  )
}

export default AuthorNftCardBox