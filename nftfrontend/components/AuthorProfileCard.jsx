"use client";

import React, { useState } from "react";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import Button from "./Button";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setShare(false);
      setReport(true);
    } else {
      setReport(false);
    }
  };

  return (
    <div className="w-full mt-20 relative z-22222 text-(--icons-color)">
      <div
        className="
          w-[80%] mx-auto
          grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_4fr_1.3fr]
          items-center
          bg-(--main-bg-color)
          p-10 rounded-2xl shadow-(--box-shadow)
          gap-12
          max-[560px]:w-[90%]
          max-[560px]:p-2
          max-[560px]:pb-6
        "
      >
        {/* Image */}
        <div className="max-[560px]:w-1/2">
          <img
            src="./nft-image-1.png"
            alt="nft"
            width={220}
            height={220}
            className="rounded-2xl"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-[2.5rem] font-semibold  max-[560px]:text-3xl">
            Dony Herrera{" "}
            <span className="inline-block align-middle">
              <MdVerified />
            </span>
          </h2>

          {/* Address */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              value="0x829BD824B03D092293333..A830"
              id="myInput"
              readOnly
              className="
                outline-none bg-transparent border-none
                w-[35%] text-base
                max-[560px]:w-[85%]
              "
            />
            <FiCopy
              onClick={() => copyAddress()}
              className="
                transition-all duration-300 ease-in
                cursor-pointer
                hover:shadow-(--box-shadow)
                hover:text-(--icons-color)
              "
            />
          </div>

          {/* Bio */}
          <p className="text-[1.1rem]  w-[90%] max-[560px]:text-base max-[560px]:leading-relaxed">
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTS.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4 text-2xl mt-4 max-[560px]:px-8">
            <a
              href="#"
              className="
                bg-(--icons-color) text-(--main-bg-color)
                rounded-full grid p-2 border border-(--icons-color)
                transition-all duration-300 ease-in cursor-pointer
                hover:shadow-(--box-shadow)
                hover:bg-(--main-bg-color)
                hover:text-(--icons-color)
              "
            >
              <TiSocialFacebook />
            </a>

            <a
              href="#"
              className="
                bg-(--icons-color) text-(--main-bg-color)
                rounded-full grid p-2 border border-(--icons-color)
                transition-all duration-300 ease-in cursor-pointer
                hover:shadow-(--box-shadow)
                hover:bg-(--main-bg-color)
                hover:text-(--icons-color)
              "
            >
              <TiSocialInstagram />
            </a>

            <a
              href="#"
              className="
                bg-(--icons-color) text-(--main-bg-color)
                rounded-full grid p-2 border border-(--icons-color)
                transition-all duration-300 ease-in cursor-pointer
                hover:shadow-(--box-shadow)
                hover:bg-(--main-bg-color)
                hover:text-(--icons-color)
              "
            >
              <TiSocialLinkedin />
            </a>

            <a
              href="#"
              className="
                bg-(--icons-color) text-(--main-bg-color)
                rounded-full grid p-2 border border-(--icons-color)
                transition-all duration-300 ease-in cursor-pointer
                hover:shadow-(--box-shadow)
                hover:bg-(--main-bg-color)
                hover:text-(--icons-color)
              "
            >
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        {/* Share / Follow */}
        <div className="flex items-start gap-8 relative max-[560px]:col-span-full max-[560px]:row-span-full max-[560px]:p-4 max-[560px]:gap-4">
          <Button btnName="Follow" handleClick={() => {}} />

          {/* Share */}
          <MdCloudUpload
            onClick={() => openShare()}
            className="text-[2.5rem] cursor-pointer max-[560px]:text-2xl"
          />

          {share && (
            <div
              className="
                absolute left-8 top-20
                w-60 p-2
                bg-(--main-bg-color)
                rounded-2xl shadow-(--box-shadow)
                z-1111111
                max-[560px]:left-36
              "
            >
              <p className="flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--main-bg-color) rounded">
                <span className="text-2xl">
                  <TiSocialFacebook />
                </span>
                Facebook
              </p>

              <p className="flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--main-bg-color) rounded">
                <span className="text-2xl">
                  <TiSocialInstagram />
                </span>
                Instagram
              </p>

              <p className="flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--main-bg-color) rounded">
                <span className="text-2xl">
                  <TiSocialLinkedin />
                </span>
                LinkedIn
              </p>

              <p className="flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--main-bg-color) rounded">
                <span className="text-2xl">
                  <TiSocialYoutube />
                </span>
                Youtube
              </p>
            </div>
          )}

          {/* Report */}
          <BsThreeDots
            onClick={() => openReport()}
            className="text-[2.5rem] cursor-pointer max-[560px]:text-2xl"
          />

          {report && (
            <div
              className="
                absolute left-20 top-16
                w-40 p-2
                bg-(--main-bg-color)
                rounded-2xl shadow-(--box-shadow)
                z-111111
                max-[560px]:left-36
              "
            >
              <p className="flex items-center gap-4">
                <span className="text-2xl">
                  <MdOutlineReportProblem />
                </span>
                Report abuse
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
