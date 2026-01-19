"use client";

import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  return (
    <div className="w-full py-16">
      {/* filter_box */}
      <div
        className="
          w-[80%] mx-auto
          flex items-center justify-between
          pb-16
          max-[786px]:grid max-[786px]:gap-16 max-[786px]:w-[90%]
        "
      >
        {/* filter_box_left */}
        <div
          className="
            flex gap-8
            max-[786px]:grid max-[786px]:grid-cols-3
            max-[786px]:gap-2
          "
        >
          {["NFTs", "Arts", "Musics", "Sports", "Photography"].map(
            (label, i) => (
              <button
                key={i}
                className="
                  border outline-none
                  px-6 py-4
                  rounded-full
                  border-(--main-bg-color)
                  transition-all duration-300 ease-in
                  text-[1.3rem]
                  cursor-pointer
                  bg-(--main-bg-color)
                  hover:border-(--icons-color)
                  hover:text-(--icons-color)
                  hover:shadow-(--box-shadow)
                  max-[375px]:p-1
                  max-[425px]:p-4
                "
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* filter_box_right */}
        <div>
          <div
            className="
              border border-(--icons-color)
              px-8 py-4
              rounded-full
              text-(--icons-color)
              shadow-(--box-shadow)
              cursor-pointer
              flex items-center gap-4
              max-[786px]:justify-center
              max-[786px]:gap-16
              max-[786px]:px-8
            "
            onClick={openFilter}
          >
            <FaFilter />
            <span>Filter</span>
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>

      {/* filter_box_items */}
      {filter && (
        <div
          className="
            w-[80%] mx-auto
            flex
            py-8
            border-t border-(--icons-color)
            max-[786px]:grid max-[786px]:grid-cols-2 max-[786px]:w-[90%]
          "
        >
          {/* ITEM 1 */}
          <div className="p-4">
            <div
              className="
                bg-(--icons-color)
                px-4 py-2
                rounded-full
                text-(--main-bg-color)
                cursor-pointer
                flex items-center gap-2
              "
            >
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="p-4">
            <div
              className="
                border border-(--icons-color)
                text-(--icons-color)
                px-4 py-2
                rounded-full
                cursor-pointer
                flex items-center gap-2
                max-[786px]:justify-between
              "
              onClick={openImage}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="p-4">
            <div
              className="
                border border-(--icons-color)
                text-(--icons-color)
                px-4 py-2
                rounded-full
                cursor-pointer
                flex items-center gap-2
                max-[786px]:justify-between
              "
              onClick={openVideo}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="p-4">
            <div
              className="
                border border-(--icons-color)
                text-(--icons-color)
                px-4 py-2
                rounded-full
                cursor-pointer
                flex items-center gap-2
                max-[786px]:justify-between
              "
              onClick={openMusic}
            >
              <FaMusic /> <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* ITEM 5 */}
          <div className="p-4">
            <div
              className="
                bg-(--icons-color)
                px-4 py-2
                rounded-full
                text-(--main-bg-color)
                cursor-pointer
                flex items-center gap-2
              "
            >
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
