import React from "react";
import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

const AudioLive = () => {
  return (
    <div className="audioLive">
      <div className="audioLive_box">
        <div className="audioLive_box_left">
          <AudioCard/>
          <AudioCard/>
        </div>
        <div className="audioLive_box_right">
          <AudioCardSmall/>
          <AudioCardSmall/>
          <AudioCardSmall/>
        </div>
      </div>
    </div>
  );
};

export default AudioLive;
