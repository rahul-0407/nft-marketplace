import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className="w-full text-(--icons-color)">
      <div
        className="
          w-[80%]
          mx-auto
          py-32
          grid
          grid-cols-[1.5fr_2fr]
          items-center

          max-md:w-[90%]
          max-md:grid-cols-1
          max-md:gap-16

          max-lg:w-[90%]
          max-lg:grid-cols-2
          max-lg:gap-16
        "
      >
        {/* LEFT */}
        <div>
          <h2
            className="
              text-[3rem]
               font-bold
              max-md:text-[2rem]
              max-lg:text-[2rem]
            "
          >
            Never miss a drop!
          </h2>

          <p className="text-[1.2rem] mt-6">
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>

          {/* POINT 1 */}
          <div className="flex items-center gap-4 mt-8">
            <span
              className="
                bg-(--icons-color)
                text-(--main-bg-color)
                px-4 py-2
                rounded-4xl
                w-16
                text-center
              "
            >
              01
            </span>
            <small className="text-[1rem] font-bold">Get more discount</small>
          </div>

          {/* POINT 2 */}
          <div className="flex items-center gap-4 mt-4">
            <span
              className="
                bg-(--icons-color)
                text-(--main-bg-color)
                px-4 py-2
                rounded-4xl
                w-16
                text-center
              "
            >
              02
            </span>
            <small className="text-[1rem] font-bold">
              Get premium magazines
            </small>
          </div>

          {/* INPUT */}
          <div
            className="
              mt-12
              px-8 py-8
              w-[80%]
              rounded-[4rem]
              bg-(--icons-color)
              text-(--main-bg-color)
              flex items-center

              max-md:w-full
              max-md:px-4
              max-md:py-4

              max-lg:w-full
              max-lg:px-4
              max-lg:py-4
            "
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="
                bg-transparent
                border-0
                outline-none
                w-[90%]
                placeholder:text-(--main-bg-color)
                placeholder:text-[1.2rem]
              "
            />
            <RiSendPlaneFill className="text-[2rem]" />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="./update.png"
            alt="get update"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
