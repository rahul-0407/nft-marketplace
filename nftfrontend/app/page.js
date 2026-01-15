import React from 'react'

import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import BigNFTSlider from '@/components/BigNFTSlider'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
    </div>
  )
}

export default Home