"use client"

import React,{useState} from 'react'
// import Image from 'next/image'
// import Link from "next/link"

import {MdNotifications} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

import Discover from './Discover'
import HelpCenter from './HelpCenter'
import Notification from './Notification'
import Profile from './Profile'
import SideBar from './SideBar'
import Button from '../Button'
// import images from "../../img/index"

const NavBar = () => {

  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false);


  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if(btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  }

  const openNotificcation = () => {
    if(!notification){
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false)
    }
  }

  const openProfile = () => {
    if(!profile){
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false)
    }
  }

  const openSideBar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false)
    }
  }


  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_contianer_left'>
          <div className='logo'>
            <img src="/logo.svg" alt="NFT MARKET PLACE" width={100} height={100}/>
          </div>
          <div className='navbar_contianer_left_box_input'>
            <div className='navbar_contianer_left_box_input_box'>
              <input type="text" placeholder='Search NFT'/>
              <BsSearch onClick={()=>{}} className='search_con'/>
            </div>
          </div>
        </div>

        {/* // enf of left section */}
        <div className='navbar_contianer_right'>
          <div className='navbar_container_right_discover'>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className='navbar_container_right_discover_box'>
              <Discover/>
            </div>
            )}
          </div>

          <div className='navbar_container_right_help'>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className='navbar_container_right_help_box'>
              <HelpCenter/>
            </div>
            )}
          </div>

          <div className='navabr_container_right_notify'>
            <MdNotifications className='notify' onClick={(e) => openNotificcation()} />
              {notification && <Notification/>}
          </div>

           {/* create button section  */}
           <div className='navbar_container_right_button'>
            <Button btnText="Create" />
           </div>

              {/* User Profile   */}
            <div className='navbar_container_right_profile_box'>
              <div className='navabr_contianer_right'>
                <img src="/user-1.png" alt='Profile' height={40} width={40} onClick={()=> openProfile()} className='navbar_container_right_profile'/>
                  {profile && <Profile/>}
              </div>
            </div>

            {/* ======MENU BUTTON====== */}
            <div className='navbar_conatainer_right_menuBtn'>
              <CgMenuRight className='menuIcon' onClick={()=> openSideBar()} />
            </div>

        </div>
      </div>

      {/* =======SIDEBAR COMPONENT===== */}
      {openSideMenu && (
        <div className='SideBar'>
          <SideBar setOpenSideMenu={setOpenSideMenu}/>
        </div>
      )}
    </div>
  )
}

export default NavBar