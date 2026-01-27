import React from 'react'
import NFTDescription from './NFTDescription'
import NFTDetailsImg from './NFTDetailsImg'
import NFTTabs from './NFTTabs'

const NFTDetailsPage = () => {
  return (
    <div className='NFTDetailsPage'>
        <div className="NFTDetailsPage_box">
            <NFTDetailsImg/>
            <NFTDescription/>
        </div>
    </div>
  )
}

export default NFTDetailsPage