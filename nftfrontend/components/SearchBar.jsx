import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="w-full max-[560px]:w-[90%] max-[560px]:mx-auto max-[560px]:mt-8 max-[560px]:mb-4">
      <div
        className="
          w-[40%] mx-auto
          bg-(--main-bg-color)
          flex items-center
          rounded-full
          mt-32 mb-12
          shadow-(--box-shadow)
          max-[560px]:w-full
        "
      >
        {/* Left Icon */}
        <BsSearch className="text-3xl px-2 py-2 cursor-pointer text-(--icons-color) ml-2" />

        {/* Input */}
        <input
          type="text"
          placeholder="Type your keyword..."
          className="
            w-[85%]
            border-0 outline-none
            px-8 py-6
            bg-(--main-bg-color)
            placeholder:text-(--icons-color)
            placeholder:text-lg
          "
        />

        {/* Right Icon */}
        <BsArrowRight className="text-3xl px-2 py-2 cursor-pointer text-(--icons-color)" />
      </div>
    </div>
  );
};

export default SearchBar;
