import React from "react";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div>
      <button
        onClick={()=>handleClick()}
        className={`
          bg-[var(--icons-color)]
          px-8 py-4
          border border-[var(--icons-light-color)]
          rounded-[2rem]
          text-sm
          text-[var(--shadow-light-color)]
          cursor-pointer
          transition-all duration-200 ease-in
          shadow-[var(--box-shadow)]
          hover:bg-[var(--main-bg-color)]
          hover:border-[var(--icons-color)]
          hover:text-[var(--icons-color)] ${classStyle}
        `}  
      >
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
