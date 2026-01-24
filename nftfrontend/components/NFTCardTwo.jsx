'use client'

import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import LikeProfile from "./LikeProfile";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNft = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div
      className="
        w-[80%] mx-auto
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-12 mb-56
        max-[560px]:w-[90%] text-(--icons-color)
      "
    >
      {NFTData.map((el, i) => (
        <div
          key={i}
          className="
            relative grid
            cursor-pointer rounded-2xl
            transition-all duration-300 ease-in
            hover:shadow-[var(--box-shadow)]
          "
        >
          {/* Like Overlay */}
          <div className="absolute inset-0 z-20 p-4">
            <div className="flex items-center justify-between">
              <BsImage className="text-2xl text-[var(--icons-color)]" />

              <p
                onClick={() => likeNft()}
                className="
                  flex items-center gap-2
                  text-lg bg-[var(--icons-color)] text-[var(--main-bg-color)]
                  rounded-full px-2 py-1 cursor-pointer
                "
              >
                {like ? <AiOutlineHeart /> : <AiFillHeart />}
                <span>{likeInc + 1}</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={el}
              alt="NFT"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex justify-between p-4">
            <div className="leading-none">
              <LikeProfile />
              <p className="text-2xl font-black">Clone #{i + 1}</p>
            </div>
            <small className="text-base">4{i + 2}</small>
          </div>

          {/* Price */}
          <div className="flex justify-between items-end leading-none p-4">
            <div>
              <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] px-1 py-[2px] rounded-sm ml-4">
                Current Bids
              </small>
              <p className="border border-[var(--icons-color)] px-4 pt-6 pb-4 text-xl rounded-sm mt-2">
                1{i + 5}.000 ETH
              </p>
            </div>

            <p className="flex items-center gap-2 text-base">
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;
