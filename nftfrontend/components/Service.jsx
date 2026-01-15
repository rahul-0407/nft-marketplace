import React from "react";

const Service = () => {
  return (
    <div
      className="
        w-[80%]
        mx-auto
        my-12
        max-[35em]:w-[90%]
      "
    >
      <div
        className="
          grid
          grid-cols-4
          gap-12
          text-center
          max-[50em]:grid-cols-2
          max-[50em]:gap-4
        "
      >
        {/* ITEM 1 */}
        <div>
          <img
            src="./service-1.png"
            alt="Filter and discover"
            width={100}
            height={100}
            className="m-auto"
          />
          <p className="mt-12 mb-8">
            <span
              className="
                px-6 py-2
                rounded-[5rem]
                bg-(--icons-color)
                text-(--shadow-dark-color)
              "
            >
              Step 1
            </span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with waller, discover, buy NFTs ,sell your NFTs and earn
            money
          </p>
        </div>

        {/* ITEM 2 */}
        <div>
          <img
            src="./service-2.png"
            alt="Connect wallet"
            width={100}
            height={100} className="m-auto"
          />
          <p className="mt-12 mb-8">
            <span
              className="
                px-6 py-2
                rounded-[5rem]
                bg-(--icons-color)
                text-(--shadow-dark-color)
              "
            >
              Step 2
            </span>
          </p>
          <h3>Connect wallet</h3>
          <p>
            Connect with waller, discover, buy NFTs ,sell your NFTs and earn
            money
          </p>
        </div>

        {/* ITEM 3 */}
        <div>
          <img
            src="./service-3.png"
            alt="Start trading"
            width={100}
            height={100} className="m-auto"
          />
          <p className="mt-12 mb-8">
            <span
              className="
                px-6 py-2
                rounded-[5rem]
                bg-(--icons-color)
                text-(--shadow-dark-color)
              "
            >
              Step 3
            </span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with waller, discover, buy NFTs ,sell your NFTs and earn
            money
          </p>
        </div>

        {/* ITEM 4 */}
        <div>
          <img
            src="./service-4.png"
            alt="Start trading"
            width={100}
            height={100} className="m-auto"
          />
          <p className="mt-12 mb-8">
            <span
              className="
                px-6 py-2
                rounded-[5rem]
                bg-(--icons-color)
                text-(--shadow-dark-color)
              "
            >
              Step 4
            </span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with waller, discover, buy NFTs ,sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
