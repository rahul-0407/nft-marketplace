import React from "react";
import { MdVerified } from "react-icons/md";

const DaysComponents = () => {
  return (
    <div className="w-full rounded-2xl transition-all duration-300 ease-in cursor-pointer hover:shadow-[var(--box-shadow)]">
      <div>
        {/* Top Image */}
        <div>
          <img
            src="./creatorbackground-1.jpeg"
            alt="profile background"
            className="w-full h-auto rounded-2xl object-cover"
            width={500}
            height={300}
          />
        </div>

        {/* 3 Image Grid */}
        <div className="grid grid-cols-3 gap-2">
          <img
            src="./creatorbackground-2.jpeg"
            alt="profile"
            height={200}
            width={200}
            className="object-cover rounded-bl-2xl"
          />
          <img
            src="./creatorbackground-2.jpeg"
            alt="profile"
            height={200}
            width={200}
            className="object-cover"
          />
          <img
            src="./creatorbackground-2.jpeg"
            alt="profile"
            height={200}
            width={200}
            className="object-cover rounded-br-2xl"
          />
        </div>

        {/* Title + Info */}
        <div className="px-8 py-4 leading-none">
          <h2 className="text-xl font-bold">Amazing Collection</h2>

          <div className="flex items-center justify-between max-[768px]:flex-col max-[768px]:gap-8 max-[768px]:p-4 max-[768px]:items-start">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="./user-1.png"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <p className="text-sm">
                Creator{" "}
                <span className="font-semibold px-2 inline-flex items-center gap-1">
                  Rahul Kumar <MdVerified />
                </span>
              </p>
            </div>

            {/* Price */}
            <div>
              <span className="font-semibold border-[3px] border-[var(--icons-color)] px-2 py-1 rounded-lg text-sm">
                1.255 ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
