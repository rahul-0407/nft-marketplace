'use client'

import React,{useState} from 'react'
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";


const AudioCardSmall = () => {

    const [play, setPlay] = useState(false)

    const playMusic = () => {
        if(!play){
            setPlay(true)
        } else {
            setPlay(false)
        }
    }

  return (
    <div className='audioPlayer'>
        <div className="audioPlayer_box">
            <img src="creatorbackground-1.jpg" alt=" music" width={100} height={100} className='audioPlayer_box_img'/>
            <div className="audioPlayer_box_info">
                <h4>NFT music#1234</h4>
                <div className="audioPlayer_box_info_box">
                    {/* <LikeProfile/> */}
                    <div className="audioPlayer_box_info_box_price">
                        <small>Price</small>
                        <p>1.00 ETH</p>
                    </div>
                </div>
            </div>

            <div className="audioPlayer_box_playBtn" onClick={()=> playMusic()}>
                {play? <TbPlayerPause/> : <TbPlayerPlay/>}
            </div>
        </div>
    </div>
  )
}

export default AudioCardSmall