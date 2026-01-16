import React from "react";
import { BsCircleFill } from "react-icons/bs";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];

  return (
    <div
      className="
        w-[80%]
        mx-auto

        max-[425px]:w-[90%]
      "
    >
      <div
        className="
          py-16
          grid
          grid-cols-6
          gap-8

          max-[425px]:grid-cols-1
          max-[770px]:grid-cols-2
          max-[1025px]:grid-cols-3
        "
      >
        {CategoryArray.map((_el, i) => (
          <div
            key={i}
            className="
              transition-all duration-300 ease-in
              rounded-2xl
              overflow-hidden
              cursor-pointer
              pb-4
              hover:shadow-(--box-shadow)
            "
          >
            <img
              src="./creatorbackground-1.jpeg"
              alt="Background image"
              width={350}
              height={150}
              className="rounded-2xl w-full object-cover"
            />

            <div className="flex items-center gap-4 p-4">
              <span className="text-[3rem] mt-4">
                <BsCircleFill />
              </span>

              <div>
                <h4>Entertainment</h4>
                <small>1995 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
