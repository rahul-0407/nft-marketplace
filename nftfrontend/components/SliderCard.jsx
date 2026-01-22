"use client";

import React from "react";
import { motion } from "framer-motion";

const SliderCard = () => {
  return (
    <motion.div className="p-4 max-[375px]:p-2">
      <div
        className="
          rounded-3xl pb-4
          transition-all duration-300 ease-in
          hover:shadow-(--box-shadow)
        "
      >
        {/* Image */}
        <div>
          <img
            src="./creatorbackground-10.jpg"
            alt="slider profile"
            width={500}
            height={300}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Title */}
        <div className="flex items-center justify-between gap-4 px-4 mt-4">
          <p className="text-lg font-extrabold leading-tight">
            NFT video #12345
          </p>

          <div className="flex items-center gap-2">
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>

        {/* Price + Time */}
        <div className="flex justify-between px-4 mt-4 leading-none text-right">
          <div className="border border-(--icons-color) px-4 py-2 rounded-sm">
            <small className="bg-(--icons-color) text-(--main-bg-color) px-2 py-1 rounded-sm text-xs">
              Current ETH
            </small>
            <p className="text-xl font-bold mt-4">1.000 ETH</p>
          </div>

          <div className="grid items-end">
            <small>Remaining time</small>
            <p className="text-xl font-bold">3h:15m:20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
