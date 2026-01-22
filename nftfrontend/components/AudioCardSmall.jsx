"use client";

import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="grid grid-cols-[2fr_5fr_1fr] items-center gap-5 leading-none
                    bg-[var(--bg-shadow-dark-color)] px-4 py-2 rounded-2xl h-32
                    transition-all duration-300 ease-in cursor-pointer hover:shadow-[var(--box-shadow)]">

      {/* Image */}
      <img
        src="creatorbackground-1.jpeg"
        alt="music"
        width={100}
        height={100}
        className="rounded-lg object-cover"
      />

      {/* Info */}
      <div>
        <h4 className="text-base font-bold">NFT music #1234</h4>

        <div className="flex gap-4 mt-2">
          <div className="border border-[var(--icons-color)] text-xs w-[45%] font-semibold rounded-sm">
            <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] px-1 py-[2px] rounded-sm">
              Price
            </small>
            <p className="mt-2">1.00 ETH</p>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div
        onClick={() => setPlay(!play)}
        className="text-3xl bg-[var(--main-bg-color)] rounded-full p-3 cursor-pointer"
      >
        {play ? <TbPlayerPause /> : <TbPlayerPlay />}
      </div>
    </div>
  );
};

export default AudioCardSmall;
