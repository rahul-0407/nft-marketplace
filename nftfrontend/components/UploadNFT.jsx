"use client";

import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Button from "./Button";
import DropZone from "./DropZone";

const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");

  const categoryArray = [
    {
      image: "./nft-image-1.png",
      category: "Sports",
    },
    {
      image: "./nft-image-2.png",
      category: "Arts",
    },
    {
      image: "./nft-image-3.png",
      category: "Music",
    },
    {
      image: "./nft-image-1.png",
      category: "Digital",
    },
    {
      image: "./nft-image-2.png",
      category: "Time",
    },
    {
      image: "./nft-image-3.png",
      category: "Photography",
    },
  ];

  return (
    <div className="upload">
      <DropZone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag and drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image="./upload"
      />

      <div className="upload_box">
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Item Name</label>
          <input
            type="text"
            placeholder="Rahul Kumar"
            className="
              w-full mt-2 p-4
              border border-[var(--icons-color)]
              rounded-xl
              bg-transparent outline-none
              placeholder:text-[var(--icons-color)]
            "
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Website</label>
          <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
            <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="Website"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className="upload_box_input_para">
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Description</label>
          <textarea
            rows="6"
            placeholder="Something about yourself in few words"
            className="
              w-full mt-2 p-4
              bg-transparent outline-none
              border border-[var(--icons-color)]
              rounded-xl
              placeholder:text-[var(--icons-color)]
            "
            onChaneg={(e) => setDescription(e.target.value)}
          />
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">
            Choose collection
          </label>
          <p className="upload_box_input_para">
            Choose an exciting collection or create a new one
          </p>

          <div className="upload_box_slider_div">
            {categoryArray.map((el, i) => (
              <div
                className={`upload_box_slider ${active == i + 1 ? "active" : ""}`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
              >
                <div className="upload_box_slider_box">
                  <div className="upload_box_slider_box_img">
                    <img
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className="upload_box_slider_box_img_img"
                    />
                  </div>
                  <div className="upload_box_slider_box_img_icon">
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legent - Professor</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
                    grid grid-cols-3 gap-4 mt-8
                    max-[768px]:grid-cols-2
                    max-[560px]:grid-cols-1 Form_box_input_social"
        >
          {/* Facebook */}
          <div>
            <label className="block ml-4 font-bold text-lg">Royalties</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChaneg={(e) => setRoyalties(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Twitter */}
          <div>
            <label className="block ml-4 font-bold text-lg">Size</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
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

          {/* Instagram */}
          <div>
            <label className="block ml-4 font-bold text-lg">Propertie</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
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

        <div className="upload_box_btn">
          <Button
            btnName="Upload"
            handleClick={() => {}}
            classStyle="upload_box_btn_style"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
