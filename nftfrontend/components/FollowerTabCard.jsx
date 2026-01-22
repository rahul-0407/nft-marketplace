'use client'

import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const FollowerTabCard = ({ i, data }) => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="relative grid grid-cols-4 bg-[var(--main-bg-color)] rounded-3xl transition-all duration-200 ease-in cursor-pointer hover:shadow-[var(--box-shadow)]">

      {/* Rank */}
      <div className="absolute z-20 bg-[var(--icons-color)] text-[var(--main-bg-color)] m-4 text-xs px-2 py-[2px] rounded-full border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)]">
        #{i + 1} <span>🥇</span>
      </div>

      {/* Background Image */}
      <div className="col-span-full">
        <img
          src={data.bg}
          alt="profile background"
          width={500}
          height={300}
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>

      {/* Avatar */}
      <div className="col-span-full text-center -mt-8 relative">
        <div className="absolute w-16 h-16 bg-[var(--main-bg-color)] rounded-full -top-2 left-1/2 -translate-x-1/2 z-10" />
        <img
          src={data.avatar}
          alt="profile"
          width={50}
          height={50}
          className="mx-auto rounded-full relative z-20"
        />
      </div>

      {/* Info */}
      <div className="col-span-full flex items-center justify-between px-4 pb-4 max-[425px]:px-8">
        <div>
          <h4 className="text-sm font-semibold">
            {data.name} <span><MdVerified /></span>
          </h4>
          <p className="text-xs">{data.price}</p>
        </div>

        <div>
          {following ? (
            <button
              onClick={() => setFollowing(false)}
              className="bg-[var(--shadow-dark-color)] px-6 py-2 rounded-full border border-[var(--shadow-dark-color)] transition-all duration-300 ease-in hover:bg-transparent text-sm"
            >
              Follow <TiTick />
            </button>
          ) : (
            <button
              onClick={() => setFollowing(true)}
              className="bg-[var(--shadow-dark-color)] px-6 py-2 rounded-full border border-[var(--shadow-dark-color)] transition-all duration-300 ease-in hover:bg-transparent text-sm"
            >
              Following
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
