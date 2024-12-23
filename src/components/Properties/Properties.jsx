import React from "react";
import bgImg from '../../assets/new-york-city-skyline-with-brooklyn-bridge_23-2148287800.jpg'
import PropertyCards from "./PropertyCards";

import FilterTwo from "./FilterTwo";

function Properties() {
  return (
    <>
<div className="relative w-full mb-0 pb-0">
  {/* Background Image with Blur */}
  <img
    src={bgImg}
    alt="Background"
    className="w-full h-[350px] md:h-[40vh] lg:h-full object-cover object-top filter blur-[1.5px]"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>

  {/* Text Content */}
  <div
    className="absolute mt-[100px] sm:mt-[50px] text-center inset-0 flex flex-col justify-center items-center text-white z-20"
    style={{
      textShadow: "4px 4px 8px rgba(1, 1, 0.9, 0.1)", // Apply text shadow to all children
    }}
  >
    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-normal">
      Your <span className="text-[#E7C873]">Property</span>, Our <span className="text-[#E7C873]">Priority.</span>
    </h1>
    <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
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
