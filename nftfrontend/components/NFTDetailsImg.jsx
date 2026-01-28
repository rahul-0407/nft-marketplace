'use client'

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const NFTDetailsImg = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  return (
    <div className="w-full">
      <div>
        {/* NFT Image Section */}
        <div className="grid relative">
          {/* Top Overlay */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 pt-6">
            <BsSearch className="text-xl cursor-pointer" />

            <p
              onClick={() => setLike(!like)}
              className="
                bg-[var(--icons-color)]
                px-4 py-1
                text-[var(--main-bg-color)]
                flex items-center gap-2
                rounded-full cursor-pointer
              "
            >
              {like ? (
                <AiOutlineHeart className="text-lg" />
              ) : (
                <AiFillHeart className="text-lg" />
              )}
              <span>23</span>
            </p>
          </div>

          {/* Image */}
          <img
            src="./nft-image-1.png"
            alt="NFT image"
            width={700}
            height={800}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Description Toggle */}
        <div
          onClick={() => setDescription(!description)}
          className="
            flex items-center justify-between
            bg-[var(--icons-bg-color)]
            rounded-lg px-4 py-3
            cursor-pointer mt-6
          "
        >
          <p className="leading-none">Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className="px-4 py-3 text-sm leading-relaxed">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Beatae doloremque cumque voluptate expedita, mollitia unde
              recusandae culpa nobis deserunt molestias harum neque alias
              fugiat quo rerum impedit ut voluptatibus adipisci sunt.
            </p>
          </div>
        )}

        {/* Details Toggle */}
        <div
          onClick={() => setDetails(!details)}
          className="
            flex items-center justify-between
            bg-[var(--icons-bg-color)]
            rounded-lg px-4 py-3
            cursor-pointer mt-4
          "
        >
          <p className="leading-none">Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className="px-4 py-3 text-sm space-y-4">
            <small className="block">2000 x 2000 px · IMAGE (685KB)</small>

            <p>
              <small className="block">Contract Address</small>
              <span className="break-all">
                0x447a634A3EE85f5D95b56dD01C35737795297440
              </span>
            </p>

            <p>
              <small className="block">Token ID</small>
              100300372864
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
