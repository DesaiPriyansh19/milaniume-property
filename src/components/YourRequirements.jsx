import React, { useState,useEffect } from "react";
import bgImg from "../assets/propertiesBgFInal.jpg";


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
function YourRequirements() {
  const [activeTab, setActiveTab] = useState("Residential");
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);
  const renderAdditionalInputs = () => {
      
    switch (activeTab) {
      case "Residential":
        return (
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500"  className="max-w-3xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
     

      {/* Personal Details */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Personal Details</h3>
        <label className="block mb-2 text-sm">
          Role:
          <select
            className="block w-full mt-1 p-2 border rounded-md"
          >
            <option value="buyer">Buyer</option>
            <option value="tenant">Tenant</option>
            <option value="agent">Agent</option>
            <option value="builder">Builder</option>
          </select>
        </label>

        <label className="block mb-2 text-sm">
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label className="block mb-2 text-sm">
          Mobile Number:
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label className="block mb-2 text-sm">
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>
      </div>

      {/* Requirements Property Details */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Requirements Property Details</h3>
        <label className="block mb-2 text-sm">
          Area (sqft):
          <input
            type="number"
            placeholder="Enter area in sqft"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label className="block mb-2 text-sm">
          Rent or Buy:
          <select
            className="block w-full mt-1 p-2 border rounded-md"
          >
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>
        </label>
      </div>

      {/* Construction Status */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Construction Status</h3>
        <label className="block mb-2 text-sm">
          <select className="block w-full mt-1 p-2 border rounded-md">
            <option value="new-launch">New Launch</option>
            <option value="under-construction">Under Construction</option>
            <option value="ready-to-move">Ready to Move</option>
            <option value="old-construction">Old Construction</option>
          </select>
        </label>
      </div>

      {/* All Residential */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">All Residential</h3>
        <div className="flex flex-wrap">
          {[
            "Flat/Apartment",
            "Low Rise Apartment",
            "High Rise Apartment",
            "Row House",
            "Bungalows",
            "Weekend Villas",
            "Penthouse",
            "Farm House",
          ].map((type) => (
            <label key={type} className="w-1/2 p-2">
              <input type="checkbox" className="mr-2" /> {type}
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Condition</h3>
        <div className="flex flex-wrap">
          {[
            "Fully Furnished",
            "Furnished",
            "Semi Furnished",
            "Kitchen-Fix",
            "Fix-Furnished",
            "Unfurnished",
          ].map((condition) => (
            <label key={condition} className="w-1/2 p-2">
              <input type="checkbox" className="mr-2" /> {condition}
            </label>
          ))}
        </div>
      </div>

      {/* Residential Availability */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Residential Availability</h3>
        <div className="flex flex-wrap">
          {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK", "Above 6 BHK"].map((bhk) => (
            <label key={bhk} className="w-1/2 p-2">
              <input type="checkbox" className="mr-2" /> {bhk}
            </label>
          ))}
        </div>
      </div>

      {/* Facing */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Facing</h3>
        <div className="flex flex-wrap">
          {[
            "East",
            "North",
            "North – East",
            "North – West",
            "South",
            "South-East",
            "South-West",
            "West",
          ].map((direction) => (
            <label key={direction} className="w-1/2 p-2">
              <input type="checkbox" className="mr-2" /> {direction}
            </label>
          ))}
        </div>
      </div>

      {/* Area - Min to Max */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Area (Sqft) - Min to Max</h3>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min"
            className="block w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max"
            className="block w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Budget - Min to Max */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Budget - Min to Max</h3>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min"
            className="block w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max"
            className="block w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Description */}
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="mb-6">
        <h3 className="text-lg font-light mb-2">Description</h3>
        <textarea
          placeholder="Enter a brief description"
          className="block w-full p-2 border rounded-md"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="w-full  bg-[#1F4B43] text-sm  text-white p-2 rounded-md">
        Submit
      </button>
    </div>

          );
        
      case "Commercial":
        return (
            <div className="max-w-3xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
          
      
            {/* Personal Details */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Personal Details</h3>
              <label className="block mb-2 text-sm">
                Role:
                <select
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="buyer">Buyer</option>
                  <option value="tenant">Tenant</option>
                  <option value="agent">Agent</option>
                  <option value="builder">Builder</option>
                </select>
              </label>
      
              <label className="block mb-2 text-sm">
                Name:
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Mobile Number:
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Email:
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
            </div>
      
            {/* Requirements Property Details */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Requirements Property Details</h3>
              <label className="block mb-2 text-sm">
                Area (sqft):
                <input
                  type="number"
                  placeholder="Enter area in sqft"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Rent or Buy:
                <select
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </label>
            </div>
      
            {/* Construction Status */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Construction Status</h3>
              <label className="block mb-2 text-sm">
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="new-launch">New Launch</option>
                  <option value="under-construction">Under Construction</option>
                  <option value="ready-to-move">Ready to Move</option>
                  <option value="old-construction">Old Construction</option>
                </select>
              </label>
            </div>
      
            {/* All Residential */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">All Commercial</h3>
              <div className="flex flex-wrap">
                {[
                  "Office",
                  " Shop",
                  "Showroom",
                  "Co Working Space",
                  "Ready to Move Offices",
                  "Warehouse",
                  "Cold Storage",
                  "Other",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Condition */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Condition</h3>
              <div className="flex flex-wrap">
                {[
                  "Fully Furnished",
                  "Furnished",
                  "Semi Furnished",
                
                  "Fix-Furnished",
                  "Unfurnished",
                ].map((condition) => (
                  <label key={condition} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {condition}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Residential Availability */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Commercial Availability  </h3>
              <div className="flex flex-wrap">
                {[" Boss Cabin", "Manager Cabin", " Work Station", "Pantry", "Reception", "Waiting Area", "Car parking"].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Facing */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  "South-East",
                  "South-West",
                  "West",
                ].map((direction) => (
                  <label key={direction} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {direction}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Area - Min to Max */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Area (Sqft) </h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-1/2 p-2 border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-1/2 p-2 border rounded-md"
                />
              </div>
            </div>
      
            {/* Budget - Min to Max */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Budget</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-1/2 p-2 border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-1/2 p-2 border rounded-md"
                />
              </div>
            </div>
      
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Description</h3>
              <textarea
                placeholder="Enter a brief description"
                className="block w-full p-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>
      
            {/* Submit Button */}
            <button className="w-full  bg-[#1F4B43] text-sm  text-white p-2 rounded-md">
              Submit
            </button>
          </div>
        );
        case "Industrial":
          return (
            <>
             
             <div className="max-w-3xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
          
      
            {/* Personal Details */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Personal Details</h3>
              <label className="block mb-2 text-sm">
                Role:
                <select
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="buyer">Buyer</option>
                  <option value="tenant">Tenant</option>
                  <option value="agent">Agent</option>
                  <option value="builder">Builder</option>
                </select>
              </label>
      
              <label className="block mb-2 text-sm">
                Name:
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Mobile Number:
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Email:
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
            </div>
      
            {/* Requirements Property Details */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Requirements Property Details</h3>
              <label className="block mb-2 text-sm">
                Area (sqft):
                <input
                  type="number"
                  placeholder="Enter area in sqft"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>
      
              <label className="block mb-2 text-sm">
                Rent or Buy:
                <select
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </label>
            </div>
      
            {/* Construction Status */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Construction Status</h3>
              <label className="block mb-2 text-sm">
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="new-launch">New Launch</option>
                  <option value="under-construction">Under Construction</option>
                  <option value="ready-to-move">Ready to Move</option>
                  <option value="old-construction">Old Construction</option>
                </select>
              </label>
            </div>
      
            {/* All Industrial*/}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">All Industrial</h3>
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
      
            {/* Condition */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Condition</h3>
              <div className="flex flex-wrap">
                {[
                  "Building Site",
                  "Structural Frame & Building Envelope",
                  "Semi Furnished",
                  " Roofing",
                  "Plumbing",
                  "Heating",
                  "Air Conditioning & Ventilation",
                  "Electrical",
                  "Vertical Transportation (Elevators & Escalators)",
                  "Life Safety / Fire Protection",
                  "Interior Elements",

                ].map((condition) => (
                  <label key={condition} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {condition}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Residential Availability */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Commercial Availability  </h3>
              <div className="flex flex-wrap">
                {[" Boss Cabin", "Manager Cabin", " Work Station", "Pantry", "Reception", "Waiting Area", "Car parking"].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Facing */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  "East",
                  "North",
                  "North – East",
                  "North – West",
                  "South",
                  "South-East",
                  "South-West",
                  "West",
                ].map((direction) => (
                  <label key={direction} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {direction}
                  </label>
                ))}
              </div>
            </div>
      
            {/* Area - Min to Max */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Area (Sqft) </h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-1/2 p-2 border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-1/2 p-2 border rounded-md"
                />
              </div>
            </div>
      
            {/* Budget - Min to Max */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Budget</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-1/2 p-2 border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-1/2 p-2 border rounded-md"
                />
              </div>
            </div>
      
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-light mb-2">Description</h3>
              <textarea
                placeholder="Enter a brief description"
                className="block w-full p-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>
      
            {/* Submit Button */}
            <button className="w-full  bg-[#1F4B43] text-sm  text-white p-2 rounded-md">
              Submit
            </button>
          </div>

            </>
          );
        case "Plot&Land":
            return (
                <>
                 
                 <div className="w-full  md:max-w-3xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
            
          
                {/* Personal Details */}
                <div className="mb-6">
                  <h3 className="text-lg font-light mb-2">Personal Details</h3>
                  <label className="block mb-2 text-sm">
                    Role:
                    <select
                      className="block w-full mt-1 p-2 border rounded-md"
                    >
                      <option value="buyer">Buyer</option>
                      <option value="tenant">Tenant</option>
                      <option value="agent">Agent</option>
                      <option value="builder">Builder</option>
                    </select>
                  </label>
          
                  <label className="block mb-2 text-sm">
                    Name:
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="block w-full mt-1 p-2 border rounded-md"
                    />
                  </label>
          
                  <label className="block mb-2 text-sm">
                    Mobile Number:
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="block w-full mt-1 p-2 border rounded-md"
                    />
                  </label>
          
                  <label className="block mb-2 text-sm">
                    Email:
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full mt-1 p-2 border rounded-md"
                    />
                  </label>
                </div>
          
                {/* Requirements Property Details */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Requirements Property Details</h3>
                  <label className="block mb-2 text-sm">
                    Area (sqft):
                    <input
                      type="number"
                      placeholder="Enter area in sqft"
                      className="block w-full mt-1 p-2 border rounded-md"
                    />
                  </label>
          
                  <label className="block mb-2 text-sm">
                    Rent or Buy:
                    <select
                      className="block w-full mt-1 p-2 border rounded-md"
                    >
                      <option value="rent">Rent</option>
                      <option value="buy">Buy</option>
                    </select>
                  </label>
                </div>
          
                {/* Construction Status */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Construction Status</h3>
                  <label className="block mb-2 text-sm">
                    <select className="block w-full mt-1 p-2 border rounded-md">
                      <option value="new-launch">New Launch</option>
                      <option value="under-construction">Under Construction</option>
                      <option value="ready-to-move">Ready to Move</option>
                      <option value="old-construction">Old Construction</option>
                    </select>
                  </label>
                </div>
          
                {/* All Industrial*/}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Plot & Land</h3>
                  <div className="flex flex-wrap">
                    {[
                      "Residential Plot",
                      "Commercial Plot",
                      "Industrial Plot",
                      "Agriculture Land",
                      "Non – Agriculture Land",
                      "Project Land",
                    
                    ].map((type) => (
                      <label key={type} className="w-1/2 p-2">
                        <input type="checkbox" className="mr-2" /> {type}
                      </label>
                    ))}
                  </div>
                </div>
        
          
                {/* Facing */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Facing</h3>
                  <div className="flex flex-wrap">
                    {[
                      "East",
                      "North",
                      "North – East",
                      "North – West",
                      "South",
                      "South-East",
                      "South-West",
                      "West",
                    ].map((direction) => (
                      <label key={direction} className="w-1/2 p-2">
                        <input type="checkbox" className="mr-2" /> {direction}
                      </label>
                    ))}
                  </div>
                </div>
          
                {/* Area - Min to Max */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Area (Sqft) </h3>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="block w-1/2 p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="block w-1/2 p-2 border rounded-md"
                    />
                  </div>
                </div>
          
                {/* Budget - Min to Max */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Budget</h3>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="block w-1/2 p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="block w-1/2 p-2 border rounded-md"
                    />
                  </div>
                </div>
          
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-2">Description</h3>
                  <textarea
                    placeholder="Enter a brief description"
                    className="block w-full p-2 border rounded-md"
                    rows="4"
                  ></textarea>
                </div>
          
                {/* Submit Button */}
                <button className="w-full  bg-[#1F4B43] text-sm  text-white p-2 rounded-md">
                  Submit
                </button>
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
          Your Requirements
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
        <form data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className=" bg-white  rounded ">
     

          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}

   
        </form>
      </div>


  
    </>
  );
}

export default YourRequirements;
