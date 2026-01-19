"use client";

import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

const NFTCard = () => {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [like, setLike] = useState(true);

  const likeNft = () => setLike(!like);

  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-40 text-(--icons-color)">
      {featureArray.map((_el, i) => (
        <div
          key={i}
          className="bg-(--shadow-light-color) p-4 rounded-2xl mx-auto cursor-pointer transition-all duration-300 ease-in hover:shadow-(--box-shadow-small) relative overflow-hidden grid"
        >
          {/* Image */}
          <div className="col-span-full row-span-full overflow-hidden rounded-2xl">
            <img
              src="./nft-image-1.png"
              alt="NFT"
              className="rounded-2xl transition-all duration-300 ease-in hover:scale-105"
            />
          </div>

          {/* Top Overlay */}
          <div className="absolute inset-0 flex justify-between items-start z-20">
            {/* Like */}
            <div className="bg-(--icons-color) px-3 py-1 text-(--main-bg-color) rounded-full m-7">
              <div
                className="flex items-center gap-2 text-lg cursor-pointer"
                onClick={likeNft}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart className="text-red-500" />
                )}
                22
              </div>
            </div>

            {/* Skewed Timer */}
            <div className="bg-(--shadow-light-color) px-15 py-2 text-center -mr-4 skew-x-45 rounded-bl-2xl">
              <div className="-skew-x-45">
                <small className="text-sm">Remaining time</small>
                <p className="text-lg font-extrabold">3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-[1.5fr_1fr] items-end">
            {/* Skewed Price Box */}
            <div className="bg-(--shadow-light-color) -ml-6 pt-2 pb-4 skew-x-45 rounded-tr-2xl">
              <div className="-skew-x-45 pl-12">
                <h4 className="text-lg font-bold">Clone #17373</h4>

                <div className="flex justify-between items-end mt-2">
                  <div className="border border-(--icons-color) px-2 py-1 rounded-md">
                    <small className="bg-(--icons-color) text-(--main-bg-color) rounded px-2 py-1 text-xs m-auto">
                      Current Bid
                    </small>
                    <p className="pt-2 font-semibold px-2">1.000 ETH</p>
                  </div>

                  <div>
                    <small className="text-sm">61 in stock</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Icon */}
            <div className="text-right text-(--icons-color) text-2xl m-6">
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
