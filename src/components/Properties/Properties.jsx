import React, { useState,useEffect } from "react";
import bgImg from "../../assets/property_2_-853gCunl--transformed.webp";
import PropertyCards from "./PropertyCards";
import FilterTwo from "./FilterTwo";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
function Properties() {
  const [activeTab, setActiveTab] = useState("Residential");

  const renderAdditionalInputs = () => {
      useEffect(() => {
            AOS.init({ once: true }); // Initialize AOS
          }, []);

    switch (activeTab) {
      case "Residential":
        return (
          <>
           
            <div className="mb-4  mt-4 text-sm grid grid-cols-4 gap-1 items-center justify-start">
          {/* no1 */}
            <div className="mb-4 w-1/4 ">
            <label className="block mb-2 text-sm text-gray-500">Search</label>
            <input
              type="text"
              placeholder="ENTER PROPERTY AREA"
              className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43] "
            />
            
          </div>
          {/* no2 */}
          <div className="mb-4 text-sm">  
                 <label className="block mb-2 text-sm text-gray-500">Residential Type</label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                <option>LOW RISE APARTMENT</option>
                <option>HIGH RISE APAARTMENT </option>
                <option>BUNGLOW</option>
                <option>VILLAS</option>
                <option>TENAMENT </option>
                
                <option>ROWHOUSE</option>
                <option>FARM HOUSE </option>
             
              </select></div> 
               {/* no3 */}
          <div className=" w-auto mb-4">
            <label className="block   mb-2  text-sm text-gray-500">Sale/Rent</label>
            <select className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
              <option>Buy</option>
              <option>Rent</option>
            </select>
          </div>
           {/* no4 */}
          <div className="mb-4 text-sm"> 
                  <label className="block mb-2 text-sm text-gray-500">Residential Availability </label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
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
              </select></div>
          
       
         {/* no5 */}
         <div className="mb-4 text-sm">  
             <label className="block mb-2 text-sm text-gray-500">Residential Condition </label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                <option>FULLY FURNISHED</option>
                <option> FURNISHED</option>
                <option>SEMI FURNISHED</option>
                <option>FIX-FURNISHED</option>
                <option>KITCHEN FIX</option>
                <option> UNFURNISHED</option>
             
              </select></div>
      
       
              
             
          {/* no6 */}
          <div className="mb-4 text-sm">  
                 <label className="block mb-2 text-sm text-gray-500">AVAIBLE FOR</label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                <option>FOR FAMALY</option>
                <option>FOR EXUCITIVE</option>
                <option>FOR BECHLOR </option>
                
             
              </select></div> 
              
                 {/* no8 */}
            <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd</label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                </div> 
              {/* no7 */}
              <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Budget</label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24  py-2
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                </div> 
         
   
        
            
            </div>
          </>
        );
      case "Commercial":
        return (
          <>
              <div className="mb-4 mx-28 mt-4 text-sm grid grid-cols-3 gap-5 items-center justify-start">
   {/* no1 */}
   <div className="mb-4 w-1/4 ">
            <label className="block mb-2 text-sm text-gray-500">Search</label>
            <input
              type="text"
              placeholder="ENTER PROPERTY AREA"
              className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43] "
            />
            
          </div>


          <div className="mb-4 text-sm">   <label className="block mb-2 text-sm text-gray-400">Commercial Availability</label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
              <option>OFFICE</option>
                <option>SHOP</option>
                <option> CO WORKING SPACE</option>
                <option>READY TO MOVE OFFICE</option>
                <option>WAREHOUSE</option>
                <option>COLD STORGE</option>
                <option>OTHER </option>
              
             
              </select></div> 

          <div className=" w-auto mb-4">
            <label className="block   mb-2  text-sm text-gray-500">Sale/Rent</label>
            <select className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
              <option>Buy</option>
              <option>Rent</option>
            </select>
          </div>

              
              <div className="mb-4 text-sm">   <label className="block mb-2 text-sm text-gray-400">Commercial Condition</label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
              <option>FULLY FURNISHED</option>
                <option> FURNISHED</option>
                <option>SEMI FURNISHED</option>
                <option>FIX-FURNISHED</option>
               
                <option> UNFURNISHED</option>
             
              </select>
              </div> 
     
      {/* no7 */}
      <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd    </label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                     </div> 
      
                    {/* no6 */}
                       <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Budget</label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24  py-2
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                               </div> 
                  

              <div className="mb-4  text-sm">
       <label className="block mb-2 text-sm text-gray-400">Commercial Availability Type</label>
       <div className="w-full flex lg:flex-row sm:flex-wrap items-center justify-start
        gap-4 p-2 rounded-lg text-sm">
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="BOSS CABIN" />
    <span>BOSS CABIN</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="MANAGER CABIN" />
    <span>MANAGER CABIN</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="WORK STATION" />
    <span>WORK STATION</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="CONFERENCE ROOM" />
    <span>CONFERENCE ROOM</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="PANTRY" />
    <span>PANTRY</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="RECEPTION" />
    <span>RECEPTION</span>
  </label>
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="form-checkbox text-[#1F4B43]" value="WAITING AREA" />
    <span>WAITING AREA</span>
  </label>
</div>

                         </div> 
            </div>
          </>
        );
        case "Industrial":
          return (
            <>
             
              <div className="mb-4 mx-10 mt-4 text-sm grid grid-cols-3 gap-1 items-center justify-start">
            {/* no1 */}
              <div className="mb-4 w-1/4 ">
              <label className="block mb-2 text-sm text-gray-500">Search</label>
              <input
                type="text"
                placeholder="Search Area"
                className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43] "
              />
              
            </div>
            {/* no2 */}
            <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Industrial                   Type</label>
                <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43]
                 border-[#1F4B43]">
                  <option>Ware House</option>
                  <option>Heavy Manufacturing</option>
                  <option>Light Manufacturing</option>
                  <option>Distribution Warehouse</option>
                  <option>General Warehouse</option>
                  <option>Flex Space</option>
                  <option>Showroom Buildings</option>
                  <option>Research and Development</option>
                  <option>Data Center</option>
               
                </select></div> 
                 {/* no3 */}
            <div className=" w-auto mb-4">
              <label className="block   mb-2  text-sm text-gray-500">Rent/Buy  </label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>
            
       
                {/* no7 */}
                <div className="mb-4 text-sm mx-4  ">  
                   <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd </label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                </div> 

              {/* no8 */}
              <div className="mb-4 text-sm mx-4 ">  
                   <label className="block mb-2 text-sm text-gray-500">Budget</label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24  py-2
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                </div> 
     
          
              
              </div>
            </>
          );
        case "Plot&Land":
          return (
            <>
             
              <div className="mb-4 mt-4 text-sm grid grid-cols-4 gap-1 items-center justify-start"> 
            {/* no1 */}
              <div className="mb-4 w-1/4 ">
              <label className="block mb-2 text-sm text-gray-500">Search</label>
              <input
                type="text"
                placeholder="SEARCH PlOT"
                className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43] "
              />
              
            </div>
            {/* no2 */}
            <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Residential Type</label>
                <select className="w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]">
                  <option>RECIDENCIAL PLOT </option>
                  <option>COMMERCIAL PLOT </option>
                  <option>INDUSTRAIL PLOT</option>
                  <option>Agriculture Land </option>
                  <option>Non-Agriculture Land </option>
                  <option>Project Land</option>
                </select></div> 
                 {/* no3 */}
            <div className=" w-auto mb-4">
              <label className="block   mb-2  text-sm text-gray-500">Sale/Rent</label>
              <select className="w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]">
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>
             
                
                {/* no7 */}
                <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Sqft/Sqyd </label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24  py-2
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                 </span> 
                 
               
             
                </div> 

              {/* no8 */}
              <div className="mb-4 text-sm">  
                   <label className="block mb-2 text-sm text-gray-500">Budget</label>
               <span className="flex  justify-center items-center rounded-lg
