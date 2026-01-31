import React from "react";
import Brand from "@/components/Brand";

const Aboutus = () => {
  const founderArray = [
    {
      name: "Rahul Gupta",
      position: "CO-founder and Chief Executive",
      image: "./founder1.jpg",
    },
    {
      name: "David Rock",
      position: "CO-founder and Chief Executive",
      image: "./founder2.jpg",
    },
    {
      name: "Rachel Lincon",
      position: "CO-founder and Chief Executive",
      image: "./founder3.jpg",
    },
    {
      name: "John Doe",
      position: "CO-founder and Chief Executive",
      image: "./founder4.jpg",
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info:
        "Articles have been public around the world (as of Sept. 30,2021)",
    },
    {
      title: "100,000",
      info:
        "Register users account (as of Sept. 30,2021)",
    },
    {
      title: "220+",
      info:
        "Countries and regions have our presence (as of Sept. 30,2021)",
    },
  ];

  return (
    <div className="w-full my-20 text-(--icons-color)">
      <div className="w-[80%] mx-auto max-[35em]:w-[90%] max-[768px]:w-[90%]">

        {/* ================= HERO ================= */}
        <div
          className="
            grid grid-cols-[1.5fr_2fr]
            items-center gap-12
            max-[35em]:grid-cols-1
            max-[768px]:grid-cols-1
          "
        >
          <div>
            <h1 className="text-[3rem]  font-semibold">
              👋 About Us
            </h1>
            <p className="text-[1.5rem]">
              We're impartial and independent and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>

          <div>
            <img src="./hero2.png" alt="About hero" />
          </div>
        </div>

        {/* ================= FOUNDER TITLE ================= */}
        <div className="mt-20">
          <h2 className="text-[3rem] font-semibold">
            ⛱️ Founder
          </h2>
          <p className="text-[1.5rem] w-[40%] max-[35em]:w-full max-[768px]:w-full">
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        {/* ================= FOUNDERS ================= */}
        <div className="mt-20 mb-40 max-[35em]:mt-20 max-[768px]:mt-20">
          <div
            className="
              grid grid-cols-4 gap-8
              max-[35em]:grid-cols-1 max-[35em]:gap-16
              max-[768px]:grid-cols-2 max-[768px]:gap-16
            "
          >
            {founderArray.map((el, i) => (
              <div
                key={i}
                className="
                  bg-(--icons-color)
                  text-(--main-bg-color)
                  p-4 rounded-xl
                "
              >
                <img
                  src={el.image}
                  alt={el.name}
                  width={500}
                  height={500}
                  className="rounded-xl"
                />
                <h3 className="text-[2rem] ">
                  {el.name}
                </h3>
                <p className="text-[1.2rem] ">
                  {el.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FACTS TITLE ================= */}
        <div className="mt-20">
          <h2 className="text-[3rem] ">
            🚀 Fast Facts
          </h2>
          <p className="text-[1.5rem]  w-[40%] max-[35em]:w-full max-[768px]:w-full">
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        {/* ================= FACTS ================= */}
        <div className="mt-16">
          <div
            className="
              grid grid-cols-3 gap-8
              max-[35em]:grid-cols-1
              max-[768px]:grid-cols-1
            "
          >
            {factsArray.map((el, i) => (
              <div
                key={i}
                className="
                  bg-(--icons-color)
                  text-(--main-bg-color)
                  px-12 py-4 rounded-xl
                "
              >
                <h3 className="text-[4rem]  max-[35em]:text-[2rem] max-[768px]:text-[2rem]">
                  {el.title}
                </h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= BRAND ================= */}
      <Brand />
    </div>
  );
};

export default Aboutus;
