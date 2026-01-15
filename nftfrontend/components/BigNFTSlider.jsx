'useClient'

import React, { useCallback, useState } from "react";

import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

import Button from "./Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Himanshu kuamr",
      collection: "GYM",
      price: "00000064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35
      }
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Ankit raj",
      collection: "Home",
      price: "00000064664 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35
      }
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Ritik raj",
      collection: "GYM",
      price: "00000064664 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35
      }
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Sunny kumar",
      collection: "Home",
      price: "00000064664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_4,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        second: 35
      }
    },
  ];

  const inc  = useCallback(()=>{
    if(idNumber + 1 < sliderData.length){
        setIdNumber(idNumber + 1)
    }
  },[idNumber, sliderData.length])
  const dec  = useCallback(()=>{
    if(idNumber > 0){
        setIdNumber(idNumber - 1)
    }
  },[idNumber])

//   useEffect(()=>{
//     inc();
//   },[])

  return <div className="bigNFTSlider">
    <div className="bigNFTSlider_box">
        <div className="bigNFTSlider_box_left">
            <h2>{sliderData[idNumber].title}</h2>
            <div className="bigNFTSlider_box_left_creator">
                <div className="bigNFTSlider_box_left_creator_profile">
                    <img src={sliderData[idNumber].image} alt="profile image" width={50} height={50} className="bigNFTSlider_box_left_creator_profile_img"/>
                    <div className="bigNFTSlider_box_left_creator_profile_img">
                        <p>Creator</p>
                        <h4>{sliderData[idNumber].name} <span><MdVerified/></span></h4>
                    </div>
                </div>

                <div className="bigNFTSlider_box_left_creator_collection">
                    <AiFillFire className="bigNFTSlider_box_left_creator_collection_icon"/>
                    <div className="bigNFTSlider_box_left_creator_collection_info">
                        <p>Collection</p>
                        <h4>{sliderData[idNumber].collection}</h4>
                    </div>
                </div>


            </div>

            <div className="bigNFTSlider_box_left_bidding">
                <div className="bigNFTSlider_box_left_bidding_box">
                    <small>Current Bid</small>
                    <p>{sliderData[idNumber.price]} <span>$,221,21</span></p>
                </div>
                <p className="bigNFTSlider_box_left_bidding_box_auction">
                    <MdTimer className="bigNFTSlider_box_left_bidding_box_icon"/>
                    <span>Auction ending in</span>
                </p>
                <div className="bigNFTSlider_box_left_bidding_box_timer">
                    <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                        <p>{sliderData[idNumber].time.days}</p>
                        <span>Days</span>
                    </div>
                    <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                        <p>{sliderData[idNumber].time.hours}</p>
                        <span>Hours</span>
                    </div>
                    <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                        <p>{sliderData[idNumber].time.minutes}</p>
                        <span>mins</span>
                    </div>
                    <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                        <p>{sliderData[idNumber].time.second}</p>
                        <span>secs</span>
                    </div>

                </div>

                <div className="bigNFTSlider_box_left_button">
                    <Button btnName="Place" handleClick={()=>{}}/>
                    <Button btnName="View" handleClick={()=>{}}/>
                </div>

            </div>

            <div className="bigNFTSlider_box_left_sliderBtn">
                <TbArrowBigLeftLine className="bigNFTSlider_box_left_sliderBtn_icon" onClick={()=> dec()}/>
                <TbArrowBigRightLine className="bigNFTSlider_box_left_sliderBtn_icon" onClick={()=> inc()}/>
            </div>
            
        </div>

        <div className="bigNFTSlider_box_right">
            <div className="bigNFTSlider_box_right_box">
                <img src={sliderData[idNumber].nftImage} alt="NFT Image" />

                <div className="bigNFTSlider_box_right_box_like">
                    <AiFillHeart/>
                    <span>{sliderData[idNumber].like}</span>
                </div>
            </div>
        </div>

    </div>
  </div>;
};

export default BigNFTSlider;
