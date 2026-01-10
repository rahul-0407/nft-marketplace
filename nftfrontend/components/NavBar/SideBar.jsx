import React,{useState} from 'react'
import Link from 'next/link'
import {GrClose} from "react-icons/gr"
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown,TiArrowSortedUp} from "react-icons/ti";
import Button from '../Button';

const SideBar = ({setOpenSideMenu}) => {

  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

   const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Searc",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },

  ]

   const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {

      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "SUbscription",
      link: "subscription"
    }
  ]

  const openDiscoverMenu = () => {
    if(!openDiscover){
      setOpenDiscover(true)
    } else {
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if(openHelp){
      setOpenHelp(true)
    } else {
      setOpenHelp(false)
    }
  }

  const closeSideBar = () => {
    setOpenSideMenu(false)
  }


  return (
    <div className='sideBar'>
      <GrClose className='sideBar_closeBtn' onClick={()=>closeSideBar()}/>
        <div className='sideBar_box'>
          <img src="/logo.svg" alt="logo" width={150} height={150} />
          <p>Discove the most outstanding articles on all topices of NFT & your own stories and share them</p>
          <div className='sideBar_social'>
            <a href="#"><TiSocialFacebook/></a>
            <a href="#"><TiSocialLinkedin/></a>
            <a href="#"><TiSocialTwitter/></a>
            <a href="#"><TiSocialYoutube/></a>
            <a href="#"><TiSocialInstagram/></a>
          </div>
        </div>

        <div className='sideBar_menu'>
          <div>
            <div className='sideBar_menu_box' onClick={()=>openDiscoverMenu()}>
              <p>Discover</p>
              <TiArrowSortedDown/>
            </div>
            {openDiscover && (
              <div className='sideBar-discover'>
                {discover.map((el,i)=>(
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="sideBar_menu_box" onClick={()=>openHelpMenu()}>
              <p>Help Center</p>
              <TiArrowSortedUp/>
            </div>
            {openHelp && (
              <div className='sideBar-discover'>
                {helpCenter.map((el,i)=>(
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='sideBar_button'>
          <Button btnName="Create"/>
          <Button btnName="Connect Wallet"/>
        </div>
    </div>
  )
}

export default SideBar