"use client";

import React, { useState, useContext, useEffect } from "react";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const {currentAccount, connectWallet} = useContext(NFTMarketplaceContext)

  const providerArray = [
    {
      provider: "./provider3.svg",
      name: "Metamask",
    },
    {
      provider: "./provider2.png",
      name: "walletConnect",
    },
    {
      provider: "./provider3.svg",
      name: "walletLink",
    },
    {
      provider: "./provider2.png",
      name: "Formatic",
    },
  ];

  return (
    <div className="w-full my-20 text-(--icons-color)">
      <div className="w-1/2 mx-auto max-[35em]:w-[90%]">

        {/* Heading */}
        <h1 className="text-[3rem] leading-none max-[35em]:text-[1.5rem]">
          Connect your wallet
        </h1>

        {/* Paragraph */}
        <p className="text-[1.5rem] pb-8 border-b border-(--shadow-dark-color)">
          Connect with one of our available wallet providers or create a new
          object.
        </p>

        {/* Providers */}
        <div className="my-20">
          {providerArray.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), connectWallet())}
              className={`
                flex items-center gap-8
                rounded-xl mt-6
                border border-(--shadow-dark-color)
                p-4 cursor-pointer
                transition-all duration-300 ease-in
                hover:bg-(--shadow-dark-color)
                ${activeBtn === i + 1 ? "shadow-(--box-shadow)" : ""}
              `}
            >
              <img
                src={el.provider}
                alt={el.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="text-[1.5rem] leading-none">
                {el.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default connectWallet;
