'use client'

import React, { useState } from "react";
import {
  BsFillCalendarDateFill,
  BsCalendar3,
  BsAlarmFill,
} from "react-icons/bs";
import DaysComponents from "./DaysComponents/DaysComponents";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollowers = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className="w-full py-12 text-(--icons-color) pb-40">
      {/* Title */}
      <div className="w-140 mx-auto pb-24 text-center max-[1024px]:w-[90%]">
        <h2 className="text-5xl mb-16 font-bold">Top List Creators</h2>

        {/* Filter Buttons */}
        <div className="bg-(--main-bg-color) px-4 py-2 rounded-full flex gap-4 justify-around items-center text-lg shadow-(--box-shadow)">
          <button
            onClick={openPopular}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color) max-[425px]:text-xs"
          >
            <BsAlarmFill /> 24 hours
          </button>

          <button
            onClick={openFollowers}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color) max-[425px]:text-xs"
          >
            <BsCalendar3 /> 7 days
          </button>

          <button
            onClick={openNews}
            className="flex items-center gap-2 bg-(--icons-color) text-(--main-bg-color) px-6 py-4 rounded-full border border-(--icons-color) transition-all duration-300 ease-in hover:bg-transparent hover:text-(--icons-color) max-[425px]:text-xs"
          >
            <BsFillCalendarDateFill /> 30 days
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      {popular && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-[1024px]:w-[90%] max-[1024px]:gap-16">
          {cardArray.map((_el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-[1024px]:w-[90%] max-[1024px]:gap-16">
          {followingArray.map((_el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-[1024px]:w-[90%] max-[1024px]:gap-16">
          {newArray.map((_el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
