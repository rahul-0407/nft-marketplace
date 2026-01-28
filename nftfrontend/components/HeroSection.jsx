'use client'

import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div
      className="
        w-[80%]
        mx-auto
        my-12
        max-[35em]:w-[90%]
      "
    >
      <div
        className="
          grid
          grid-cols-2
          gap-8
          max-[55em]:grid-cols-1
          max-[55em]:gap-16
        "
      >
        {/* LEFT */}
        <div
          className="
            pr-24
            max-[55em]:pr-8 mt-[4em]
          "
        >
          <h1
            className="
              text-[5rem]
              leading-none font-bold text-(--icons-color)
              max-[55em]:text-[3rem] mb-8
            "
          >
            Discover, collect, and sell NFTs
          </h1>

          <p className="mb-8 text-(--icons-color)">
            Discover the most outstanding NFTs in all topics of life. Creativity
            your NFTs and sell them
          </p>

          <Button btnName="Start your search" />
        </div>

        {/* RIGHT */}
        <div>
          <img src="./hero.png" alt="Hero section" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
