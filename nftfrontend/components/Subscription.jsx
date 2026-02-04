import React from "react";
import { TiTick } from "react-icons/ti";
import Button from "./Button";

const SubscriptionBox = ({ el, i }) => {
  return (
    <div
      className="
        border border-[var(--icons-color)]
        p-8 rounded-xl
        relative cursor-pointer
        transition-all duration-300 ease-in
        hover:shadow-[var(--box-shadow)]
      "
    >
      <span className="text-[2rem] font-black">
        {el.plan}
      </span>

      {el.popular && (
        <small
          className="
            absolute right-16
            text-[1.2rem]
            bg-[var(--icons-color)]
            text-[var(--main-bg-color)]
            px-4 py-2 rounded-lg
          "
        >
          {el.popular}
        </small>
      )}

      <p className="text-[3rem] leading-none font-black">
        {el.price}
      </p>

      <div className="my-8">
        {el.service.map((service, i) => (
          <p
            key={i}
            className="
              flex items-center gap-2
              font-medium text-[1.5rem] leading-none
              max-[35em]:text-[1rem]
            "
          >
            <span>
              <TiTick />
            </span>
            {service}
          </p>
        ))}
      </div>

      <Button
        btnName="Submit"
        handleClick={() => {}}
        classStyle="mt-8"
      />
    </div>
  );
};

export default SubscriptionBox;
