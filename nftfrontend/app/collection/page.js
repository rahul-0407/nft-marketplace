import React from "react";
import Banner from "@/components/Banner";
import CollectionProfile from "@/components/CollectionProfile";
import Filter from "@/components/Filter";
import Slider from '@/components/Slider'
import Brand from '@/components/Brand'
import NFTCardTwo from "@/components/NFTCardTwo";
// import Filter from '@/components/Filter'

const Collection = () => {
  const collectionArray = [
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
    "./nft-image-1.png",
    "./nft-image-2.png",
    "./nft-image-3.png",
  ];

  return (
    <div className="collection">
      <Banner bannerImage="./creatorbackground-1.jpeg" />
      <CollectionProfile />
      <NFTCardTwo NFTData={collectionArray}/>
      <Filter />
      <Slider/>
      <Brand/>
    </div>
  );
};

export default Collection;
