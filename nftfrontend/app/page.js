import React from 'react'

import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import BigNFTSlider from '@/components/BigNFTSlider'
import Subscribe from '@/components/Subscribe'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Subscribe/>
    </div>
  )
}

export default Home