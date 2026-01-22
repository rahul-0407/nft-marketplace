import React from 'react'

const Banner = ({bannerImage}) => {
  return (
    <div className='banner'>
        <div className="banner_img">
            <img src={bannerImage} alt="background" objectFit="cover" width={1600} height={300}/>
        </div>
        <div className="banner_img_mobile">
            <img src={bannerImage} alt="background" objectFit="cover" width={1600} height={900}/>
        </div>
    </div>
  )
}

export default Banner