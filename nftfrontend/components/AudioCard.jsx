'use client'

import React,{useState} from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPLay] = useState(false);

  const likeNftt = () => {
    if(!like){
        setLike(true)
    } else {
        setLike(false)
    }
  }

  const playMusic = () => {
    if(!play){
        setPLay(true)
    } else {
        setPLay(false)
    }
  }

  return (
    <div className="audioCard">
      <div className="audioCard_box">
        <div className="audioCard_box_like_time">
          <div className="audioCard_box_like" onClick={() => likeNftt()}>
            {like ? (
              <AiFillHeart className="audioCard_box_like_icon" />
            ) : (
              <AiOutlineHeart className="audioCard_box_like_icon_unlike" />
            )}
            <span>24</span>
          </div>
          <div className="audioCard_box_time">
            <div className="audioCard_box_like_time_remaining">
              <small>Remaining time</small>
              <h5>3h:15m:20s</h5>
            </div>
          </div>
        </div>

        <div className="audioCard_box_player">
            <img src="./musicwave.png" alt="music" width={200}/>
          <div className="audioCard_box_musicPlayer" onClick={() => playMusic()}>
            {play ? (
              <div className="audioCard_box_musicPlayer_icon">
                <TbPlayerPause />
              </div>
            ) : (
              <div className="audioCard_box_musicPlayer_icon">
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className="audioCard_box__details">
          <div className="audioCard_box_details_info">
            <h4>NFT music #1234</h4>
            <div className="audioCard_box__details_info_price">
              <small>Price</small>
              <p>$3,221.33</p>
            </div>
          </div>
          <div className="audioCard_box_details_info">
            <small>24 in stock</small>
          </div>
        </div>
        <div className="audioCard_box_img">
          <img
            src="./creatorbackground-10.jpg"
            alt="background"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
