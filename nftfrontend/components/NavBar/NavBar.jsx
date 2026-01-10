"use client";

import React, { useState } from "react";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

import Discover from "./Discover";
import HelpCenter from "./HelpCenter";
import Notification from "./Notification";
import Profile from "./Profile";
import SideBar from "./SideBar";
import Button from "../Button";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  /* ================= LOGIC FUNCTIONS (NAMES UNCHANGED) ================= */

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    setDiscover(btnText === "Discover");
    setHelp(btnText === "Help Center");
    setNotification(false);
    setProfile(false);
  };

  const openNotificcation = () => {
    setDiscover(false);
    setHelp(false);
    setProfile(false);
    setNotification((prev) => !prev);
  };

  const openProfile = () => {
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setProfile((prev) => !prev);
  };

  const openSideBar = () => {
    setOpenSideMenu((prev) => !prev);
  };

  /* =========================== JSX =========================== */

  return (
    <nav className="w-full py-6 relative z-[1111111]">
      <div className="w-[80%] mx-auto grid grid-cols-2 items-center gap-4">

        {/* LEFT SECTION */}
        <div className="grid grid-cols-[1fr_2fr] items-center gap-4">
          <img src="/logo.svg" alt="NFT Marketplace" width={100} height={100} />

          <div className="w-[60%] border border-[var(--icons-color)] flex items-center p-2 rounded-full">
            <input
              type="text"
              placeholder="Search NFT"
              className="w-[90%] bg-transparent outline-none"
            />
            <BsSearch className="cursor-pointer text-[1.4rem]" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid grid-cols-[1fr_1fr_.5fr_1fr_.3fr] gap-4 items-center self-end">

          {/* DISCOVER */}
          <div className="relative cursor-pointer">
            <p onClick={openMenu}>Discover</p>
            {discover && (
              <div className="absolute mt-4 p-4 w-60 rounded-xl bg-[var(--main-bg-color)] shadow-[var(--box-shadow)]">
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER */}
          <div className="relative cursor-pointer">
            <p onClick={openMenu}>Help Center</p>
            {help && (
              <div className="absolute mt-4 p-4 w-60 rounded-xl bg-[var(--main-bg-color)] shadow-[var(--box-shadow)]">
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className="relative">
            <MdNotifications
              className="text-[2rem] cursor-pointer"
              onClick={openNotificcation}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON */}
          <div className="relative cursor-pointer">
            <Button btnText="Create" />
          </div>

          {/* PROFILE */}
          <div className="relative cursor-pointer">
            <img
              src="/user-1.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
              onClick={openProfile}
            />
            {profile && <Profile />}
          </div>

          {/* MENU BUTTON (hidden by default) */}
          <div className="hidden">
            <CgMenuRight
              className="text-[2.5rem] cursor-pointer"
              onClick={openSideBar}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      {openSideMenu && (
        <div className="fixed inset-0 bg-black/30 z-[999999]">
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
