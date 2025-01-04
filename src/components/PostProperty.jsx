import React, { useState,useEffect } from "react";
 import bgImg from "../assets/Property2.jpg";
 
 
 import AOS from 'aos';
 import 'aos/dist/aos.css'; // Import AOS styles
 function  PostProperty() {
   const [activeTab, setActiveTab] = useState("Residential");
   useEffect(() => {
     AOS.init({ once: true }); // Initialize AOS
   }, []);
   const renderAdditionalInputs = () => {
       
     switch (activeTab) {
       case "Residential":
         return (
            <div className="">
            
          
            {/* Property Types */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Property Type</h3>
              <div className="flex flex-wrap">
                {[
                  "Flat/ Apartment",
                  "Independent/ Builder Floor",
                  "Independent House/ Villa",
                  "Residential Plot",
                  "Farm House",
                  "Other",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          
            {/* Availability Type */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Availability Type</h3>
              <div className="flex flex-wrap">
                {[
                  "Low Rise Apartment",
                  "Bungalow",
                  "Penthouse",
                  "Row House",
                  "High Rise Apartment",
                  "Weekend Villas",
                  "Tenament",
                  "Building",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          
            {/* Residential Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Residential Availability</h3>
              <div className="flex flex-wrap">
                {[
                  "1 BHK",
                  "2 BHK",
                  "3 BHK",
                  "4 BHK",
                  "6 BHK",
                  "Above 6 BHK",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
              {/* Condition Availability */}
              <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Residential Condition</h3>
              <div className="flex flex-wrap">
                {[
                  "Fully Furnished",
                  " Furnished",
                  "Semi Furnished",
                  " Kitchen-Fix",
                  "Fix-Furnished",
                  "Unfurnished",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
            {/*Available Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Available For</h3>
              <div className="flex flex-wrap">
                {[
                  "FOR FAMILY",
                  "FOR EXICUTIVE",
                  "FOR BECHLORE",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
               {/*Available Availability */}
               <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Amenities</h3>
              <div className="flex flex-wrap">
                {[
                  "24/7 Water Supply",
                  "Senior Citizen Sitting",
                  "Banquet Hall",
                  "Home Theatre",
                  "Indoors Game",
                  "IOutdoors Game",
                  "Visitor Parking",
                  " Allotted Parking",
                  "Lift",
                  "Power Backup",
                  "Gas Line",
                  "Swimming pool",
                  "Garden",
                  "Children Play Area",
                  "Club House",
                  "CCTV",


                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
              {/*Facing */}
              <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  " South-East",
                  "South- west",
                  "west",


                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
            {/* Other Sections */}
            {/* Repeat the same pattern for Condition, Availability, Amenities, Facing, etc. */}
            
           
          </div>
          
 
           );
         
       case "Commercial":
         return (
            <div className="">
           
             {/* Property Type */}
             <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Property Type</h3>
              <div className="flex flex-wrap">
                {[
                  "Ready To Move Offices",
                  "Bare Shall Offices",
                  "Shops & Retail",
                  "Commercial / Inst. Land",
                  " Warehouse",
                  " Cold Storage",
                  "Other",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
         
          
            {/* Commercial Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Commercial Availability</h3>
              <div className="flex flex-wrap">
                {[
                  "Boss Cabin",
                  "Manager Cabin",
                  " Work Station",
                  "Pantry",
                  "Reception",
                  "Waiting Area",
                  "Car parking",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          
             
            {/*Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Amenities</h3>
              <div className="flex flex-wrap">
                {[
                  "Allotted Parking",
                  "Lift",
                  " Power Backup",
                  " Garden",
                  "CCTV",
                  "24/7 Water Supply",
                  "Cafeteria",
                  "Visitor Parking",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
      
       {/*Facing */}
       <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  " South-East",
                  "South- west",
                  "west",


                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
       
          </div>
         );
         case "Industrial":
           return (
             <>
             <div className="">
        
          
         
          
            {/* Property Types */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Property Type</h3>
              <div className="flex flex-wrap">
                {[
                  "Ware House",
                  "Heavy Manufacturing",
                  "Light Manufacturing",
                  "Distribution Warehouse",
                  "General Warehouse",
                  "Flex Space",
                  "Showroom Buildings",
                  "Research and Development",
                  "Data Center",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          
            {/* condition */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Condition</h3>
              <div className="flex flex-wrap">
                {[
                  "Building Site",
                  "Structural Frame & Building Envelope",
                  "Roofing",
                  "Plumbing",
                  "Heating",
                  "Air Conditioning & Ventilation",
                  "Electrical",
                  "Vertical Transportation (Elevators & Escalators)",
                  "Life Safety / Fire Protection",
                  "Interior Elements",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          
                
       {/*Facing */}
       <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  " South-East",
                  "South- west",
                  "west",


                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>

            {/*Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Amenities</h3>
              <div className="flex flex-wrap">
                {[
                  "Allotted Parking",
                  "Lift",
                  "Power Backup",
                  " CCTV",
                  " 24/7 Water Supply",
                  "Visitor Parking",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
          
            {/* Other Sections */}
            {/* Repeat the same pattern for Condition, Availability, Amenities, Facing, etc. */}
            
         
          </div>
 
             </>
           );
         case "Plot&Land":
             return (
                 <>
                  
                  <div className="">

            {/* Property Types */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Property Type</h3>
              <div className="flex flex-wrap">
                {[
                  "Residential Plot",
                  "Commercial Plot",
                  "Industrial Plot",
                  "Agriculture Land",
                  "Non – Agriculture Land",
                  "Weekend Villa Site",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
                  
       {/*Facing */}
       <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  " South-East",
                  "South- west",
                  "west",


                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
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
         <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>
 
         {/* Text Content */}
         <div
           className="absolute mt-[100px] sm:mt-[50px] text-center inset-0 flex flex-col justify-center items-center text-white z-20"
           style={{
             textShadow: "4px 4px 8px rgba(1, 1, 0.9, 0.1)",
           }}
         >
           <h1 className="text-white text-3xl sm:text-3xl md:text-5xl px-2 md:px-0 font-normal">
        Post Your Property
           </h1>
        
         </div>
       </div>
 
       {/* Property Filter Section */}
       <div className="p-4 ">
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
         <form data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500"
         >
            <div  className="max-w-5xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
         {/* Personal Details */}
         <div className="mb-6 ">
              
              <h3 className="text-lg font-light mb-2">Personal Details</h3>
              <div className="grid grid-cols-2 gap-2">
              <label className="block mb-2 text-sm md:text-lg">
                Role:
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="owner">Owner</option>
                  <option value="agent">Agent</option>
                  <option value="builder">Builder</option>
                </select>
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Full Name:
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Mobile Number:
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Alt. Mobile Number:
                <input
                  type="tel"
                  placeholder="Enter an alternate mobile number"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Your Email:
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              </div>
            </div>
          
            {/* Post Property Details */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Post Property Details</h3>
              <div className="grid grid-cols-2 gap-2">
              <label className="block mb-2 text-sm md:text-lg">
                Address:
                <input
                  type="text"
                  placeholder="Enter address"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                City:
                <input
                  type="text"
                  placeholder="Enter city"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Landmark:
                <input
                  type="text"
                  placeholder="Enter landmark"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Pincode:
                <input
                  type="number"
                  placeholder="Enter pincode"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Rent or Sale:
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>
              </label>
              <label className="block mb-2 text-sm md:text-lg">
                Property Status:
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="new-launch">New Launch</option>
                  <option value="under-construction">Under Construction</option>
                  <option value="ready-to-move">Ready to Move</option>
                  <option value="ready-to-move">Old Cunstruction</option>
                </select>
              </label>    </div>
            </div>
 
           {/* Dynamic Inputs */}
           {renderAdditionalInputs()}
            {/* Area, Price, Image Upload, Description */}
            <div className="grid grid-cols-2 gap-2">
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Area(sqft)</h3>
              <input
                type="number"
                placeholder="Enter area "
                className="block w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Price</h3>
              <input
                type="number"
                placeholder="Enter price"
                className="block w-full mt-1 p-2 border rounded-md"
              />
            </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Upload Images</h3>
              <input type="file" className="block w-full mt-1 p-2 border rounded-md" />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Description</h3>
              <textarea
                placeholder="Enter a brief description"
                className="block w-full mt-1 p-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>
          
            {/* Submit Button */}
            <button className=" w-full  bg-[#1F4B43] text-sm text-white p-2 rounded-md">
              Submit
            </button>
           </div>
    
         </form>
       </div>
 
 
   
     </>
   );
 }
 
 export default  PostProperty;
 