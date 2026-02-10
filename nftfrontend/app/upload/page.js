'use client'

import React,{useState, useContext, useEffect} from "react";
import UploadNFT from "@/components/UploadNFT";
import {NFTMarketplaceContext} from "../../context/NFTMarketplaceContext"

const Upload = () => {


  const {uploadToIPFS, createNFT} = useContext(NFTMarketplaceContext)

  return (
    <div className="w-full my-32 text-(--icons-color)">
      <div className="w-[60%] mx-auto max-[35em]:w-[90%]">

        {/* Heading */}
        <div className="border-b border-(--shadow-dark-color)">
          <h1 className="text-[3.5rem] font-semibold max-[35em]:text-[2rem]">
            Create new NFT
          </h1>
          <p className="text-[1.4rem] w-[70%] leading-[1.2] max-[35em]:w-full">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        {/* Title */}
        <div className="border-b border-(--shadow-dark-color) mt-16">
          <h2 className="text-[2.5rem] leading-none max-[35em]:text-[1.5rem] max-[35em]:leading-none font-semibold">
            Image, Video, Audio, or 3D Model
          </h2>
          <p className="text-[1.1rem] font-medium">
            File types supported: JPG, PNG, GIF, SVG, MP4, WAV, OGG, GBL, GLTF.
            Max Size: 100MB
          </p>
        </div>

        {/* Form */}
        <div>
          <UploadNFT />
        </div>

      </div>
    </div>
  );
};

export default Upload;
