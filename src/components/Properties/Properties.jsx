import React from "react";
import bgImg from '../../assets/new-york-city-skyline-with-brooklyn-bridge_23-2148287800.jpg'
import PropertyCards from "./PropertyCards";

import FilterTwo from "./FilterTwo";

function Properties() {
  return (
    <>
 <div className="relative w-full mb-0 ">
 <div className="absolute inset-0 bg-black opacity-40"></div>
  <img
    src={bgImg}
    alt="Background"
    className="w-full h-[40vh] md:h-[40vh] lg:h-full object-cover object-top "
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white 
  "
  style={{
    textShadow: "4px 4px 8px rgba(0.9, 0.9, 0.9, 0.1)", // Apply text shadow to all children
  }}>
    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-medium">
      Your <span className="text-[#E7C873]">Property</span>, Our Priority.
    </h1>
    <p className="text-white mt-2 md:mt-4 px-20 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
    Find Your Perfect Property – Where Your Search Ends.
    </p>
  </div>
</div>

<FilterTwo/>
      {/* <FilterSection /> */}
      <PropertyCards />
    </>
  );
}

export default Properties;
