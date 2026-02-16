import Link from "next/link";
import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

const Profile = ({currentAccount}) => {
  return (
    <div
      className="
        absolute
        p-8 px-4
        text-[1rem]
        w-[20rem]
        rounded-2xl
        -left-68
        top-18
        z-2222222222
        bg-(--main-bg-color)
        shadow-(--box-shadow)
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
          <small className="">{currentAccount.slice(0, 18)}..</small>
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
              hover:bg-(--icons-color)
              hover:text-(--shadow-dark-color) 
              hover:rounded-[0.3rem]
            "
          >
            <FaUserAlt />
            <p>
              <Link href={`/author/${currentAccount}`}>My Profile</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-(--icons-color)
              hover:text-(--shadow-dark-color)
              hover:rounded-[0.3rem]
            "
          >
            <FaRegImage />
            <p>
              <Link href={`/author/${currentAccount}`}>My Items</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-(--icons-color)
              hover:text-(--shadow-dark-color)
              hover:rounded-[0.3rem]
            "
          >
            <FaUserEdit />
            <p>
              <Link href="/account">Edit Profile</Link>
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
              hover:bg-(--icons-color)
              hover:text-(--shadow-dark-color)
              hover:rounded-[0.3rem]
            "
          >
            <MdHelpCenter />
            <p>
              <Link href="/contactus">Help</Link>
            </p>
          </div>

          <div
            className="
              flex items-center gap-8
              px-6 py-3
              transition-all duration-300 ease-in
              hover:bg-(--icons-color)
              hover:text-(--shadow-dark-color)
              hover:rounded-[0.3rem]
            "
          >
            <TbDownload />
            <p>
              <Link href="/aboutus">About Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
