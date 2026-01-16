import React from 'react'

import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import BigNFTSlider from '@/components/BigNFTSlider'
import Subscribe from '@/components/Subscribe'
import Title from '@/components/Title'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Browse by category" paragraph="Explore the NFTSs in the most featured categories."/>
      <Subscribe/>
    </div>
  )
}

export default Home