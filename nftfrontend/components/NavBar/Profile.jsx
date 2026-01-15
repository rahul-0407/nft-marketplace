import Link from "next/link";
import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

const Profile = () => {
  return (
    <div
      className="
        absolute
        p-8 px-4
        text-[1rem]
        w-[20rem]
        rounded-[1rem]
        left-[-17rem]
        top-[4.5rem]
        z-[2222222222]
        bg-[var(--main-bg-color)]
        shadow-[var(--box-shadow)]
      "
    >
      {/* ACCOUNT */}
      <div className="flex items-start gap-8 p-4">
        <img
          src="/user-1.png"
          alt="user profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div >
          <p className="font-semibold">Rahul Gupta</p>
          <small className="">X039867593537....</small>
        </div>
      </div>

      {/* MENU */}
      <div className="">
        {/* MENU ONE */}
        <div>
          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-[var(--icons-color)]
              hover:text-[var(--shadow-dark-color)] 
              hover:rounded-[0.3rem]
            "
          >
            <FaUserAlt />
            <p>
              <Link href="/myprofile">My Profile</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-[var(--icons-color)]
              hover:text-[var(--shadow-dark-color)]
              hover:rounded-[0.3rem]
            "
          >
            <FaRegImage />
            <p>
              <Link href="/my-items">My Items</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-[var(--icons-color)]
              hover:text-[var(--shadow-dark-color)]
              hover:rounded-[0.3rem]
            "
          >
            <FaUserEdit />
            <p>
              <Link href="/edit-profile">Edit Profile</Link>
            </p>
          </div>
        </div>

        {/* MENU TWO */}
        <div>
          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-[var(--icons-color)]
              hover:text-[var(--shadow-dark-color)]
              hover:rounded-[0.3rem]
            "
          >
            <MdHelpCenter />
            <p>
              <Link href="/help">Help</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-[var(--icons-color)]
              hover:text-[var(--shadow-dark-color)]
              hover:rounded-[0.3rem]
            "
          >
            <TbDownload />
            <p>
              <Link href="/disconnect">Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
