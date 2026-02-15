"use client";

import React, { useEffect, useState, useContext } from "react";
import Slider from "@/components/Slider";
import Brand from "@/components/Brand";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import NFTCardTwo from "@/components/NFTCardTwo";
import Banner from "@/components/Banner";

import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const SearchPage = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((item) => {
      setNfts(item.reverse());
      setNftsCopy(item);

      //  Send to server
      // fetch("/api/debug", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(item),
      // });
    });
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTs = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredNFTs.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTs);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  // const collectionArray = [
  //   "./nft-image-1.png",
  //   "./nft-image-2.png",
  //   "./nft-image-3.png",
  //   "./nft-image-1.png",
  //   "./nft-image-2.png",
  //   "./nft-image-3.png",
  //   "./nft-image-1.png",
  //   "./nft-image-2.png",
  //   "./nft-image-3.png",
  // ];

  return (
    <div className="searchPage">
      <Banner bannerImage="./creatorbackground-4.jpg" />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      <NFTCardTwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
