import React from 'react'
import Slider from '@/components/Slider'
import Brand from '@/components/Brand'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import NFTCardTwo from '@/components/NFTCardTwo'
import Banner from '@/components/Banner'

const SearchPage = () => {

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
    <div className='searchPage'>
      <Banner bannerImage="./creatorbackground-4.jpg"/>
      <SearchBar/>
      <Filter/>
      <NFTCardTwo NFTData={collectionArray} />
      <Slider/>
      <Brand/>
    </div>
  )
}

export default SearchPage