import React from "react";

const Button = ({ btnName, handleClick = () => {}, icon, classStyle }) => {
  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-2
        bg-(--icons-color)
        px-8 py-4
        border border-(--icons-light-color)
        rounded-4xl
        text-sm
        text-(--shadow-light-color)
        cursor-pointer
        transition-all duration-200 ease-in
        shadow-(--box-shadow)
        hover:bg-(--main-bg-color)
        hover:border-(--icons-color)
        hover:text-(--icons-color)
        ${classStyle}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{btnName}</span>
    </button>
  );
};

export default Button;
