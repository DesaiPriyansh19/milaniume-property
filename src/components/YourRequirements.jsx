import React, { useState, useEffect } from "react";
import bgImg from "../assets/Propery3.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useApiData from "../../hooks/useApiData";
import InputField from "../../utils/InputFields";
function YourRequirements() {
  const [activeTab, setActiveTab] = useState("Residential");
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/property";
  const { addNew } = useApiData(baseUrl);

  const [formData, setFormData] = useState({
    RequiredPersonRole: "",
    RequiredPersonName: "",
    RequiredPersonPhone: "",
    RequiredPersonEmail: "",
    RequiredPropertyDetails: {
      RequiredPropertyType: "",
      RequiredAreaSqft: { min: "", max: "" },
      RequiredBudget: { min: "", max: "" },
      RequiredPropertySellOrRent: "",
      RequiredConstructionStatus: "",
      RequiredDescription: "",
    },
    AllResidential: {
      "Flat/Apartment": false,
      "High Rise Apartment": false,
      Bungalows: false,
      Penthouse: false,
      "Low Rise Apartment": false,
      "Row House": false,
      "Weekend Villas": false,
      "Farm House": false,
    },
    AllCommercial: {
      Office: false,
      Shop: false,
      Showroom: false,
      "Co Working Space": false,
      "Ready to Move Offices": false,
      Warehouse: false,
      "Cold Storage": false,
      Other: false,
    },
    CommercialAvailability: {
      BossCabin: false,
      ManagerCabin: false,
      WorkStation: false,
      Pantry: false,
      Reception: false,
      WaitingArea: false,
      CarParking: false,
    },
    AllIndustrial: {
      WareHouse: false,
      HeavyManufacturing: false,
      LightManufacturing: false,
      DistributionWarehouse: false,
      GeneralWarehouse: false,
      FlexSpace: false,
      ShowroomBuildings: false,
      ResearchAndDevelopment: false,
      DataCenter: false,
    },
    AllPlotAndLand: {
      ResidentialPlot: false,
      CommercialPlot: false,
      IndustrialPlot: false,
      AgricultureLand: false,
      NonAgricultureLand: false,
      ProjectLand: false,
    },
    Condition: {
      BuildingSite: false,
      StructuralFrameAndBuildingEnvelope: false,
      SemiFurnished: false,
      Roofing: false,
      Plumbing: false,
      Heating: false,
      AirConditioningAndVentilation: false,
      Electrical: false,
      VerticalTransportation: false,
      LifeSafetyFireProtection: false,
      InteriorElements: false,
      FullyFurnished: false,
      Furnished: false,
      SemiFurnished: false,
      KitchenFix: false,
      FixFurnished: false,
      Unfurnished: false,
    },
    ResidentialAvailability: {
      "1 Bhk": false,
      "2 Bhk": false,
      "3 Bhk": false,
      "4 Bhk": false,
      "5 Bhk": false,
      "6 Bhk": false,
      "Above 6Bhk": false,
    },
    ResidentAvailableFor: {
      forFamily: false,
      forExicutive: false,
      forBechlore: false,
    },
    Facing: {
      East: false,
      North: false,
      NorthEast: false,
      NorthWest: false,
      South: false,
      SouthEast: false,
      SouthWest: false,
      West: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nameParts = name.split(".");
    setFormData((prevData) => {
      if (nameParts.length > 1) {
        const updatedData = { ...prevData };
        let temp = updatedData;

        // Traverse the nested object path
        for (let i = 0; i < nameParts.length - 1; i++) {
          temp = temp[nameParts[i]]; // Navigate to the nested object
        }

        // Update the final nested value
        temp[nameParts[nameParts.length - 1]] =
          type === "checkbox" ? checked : value;

        return updatedData;
      }

      // Handle non-nested fields
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filterDefaultValues = (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          const nestedFiltered = filterDefaultValues(obj[key]);

          // If all values inside the nested object are false, include it as an empty object
          if (Object.values(nestedFiltered).length === 0) {
            acc[key] = {}; // Include as an empty object
          } else {
            acc[key] = nestedFiltered; // Include the filtered nested object
          }
        } else if (Array.isArray(obj[key])) {
          if (obj[key].length > 0) acc[key] = obj[key]; // Include non-empty arrays
        } else if (obj[key] !== false && obj[key] !== "") {
          acc[key] = obj[key]; // Include values that are not default
        }
        return acc;
      }, {});
    };

    const filteredData = filterDefaultValues(formData);

    await addNew(filteredData);
  };
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);
  const renderAdditionalInputs = () => {
    switch (activeTab) {
      case "Residential":
        return (
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className=""
          >
            {/* All Residential */}
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
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
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
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
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
              <h3 className="text-lg font-light mb-2">
                Residential Availability
              </h3>
              <div className="flex flex-wrap">
                {[
                  "1 BHK",
                  "2 BHK",
                  "3 BHK",
                  "4 BHK",
                  "5 BHK",
                  "6 BHK",
                  "Above 6 BHK",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input type="checkbox" className="mr-2" /> {bhk}
                  </label>
                ))}
              </div>
            </div>
            {/* Facing */}
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
              <h3 className="text-lg font-light mb-2">Available For</h3>
              <div className="flex flex-wrap">
                {["FOR FAMILY", "FOR EXICUTIVE", "FOR BECHLORE"].map(
                  (direction) => (
                    <label key={direction} className="w-1/2 p-2">
                      <input type="checkbox" className="mr-2" /> {direction}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Facing */}
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
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
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
              <h3 className="text-lg font-light mb-2">
                Area (Sqft) - Min to Max
              </h3>
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
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
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
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="mb-6"
            >
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
          <div className="">
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
              <h3 className="text-xl font-light mb-2">
                Commercial Availability{" "}
              </h3>
              <div className="flex flex-wrap">
                {[
                  " Boss Cabin",
                  "Manager Cabin",
                  " Work Station",
                  "Pantry",
                  "Reception",
                  "Waiting Area",
                  "Car parking",
                ].map((bhk) => (
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
            <div className="">
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
                <h3 className="text-xl font-light mb-2">
                  Commercial Availability{" "}
                </h3>
                <div className="flex flex-wrap">
                  {[
                    " Boss Cabin",
                    "Manager Cabin",
                    " Work Station",
                    "Pantry",
                    "Reception",
                    "Waiting Area",
                    "Car parking",
                  ].map((bhk) => (
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
            <div className="">
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
        <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>

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
        <form
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          className=" max-w-5xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-xl "
        >
          {/* Personal Details */}
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="mb-6"
          >
            <h3 className="text-lg font-light mb-2">Personal Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <label className="block mb-2 text-sm">
                Role:
                <select
                  name="role"
                  value={formData.RequiredPersonRole}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Tenant">Tenant</option>
                  <option value="Agent">Agent</option>
                  <option value="Builder">Builder</option>
                </select>
              </label>

              <InputField
                type="text"
                name="RequiredPersonName"
                value={formData.RequiredPersonName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                variant={4}
                label={"Name:"}
              />

              <InputField
                type="text"
                name="RequiredPersonPhone"
                value={formData.RequiredPersonPhone}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                variant={4}
                label={"Mobile Number:"}
              />

              <InputField
                type="text"
                name="RequiredPersonEmail"
                value={formData.RequiredPersonEmail}
                onChange={handleInputChange}
                placeholder="Enter your email"
                variant={4}
                label={"Email:"}
              />
            </div>
          </div>
          {/* Requirements Property Details */}
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="mb-6 "
          >
            <h3 className="text-lg font-light mb-2">
              Requirements Property Details
            </h3>
            <div className="grid grid-cols-2 gap-2">
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
                <select className="block w-full mt-1 p-2 border rounded-md">
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </label>
            </div>
          </div>

          {/* Construction Status */}
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="mb-6 w-[50%]"
          >
            <h3 className="text-lg font-light mb-2">Construction Status</h3>

            <label className="block mb-2 text-sm">
              <select className="block w-full mt-1 p-2 rounded-md">
                <option value="new-launch">New Launch</option>
                <option value="under-construction">Under Construction</option>
                <option value="ready-to-move">Ready to Move</option>
                <option value="old-construction">Old Construction</option>
              </select>
            </label>
          </div>

          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}
        </form>
      </div>
    </>
  );
}

export default YourRequirements;
