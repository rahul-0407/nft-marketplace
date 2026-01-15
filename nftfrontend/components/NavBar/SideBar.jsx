"use client";

import React, { useState } from "react";
import Link from "next/link";

import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import Button from "../Button";

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  const helpCenter = [
    { name: "About", link: "about" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Sign Up", link: "sign-up" },
    { name: "Sign In", link: "sign-in" },
    { name: "Subscription", link: "subscription" },
  ];

  const openDiscoverMenu = () => {
    setOpenDiscover((prev) => !prev);
  };

  const openHelpMenu = () => {
    setOpenHelp((prev) => !prev);
  };

  const closeSideBar = (e) => {
    console.log("hello");
    setOpenSideMenu(false);
  };

  return (
    <div
      className="
        fixed top-0
        w-96 h-screen
        bg-[var(--main-bg-color)]
        shadow-[var(--box-shadow)]
        overflow-y-auto
        z-[11111] 
      "
      style={{ scrollbarWidth: "none" }}
    >
      {/* CLOSE BUTTON */}
      <div
        className="
          absolute top-12 right-8 
          cursor-pointer
          transition-all duration-200 ease-in-out
          shadow-[var(--box-shadow)]
          hover:rotate-45
          w-6 h-6 flex items-center justify-center
        "
        style={{ zIndex: 999999 }}
        onClick={closeSideBar}
      >
        <GrClose />
      </div>

      {/* TOP BOX */}
      <div className="p-8 border-b border-[var(--icons-color)] ">
        <img src="/logo.svg" alt="logo" width={150} height={150} />
        <p className="mt-[2rem]">
          Discover the most outstanding articles on all topics of NFT & your own
          stories and share them
        </p>

        <div className="flex gap-5 text-[1.5rem] items-center mt-4">
          <a className="p-1 rounded-full grid transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)]">
            <TiSocialFacebook />
          </a>
          <a className="p-1 rounded-full grid transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)]">
            <TiSocialLinkedin />
          </a>
          <a className="p-1 rounded-full grid transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)]">
            <TiSocialTwitter />
          </a>
          <a className="p-1 rounded-full grid transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)]">
            <TiSocialYoutube />
          </a>
          <a className="p-1 rounded-full grid transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)]">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      {/* MENU */}
      <div className="p-8 uppercase font-medium border-b border-[var(--icons-color)]">
        {/* DISCOVER */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={openDiscoverMenu}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className="px-4 mt-2">
              {discover.map((el, i) => (
                <p key={i}>
                  <Link href={`/${el.link}`}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        {/* HELP CENTER */}
        <div className="mt-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={openHelpMenu}
          >
            <p>Help Center</p>
            <TiArrowSortedUp />
          </div>

          {openHelp && (
            <div className="px-4 mt-2">
              {helpCenter.map((el, i) => (
                <p key={i}>
                  <Link href={`/${el.link}`}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="p-8 flex items-center justify-between">
        <Button btnName="Create" handleClick={()=>{}} />
        <Button btnName="Connect Wallet" handleClick={()=>{}}/>
      </div>
    </div>
  );
};

export default SideBar;