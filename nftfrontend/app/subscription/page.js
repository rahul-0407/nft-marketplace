
import React from "react";
import SubscriptionBox from "@/components/Subscription";

const Subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: " ",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts,",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everyting in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],
      info: "Literally you probably haven't heard of them jean shorts,",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: " ",
      service: [
        "Everyting in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evalutions",
      ],
      info: "Literally you probably haven't heard of them jean shorts,",
    },
  ];

  return (
    <div className="w-full my-28 max-[35em]:my-16 max-[1024px]:my-16 text-(--icons-color)">
      <div className="w-[80%] mx-auto max-[35em]:w-[90%] max-[1024px]:w-[90%]">

        {/* HEADER */}
        <div className="text-center ">
          <h1 className="text-[4rem]  max-[35em]:text-[2rem] max-[1024px]:text-[2rem] font-semibold">
            💎 Subscription
          </h1>
          <p className="text-[1.6rem]  max-[35em]:text-[1rem] max-[1024px]:text-[1rem]">
            Pricing to fit the needs of any company size.
          </p>
        </div>

        {/* BOXES */}
        <div
          className="
            grid grid-cols-3 gap-12 mt-28
            max-[35em]:grid-cols-1
            max-[1024px]:grid-cols-2
          "
        >
          {subscriptionArray.map((el, i) => (
            <SubscriptionBox key={i} el={el} i={i} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Subscription;