border-[1.5px] border-[#1F4B43]">
  
                <input type="number" placeholder="min" className="w-24  py-2
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
                   <label className="block mx-2 text-sm text-[#1F4B43]">To</label>
                 <input type="number" placeholder="max" className="w-24 py-2 
                  tex-sm placeholder:text-[#1F4B43] text-center "/>
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
          className="w-full h-[350px] md:h-[40vh] lg:h-[450px] object-cover object-top filter blur-[0px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.1] z-10"></div>

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
  <ul
    className="flex w-full justify-center mb-6 sticky top-0 bg-white z-10 "
  >
    {[
      "Residential",
      "Commercial",
      "Industrial",
      "Plot&Land",
    ].map((tab) => (
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
    ))}
  </ul>



        {/* Filter Form */}
        <form className="space-y-4 bg-white p-6 rounded ">
          {/* Common Inputs */}
       <div className="flex text-sm w-full justify-start items-center gap-1 "> 
       
          
         
         
          </div> 

          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}

       {/* Submit Button */}
       <div className="w-[100%] flex justify-center items-center">
              <button className="w-[100%] px-1 py-1  md:w-[20%] text-sm border-[1.2px] text-white
               bg-[#1F4B43] border-[#1F4B43] rounded-lg">
            Search
          </button></div>  
        </form>
      </div>

      <div className=" w-[150px] mx-5 text-center font-extralight "><p className="text-[.7rem] w-auto rounded-lg text-gray-500 
       border-gray-400">Results-8 Properties</p></div>
      <PropertyCards/>
    </>
  );
}

export default Properties;
