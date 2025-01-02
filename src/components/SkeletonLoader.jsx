import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-[90%] px-5 md:px-4 rounded-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="relative bg-gray-300 animate-pulse h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg"
        >
          <div className="flex gap-2 items-center absolute top-4 left-4">
            <div className="bg-gray-400 h-4 w-16 rounded-xl"></div>
            <div className="bg-gray-400 h-4 w-20 rounded-xl"></div>
          </div>
          <div className="absolute bottom-4 left-4 pl-2">
            <div className="bg-gray-400 h-5 w-40 rounded-md mb-2"></div>
            <div className="bg-gray-400 h-3 w-32 rounded-md mb-1"></div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                <div className="bg-gray-400 h-3 w-12 rounded-md"></div>
                <div className="bg-gray-400 h-3 w-16 rounded-md"></div>
                <div className="bg-gray-400 h-3 w-10 rounded-md"></div>
              </div>
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
