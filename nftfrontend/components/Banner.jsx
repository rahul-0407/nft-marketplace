import React from "react";

const Banner = ({ bannerImage }) => {
  return (
    <div className="w-full relative">

      {/* Desktop (default) */}
      <div className="h-[300px] max-[35em]:hidden overflow-hidden">
        <img
          src={bannerImage}
          alt="background"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Mobile */}
      <div className="hidden max-[35em]:block h-[900px] overflow-hidden">
        <img
          src={bannerImage}
          alt="background"
          className="w-full h-full object-cover block"
        />
      </div>

    </div>
  );
};

export default Banner;
