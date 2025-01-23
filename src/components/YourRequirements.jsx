import React, { useState, useEffect } from "react";
import bgImg from "../assets/Propery3.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useApiData from "../../hooks/useApiData";
import InputField from "../../utils/InputFields";
function YourRequirements() {
  const initialState = {
    RequiredPersonRole: "Buyer",
    RequiredPersonName: "",
    RequiredPersonPhone: "",
    RequiredPersonEmail: "",
    RequiredPropertyDetails: {
      RequiredPropertyType: "Residential",
      RequiredAreaSqft: {
        max: "",
        min: "",
      },
      RequiredAreaSqyd: {
        max: "",
        min: "",
      },
      RequiredBudget: {
        max: "",
        min: "",
      },
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
      "Boss Cabin": false,
      "Manager Cabin": false,
      "Work Station": false,
      Pantry: false,
      Reception: false,
      "Waiting Area": false,
      "Car Parking": false,
    },
    AllIndustrial: {
      "Ware House": false,
      "Heavy Manufacturing": false,
      "Light Manufacturing": false,
      "Distribution Warehouse": false,
      "General Warehouse": false,
      "Flex Space": false,
      "Showroom Buildings": false,
      "Research And Development": false,
      "Data Center": false,
    },
    AllPlotAndLand: {
      "Residential Plot": false,
      "Commercial Plot": false,
      "Industrial Plot": false,
      "Agriculture Land": false,
      "Non - Agriculture Land": false,
      "Project Land": false,
    },
    Condition: {
      "Building Site": false,
      "Structural Frame & Building Envelope": false,
      "Semi Furnished": false,
      Roofing: false,
      Plumbing: false,
      Heating: false,
      "Air Conditioning & Ventilation": false,
      Electrical: false,
      "Vertical Transportation (Elevators & Escalators)": false,
      "Life Safety / Fire Protection": false,
      "Interior Elements": false,
      "Fully Furnished": false,
      Furnished: false,
      "Semi Furnished": false,
      "Kitchen Fix": false,
      "Fix Furnished": false,
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
      "FOR FAMILY": false,
      "FOR EXICUTIVE": false,
      "FOR BECHLORE": false,
    },
    Facing: {
      East: false,
      North: false,
      "North-East": false,
      "North-West": false,
      South: false,
      "South-East": false,
      "South-West": false,
      West: false,
    },
  };
  const [activeTab, setActiveTab] = useState("Residential");
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/require";
  const { addNew } = useApiData(baseUrl);

  const [formData, setFormData] = useState(initialState);

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
    setFormData(initialState);
    console.log("Submmited Data-", filteredData);
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
                    <input
                      name={`AllResidential.${type}`}
                      value={formData.AllResidential[type]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {type}
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
                  "Kitchen Fix",
                  "Fix Furnished",
                  "Unfurnished",
                ].map((condition) => (
                  <label key={condition} className="w-1/2 p-2">
                    <input
                      name={`Condition.${condition}`}
                      value={formData.Condition[condition]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {condition}
                  </label>
                ))}
              </div>
            </div>
            {/*Available Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Available For</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "FOR FAMILY", value: "ForFamily" },
                  { label: "FOR EXECUTIVE", value: "ForExecutive" },
                  { label: "FOR BACHLORE", value: "ForBachlore" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`ResidentAvailable.${value}`}
                    />{" "}
                    {label}
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
                  "1 Bhk",
                  "2 Bhk",
                  "3 Bhk",
                  "4 Bhk",
                  "5 Bhk",
                  "6 Bhk",
                  "Above 6Bhk",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input
                      name={`ResidentialAvailability.${bhk}`}
                      value={formData.ResidentialAvailability[bhk]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {bhk}
                  </label>
                ))}
              </div>
            </div>
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
                  "Shop",
                  "Showroom",
                  "Co Working Space",
                  "Ready to Move Offices",
                  "Warehouse",
                  "Cold Storage",
                  "Other",
                ].map((type) => (
                  <label key={type} className="w-1/2 p-2">
                    <input
                      name={`AllCommercial.${type}`}
                      value={formData.AllCommercial[type]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {type}
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
                  "Fix Furnished",
                  "Unfurnished",
                ].map((condition) => (
                  <label key={condition} className="w-1/2 p-2">
                    <input
                      name={`Condition.${condition}`}
                      value={formData.Condition[condition]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {condition}
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
                  "Boss Cabin",
                  "Manager Cabin",
                  "Work Station",
                  "Pantry",
                  "Reception",
                  "Waiting Area",
                  "Car parking",
                ].map((bhk) => (
                  <label key={bhk} className="w-1/2 p-2">
                    <input
                      name={`CommercialAvailability.${bhk}`}
                      value={formData.CommercialAvailability[bhk]}
                      onClick={handleInputChange}
                      type="checkbox"
                      className="mr-2"
                    />{" "}
                    {bhk}
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
                      <input
                        name={`AllIndustrial.${type}`}
                        value={formData.AllIndustrial[type]}
                        onClick={handleInputChange}
                        type="checkbox"
                        className="mr-2"
                      />{" "}
                      {type}
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
                    "Roofing",
                    "Plumbing",
                    "Heating",
                    "Air Conditioning & Ventilation",
                    "Electrical",
                    "Vertical Transportation (Elevators & Escalators)",
                    "Life Safety / Fire Protection",
                    "Interior Elements",
                  ].map((condition) => (
                    <label key={condition} className="w-1/2 p-2">
                      <input
                        name={`Condition.${condition}`}
                        value={formData.Condition[condition]}
                        onClick={handleInputChange}
                        type="checkbox"
                        className="mr-2"
                      />{" "}
                      {condition}
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
                    "Boss Cabin",
                    "Manager Cabin",
                    "Work Station",
                    "Pantry",
                    "Reception",
                    "Waiting Area",
                    "Car parking",
                  ].map((bhk) => (
                    <label key={bhk} className="w-1/2 p-2">
                      <input
                        name={`CommercialAvailability.${bhk}`}
                        value={formData.CommercialAvailability[bhk]}
                        onClick={handleInputChange}
                        type="checkbox"
                        className="mr-2"
                      />{" "}
                      {bhk}
                    </label>
                  ))}
                </div>
              </div>
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
                    "Non - Agriculture Land",
                    "Project Land",
                  ].map((type) => (
                    <label key={type} className="w-1/2 p-2">
                      <input
                        name={`AllPlotAndLand.${type}`}
                        value={formData.AllPlotAndLand[type]}
                        onClick={handleInputChange}
                        type="checkbox"
                        className="mr-2"
                      />{" "}
                      {type}
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
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    RequiredPropertyType: activeTab,
                  }));
                  setActiveTab(tab);
                }}
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
                  name="RequiredPersonRole"
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
                Area:
                <input
                  type="text"
                  name="RequiredPropertyDetails.RequirementArea"
                  value={formData.RequiredPropertyDetails.RequirementArea}
                  onChange={handleInputChange}
                  placeholder="Enter area/location"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </label>

              <label className="block mb-2 text-sm">
                Rent or Buy:
                <select
                  name="RequiredPropertyDetails.RequiredPropertySellOrRent"
                  value={
                    formData.RequiredPropertyDetails.RequiredPropertySellOrRent
                  }
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border rounded-md"
                >
                  <option value="Rent">Rent</option>
                  <option value="Buy">Buy</option>
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
              <select
                name="RequiredPropertyDetails.RequiredConstructionStatus"
                value={
                  formData.RequiredPropertyDetails.RequiredConstructionStatus
                }
                onChange={handleInputChange}
                className="block w-full mt-1 p-2 rounded-md"
              >
                <option value="New Launch">New Launch</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Old Construction">Old Construction</option>
              </select>
            </label>
          </div>

          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}

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
                "North-East",
                "North-West",
                "South",
                "South-East",
                "South-West",
                "West",
              ].map((direction) => (
                <label key={direction} className="w-1/2 p-2">
                  <input
                    name={`Facing.${direction}`}
                    value={formData.Facing[direction]}
                    onClick={handleInputChange}
                    type="checkbox"
                    className="mr-2"
                  />{" "}
                  {direction}
                </label>
              ))}
            </div>
          </div>
          {/* Area - Min to Max */}
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="mb-6 w-full grid grid-cols-1 sm:grid-cols-2"
          >
            <div className="mb-2 md:mb-4">
              <h3 className="text-lg font-light mb-2 ">
                Area (Sqft) - Min to Max
              </h3>
              <div className="flex  gap-4">
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.min"
                  value={formData.RequiredPropertyDetails?.RequiredAreaSqft?.min || ""}
                  placeholder={"Min"}
                  onChange={handleInputChange}
                  variant={4}
                />
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.max"
                  value={formData.RequiredPropertyDetails.RequiredAreaSqft.max}
                  placeholder={"Max"}
                  onChange={handleInputChange}
                  variant={4}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-2">
                Area (Sqyd) - Min to Max
              </h3>
              <div className="flex  gap-4">
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqyd.min"
                  value={formData.RequiredPropertyDetails.RequiredAreaSqyd.min}
                  placeholder={"Min"}
                  onChange={handleInputChange}
                  variant={4}
                />
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqyd.max"
                  value={formData.RequiredPropertyDetails.RequiredAreaSqyd.max}
                  placeholder={"Max"}
                  onChange={handleInputChange}
                  variant={4}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-2">Budget - Min to Max</h3>
              <div className="flex gap-4">
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredBudget.min"
                  value={formData.RequiredPropertyDetails.RequiredBudget.min}
                  placeholder={"Min"}
                  onChange={handleInputChange}
                  variant={4}
                />
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredBudget.max"
                  value={formData.RequiredPropertyDetails.RequiredBudget.max}
                  placeholder={"Max"}
                  onChange={handleInputChange}
                  variant={4}
                />
              </div>
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

            <InputField
              type="textarea"
              name="RequiredPropertyDetails.RequiredDescription"
              placeholder="Enter a brief description"
              value={formData.RequiredPropertyDetails.RequiredDescription}
              onChange={handleInputChange}
              required={true}
              variant={4}
            />
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full  bg-[#1F4B43] text-sm  text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default YourRequirements;
