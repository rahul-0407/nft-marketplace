'use client'

import React,{useState, useEffect} from 'react'
import {BsImages, BsSearch}  from "react-icons/bs"
import {AiFillHeart, AiOutlineHeart}  from "react-icons/ai"
import {TiArrowSortedDown, TiArrowSortedUp}  from "react-icons/ti"

const NFTDetailsImg = () => {

  const [description, setDescription] = useState(true)
  const [details, setDetails] = useState(true)
  const [like, setLike] = useState(false)

  const openDescription = () =>{
    if(!description){
      setDescription(true)
    } else {
      setDescription(false)
    }
  }

  const openDetails = () =>{
    if(!details){
      setDetails(true)
    } else {
      setDetails(false)
    }
  }

  const likeNFT = () =>{
    if(!like){
      setLike(true)
    } else {
      setLike(false)
    }
  }

  return (
    <div className='NFTDetailsImg'>
      <div className="NFTDetailsImg_box">
        <div className="NFTDetailsImg_box_NFT">
          <div className="NFTDetailsImg_box_NFT_like">
            <BsSearch className='NFTDetailsImg_box_NFT_like_icon'/>
            <p onClick={()=>likeNFT()}>
              {like? (
                <AiOutlineHeart className='NFTDetailsImg_box_NFT_like_icon'/>
              ) : <AiFillHeart className='NFTDetailsImg_box_NFT_like_icon'/>}
              <span>23</span>
            </p>
          </div>

          <div className="NFTDetailsImg_box_NFT_img">
            <img src="./nft-image-1.png" alt="NFT image" width={700} height={800} objectFit="cover" className='NFTDetailsImg_box_NFT_img_img'/>
          </div>

        </div>

        <div className="NFTDetailsImg_box_description" onClick={()=>openDescription()}>
          <p>Description</p>
          {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>

        {description && (
          <div className="NFTDetailsImg_box_description_box">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque cumque voluptate expedita, mollitia unde recusandae culpa nobis deserunt molestias harum neque alias fugiat quo rerum impedit ut voluptatibus adipisci sunt.</p>
          </div>
        )}

        <div className="NFTDetailsImg_box_details" onClick={()=>openDetails()}>
          <p>Details</p>
          {details ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>

        {details && (
          <div className="NFTDetailsImg_box_details_box">
          <small>2000 x 2000 px.IMAGE(685KB)</small>
          <p>
            <small>Contract Address</small>
            <br/><br/>
            0x447a634A3EE85f5D95b56dD01C35737795297440
          </p>
          <p>
            <small>Token ID</small>
            100300372864
          </p>
        </div>
        )}

        

      </div>
    </div>
  )
}

export default NFTDetailsImg