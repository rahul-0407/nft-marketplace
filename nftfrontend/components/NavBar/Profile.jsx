import Link from 'next/link';
import React from 'react'
import {FaUserAlt,FaRegImage, FaUserEdit} from "react-icons/fa";
import {MdHelpCenter} from "react-icons/md";
import {TbDownloadOff,TbDownload} from "react-icons/tb";


const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile_account">
        <img src="/user-1.png" alt="user profile" width={50} height={50} className='profile_account_img' onClick={()=> {}}/>
        <div className='profile_accout_info'>
          <p>Rahul Gupta</p>
          <small>X039867593537....</small>
        </div>
      </div>

      <div className="profile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt/>
            <p>
              <Link href={{pathname: '/myprofile'}}>My Profile</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaRegImage/>
            <p>
              <Link href={{pathname: '/my-items'}}>My Items</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaUserEdit/>
            <p>
              <Link href={{pathname: '/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter/>
            <p>
              <Link href={{pathname: "/help"}}>Help</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <TbDownload/>
            <p>
              <Link href={{pathname: "/disconnect"}}>Disconnect</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile