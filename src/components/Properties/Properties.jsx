import React from "react";

import PropertyCards from "./PropertyCards";
import FilterSection from "../FilterSection";

function Properties() {
  return (
    <>
      <div
        className="py-[30%] lg:py-[10%]"
        style={{
          textShadow: "4px 4px 8px rgba(0.5, 0.5, 0, 0)", // Apply text shadow to all children
        }}
      >
        <h1 className="text-Black text-3xl  font-medium text-center w-auto">
          Your <span className="text-[#E7C873]">Property</span>, Our Priority.
        </h1>
        <h3 className="text-[#1F4B43] mt-4 text-sm font-normal text-center w-auto">
          Your Dream Space Where Every Property Tells a Story!
        </h3>
      </div>
      {/* <FilterSection /> */}
      <PropertyCards />
    </>
  );
}

export default Properties;
