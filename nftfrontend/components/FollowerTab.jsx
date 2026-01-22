'use client'

import React, { useState } from "react";
import { RiUserFollowFill, RiAwardLine } from "react-icons/ri";
import FollowerTabCard from "./FollowerTabCard";

const FollowerTab = () => {

  const CardArray = [
    { bg: "./creatorbackground-1.jpeg", avatar: "./user-1.png", name: "Sunny Kumar", price: "12.321 ETH" },
    { bg: "./creatorbackground-2.jpeg", avatar: "./user-2.png", name: "Rahul Gupta", price: "9.221 ETH" },
    { bg: "./creatorbackground-3.jpeg", avatar: "./user-3.png", name: "Aman Verma", price: "7.540 ETH" },
    { bg: "./creatorbackground-4.jpg", avatar: "./user-4.png", name: "Rohit Singh", price: "5.120 ETH" },
    { bg: "./creatorbackground-9.jpg", avatar: "./user-5.png", name: "Neha Patel", price: "11.004 ETH" },
    { bg: "./creatorbackground-6.jpg", avatar: "./user-6.png", name: "Karan Shah", price: "6.899 ETH" },
    { bg: "./creatorbackground-10.jpg", avatar: "./user-7.png", name: "Ankit Jain", price: "8.777 ETH" },
    { bg: "./creatorbackground-8.jpg", avatar: "./user-8.png", name: "Pooja Mehta", price: "10.320 ETH" },
  ];

  const FollowingArray = [
    { bg: "./creatorbackground-3.jpeg", avatar: "./user-3.png", name: "Aman Verma", price: "7.540 ETH" },
    { bg: "./creatorbackground-4.jpg", avatar: "./user-4.png", name: "Rohit Singh", price: "5.120 ETH" },
    { bg: "./creatorbackground-9.jpg", avatar: "./user-5.png", name: "Neha Patel", price: "11.004 ETH" },
    { bg: "./creatorbackground-6.jpg", avatar: "./user-6.png", name: "Karan Shah", price: "6.899 ETH" },
    { bg: "./creatorbackground-10.jpg", avatar: "./user-7.png", name: "Ankit Jain", price: "8.777 ETH" },
    { bg: "./creatorbackground-8.jpg", avatar: "./user-8.png", name: "Pooja Mehta", price: "10.320 ETH" },
  ];

  const NewsArray = [
    { bg: "./creatorbackground-2.jpeg", avatar: "./user-2.png", name: "Rahul Gupta", price: "9.221 ETH" },
    { bg: "./creatorbackground-6.jpg", avatar: "./user-6.png", name: "Karan Shah", price: "6.899 ETH" },
    { bg: "./creatorbackground-1.jpeg", avatar: "./user-1.png", name: "Sunny Kumar", price: "12.321 ETH" },
    { bg: "./creatorbackground-8.jpg", avatar: "./user-8.png", name: "Pooja Mehta", price: "10.320 ETH" },
    { bg: "./creatorbackground-4.jpg", avatar: "./user-4.png", name: "Rohit Singh", price: "5.120 ETH" },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  return (
    <div className="w-full py-24 pb-52 relative text-[var(--icons-color)]">

      {/* Title */}
      <div className="w-[34rem] mx-auto pb-24 text-center max-[1024px]:w-[90%]">
        <h2 className="text-5xl mb-16 max-[425px]:text-3xl font-bold">
          Top Creators List..
        </h2>

        {/* Tabs */}
        <div className="bg-[var(--main-bg-color)] px-4 py-2 rounded-full flex justify-around gap-4 items-center text-lg shadow-[var(--box-shadow)] max-[425px]:text-base">

          <button
            onClick={() => { setPopular(true); setFollowing(false); setNews(false); }}
            className="flex items-center gap-2 bg-[var(--icons-color)] text-[var(--main-bg-color)] px-6 py-4 rounded-full border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
          >
            <RiUserFollowFill /> Popular
          </button>

          <button
            onClick={() => { setPopular(false); setFollowing(true); setNews(false); }}
            className="flex items-center gap-2 bg-[var(--icons-color)] text-[var(--main-bg-color)] px-6 py-4 rounded-full border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
          >
            <RiUserFollowFill /> Following
          </button>

          <button
            onClick={() => { setPopular(false); setFollowing(false); setNews(true); }}
            className="flex items-center gap-2 bg-[var(--icons-color)] text-[var(--main-bg-color)] px-6 py-4 rounded-full border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
          >
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>

      {/* Popular */}
      {popular && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {CardArray.map((item, i) => (
            <FollowerTabCard key={i} i={i} data={item} />
          ))}
        </div>
      )}

      {/* Following */}
      {following && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {FollowingArray.map((item, i) => (
            <FollowerTabCard key={i} i={i} data={item} />
          ))}
        </div>
      )}

      {/* News */}
      {news && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {NewsArray.map((item, i) => (
            <FollowerTabCard key={i} i={i} data={item} />
          ))}
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="text-center">
        <div className="mx-auto pt-28 flex justify-center gap-6">
          <a
            href="#"
            className="bg-transparent text-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] border border-[var(--icons-color)] px-8 py-4 rounded-full shadow-[var(--box-shadow)] text-lg max-[425px]:text-sm max-[425px]:px-4 max-[425px]:py-2"
          >
            Show me more
          </a>

          <a
            href="#"
            className="bg-[var(--icons-color)] text-[var(--main-bg-color)] border border-[var(--icons-color)] px-8 py-4 rounded-full shadow-[var(--box-shadow)] text-lg transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)] max-[425px]:text-sm max-[425px]:px-4 max-[425px]:py-2"
          >
            Become author
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
