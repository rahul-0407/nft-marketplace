import React from 'react'

const Notification = () => {
  return (
    <div className='notification'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className="notification_box_image">
          <img src="/user-1.png" alt="profile image" width={50} height={50} className='notification_box_img' />
        </div>
        <div className='notification_box_info'>
          <h4>Rahul Gupta</h4>
          <p>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className='notification_box_new'></span>
      </div>
    </div>
  )
}

export default Notification