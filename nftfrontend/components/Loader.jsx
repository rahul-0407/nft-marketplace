import React from "react";

const Loader = () => {
  const cards = Array.from({ length: 10 });

  return (
    <div className="relative">
      {/* Spinner Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin mb-4"></div>
        <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase">
          Syncing Chain Data
        </p>
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 opacity-40 pointer-events-none">
        {cards.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-md border border-gray-100"
          >
            {/* Image Skeleton */}
            <div className="aspect-square w-full rounded-xl bg-gray-200 relative overflow-hidden shimmer" />

            {/* Title + Creator */}
            <div className="flex flex-col gap-3 px-1">
              <div className="w-3/4 h-5 rounded-md bg-gray-200 shimmer" />
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gray-200 shimmer" />
                <div className="w-1/2 h-3 rounded-md bg-gray-200 shimmer" />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-2 pt-4 border-t border-gray-100 flex justify-between">
              <div className="w-1/3 h-4 rounded bg-gray-200 shimmer" />
              <div className="w-1/4 h-4 rounded bg-gray-200 shimmer" />
            </div>
          </div>
        ))}
      </div>

      {/* Shimmer Animation */}
      <style jsx>{`
        .shimmer {
          position: relative;
          overflow: hidden;
        }

        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
