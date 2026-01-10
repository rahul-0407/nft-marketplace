import Link from "next/link";
import React from "react";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "SUbscription",
      link: "subscription",
    },
  ];

  return (
    <div className="box">
      {helpCenter.map((el, i) => (
        <div
          className="
            px-4 py-2
            transition-all duration-300 ease-in
            z-[22222222222]
            hover:bg-[var(--icons-color)]
            hover:text-[var(--shadow-dark-color)]
            hover:rounded-[0.3rem]
          "
        >
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
