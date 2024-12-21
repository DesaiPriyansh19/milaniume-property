import React, { useState } from "react";


import FilterLogo from '../../../svg/Icon/FilterLogo/Index';


const FilterTwo = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [budget, setBudget] = useState({ min: 10, max: 100000 });
  const handleBudgetChange = (type, value) => {
    setBudget((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const residentialOptions = {
    availability: [
      "1 BHK",
      "2 BHK",
      "3 BHK",
      "4 BHK",
      "5 BHK",
      "6 BHK",
      "Above 6 BHK",
      "Duplex",
      "PG",
      "Residential Plot",
    ],
    condition: [
      "Fully Furnished",
      "Furnished",
      "Semi Furnished",
      "Fix-Furnished",
      "Kitchen Fix",
      "Unfurnished",
    ],
    availabilityType: [
      "Low Rise Apartment",
      "High Rise Apartment",
      "Bungalow",
      "Villas",
      "Tenament",
      "Rowhouse",
      "Farm House",
    ],
  };

  const commercialOptions = {
    availability: [
      "Office",
      "Shop",
      "Showroom",
      "Co-Working Space",
      "Ready to Move Office",
      "Warehouse",
      "Cold Storage",
      "Other",
    ],
    condition: [
      "Fully Furnished",
      "Furnished",
      "Semi Furnished",
      "Fix-Furnished",
      "Unfurnished",
    ],
    availabilityType: [
      "Boss Cabin",
      "Manager Cabin",
      "Work Station",
      "Conference Room",
      "Pantry",
      "Reception",
      "Waiting Area",
    ],
  };

  const selectedOptions =
    selectedType === "RECIDENCIAL"
      ? residentialOptions
      : selectedType === "COMMERCIAL"
      ? commercialOptions
      : null;

      return (
      <>
        <div className="relative w-full mb-[290px] sm:mb-[190px] md:mb-[195px] lg:mb-[90px] flex justify-center mt-0">
          <div
            className="absolute text-[.7rem] md:text-[.6rem] left-1/2 transform -translate-x-1/2 
            top-full w-full md:w-[95%] h-auto md:h-[10vh] bg-black text-white grid grid-cols-1 md:flex 
            items-center justify-between px-2 py-4 md:py-2 md:px-4 rounded-none md:rounded-lg shadow-lg z-[9]"
          >
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search Area"
              className="flex-grow bg-transparent text-white placeholder-white text-[.7rem]
                px-3 py-4 h-[90%] w-[90%] md:w-auto rounded-lg focus:outline-none  focus:ring-2 focus:ring-black"
            />
    
            {/* Dropdowns */}
            <select
              className="bg-transparent text-white px-3 py-2 rounded-lg mx-2 
              focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option className="text-black">SALE & RENT</option>
              <option className="text-black">For Sale</option>
              <option className="text-black">For Rent</option>
            </select>
    
            <select
              className="bg-transparent text-white px-3 py-2 rounded-lg mx-2 
              focus:outline-none focus:ring-2 focus:ring-black"
              onChange={handleTypeChange}
            >
              <option className="text-black">All Type</option>
              <option className="text-black">RECIDENCIAL</option>
              <option className="text-black">COMMERCIAL</option>
              <option className="text-black">INDUSTRAIL</option>
              <option className="text-black">PLOT & LAND</option>
            </select>
    
            {/* Filter Button */}
            <button
              onClick={handleFilterToggle}
              className="flex mt-3 md:mt-0 items-center border border-gray-700 text-white 
              px-6 py-2 rounded-lg mx-2"
            >
              <span className="w-4 h-4 mr-2">
                <FilterLogo />
              </span>
              Filter
            </button>
    
            {/* Search Button */}
            <button
              className="bg-[#E7C873] mt-4 md:mt-0 text-black px-6 py-2 rounded-lg 
              hover:text-[#E7C873] font-medium hover:border hover:border-[#E7C873] hover:bg-black"
            >
              Search
            </button>
          </div>
    
         
        </div>
         {/* Filter Dropdown Section */}
         {isFilterOpen && selectedOptions && (<div className="mb-[2px] sm:mb-[150px] md:mb-[100px] lg:mb-[80px]">
            <div className="w-full md:gap-2 md:mx-auto md:w-[70%] flex  justify-evenly items-center   text-sm text-black p-4 mt-1 rounded-lg ">
              <div className="w-1/3 mb-4 mr-2 sm:mr-0">
                <label className="block text-gray-700 text-[.8rem] sm:text-sm  text-center mb-2">Availability</label>
                <select className="w-full p-2 bg-[#1F4B43] text-white text-[.7rem] sm:text-sm text-center rounded-2xl  ">
                  {selectedOptions.availability.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 mb-4 mr-2 sm:mr-0">
                <label className="block text-gray-700 text-[.8rem] sm:text-sm  text-center mb-2">Condition</label>
                <select className="w-full p-2  bg-[#1F4B43] text-white text-[.7rem] sm:text-sm text-center rounded-2xl   ">
                  {selectedOptions.condition.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 mb-4">
                <label className="block text-gray-700 text-[.8rem] sm:text-sm  text-center mb-2">Availability Type</label>
                <select className="w-full p-2  bg-[#1F4B43] text-white text-[.7rem] sm:text-sm text-center rounded-2xl  ">
                  {selectedOptions.availabilityType.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
               </div>
                  {/* Budget */}
              <div className="mb-4  w-[95%] md:w-[80%] mx-auto ">
                <label className="block text-gray-700 text-sm font-normal mb-2">
                  Budget ({budget.min}k to {budget.max}k)
                </label>
               
                <div className=" flex justify-evenly items-center space-x-4">
                <span className="w-[50%]">
                  {/* Minimum Slider */}
                  <label className="block text-gray-700 text-sm font-normal mb-2">
                 max
                </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={budget.min}
                    onChange={(e) => handleBudgetChange("min", e.target.value)}
                    className="w-full bg-black"
                  /></span>
                  <span className="w-[50%]">
                  {/* Maximum Slider */}
                  <label className="block text-gray-700 text-sm font-normal mb-2">
                 max
                </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={budget.max}
                    onChange={(e) => handleBudgetChange("max", e.target.value)}
                    className="w-full"
                  /></span>
                </div>
                <div className="text-gray-500 text-sm  mt-2">
                  Drag the bars to set the budget range.
                </div>
              </div>
               </div>
          )}</>
      );
};

export default FilterTwo;
