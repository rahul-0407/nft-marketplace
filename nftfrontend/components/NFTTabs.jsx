import React from "react";

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className="w-full">
      {dataTab.map((el, k) => (
        <div
          key={k}
          className="
            flex items-center gap-4
            py-4
            border-b border-(--bg-shadow-dark-color)
          "
        >
          <img
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="grid leading-tight mt-1">
            <span className="font-bold flex items-center gap-1">
              Offer by $770 by <span className="font-extrabold">Rahul Gupta</span>
              {icon}
            </span>
            <small className="mt-1 text-sm opacity-80">
              Jun 14 – 4:12 PM
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
