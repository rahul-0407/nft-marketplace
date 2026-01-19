import React from 'react'

import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import BigNFTSlider from '@/components/BigNFTSlider'
import Subscribe from '@/components/Subscribe'
import Title from '@/components/Title'
import Category from '@/components/Category'
import Filter from '@/components/Filter'
import NFTCard from '@/components/NFTCard'
import Collection from '@/components/Collection/Collection'


const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="New Collection" paragraph="Explore the NFTSs in the most featured categories."/>
      <Collection/>
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topicsof life."/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category" paragraph="Explore the NFTSs in the most featured categories."/>
      <Category/>
      <Subscribe/>
    </div>
  )
}

export default Home