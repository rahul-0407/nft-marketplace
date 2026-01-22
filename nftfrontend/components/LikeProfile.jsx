import React from "react";

const LikeProfile = () => {
  const imageArray = ["user-1.png", "user-2.png", "user-3.png", "user-4.png"];

  return (
    <div className="flex items-center">
      {imageArray.map((_el, i) => (
        <div
          key={i}
          className="border-[3px] border-(--icons-color) rounded-full"
        >
          <img
            src={_el}
            alt="profile"
            width={15}
            height={15}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
