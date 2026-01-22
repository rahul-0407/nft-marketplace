import React from "react";
import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

const AudioLive = () => {
  return (
    <div className="w-full text-(--icons-color) mt-16">
      <div className="w-[80%] mx-auto py-8 pb-32 grid grid-cols-[2.5fr_1fr] gap-8
                      max-[768px]:w-[90%]
                      max-[768px]:grid-cols-1">
        
        {/* Left */}
        <div className="grid grid-cols-2 gap-8 max-[768px]:grid-cols-1 max-[768px]:gap-14">
          <AudioCard />
          <AudioCard />
        </div>

        {/* Right */}
        <div className="pt-2 grid gap-8">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;
