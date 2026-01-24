'use client'

import React,{useState} from 'react'
import { BsImage } from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {MdTimer, MdVerified} from "react-icons/md"
import LikeProfile from './LikeProfile';

const NFTCardTwo = ({NFTData}) => {

    const [like, setLike] = useState(false)
    const [likeInc, setLikeInc] = useState(21)

    const likeNft = () => {
        if(!like){
            setLike(true)
            setLikeInc(23)
        } else {
            setLike(false)
            setLikeInc(23+1)
        }
    }

  return (
    <div className='NFTCardTwo'>
        {NFTData.map((el, i)=>(
            <div className="NFTCardTwo_box" key={i+1}>
                <div className="NFTCardTwo_box_like">
                    <div className="NFTCardTwo_box_like_box">
                        <div className="NFTCardTwo_box_like_box_box">
                            <BsImage className='NFTCardTwo_box_like_box_box_icon' />
                            <p onClick={()=>likeNft()}>
                                {like? <AiOutlineHeart/>:<AiFillHeart/>}
                                {""}
                                <span>{likeInc+1}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NFTCardTwo_box_img">
                    <img src={el} alt="NFT" height={500} width={500} objectFit="cover" className='NFTCardTwo_box_img_img'/>
                </div>
                <div className="NFTCardTwo_box_info">
                    <div className="NFTCardTwo_box_info_left">
                        <LikeProfile/>
                        <p>Clone {i+1}</p>
                    </div>
                    <small>4{i+2}</small>
                </div>
                <div className="NFTCardTwo_box_price">
                    <div className="NFTCardTwo_box_price_box">
                        <small>Current Bids</small>
                        <p>1{i+5}</p>
                    </div>
                    <p className='NFTCardTwo_box_price_stock'><MdTimer/> <span>{i+1} hours left</span></p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCardTwo