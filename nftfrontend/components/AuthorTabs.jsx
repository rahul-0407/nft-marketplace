'use client'

import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

const AuthorTabs = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    setOpenList(!openList);
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Collectiables") {
      setCollectiables(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(1);
    } else if (btnText === "Created") {
      setCollectiables(false);
      setCreated(true);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText === "Liked") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(true);
      setActiveBtn(3);
    } else if (btnText === "Following") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(true);
      setLike(false);
      setActiveBtn(4);
    } else if (btnText === "Followers") {
      setCollectiables(false);
      setCreated(false);
      setFollower(true);
      setFollowing(false);
      setLike(false);
      setActiveBtn(5);
    }
  };

  return (
    <div className="w-full my-32 mb-12 max-[560px]:my-12">
      <div
        className="
          w-[80%] mx-auto
          flex justify-between
          max-[560px]:w-[90%]
          max-[560px]:grid max-[560px]:grid-cols-1
          md:grid md:grid-cols-1 md:gap-8
        "
      >
        {/* Left Tabs */}
        <div>
          <div
            className="
              flex items-center gap-8
              max-[560px]:grid max-[560px]:grid-cols-2 max-[560px]:gap-4
              max-[560px]:shadow-(--box-shadow)
              max-[560px]:p-4 max-[560px]:rounded-2xl
            "
          >
            {["Collectiables", "Created", "Liked", "Following", "Followers"].map(
              (btn, index) => {
                const btnIndex = index + 1;
                const isActive = activeBtn === btnIndex;

                return (
                  <button
                    key={btn}
                    onClick={(e) => openTab(e)}
                    className={`
                      border border-(--icons-color)
                      outline-none bg-(--main-bg-color)
                      text-lg rounded-full px-4 py-2
                      cursor-pointer
                      transition-all duration-300 ease-in
                      ${
                        isActive
                          ? "bg-(--icons-color) text-(--main-bg-color)"
                          : "text-(--icons-color) hover:bg-(--icons-color) hover:text-(--main-bg-color)"
                      }
                    `}
                  >
                    {btn}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Right Dropdown */}
        <div className="relative mt-0 max-[560px]:mt-8 md:mt-8">
          <div
            onClick={() => openDropDownList()}
            className="
              border border-(--icons-color)
              rounded-full w-70
              px-8 py-3
              grid grid-cols-[9fr_1fr]
              items-center gap-4
              cursor-pointer
              max-[560px]:w-full
            "
          >
            <p className="text-lg leading-tight">{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div
              className="
                absolute mt-6 -left-12
                bg-(--main-bg-color)
                p-4 w-64
                rounded-2xl shadow-(--box-shadow)
                z-11111
                max-[560px]:left-16
                md:left-28
              "
            >
              {listArray.map((el, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedMenu(el);
                    setOpenList(false);
                  }}
                  className="
                    flex items-center justify-between
                    px-4 py-2
                    cursor-pointer
                    transition-all duration-300 ease-in
                    hover:bg-(--icons-color)
                    hover:text-(--main-bg-color)
                    rounded
                  "
                >
                  <p className="leading-tight">{el}</p>
                  <span>{selectedMenu === el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTabs;
