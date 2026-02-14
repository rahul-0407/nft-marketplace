"use client";

import React, { useState, useContext } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Button from "./Button";
import DropZone from "./DropZone";
import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";
import { useRouter } from "next/navigation";

const UploadNFT = () => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);

  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const categoryArray = [
    { image: "./nft-image-1.png", category: "Sports" },
    { image: "./nft-image-2.png", category: "Arts" },
    { image: "./nft-image-3.png", category: "Music" },
    { image: "./nft-image-1.png", category: "Digital" },
    { image: "./nft-image-2.png", category: "Time" },
    { image: "./nft-image-3.png", category: "Photography" },
  ];

  return (
    <div className="upload">
      {/* DropZone */}
      <DropZone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag and drop file"
        subHeading="or Browse media on your device"
        name={name}
        website={website}
        description={description}
        fileSize={fileSize}
        category={category}
        properties={properties}
        royalties={royalties}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />

      <div className="upload_box">
        {/* Item Name */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Item Name</label>
          <input
            type="text"
            placeholder="Rahul Kumar"
            className="
              w-full mt-2 p-4
              border border-(--icons-color)
              rounded-xl
              bg-transparent outline-none
              placeholder:text-(--icons-color)
            "
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Website */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Website</label>

          <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
            <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
              <MdOutlineHttp />
            </div>

            <input
              type="text"
              placeholder="Website"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className="px-4">
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Description</label>

          <textarea
            rows="6"
            placeholder="Something about yourself in few words"
            className="
              w-full mt-2 p-4
              bg-transparent outline-none
              border border-(--icons-color)
              rounded-xl
              placeholder:text-(--icons-color)
            "
            onChange={(e) => setDescription(e.target.value)}
          />

          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        {/* Choose Collection */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">
            Choose collection
          </label>

          <p className="px-4">
            Choose an exciting collection or create a new one
          </p>

          <div className="flex gap-4 max-[35em]:grid max-[35em]:grid-cols-2">
            {categoryArray.map((el, i) => (
              <div
                key={i}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
                className={`
                  border border-(--icons-color)
                  rounded-xl p-4 cursor-pointer
                  transition-all
                  ${
                    active === i + 1
                      ? "bg-(--icons-color) text-(--main-bg-color)"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-12">
                  <img
                    src={el.image}
                    alt="category"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />

                  <div className="bg-(--icons-color) text-(--main-bg-color) rounded-full p-1">
                    <TiTick />
                  </div>
                </div>

                <p className="text-[1.2rem] font-bold leading-[1.2]">
                  Crypto Legent - Professor
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Royalties / Size / Properties */}
        <div
          className="
            grid grid-cols-3 gap-4 mt-8
            max-[768px]:grid-cols-2
            max-[560px]:grid-cols-1
          "
        >
          {/* Royalties */}
          <div>
            <label className="block ml-4 font-bold text-lg">Royalties</label>

            <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
              <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
                <FaPercent />
              </div>

              <input
                type="text"
                placeholder="20%"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block ml-4 font-bold text-lg">Size</label>

            <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
              <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
                <MdOutlineAttachFile />
              </div>

              <input
                type="text"
                placeholder="165MB"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          {/* Properties */}
          <div>
            <label className="block ml-4 font-bold text-lg">Price</label>

            <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
              <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
                <AiTwotonePropertySafety />
              </div>

              <input
                type="text"
                placeholder="Price"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block ml-4 font-bold text-lg">Propertie</label>

            <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
              <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
                <AiTwotonePropertySafety />
              </div>

              <input
                type="text"
                placeholder="Propertie"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-8 my-16">
          <Button
            btnName="Upload"
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router,
                // website,
                // fileSize,
                // royalties,
                // category,
                // properties,
              )
            }
            classStyle="w-full grid place-items-center text-[1.3rem]"
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle="w-full grid place-items-center text-[1.3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
