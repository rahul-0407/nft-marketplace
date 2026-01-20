'use client'

import React, { useState } from "react";
import { RiUserFollowFill, RiAwardLine } from "react-icons/ri";
import FollowerTabCard from "./FollowerTabCard";

const FollowerTab = () => {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const FollowingArray = [1, 2, 3, 4, 5, 6];
  const NewsArray = [1, 2, 3, 4, 5];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  return (
    <div className="w-full py-24 pb-52 relative text-(--icons-color)">
      <div className="w-136 mx-auto pb-24 text-center max-[1024px]:w-[90%]">
        <h2 className="text-5xl mb-16 max-[425px]:text-3xl font-bold">
          Top Creators List..
        </h2>

        <div className="bg-(--main-bg-color) px-4 py-2 rounded-full flex justify-around gap-4 items-center text-lg shadow-(--box-shadow) max-[425px]:text-base">
          <button
            onClick={() => {
              setPopular(true);
              setFollowing(false);
              setNews(false);
            }}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color)"
          >
            <RiUserFollowFill /> Popular
          </button>

          <button
            onClick={() => {
              setPopular(false);
              setFollowing(true);
              setNews(false);
            }}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color)"
          >
            <RiUserFollowFill /> Following
          </button>

          <button
            onClick={() => {
              setPopular(false);
              setFollowing(false);
              setNews(true);
            }}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color)"
          >
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>

      {popular && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-[425px]:w-[90%]">
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      <div className="text-center">
        <div className="mx-auto pt-28 flex justify-center gap-6">
          <a
            href="#"
            className="bg-transparent text-(--icons-color) transition-all duration-300 ease-in hover:bg-(--icons-color) hover:text-(--main-bg-color) border border-(--icons-color) px-8 py-4 rounded-full shadow-(--box-shadow) text-lg max-[425px]:text-sm max-[425px]:px-4 max-[425px]:py-2"
          >
            Show me more
          </a>

          <a
            href="#"
            className="bg-(--icons-color) text-(--main-bg-color) border border-(--icons-color) px-8 py-4 rounded-full shadow-(--box-shadow) text-lg transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color) max-[425px]:text-sm max-[425px]:px-4 max-[425px]:py-2"
          >
            Become author
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
