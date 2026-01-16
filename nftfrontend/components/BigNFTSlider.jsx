"use client";

import React, { useCallback, useState } from "react";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import Button from "./Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      name: "Himanshu Kumar",
      collection: "GYM",
      price: "0.000064664 ETH",
      like: 243,
      image: "/user-1.png",
      nftImage: "/nft-image-1.png",
      time: { days: 27, hours: 10, minutes: 11, second: 35 },
    },
    {
      title: "Buddy NFT",
      name: "Ankit Raj",
      collection: "Home",
      price: "0.000064664 ETH",
      like: 243,
      image: "/user-2.png",
      nftImage: "/nft-image-2.png",
      time: { days: 27, hours: 10, minutes: 11, second: 35 },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) setIdNumber(idNumber + 1);
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) setIdNumber(idNumber - 1);
  }, [idNumber]);

  return (
    <div className="w-full">
      <div
        className="
          mx-auto w-[80%] py-40
          grid grid-cols-12 items-center
          max-[65em]:w-[90%]
          max-[65em]:grid-cols-1
          max-[65em]:py-24
          max-[65em]:gap-10 text-(--icons-color)
        "
      >
        {/* LEFT */}
        <div
          className="
            col-[1/7]
            row-span-full
            bg-(--main-bg-color)
            shadow-(--box-shadow-small)
            rounded-2xl
            p-8
            z-1111
            h-[75vh]

            max-[65em]:col-span-1
            max-[65em]:row-auto
            max-[65em]:h-auto
            max-[65em]:p-6
          "
        >
          <h2 className="text-[3rem] font-bold text-(--icons-color) max-[65em]:text-[2rem]">
            {sliderData[idNumber].title}
          </h2>

          {/* CREATOR */}
          <div className="grid grid-cols-2 items-center mb-8 max-[65em]:grid-cols-1 max-[65em]:gap-6">
            <div className="flex items-center gap-4">
              <img
                src={sliderData[idNumber].image}
                alt="creator"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-sm">Creator</p>
                <h4 className="flex items-center gap-1 font-bold text-(--icons-color)">
                  {sliderData[idNumber].name} <MdVerified />
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <AiFillFire className="text-6xl text-(--icons-color) max-[65em]:text-4xl" />
              <div>
                <p className="text-sm">Collection</p>
                <h4 className="font-bold text-(--icons-color)">
                  {sliderData[idNumber].collection}
                </h4>
              </div>
            </div>
          </div>

          {/* BIDDING */}
          <div>
            <div
              className="
                border-[3px] border-(--shadow-dark-color)
                my-8 px-16 pb-4 rounded-lg

                max-[65em]:px-6
              "
            >
              <small
                className="
                  bg-(--shadow-dark-color)
                  px-8 py-4 rounded-lg font-semibold
                  text-(--icons-color)
                "
              >
                Current Bid
              </small>
              <p className="mt-5 text-(--icons-color)">
                {sliderData[idNumber].price}
              </p>
            </div>

            <p className="flex items-center gap-4 mt-12 max-[65em]:mt-6">
              <MdTimer className="text-[2rem]" />
              <span>Auction ending in</span>
            </p>

            <div
              className="
                flex items-center gap-12 text-center
                py-8 pb-12 border-b border-(--shadow-dark-color)

                max-[65em]:gap-6
              "
            >
              {Object.entries(sliderData[idNumber].time).map(([k, v]) => (
                <div key={k}>
                  <p className="text-[2rem] font-black max-[65em]:text-[1.2rem]">
                    {v}
                  </p>
                  <span>{k}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-16 pt-10 max-[65em]:gap-6">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          {/* SLIDER BUTTONS */}
          <div className="flex items-center gap-8 text-[2rem] mt-12 justify-center">
            <TbArrowBigLeftLine
              onClick={dec}
              className="
                cursor-pointer transition-all duration-300
                hover:bg-(--shadow-dark-color)
                hover:rounded-full hover:p-4
              "
            />
            <TbArrowBigRightLine
              onClick={inc}
              className="
                cursor-pointer transition-all duration-300
                hover:bg-(--shadow-dark-color)
                hover:rounded-full hover:p-4
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            col-[6/-1]
            row-span-full
            p-4
            bg-(--main-bg-color)
            rounded-[2.5rem]

            max-[65em]:col-span-1
            max-[65em]:row-auto
          "
        >
          <div className="relative">
            <img
              src={sliderData[idNumber].nftImage}
              alt="NFT"
              className="rounded-4xl w-full max-[65em]:h-auto"
            />

            <div
              className="
                absolute top-12 right-12
                flex items-center gap-4
                text-[1.2rem]
                bg-(--icons-color)
                text-(--shadow-dark-color)
                px-4 py-2 rounded-[5rem]

                max-[65em]:top-4
                max-[65em]:right-4
              "
            >
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;

