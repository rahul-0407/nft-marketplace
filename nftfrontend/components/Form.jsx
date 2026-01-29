import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import Button from "@/components/Button";

const Form = () => {
  return (
    <div className="w-full">
      <form>
        {/* Username */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Username</label>
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
          />
        </div>

        {/* Email */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Email</label>
          <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
            <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
              <HiOutlineMail />
            </div>
            <input
              type="text"
              placeholder="Email*"
              className="w-full bg-transparent outline-none"
            />
          </div>
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
              border border-[var(--icons-color)]
              rounded-xl
              placeholder:text-[var(--icons-color)]
            "
          />
        </div>

        {/* Website */}
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
            />
          </div>
        </div>

        {/* Social Links */}
        <div
          className="
            grid grid-cols-3 gap-4 mt-8
            max-[768px]:grid-cols-2
            max-[560px]:grid-cols-1
          "
        >
          {/* Facebook */}
          <div>
            <label className="block ml-4 font-bold text-lg">Facebook</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
                <TiSocialFacebook />
              </div>
              <input
                type="text"
                placeholder="http://rahul"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Twitter */}
          <div>
            <label className="block ml-4 font-bold text-lg">Twitter</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
                <TiSocialTwitter />
              </div>
              <input
                type="text"
                placeholder="http://rahul"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Instagram */}
          <div>
            <label className="block ml-4 font-bold text-lg">Instagram</label>
            <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
              <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
                <TiSocialInstagram />
              </div>
              <input
                type="text"
                placeholder="http://rahul"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Wallet */}
        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Wallet Address</label>
          <div className="flex items-center gap-4 mt-2 border border-[var(--icons-color)] rounded-xl overflow-hidden">
            <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="0x095418A82BC2439703b69fbE1210824F2247D77c"
              className="w-full bg-transparent outline-none"
            />
            <div className="text-2xl bg-[var(--icons-color)] px-4 py-2 text-[var(--main-bg-color)] cursor-pointer">
              <MdOutlineContentCopy />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="my-16">
          <Button btnName="Upload Profile" classStyle="w-full flex justify-center text-2xl" />
        </div>
      </form>
    </div>
  );
};

export default Form;
