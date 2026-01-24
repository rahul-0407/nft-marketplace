import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const CollectionProfile = () => {
  const cardArray = [1, 2, 3, 4];

  return (
    <div className="w-full mt-20 flex justify-center text-(--icons-color)">
      
      {/* Main Card */}
      <div
        className="
          w-full max-w-[1400px]
          bg-(--main-bg-color)
          shadow-(--box-shadow)
          rounded-2xl
          px-8 py-8
          grid grid-cols-[300px_1fr]
          gap-10
          items-center

          max-[1024px]:grid-cols-1
          max-[1024px]:gap-6
        "
      >
        {/* Left Image Section */}
        <div className="flex flex-col items-center">
          <div className="w-[260px] h-[260px] rounded-2xl overflow-hidden">
            <img
              src="./nft-image-1.png"
              alt="nft image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-[0.8rem] items-center justify-center text-[1.2rem] mt-4">
            {[TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-[36px] h-[36px]
                    bg-(--icons-color)
                    border border-(--icons-color)
                    rounded-full
                    text-(--main-bg-color)
                    grid place-items-center
                    transition-all duration-300 ease-in
                    hover:bg-(--main-bg-color)
                    hover:shadow-(--box-shadow)
                    hover:text-(--icons-color)
                  "
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <h1 className="text-[2.5rem] font-semibold mb-2">
            Awesome NFTs Collection
          </h1>

          <p className="text-gray-500 max-w-[600px] leading-[1.4]">
            Karaturu is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          {/* Stats Row */}
          <div
            className="
              mt-8
              grid grid-cols-4
              gap-6

              max-[768px]:grid-cols-2
            "
          >
            {cardArray.map((_el, i) => (
              <div
                key={i}
                className="
                  bg-(--main-bg-color)
                  shadow-(--box-shadow-small)
                  rounded-[1.2rem]
                  px-6 py-[1.8rem]
                  text-center
                "
              >
                <small className="block text-gray-500 mb-[0.3rem]">
                  Floor price
                </small>

                <p className="text-[1.6rem] font-semibold">
                  ${i + 1}95,4683
                </p>

                <span className="text-(--icons-color) text-sm">
                  + {i + 2}.11%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
