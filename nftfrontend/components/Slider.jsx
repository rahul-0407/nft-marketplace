"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard";

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full text-(--icons-color)">
      <div className="w-[80%] mx-auto pb-32 max-[560px]:w-[90%]">

        {/* Title */}
        <h2 className="text-5xl leading-none max-[560px]:text-3xl">
          Explore NFTs video
        </h2>

        {/* Button Row */}
        <div className="flex justify-between items-center mt-6">
          <p>Click on play & enjoy NFTs Video</p>

          <div className="flex items-center gap-8 text-2xl">
            <div
              onClick={() => handleScroll("left")}
              className="border border-(--icons-color) p-4 flex items-center rounded-full
                         transition-all duration-300 ease-in cursor-pointer
                         hover:bg-(--icons-color) hover:text-(--main-bg-color)
                         hover:shadow-(--box-shadow)
                         max-[560px]:p-2"
            >
              <TiArrowLeftThick />
            </div>

            <div
              onClick={() => handleScroll("right")}
              className="border border-(--icons-color) p-4 flex items-center rounded-full
                         transition-all duration-300 ease-in cursor-pointer
                         hover:bg-(--icons-color) hover:text-(--main-bg-color)
                         hover:shadow-(--box-shadow)
                         max-[560px]:p-2"
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        {/* Slider */}
        <motion.div
          ref={dragSlider}
          className="w-full overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="
              grid grid-cols-[repeat(6,20.4rem)]
              gap-4 px-8 py-16 cursor-grab
              max-[560px]:overflow-auto
              max-[560px]:grid-cols-[repeat(6,95%)]
              max-[560px]:px-0
            "
          >
            {sliderArray.map((el, i) => (
              <SliderCard key={i} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
