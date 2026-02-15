"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import LikeProfile from "./LikeProfile";

const NFTCardTwo = ({ NFTData }) => {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: {
        liked: !prev[id]?.liked,
        count: prev[id]?.liked
          ? prev[id].count - 1
          : (prev[id]?.count || 21) + 1,
      },
    }));
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
      {NFTData.map((el, i) => {
        const likeData = likes[el.tokenId] || { liked: false, count: 21 };
        console.log("NFT ITEM:", el);

        return (
          <Link
            href={`/NFTdetail/${el.tokenId}`}
            key={i+1}
            className="block"
          >
            <div
              className="
                relative grid
                cursor-pointer rounded-2xl
                transition-all duration-300 ease-in
                hover:shadow-(--box-shadow)
              "
            >
              {/* Like Overlay */}
              <div className="absolute inset-0 z-20 p-4">
                <div className="flex items-center justify-between">
                  <BsImage className="text-2xl text-(--icons-color)" />

                  <p
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation
                      handleLike(el.tokenId);
                    }}
                    className="
                      flex items-center gap-2
                      text-lg bg-(--icons-color) text-(--main-bg-color)
                      rounded-full px-2 py-1 cursor-pointer
                    "
                  >
                    {likeData.liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    <span>{likeData.count}</span>
                  </p>
                </div>
              </div>

              {/* Image */}
              <div>
                <img
                  src={el.image}
                  alt={el.name}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between p-4">
                <div className="leading-none">
                  <LikeProfile />
                  <p className="text-2xl font-black">{el.name}</p>
                </div>
                <small className="text-base">4{i + 2}</small>
              </div>

              {/* Price */}
              <div className="flex justify-between items-end leading-none p-4">
                <div>
                  <small className="bg-(--icons-color) text-(--main-bg-color) px-1 py-[2px] rounded-sm ml-4">
                    Current Bids
                  </small>
                  <p className="border border-(--icons-color) px-4 pt-6 pb-4 text-xl rounded-sm mt-2">
                    {el.price} ETH
                  </p>
                </div>

                <p className="flex items-center gap-2 text-base">
                  <MdTimer /> <span>{i + 1} hours left</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NFTCardTwo;
