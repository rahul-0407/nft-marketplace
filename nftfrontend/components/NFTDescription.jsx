'use client'

import React,{useState} from 'react'
import {MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep} from "react-icons/md"
import {BsThreeDots} from "react-icons/bs"
import {FaWallet, FaPercentage} from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram
} from "react-icons/ti";
import {BiTransferAlt, BiDollar} from "react-icons/bi"
import Button from './Button';
import NFTTabs from './NFTTabs';

const NFTDescription = () => {

  const [social, setSocial] = useState(false)
  const [NFTMenu, setNFTMenu] = useState(false)
  const [history, setHistory] = useState(true)
  const [provanance, setProvanance] = useState(false)
  const [owner, setOwner] = useState(false);

  const historyArray = [
    "./user-1.png",
    "./user-2.png",
    "./user-3.png",
    "./user-4.png",
    "./user-5.png"
  ]

  const provonanceArray = [
    "./user-6.png",
    "./user-7.png",
    "./user-8.png",
    "./user-9.png",
    "./user-10.png"
  ]

  const ownerArray = [
    "./user-1.png",
    "./user-8.png",
    "./user-3.png",
    "./user-10.png",
    "./user-7.png"
  ]

  const openSocial = () => {
    if(!social){
      setSocial(true)
      setNFTMenu(false)
    } else {
      setSocial(false)
    }
  }

  const openNFTMenu = () => {
    if(!NFTMenu){
      setSocial(false)
      setNFTMenu(true)
    } else {
      setNFTMenu(false)
    }
  }

  const openTabs = (e) =>{
    const btnText = e.target.innerText;

    if(btnText == "Bid History"){
      setHistory(true)
      setProvanance(false)
      setOwner(false)
    } else if (btnText == "Provanance"){
      setHistory(false);
      setProvanance(true)
      setOwner(false)
    }
  }

  const openOwner = () => {
    if(!owner){
      setOwner(true);
      setHistory(false)
      setProvanance(false)
    } else {
      setOwner(false)
      setHistory(true)
    }
  }



  return (
    <div className='NFTDescription'>
      <div className="NFTDescription_box">


        {/* ===== part one ===== */}
        <div className="NFTDescription_box_share">
          <p>Virtual Worlds</p>
          <div className="NFTDescription_box_share_box">
            <MdCloudUpload className='NFTDescription_box_share_box_icon' onClick={()=>openSocial()}/>
            {social && (
              <div className="NFTDescription_box_share_box_social">
                <a href="#">
                  <TiSocialFacebook/> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram/> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin/> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter/> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube/> YouTube
                </a>
              </div>
            )}

            <BsThreeDots className='NFTDescription_box_share_box_icon' onClick={()=>openNFTMenu()}/>
            {NFTMenu && (
              <div className="NFTDescription_box_share_box_social">
                <a href="#">
                  <BiDollar/> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt/> Transfer
                </a>
                <a href="#">
                  <MdReportProblem/> Report Abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep/> Delete item
                </a>
              </div>
            )}

          </div>
        </div>


        {/* ===== part two ===== */}
        <div className="NFTDescription_box_profile">
          <h1>BearX #234</h1>
          <div className="NFTDescription_box_profile_box">
            <div className="NFTDescription_box_profile_box_left">
              <img src="./user-1.png" alt="" width={40} height={40} className='NFTDescription_box_profile_box_left_img'/>
              <div className="NFTDescription_box_profile_box_left_info">
                <small>Creator</small> <br/>
                <span>Karli Costa <MdVerified/></span>
              </div>
            </div>

            <div className="NFTDescription_box_profile_box_right">
              <img src="./user-1.png" alt="" width={40} height={40} className='NFTDescription_box_profile_box_left_img'/>
              <div className="NFTDescription_box_profile_box_right_info">
                <small>Creator</small> <br/>
                <span>
                  Karli Costa <MdVerified/>
                </span>
              </div>
            </div>

          </div>
        

        <div className="NFTDescription_box_profile_biding">
          <p>
            <MdTimer/> <span>Auction ending in:</span>
          </p>
          <div className="NFTDescription_box_profile_biding_box_timer">
            <div className="NFTDescription_box_profile_biding_box_timer_item">
              <p>2</p>
              <span>Days</span>
            </div>
            <div className="NFTDescription_box_profile_biding_box_timer_item">
              <p>22</p>
              <span>hours</span>
            </div>
            <div className="NFTDescription_box_profile_biding_box_timer_item">
              <p>45</p>
              <span>mins</span>
            </div>
            <div className="NFTDescription_box_profile_biding_box_timer_item">
              <p>12</p>
              <span>secs</span>
            </div>
          </div>
          <div className="NFTDescription_box_profile_biding_box_price">
            <div className="NFTDescription_box_profile_biding_box_price_bid">
              <small>Current Bid</small>
              <p>1.000 ETH <span>( = $3,221.22)</span></p>
            </div>
            <span>[96 in stock]</span>
          </div>
          <div className="NFTDescription_box_profile_biding_box_button">
            <Button btnName="Place a bid" icon=<FaWallet/> handleClick={()=>{}} classStyle="button"/>
            <Button btnName="Make offer" icon=<FaPercentage/> handleClick={()=>{}} classStyle="button"/>
          </div>
          <div className="NFTDescription_box_profile_biding_box_tabs">
            <button onClick={(e)=>openTabs(e)}>Bid History</button>
            <button onClick={(e)=>openTabs(e)}>Provonance</button>
            <button onClick={(e)=>openOwner()}>Owner</button>
          </div>
          {history && (
            <div className="NFTDescription_box_profile_biding_box_card">
              <NFTTabs dataTab={historyArray}/>
            </div>
          )}
          {provanance && (
            <div className="NFTDescription_box_profile_biding_box_card">
              <NFTTabs dataTab={provonanceArray}/>
            </div>
          )}
          {owner && (
            <div className="NFTDescription_box_profile_biding_box_card">
              <NFTTabs dataTab={ownerArray} icon=<MdVerified/> />
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default NFTDescription