import React from "react";

const Notification = () => {
  return (
    <div
      className="
        absolute
        top-[3.5rem]
        right-0
        w-[25rem]
        p-8 px-4
        rounded-xl
        text-base
        shadow-[var(--box-shadow)]
        bg-[var(--main-bg-color)]
        z-[222222222]
        max-[35em]:w-[20rem]
        max-[35em]:right-[-2rem]
      "
    >
      {/* TITLE */}
      <p className="text-[1.3rem] font-semibold mb-8">
        Notification
      </p>

      {/* NOTIFICATION ITEM */}
      <div
        className="
          flex items-start gap-4 p-4
          transition-all duration-300 ease-in
          hover:bg-[var(--icons-color)]
          hover:text-[var(--shadow-dark-color)]
          hover:rounded-[0.3rem]
          max-[35em]:p-[0.3rem]
        "
      >
        {/* IMAGE */}
        <img
          src="/user-1.png"
          alt="profile image"
          width={50}
          height={50}
          className="rounded-full"
        />

        {/* INFO */}
        <div className=" ">
          <h4 className="font-semibold">Rahul Gupta</h4>
          <p className="text-[15px] leading-[0.3] max-[35em]:text-[12px]">
            Measure action your user...
          </p>
          <small>3 minutes ago</small>
        </div>

        {/* NEW DOT */}
        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>
      </div>
    </div>
  );
};

export default Notification;
