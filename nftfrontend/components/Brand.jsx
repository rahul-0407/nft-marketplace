'use client'

import React from "react";
import Button from "./Button";

const Brand = () => {
  return (
    <div className="w-full mt-40 mb-28 text-(--icons-color)">
      <div
        className="
          w-[80%] mx-auto
          grid grid-cols-[1.5fr_2fr]
          gap-20 items-center
          max-[560px]:grid-cols-1
        "
      >
        {/* Left */}
        <div>
          <img src="./logo.svg" alt="brand logo" width={100} height={100}  className="mb-8"/>

          <h1 className="text-[5rem] leading-[1.2] font-extrabold max-[560px]:text-[2.5rem]">
            Earn free crypto with Ciscrypt
          </h1>

          <p className="text-xl  max-[560px]:-mt-2 mt-4">
            A creative agency that lead and inspire.
          </p>

          <div className="flex items-center gap-8 mt-12">
            <Button btnName="Create" onClick={() => {}} />
            <Button btnName="Discover" onClick={() => {}} />
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="./eran.png"
            alt="earn img"
            height={600}
            width={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
