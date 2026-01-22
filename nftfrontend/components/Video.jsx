import React from "react";

const Video = () => {
  return (
    <div className="w-full mt-56 mb-20">
      <div className="w-[80%] mx-auto max-[560px]:w-[90%]">
        
        {/* Title */}
        <h1 className="text-5xl leading-tight max-[560px]:text-3xl">
          <span>The Videos</span>
        </h1>

        {/* Description */}
        <p className="text-xl w-[40%] leading-snug max-[560px]:w-full">
          Checkout out hottest videos. View more and share more new perspectives
          on just about any topic. Everyone's welcome.
        </p>

        {/* Frame */}
        <div
          className="
            grid grid-cols-8 gap-4 p-20 mt-24
            max-[560px]:p-0
          "
        >
          {/* Left Image */}
          <div className="col-span-7 row-span-full">
            <img
              src="./nftvideo.png"
              alt="video img"
              width={1920}
              height={1080}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Right Panel */}
          <div
            className="
              col-start-3 col-end-[-1] row-span-full
              bg-[var(--icons-color)] rounded-2xl
              py-12 -mt-20 shadow-[var(--box-shadow)]
              max-[560px]:-mt-8
            "
          >
            Hey
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
