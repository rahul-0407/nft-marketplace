import React from "react";

const Title = ({ heading, paragraph }) => {
  return (
    <div className="w-full text-(--icons-color)">
      <div
        className="
          w-[80%]
          mx-auto

          max-[425px]:w-[90%]
        "
      >
        <h2
          className="
            text-[3rem] font-bold
            max-[425px]:text-[1.8rem]
            max-[425px]:leading-0
          "
        >
          {heading}
        </h2>

        <p className="mt-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Title;
