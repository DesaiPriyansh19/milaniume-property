import React, { useState, useEffect } from "react";
import bgImg from "../../assets/pexels-jonathanborba-5563473.jpg";
import PropertyCards from "./PropertyCards";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useFetch from "../../../hooks/useFetch";
import SkeletonLoader from "../SkeletonLoader";
function Properties() {
  const [activeTab, setActiveTab] = useState("Residential");
  const { data, loading } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/property"
  );
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);
  const renderAdditionalInputs = () => {
  

    switch (activeTab) {
      case "Residential":
        return (
          <>
            <div className="mb-4 mt-4 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-start max-w-screen-lg">
              {/* no1 */}
              <div className="mb-4 w-full">
                <label className="block mb-2 text-sm text-gray-500">Search</label>
                <input
                  type="text"
                  placeholder="ENTER PROPERTY AREA"
                  className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                />
              </div>
              {/* no2 */}
              <div className="mb-4 text-sm w-full">
                <label className="block mb-2 text-sm text-gray-500">Residential Type</label>
                <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>LOW RISE APARTMENT</option>
                  <option>HIGH RISE APARTMENT</option>
                  <option>BUNGALOW</option>
                  <option>VILLAS</option>
                  <option>TENEMENT</option>
                  <option>ROWHOUSE</option>
                  <option>FARM HOUSE</option>
                </select>
              </div>
              {/* no3 */}
              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-gray-500">Sale/Rent</label>
                <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>
              {/* no4 */}
              <div className="mb-4 text-sm w-full">
                <label className="block mb-2 text-sm text-gray-500">Residential Availability</label>
                <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>5 BHK</option>
                  <option>6 BHK</option>
                  <option>Above 6 BHK</option>
                  <option>Duplex</option>
                  <option>PG</option>
                  <option>Residential Plot</option>
                </select>
              </div>
              {/* no5 */}
              <div className="mb-4 text-sm w-full">
                <label className="block mb-2 text-sm text-gray-500">Residential Condition</label>
                <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>FULLY FURNISHED</option>
                  <option>FURNISHED</option>
                  <option>SEMI FURNISHED</option>
                  <option>FIX-FURNISHED</option>
                  <option>KITCHEN FIX</option>
                  <option>UNFURNISHED</option>
                </select>
              </div>
              {/* no6 */}
              <div className="mb-4 text-sm w-full">
                <label className="block mb-2 text-sm text-gray-500">Available For</label>
                <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>FOR FAMILY</option>
                  <option>FOR EXECUTIVE</option>
                  <option>FOR BACHELOR</option>
                </select>
              </div>
              {/* no8 */}
              <div className="mb-4 text-sm w-full sm:max-w-52">
                <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd</label>
                <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                  <input
                    type="number"
                    placeholder="min"
                    className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                  />
                  <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
                  <input
                    type="number"
                    placeholder="max"
                    className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                  />
                </span>
              </div>
              {/* no7 */}
              <div className="mb-4 text-sm w-full sm:max-w-52">
                <label className="block mb-2 text-sm text-gray-500">Budget</label>
                <span className=" p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                  <input
                    type="number"
                    placeholder="min"
                    className="w-full sm:w-[40%]  p-2 text-sm placeholder:text-[#1F4B43] text-center"
                  />
                  <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
                  <input
                    type="number"
                    placeholder="max"
                    className="w-full sm:w-[40%] p-2 text-sm placeholder:text-[#1F4B43] text-center"
                  />
                </span>
              </div>
            </div>
          </>
        );
        
      case "Commercial":
        return (
          <>
         <div className="mb-4 mx-4 sm:mx-6 lg:mx-28 mt-4 text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start justify-start max-w-screen-lg">
  {/* Search */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Search</label>
    <input
      type="text"
      placeholder="ENTER PROPERTY AREA"
      className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
    />
  </div>

  {/* Commercial Availability */}
  <div className="mb-4 text-sm">
    <label className="block mb-2 text-sm text-gray-400">Commercial Availability</label>
    <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>OFFICE</option>
      <option>SHOP</option>
      <option>CO WORKING SPACE</option>
      <option>READY TO MOVE OFFICE</option>
      <option>WAREHOUSE</option>
      <option>COLD STORAGE</option>
      <option>OTHER</option>
    </select>
  </div>

  {/* Sale/Rent */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Sale/Rent</label>
    <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>Buy</option>
      <option>Rent</option>
    </select>
  </div>

  {/* Commercial Condition */}
  <div className="mb-4 text-sm">
    <label className="block mb-2 text-sm text-gray-400">Commercial Condition</label>
    <select className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>FULLY FURNISHED</option>
      <option>FURNISHED</option>
      <option>SEMI FURNISHED</option>
      <option>FIX-FURNISHED</option>
      <option>UNFURNISHED</option>
    </select>
  </div>

  {/* Sqft/Sqyd */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center  rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2 placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%]  text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2 flex flex-row justify-center items-center placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>

  {/* Budget */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Budget</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center  rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2 tex-sm placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%]   text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2 tex-sm placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>


</div>
  {/* Commercial Availability Type */}
  <div className="mb-4 text-sm w-ful sm:w-[90%] md:w-[75%] mx-auto max-w-screen-lg">
    <label className="block mb-2 text-sm text-gray-400">Commercial Availability Type</label>
    <div className="w-full flex flex-wrap gap-4 p-2 rounded-lg text-sm">
      {[
        "BOSS CABIN",
        "MANAGER CABIN",
        "WORK STATION",
        "CONFERENCE ROOM",
        "PANTRY",
        "RECEPTION",
        "WAITING AREA",
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-[#1F4B43]" value={item} />
          <span>{item}</span>
        </label>
      ))}
    </div>
  </div>
          </>
        );
        case "Industrial":
          return (
            <>
             
             <div className="mb-4 mx-4 mt-4 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-start">
  {/* Search */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Search</label>
    <input
      type="text"
      placeholder="Search Area"
      className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
    />
  </div>

  {/* Industrial Type */}
  <div className="mb-4 text-sm">
    <label className="block mb-2 text-sm text-gray-500">Industrial Type</label>
    <select className="w-full p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>Ware House</option>
      <option>Heavy Manufacturing</option>
      <option>Light Manufacturing</option>
      <option>Distribution Warehouse</option>
      <option>General Warehouse</option>
      <option>Flex Space</option>
      <option>Showroom Buildings</option>
      <option>Research and Development</option>
      <option>Data Center</option>
    </select>
  </div>

  {/* Rent/Buy */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Rent/Buy</label>
    <select className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>Buy</option>
      <option>Rent</option>
    </select>
  </div>

  {/* Sqft/Sqyd */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>

  {/* Budget */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Budget</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>
</div>

            </>
          );
        case "Plot&Land":
          return (
            <>
             <div className="mb-4 mx-4 mt-4 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-start">
  {/* Search */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Search</label>
    <input
      type="text"
      placeholder="Search Area"
      className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
    />
  </div>

  {/* Industrial Type */}
  <div className="mb-4 text-sm">
    <label className="block mb-2 text-sm text-gray-500">Industrial Type</label>
    <select className="w-full p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>Ware House</option>
      <option>Heavy Manufacturing</option>
      <option>Light Manufacturing</option>
      <option>Distribution Warehouse</option>
      <option>General Warehouse</option>
      <option>Flex Space</option>
      <option>Showroom Buildings</option>
      <option>Research and Development</option>
      <option>Data Center</option>
    </select>
  </div>

  {/* Rent/Buy */}
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm text-gray-500">Rent/Buy</label>
    <select className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
      <option>Buy</option>
      <option>Rent</option>
    </select>
  </div>

  {/* Sqft/Sqyd */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2  text-sm placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>

  {/* Budget */}
  <div className="mb-4 text-sm w-full sm:max-w-52">
    <label className="block mb-2 text-sm text-gray-500">Budget</label>
    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
      <input
        type="number"
        placeholder="min"
        className="w-full sm:w-[40%]  p-2  placeholder:text-[#1F4B43] text-center"
      />
      <label className="w-[10%] mx-1 text-sm text-[#1F4B43]">To</label>
      <input
        type="number"
        placeholder="max"
        className="w-full sm:w-[40%]  p-2  placeholder:text-[#1F4B43] text-center"
      />
    </span>
  </div>
</div>

            </>
          );
          
        
      default:
        return null;
    }
  };

  return (
    <>
   
      <div className="relative w-full mb-0 pb-0">
        {/* Background Image with Blur */}
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-[350px] md:h-[40vh] lg:h-[100%] object-cover object-top filter blur-[0px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>

        {/* Text Content */}
        <div
          className="absolute mt-[100px] sm:mt-[50px] text-center inset-0 flex flex-col justify-center items-center text-white z-20"
          style={{
            textShadow: "4px 4px 8px rgba(1, 1, 0.9, 0.1)",
          }}
        >
          <h1 className="text-white text-3xl sm:text-3xl md:text-5xl px-2 md:px-0 font-normal">
            Your Property, Our Priority.
          </h1>
          <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
            Find Your Perfect Property – Where Your Search Ends.
          </p>
        </div>
      </div>

      {/* Property Filter Section */}
      <div className="p-6 ">
        {/* Tabs */}

        {/* Tabs */}
        <ul className="flex w-full justify-center mb-6 sticky top-0 bg-white z-10 ">
          {["Residential", "Commercial", "Industrial", "Plot&Land"].map(
            (tab) => (
              <li
                key={tab}
                className={`cursor-pointer font-medium text-[.6rem] sm:text-[.8rem]
           md:text-[.9rem] lg:text-[1rem] px-4 py-1${
             activeTab === tab
               ? " text-gray-600 border-[2px] border-[#1F4B43] rounded-3xl"
               : ""
           }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>

        {/* Filter Form */}
        <form className="space-y-4 bg-white p-6 rounded ">
          {/* Common Inputs */}
          <div className="flex text-sm w-full justify-start items-center gap-1 "></div>

          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}

          {/* Submit Button */}
          <div className="w-[100%] flex justify-center items-center">
            <button
              className="w-[100%] px-1 py-1  md:w-[20%] text-sm border-[1.2px] text-white
               bg-[#1F4B43] border-[#1F4B43] rounded-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className=" w-[90%] mx-auto text-start px-4 mb-2 font-extralight ">
        <p
          className="text-[.7rem] w-auto rounded-lg text-gray-500 
       border-gray-400"
        >
          Results {data?.length} Properties
        </p>
      </div>
    
       {/* Show skeleton loader when loading */}
    {loading ? (
       
          <SkeletonLoader/>
       
      ) : (
        
      <PropertyCards data={data} />)}
    </>
  );
}

export default Properties;
