'use client'

import React, { useState } from "react";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";
import Button from "./Button";
import NFTTabs from "./NFTTabs";

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = ["./user-1.png","./user-2.png","./user-3.png","./user-4.png","./user-5.png"];
  const provonanceArray = ["./user-6.png","./user-7.png","./user-8.png","./user-9.png","./user-10.png"];
  const ownerArray = ["./user-1.png","./user-8.png","./user-3.png","./user-10.png","./user-7.png"];

  return (
    <div className="w-full">
      <div className="w-full">

        {/* ===== TOP SHARE BAR ===== */}
        <div className="flex items-center justify-between relative">
          <p className="bg-(--icons-color) text-(--main-bg-color) px-3 py-1 rounded-full">
            Virtual Worlds
          </p>

          <div className="flex items-center gap-8 text-xl">
            <MdCloudUpload
              onClick={() => { setSocial(!social); setNFTMenu(false); }}
              className="cursor-pointer"
            />

            {social && (
              <div className="absolute top-20 right-0 w-56 bg-(--main-bg-color) shadow-(--box-shadow) rounded-lg p-4 z-50">
                {[
                  [TiSocialFacebook, "Facebook"],
                  [TiSocialInstagram, "Instagram"],
                  [TiSocialLinkedin, "LinkedIn"],
                  [TiSocialTwitter, "Twitter"],
                  [TiSocialYoutube, "YouTube"],
                ].map(([Icon, label]) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center gap-3 p-2 rounded transition-all duration-300 hover:bg-(--icons-color) hover:text-(--main-bg-color)"
                  >
                    <Icon /> {label}
                  </a>
                ))}
              </div>
            )}

            <BsThreeDots
              onClick={() => { setNFTMenu(!NFTMenu); setSocial(false); }}
              className="cursor-pointer"
            />

            {NFTMenu && (
              <div className="absolute top-20 right-0 w-56 bg-(--main-bg-color) shadow-(--box-shadow) rounded-lg p-4 z-50">
                <a className="flex items-center gap-3 p-2"><BiDollar /> Change Price</a>
                <a className="flex items-center gap-3 p-2"><BiTransferAlt /> Transfer</a>
                <a className="flex items-center gap-3 p-2"><MdReportProblem /> Report Abuse</a>
                <a className="flex items-center gap-3 p-2"><MdOutlineDeleteSweep /> Delete Item</a>
              </div>
            )}
          </div>
        </div>

        {/* ===== TITLE + PROFILE ===== */}
        <div className="mt-6">
          <h1 className="text-[3.2rem] leading-tight font-bold">BearX #234</h1>

          <div className="flex items-center gap-8 mt-4 max-[560px]:grid">
            {["Creator", "Owner"].map((role, i) => (
              <div key={i} className={`flex items-center gap-4 ${i === 1 && "border-l pl-6 border-(--icons-color) max-[560px]:border-none max-[560px]:pl-0"}`}>
                <img src="./user-1.png" width={40} height={40} className="rounded-full" />
                <div>
                  <small>{role}</small><br />
                  <span className="font-extrabold flex items-center gap-1">
                    Karli Costa <MdVerified />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== AUCTION ===== */}
        <div className="mt-6">
          <p className="flex items-center gap-2 text-xl">
            <MdTimer /> Auction ending in:
          </p>

          <div className="flex gap-12 mt-4">
            {["Days","Hours","Mins","Secs"].map((label, i) => (
              <div key={i}>
                <p className="text-5xl font-black leading-none">{[2,22,45,12][i]}</p>
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[4fr_1fr] gap-12 items-end mt-10 max-[560px]:grid-cols-[2fr_1fr]">
            <div className="border-2 border-(--icons-color) rounded-lg">
              <small className="bg-(--icons-color) text-(--main-bg-color) px-4 py-2 rounded-lg ml-6">
                Current Bid
              </small>
              <p className="p-4 text-2xl font-black">
                1.000 ETH <span className="text-2xl">( = $3,221.22)</span>
              </p>
            </div>
            <span>[96 in stock]</span>
          </div>

          {/* ===== ACTION BUTTONS ===== */}
          <div className="flex items-center gap-6 mt-12 max-[560px]:gap-4">
            <Button btnName="Place a bid" icon={<FaWallet />} />
            <Button btnName="Make offer" icon={<FaPercentage />} />
          </div>

          {/* ===== TABS ===== */}
          <div className="flex gap-4 mt-12">
            {["Bid History","Provonance","Owner"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setHistory(tab === "Bid History");
                  setProvanance(tab === "Provonance");
                  setOwner(tab === "Owner");
                }}
                className="bg-(--shadow-dark-color) px-6 py-3 rounded-full text-(--icons-color) font-semibold"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 p-4">
            {history && <NFTTabs dataTab={historyArray} />}
            {provanance && <NFTTabs dataTab={provonanceArray} />}
            {owner && <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
