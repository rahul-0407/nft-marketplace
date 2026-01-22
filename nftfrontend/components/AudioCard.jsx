"use client";

import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import LikeProfile from "./LikeProfile";
 

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="grid grid-cols-5 grid-rows-[repeat(6,4rem)] gap-4 overflow-hidden rounded-3xl hover:shadow-(--box-shadow) relative transition-all duration-300 ease-in
">

      {/* Like + Time Row */}
      <div className="col-span-full row-start-1 row-end-2 flex justify-between z-20">
        
        {/* Like */}
        <div
          onClick={() => setLike(!like)}
          className="bg-(--icons-color) text-(--shadow-dark-color) flex items-center gap-3 px-5 py-5 rounded-full cursor-pointer m-4"
        >
          {like ? (
            <AiFillHeart className="text-red-500 text-3xl" />
          ) : (
            <AiOutlineHeart className="text-red-500 text-3xl" />
          )}
          <span>24</span>
        </div>

        {/* Skewed Time */}
        <div className="bg-(--main-bg-color) px-16 py-2 -mr-6 skew-x-35 rounded-bl-2xl">
          <div className="-skew-x-35 text-center">
            <small className="font-medium">Remaining time</small>
            <h5 className="text-2xl font-bold max-[1024px]:text-base">
              3h:15m:20s
            </h5>
          </div>
        </div>
      </div>

      {/* Player Row */}
      <div className="col-span-full row-start-4 row-end-5 flex items-center gap-16 px-12 z-30">
        <img src="./musicwave.png" alt="music" width={200} />

        <div
          onClick={() => setPlay(!play)}
          className="p-5 rounded-full bg-(--main-bg-color) text-3xl cursor-pointer"
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>

      {/* Bottom Details */}
      <div className="col-span-full row-start-5 -row-end-1 z-20 flex justify-between items-center
                      bg-(--main-bg-color) w-[90%] p-8 rounded-tr-3xl leading-tight">

        <div>
          <h4 className="text-lg leading-none">NFT music #1234</h4>

          <div className="border border-(--icons-color) px-4  rounded-lg h-12 cursor-pointer mt-2">
            <small className="bg-(--icons-color) text-(--main-bg-color) px-2 py-1 rounded-md text-xs">
              Price
            </small>
            <p className="font-bold mt-1">$3,221.33</p>
          </div>
        </div>

        <div className="text-right grid">
          <LikeProfile/>
          <small className="mt-8">24 in stock</small>
        </div>
      </div>

      {/* Background Image */}
      <div className="col-span-full row-span-full">
        <img
          src="./creatorbackground-10.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AudioCard;
