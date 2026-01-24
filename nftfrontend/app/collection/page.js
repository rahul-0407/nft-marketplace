import React from 'react'
import Banner from '@/components/Banner'
import CollectionProfile from '@/components/CollectionProfile'
import Filter from '@/components/Filter'
// import Slider from '@/components/Slider'
// import Brand from '@/components/Brand'
// import Filter from '@/components/Filter'

const Collection = () => {
  return (
    <div className='collection'>
        <Banner bannerImage="./creatorbackground-1.jpeg" />
        <CollectionProfile/>
        <Filter/>
    </div>
  )
}

export default Collection