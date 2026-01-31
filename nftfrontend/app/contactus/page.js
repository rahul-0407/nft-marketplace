'use client'

import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import Button from "@/components/Button";

const Contactus = () => {
  return (
    <div className="w-full text-(--icons-color)">
      <div className="w-[60%] mx-auto max-[35em]:w-[90%]">

        {/* Heading */}
        <h1 className="text-center text-[3rem] font-black">
          Contact
        </h1>

        {/* Main Grid */}
        <div
          className="
            grid grid-cols-[1fr_2fr]
            gap-20 items-center self-start
            mb-40
            max-[35em]:grid-cols-1
            max-[35em]:gap-4
          "
        >

          {/* LEFT */}
          <div>
            <div>
              <h3 className="font-bold text-lg mb-2">🗺️ ADDRESS</h3>
              <p className="leading-[1.2] w-[80%] text-[1rem] mb-5">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">📧 Email</h3>
              <p className="leading-[1.2] w-[80%] text-[1rem] mb-5">
                example@exampl.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">☎️ PHONE</h3>
              <p className="leading-[1.2] w-[80%] text-[1rem] mb-5">
                000-123-456-7890
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">🌍 SOCIALS</h3>

              <a href="#" className="text-[1.5rem] rounded-full p-[0.3rem] inline-block">
                <TiSocialFacebook />
              </a>
              <a href="#" className="text-[1.5rem] rounded-full p-[0.3rem] inline-block">
                <TiSocialInstagram />
              </a>
              <a href="#" className="text-[1.5rem] rounded-full p-[0.3rem] inline-block">
                <TiSocialLinkedin />
              </a>
              <a href="#" className="text-[1.5rem] rounded-full p-[0.3rem] inline-block">
                <TiSocialTwitter />
              </a>
              <a href="#" className="text-[1.5rem] rounded-full p-[0.3rem] inline-block">
                <TiSocialYoutube />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form>

              {/* Full Name */}
              <div className="mt-8">
                <label className="block ml-4 font-bold text-lg">
                  Full Name
                </label>
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
                />
              </div>

              {/* Email */}
              <div className="mt-8">
                <label className="block ml-4 font-bold text-lg">
                  Email
                </label>

                <div className="flex items-center gap-4 mt-2 border border-(--icons-color) rounded-xl overflow-hidden">
                  <div className="text-2xl bg-(--icons-color) px-4 py-2 text-(--main-bg-color) cursor-pointer">
                    <HiOutlineMail />
                  </div>

                  <input
                    type="text"
                    placeholder="Email*"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-8">
                <label className="block ml-4 font-bold text-lg">
                  Message
                </label>

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
                />
              </div>

              {/* Button */}
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle="mt-8"
              />
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
