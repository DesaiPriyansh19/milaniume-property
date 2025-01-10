import React from "react";

const SkeletonLoaderPropetyDetails = () => {
  return (
    <div className="animate-pulse space-y-4 py-5 px-10">



      {/* Carousel Placeholder */}
      <div className="relative w-full h-96 bg-gray-300 rounded-lg"></div>

      {/* Property Information */}
      <div className="flex flex-col sm:flex-row justify-between mb-12 p-8 shadow-lg rounded-lg space-y-4 sm:space-y-0">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 space-y-4">
          <div className="h-6 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded-md w-1/4"></div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/2 grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-24 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded-md w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="h-32 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoaderPropetyDetails;
