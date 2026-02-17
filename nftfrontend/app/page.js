"use client";

import React, { useContext, useEffect, useState } from "react";

import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import BigNFTSlider from "@/components/BigNFTSlider";
import Subscribe from "@/components/Subscribe";
import Title from "@/components/Title";
import Category from "@/components/Category";
import Filter from "@/components/Filter";
import NFTCard from "@/components/NFTCard";
import Collection from "@/components/Collection/Collection";
import FollowerTab from "@/components/FollowerTab";
import AudioLive from "@/components/AudioLive";
import Slider from "@/components/Slider";
import Brand from "@/components/Brand";
import Video from "@/components/Video";
import Loader from "@/components/Loader";
import { getTopCreators } from "@/TopCreators/TopCreators";

import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletIsConnected, fetchNFTs } = useContext(
    NFTMarketplaceContext,
  );

  useContext(() => {
    checkIfWalletIsConnected();
  }, []);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchNFTs().then((item) => {
      const reversed = item.reverse();
      setNfts(reversed);
      setNftsCopy(item);

      const creatorData = getTopCreators(reversed);
      setCreators(creatorData);
    });
  }, []);

  return (
    <div className="homePage">
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Explore the NFTSs in the most featured categories."
      />
      <AudioLive />
      {/* <Title heading="New Collection" paragraph="Explore the NFTSs in the most featured categories."/> */}
      {creators.length == 0 ? <Loader length={4}/> : <FollowerTab TopCreator={creators} />}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topicsof life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader length={8} /> : <NFTCard NFTData={nfts} />}
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTSs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      {/* <Video/> */}
    </div>
  );
};

export default Home;
