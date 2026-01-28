import React from "react";
import NFTDescription from "./NFTDescription";
import NFTDetailsImg from "./NFTDetailsImg";

const NFTDetailsPage = () => {
  return (
    <div className="w-full my-20 max-[560px]:my-8 text-(--icons-color)">
      <div
        className="
          w-[80%] mx-auto
          grid grid-cols-[1.2fr_1fr]
          gap-20
          max-[560px]:w-[90%]
          max-[560px]:grid-cols-1
        "
      >
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
