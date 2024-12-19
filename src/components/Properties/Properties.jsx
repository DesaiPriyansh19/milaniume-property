import React from "react";
import bgImg from '../../assets/new-york-city-skyline-with-brooklyn-bridge_23-2148287800.jpg'
import PropertyCards from "./PropertyCards";
import FilterSection from "../FilterSection";
import FilterTwo from "./FilterTwo";

function Properties() {
  return (
    <>
 <div className="relative w-full mb-0 ">
  <img
    src={bgImg}
    alt="Background"
    className="w-full h-[40vh] md:h-[40vh] lg:h-full object-cover object-top "
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-medium">
      Your <span className="text-[#E7C873]">Property</span>, Our Priority.
    </h1>
    <p className="text-white mt-2 md:mt-4 px-20 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
      Your Dream Space Where Every Property Tells a Story!
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
