"use client";

import React, { useState, useEffect, useContext } from "react";
import Banner from "@/components/Banner";
import NFTCardTwo from "@/components/NFTCardTwo";
import Brand from "@/components/Brand";
import Title from "@/components/Title";
import AuthorProfileCard from "@/components/AuthorProfileCard";
import AuthorTabs from "@/components/AuthorTabs";
import FollowerTabCard from "@/components/FollowerTabCard";
import AuthorNftCardBox from "@/components/AuthorNftCardBox";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const Author = () => {
  const followingArray = [
    {
      bg: "/creatorbackground-3.jpeg",
      avatar: "/user-3.png",
      name: "Aman Verma",
      price: "7.540 ETH",
    },
    {
      bg: "/creatorbackground-4.jpg",
      avatar: "/user-4.png",
      name: "Rohit Singh",
      price: "5.120 ETH",
    },
    {
      bg: "/creatorbackground-9.jpg",
      avatar: "/user-5.png",
      name: "Neha Patel",
      price: "11.004 ETH",
    },
    {
      bg: "/creatorbackground-6.jpg",
      avatar: "/user-6.png",
      name: "Karan Shah",
      price: "6.899 ETH",
    },
    {
      bg: "/creatorbackground-10.jpg",
      avatar: "/user-7.png",
      name: "Ankit Jain",
      price: "8.777 ETH",
    },
    {
      bg: "/creatorbackground-8.jpg",
      avatar: "/user-8.png",
      name: "Pooja Mehta",
      price: "10.320 ETH",
    },
  ];

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext,
  );

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
        console.log("Listed NFTs:", items);
        setNfts(items);
      });
    }
  }, [currentAccount]);

  useEffect(() => {
    if (currentAccount) {
      fetchMyNFTsOrListedNFTs("fetchMyNFT").then((items) => {
        console.log("My NFTs:", items);
        fetch("/api/debug", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(items),
        });
        setMyNFTs(items);
      });
    }
  }, [currentAccount]);

  return (
    <div className="author">
      <Banner bannerImage="/creatorbackground-2.jpeg" />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTabs
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNftCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={myNFTs}
        myNFTs={nfts}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />

      <div className="author_box w-[80%] grid-cols-4 grid mx-auto my-0 gap-8 mt-24 max-[560px]:w-[90%] max-[560px]:grid-cols-1">
        {followingArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} data={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default Author;
