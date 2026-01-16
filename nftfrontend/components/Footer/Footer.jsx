import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import Discover from "../NavBar/Discover";
import HelpCenter from "../NavBar/HelpCenter";

const Footer = () => {
  return (
    <div className="w-full py-6 relative text-(--icons-color)">
      <div
        className="
          w-[80%] mx-auto
          grid
          grid-cols-[1.3fr_repeat(2,1fr)_2fr]
          items-start
          gap-12
          max-[45em]:w-[90%]
          max-[45em]:grid-cols-[1fr_2fr]
          max-[35em]:grid-cols-1
        "
      >
        {/* SOCIAL */}
        <div>
          <img src="./logo.svg" alt="footer logo" width={100} height={100}  className="mt-6"/>
          <p className="mt-18">
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="flex gap-[1.3rem] text-[1.5rem] items-center mt-4">
            {[TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-2 rounded-full
                    grid
                    transition-all duration-300 ease-in
                    hover:bg-(--icons-color)
                    hover:text-(--shadow-dark-color)
                    hover:shadow-(--box-shadow)
                  "
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* DISCOVER */}
        <div>
          <h3 className="mb-4 font-bold">Discover</h3>
          <Discover />
        </div>

        {/* HELP */}
        <div>
          <h3 className="mb-4 font-bold">Help</h3>
          <HelpCenter />
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="mb-4 font-bold">Subscribe</h3>

          <div
            className="
              w-full
              flex justify-between items-center
              px-8 py-6
              bg-(--icons-color)
              text-(--shadow-dark-color)
              rounded-[5rem]
              mt-12
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                bg-transparent
                border-none
                outline-none
                w-[90%]
                text-(--shadow-dark-color)
                placeholder:text-(--shadow-dark-color)
              "
            />
            <RiSendPlaneFill className="cursor-pointer text-[2rem]" />
          </div>

          <div className="px-8 py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nobis tempore ducimus eius quam inventore voluptas alias iusto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
