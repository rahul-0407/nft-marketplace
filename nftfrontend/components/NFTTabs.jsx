import React from 'react'

const NFTTabs = ({dataTab, icon}) => {
  return (
    <div className='NFTTabs'>
      {dataTab.map((el,k)=>(
        <div className='NFTTabs_box'>
          <img src={el} alt="profile image" width={40} height={40} className='NFTTabs_box_img'/>
          <div className="NFTTabs_box_info">
            <span>
              Offer by $770 by <span>Rahul Gupta</span>{icon}
            </span>
            {/* {icon} */}
            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTTabs