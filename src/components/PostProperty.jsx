import React, { useState, useEffect } from "react";
import bgImg from "../assets/Property2.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useApiData from "../../hooks/useApiData";
import UploadWidget from "./UploadWidget/UploadWidget";
import InputField from "../../utils/InputFields";
import axios from "axios";
function PostProperty() {
  const [activeTab, setActiveTab] = useState("Residential");
  const initialState = {
    PropertyName: "",
    PropertyType: "Residential",
    ForSale: true,
    ForRent: false,
    Featured: false,
    Verified: false,
    PropertyStatus: "",
    Prices: {
      SalesPrice: "",
      RentPrice: "",
    },
    PropertyDetails: {
      Bedrooms: "",
      Bathrooms: "",
      Sqft: "",
    },
    Landmark: "",
    Address: "",
    PinCode: "",
    City: "",
    ContactDetails: {
      ContactEmail: "",
      ContactPhone: "",
    },
    PropertyPhotos: [],
    AllResidential: {
      FlatApartment: false,
      IndependentBuilderFloor: false,
      IndependentHouseVilla: false,
      ResidentialPlot: false,
      FarmHouse: false,
      Other: false,
    },
    AllCommercial: {
      ReadyToMoveOffices: false,
      BareShallOffices: false,
      ShopsRetail: false,
      CommercialInstLand: false,
      Warehouse: false,
      ColdStorage: false,
      Other: false,
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
    AllPlotLand: {
      ResidentialPlot: false,
      CommercialPlot: false,
      IndustrialPlot: false,
      AgriculturalLand: false,
      NonAgriculturalLand: false,
      WeekendVillaSite: false,
    },
    ResidentialAvailabilityType: {
      LowRiseApartment: false,
      Bungalow: false,
      Penthouse: false,
      RowHouse: false,
      HighRiseApartment: false,
      WeekendVillas: false,
      Tenament: false,
      Building: false,
    },
    BhkScheme: {
      oneBHK: false,
      twoBHK: false,
      threeBHK: false,
      fourBHK: false,
      fiveBHK: false,
      sixBHK: false,
      aboveSixBHK: false,
      duplex: false,
      pg: false,
    },
    CommercialPropertyFeatures: {
      BossCabin: false,
      ManagerCabin: false,
      WorkStation: false,
      Pantry: false,
      Reception: false,
      WaitingArea: false,
      CarParking: false,
    },
    Condition: {
      BuildingSite: false,
      StructuralFrameBuildingEnvelope: false,
      Roofing: false,
      Plumbing: false,
      Heating: false,
      AirConditioningVentilation: false,
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
    ResidentAvailable: {
      ForFamily: false,
      ForExecutive: false,
      ForBachlore: false,
    },
    Amenities: {
      WaterSupply247: false,
      SeniorCitizenSitting: false,
      BanquetHall: false,
      HomeTheatre: false,
      IndoorsGame: false,
      OutdoorsGame: false,
      VisitorParking: false,
      AllottedParking: false,
      Lift: false,
      PowerBackup: false,
      GasLine: false,
      SwimmingPool: false,
      Garden: false,
      ChildrenPlayArea: false,
      ClubHouse: false,
      CCTV: false,
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
    PropertyDescription: "",
  };

  const [userData, setUserData] = useState({
    Role: "Owner",
    Fullname: "",
    Email: "",
    Phone: "",
    AltPhone: "",
    PostedProperties: [],
  });

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

  const handleMainPhotoChange = (index, value) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.PropertyPhotos];
      updatedPhotos[index] = value;
      return { ...prevData, PropertyPhotos: updatedPhotos };
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

    if (!Array.isArray(filteredData.PropertyPhotos)) {
      filteredData.PropertyPhotos = [];
    }

    try {
      const response = await axios.post(
        "https://milaniumepropertybackend.vercel.app/api/property/allprops/admin",
        filteredData
      );

      if (response.data) {
        const finalsubmitData = {
          ...userData,
          PostedProperties: [response.data.savedProperty._id],
        };
        try {
          await axios.post(
            "https://milaniumepropertybackend.vercel.app/api/userpostproperty",
            finalsubmitData
          );
          alert("Form has Been Submitted Wait For Devs to Approve");
          setFormData(initialState);
          setUserData({
            Role: "Owner",
            Fullname: "",
            Email: "",
            Phone: "",
            AltPhone: "",
            PostedProperties: [],
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);
  const renderAdditionalInputs = () => {
    switch (activeTab) {
      case "Residential":
        return (
          <div>
            {/* Property Types */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Property Type</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "Flat/ Apartment", value: "FlatApartment" },
                  {
                    label: "Independent/ Builder Floor",
                    value: "IndependentBuilderFloor",
                  },
                  {
                    label: "Independent House/ Villa",
                    value: "IndependentHouseVilla",
                  },
                  { label: "Residential Plot", value: "ResidentialPlot" },
                  { label: "Farm House", value: "FarmHouse" },
                  { label: "Other", value: "Other" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`AllResidential.${value}`}
                      value={formData.AllResidential[value] || false}
                      onChange={handleInputChange}
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Type */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Availability Type</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "Low Rise Apartment", value: "LowRiseApartment" },
                  { label: "Bungalow", value: "Bungalow" },
                  { label: "Penthouse", value: "Penthouse" },
                  { label: "Row House", value: "RowHouse" },
                  { label: "High Rise Apartment", value: "HighRiseApartment" },
                  { label: "Weekend Villas", value: "WeekendVillas" },
                  { label: "Tenament", value: "Tenament" },
                  { label: "Building", value: "Building" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`ResidentialAvailabilityType.${value}`}
                      checked={
                        formData.ResidentialAvailabilityType[value] || false
                      }
                      onChange={handleInputChange}
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Residential Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">
                Residential Availability
              </h3>
              <div className="flex flex-wrap">
                {[
                  { label: "1 BHK", value: "oneBHK" },
                  { label: "2 BHK", value: "twoBHK" },
                  { label: "3 BHK", value: "threeBHK" },
                  { label: "4 BHK", value: "fourBHK" },
                  { label: "5 BHK", value: "fiveBHK" },
                  { label: "6 BHK", value: "sixBHK" },
                  { label: "Above 6 BHK", value: "aboveSixBHK" },
                  { label: "Duplex", value: "duplex" },
                  { label: "PG", value: "pg" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`BhkScheme.${value}`}
                      checked={formData.BhkScheme[value] || false}
                      onChange={handleInputChange}
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Condition Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Residential Condition</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "Fully Furnished", value: "FullyFurnished" },
                  { label: "Furnished", value: "Furnished" },
                  { label: "Semi Furnished", value: "SemiFurnished" },
                  { label: "Kitchen-Fix", value: "KitchenFix" },
                  { label: "Fix-Furnished", value: "FixFurnished" },
                  { label: "Unfurnished", value: "Unfurnished" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`Condition.${value}`}
                      checked={formData.Condition[value] || false}
                      onChange={handleInputChange}
                    />{" "}
                    {label}
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
                      checked={formData.ResidentAvailable[value] || false}
                      onChange={handleInputChange}
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/*Available Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Amenities</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "24/7 Water Supply", value: "WaterSupply247" },
                  {
                    label: "Senior Citizen Sitting",
                    value: "SeniorCitizenSitting",
                  },
                  { label: "Banquet Hall", value: "BanquetHall" },
                  { label: "Home Theatre", value: "HomeTheatre" },
                  { label: "Indoors Game", value: "IndoorsGame" },
                  { label: "Outdoors Game", value: "OutdoorsGame" },
                  { label: "Visitor Parking", value: "VisitorParking" },
                  { label: "Allotted Parking", value: "AllottedParking" },
                  { label: "Lift", value: "Lift" },
                  { label: "Power Backup", value: "PowerBackup" },
                  { label: "Gas Line", value: "GasLine" },
                  { label: "Swimming Pool", value: "SwimmingPool" },
                  { label: "Garden", value: "Garden" },
                  { label: "Children Play Area", value: "ChildrenPlayArea" },
                  { label: "Club House", value: "ClubHouse" },
                  { label: "CCTV", value: "CCTV" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`Amenities.${value}`}
                      checked={formData.Amenities[value] || false}
                      onChange={handleInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/*Facing */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "East", value: "East" },
                  { label: "North", value: "North" },
                  { label: "North-East", value: "NorthEast" },
                  { label: "North-West", value: "NorthWest" },
                  { label: "South", value: "South" },
                  { label: "South-East", value: "SouthEast" },
                  { label: "South-West", value: "SouthWest" },
                  { label: "West", value: "West" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`Facing.${value}`}
                      checked={formData.Facing[value] || false}
                      onChange={handleInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

       
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
                  {
                    label: "Ready To Move Offices",
                    value: "ReadyToMoveOffices",
                  },
                  { label: "Bare Shall Offices", value: "BareShallOffices" },
                  { label: "Shops & Retail", value: "ShopsRetail" },
                  {
                    label: "Commercial / Inst. Land",
                    value: "CommercialInstLand",
                  },
                  { label: "Warehouse", value: "Warehouse" },
                  { label: "Cold Storage", value: "ColdStorage" },
                  { label: "Other", value: "Other" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`AllCommercial.${value}`}
                      checked={formData.AllCommercial[value] || false}
                      onChange={handleInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Commercial Availability */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">
                Commercial Availability
              </h3>
              <div className="flex flex-wrap">
                {[
                  { label: "Boss Cabin", value: "BossCabin" },
                  { label: "Manager Cabin", value: "ManagerCabin" },
                  { label: "Work Station", value: "WorkStation" },
                  { label: "Pantry", value: "Pantry" },
                  { label: "Reception", value: "Reception" },
                  { label: "Waiting Area", value: "WaitingArea" },
                  { label: "Car Parking", value: "CarParking" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`CommercialPropertyFeatures.${value}`}
                      checked={
                        formData.CommercialPropertyFeatures[value] || false
                      }
                      onChange={handleInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Amenities</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "Allotted Parking", value: "AllottedParking" },
                  { label: "Lift", value: "Lift" },
                  { label: "Power Backup", value: "PowerBackup" },
                  { label: "Garden", value: "Garden" },
                  { label: "CCTV", value: "CCTV" },
                  { label: "24/7 Water Supply", value: "WaterSupply247" },
                  { label: "Cafeteria", value: "Cafeteria" },
                  { label: "Visitor Parking", value: "VisitorParking" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`Amenities.${value}`}
                      checked={formData.Amenities[value] || false}
                      onChange={handleInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/*Facing */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Facing</h3>
              <div className="flex flex-wrap">
                {[
                  { label: "East", value: "East" },
                  { label: "North", value: "North" },
                  { label: "North-East", value: "NorthEast" },
                  { label: "North-West", value: "NorthWest" },
                  { label: "South", value: "South" },
                  { label: "South-East", value: "SouthEast" },
                  { label: "South-West", value: "SouthWest" },
                  { label: "West", value: "West" },
                ].map(({ label, value }) => (
                  <label key={value} className="w-1/2 p-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name={`Facing.${value}`}
                      checked={formData.Facing[value] || false}
                      onChange={handleInputChange}
                    />
                    {label}
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
                    { label: "Ware House", value: "WareHouse" },
                    {
                      label: "Heavy Manufacturing",
                      value: "HeavyManufacturing",
                    },
                    {
                      label: "Light Manufacturing",
                      value: "LightManufacturing",
                    },
                    {
                      label: "Distribution Warehouse",
                      value: "DistributionWarehouse",
                    },
                    { label: "General Warehouse", value: "GeneralWarehouse" },
                    { label: "Flex Space", value: "FlexSpace" },
                    { label: "Showroom Buildings", value: "ShowroomBuildings" },
                    {
                      label: "Research and Development",
                      value: "ResearchAndDevelopment",
                    },
                    { label: "Data Center", value: "DataCenter" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`AllIndustrial.${value}`}
                        checked={formData.AllIndustrial[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* condition */}
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Condition</h3>
                <div className="flex flex-wrap">
                  {[
                    { label: "Building Site", value: "BuildingSite" },
                    {
                      label: "Structural Frame & Building Envelope",
                      value: "StructuralFrameBuildingEnvelope",
                    },
                    { label: "Roofing", value: "Roofing" },
                    { label: "Plumbing", value: "Plumbing" },
                    { label: "Heating", value: "Heating" },
                    {
                      label: "Air Conditioning & Ventilation",
                      value: "AirConditioningVentilation",
                    },
                    { label: "Electrical", value: "Electrical" },
                    {
                      label: "Vertical Transportation (Elevators & Escalators)",
                      value: "VerticalTransportation",
                    },
                    {
                      label: "Life Safety / Fire Protection",
                      value: "LifeSafetyFireProtection",
                    },
                    { label: "Interior Elements", value: "InteriorElements" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`Condition.${value}`}
                        checked={formData.Condition[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/*Facing */}
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Facing</h3>
                <div className="flex flex-wrap">
                  {[
                    { label: "East", value: "East" },
                    { label: "North", value: "North" },
                    { label: "North-East", value: "NorthEast" },
                    { label: "North-West", value: "NorthWest" },
                    { label: "South", value: "South" },
                    { label: "South-East", value: "SouthEast" },
                    { label: "South-West", value: "SouthWest" },
                    { label: "West", value: "West" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`Facing.${value}`}
                        checked={formData.Facing[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/*Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Amenities</h3>
                <div className="flex flex-wrap">
                  {[
                    { label: "Allotted Parking", value: "AllottedParking" },
                    { label: "Lift", value: "Lift" },
                    { label: "Power Backup", value: "PowerBackup" },
                    { label: "CCTV", value: "CCTV" },
                    { label: "24/7 Water Supply", value: "WaterSupply247" },
                    { label: "Visitor Parking", value: "VisitorParking" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`Amenities.${value}`}
                        checked={formData.Amenities[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
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
            <div>
              {/* Property Types */}
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Property Type</h3>
                <div className="flex flex-wrap">
                  {[
                    { label: "Residential Plot", value: "ResidentialPlot" },
                    { label: "Commercial Plot", value: "CommercialPlot" },
                    { label: "Industrial Plot", value: "IndustrialPlot" },
                    { label: "Agriculture Land", value: "AgriculturalLand" },
                    {
                      label: "Non - Agriculture Land",
                      value: "NonAgriculturalLand",
                    },
                    { label: "Weekend Villa Site", value: "WeekendVillaSite" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`AllPlotLand.${value}`}
                        checked={formData.AllPlotLand[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/*Facing */}
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Facing</h3>
                <div className="flex flex-wrap">
                  {[
                    { label: "East", value: "East" },
                    { label: "North", value: "North" },
                    { label: "North-East", value: "NorthEast" },
                    { label: "North-West", value: "NorthWest" },
                    { label: "South", value: "South" },
                    { label: "South-East", value: "SouthEast" },
                    { label: "South-West", value: "SouthWest" },
                    { label: "West", value: "West" },
                  ].map(({ label, value }) => (
                    <label key={value} className="w-1/2 p-2">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name={`Facing.${value}`}
                        checked={formData.Facing[value] || false}
                        onChange={handleInputChange}
                      />
                      {label}
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
                  setActiveTab(tab);
                  setFormData((prev) => ({
                    ...prev,
                    PropertyType: activeTab,
                  }));
                }}
              >
                {tab}
              </li>
            )
          )}
        </ul>

        {/* Filter Form */}
        <form data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
          <div className="max-w-5xl mx-auto p-6 bg-[#eff9f7] rounded-md shadow-md">
            {/* Personal Details */}
            <div className="mb-6 ">
              <h3 className="text-lg font-light mb-2">Personal Details</h3>
              <div className="grid grid-cols-2 gap-2">
                <label className="block mb-2 text-sm md:text-lg">
                  Role:
                  <select
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        Role: e.target.value,
                      }));
                    }}
                    value={userData.Role}
                    className="block w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="Owner">Owner</option>
                    <option value="Agent">Agent</option>
                    <option value="Builder">Builder</option>
                  </select>
                </label>
                <label className="block mb-2 text-sm md:text-lg">
                  Full Name:
                  <input
                    type="text"
                    name="Fullname"
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        Fullname: e.target.value,
                      }));
                    }}
                    value={userData.Fullname}
                    placeholder="Enter your full name"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 text-sm md:text-lg">
                  Mobile Number:
                  <input
                    type="tel"
                    name="Phone"
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        Phone: e.target.value,
                      }));
                    }}
                    value={userData.Phone}
                    placeholder="Enter your mobile number"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 text-sm md:text-lg">
                  Alt. Mobile Number:
                  <input
                    type="tel"
                    name="AltPhone"
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        AltPhone: e.target.value,
                      }));
                    }}
                    value={userData.AltPhone}
                    placeholder="Enter an alternate mobile number"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 text-sm md:text-lg">
                  Your Email:
                  <input
                    type="email"
                    name="Email"
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        Email: e.target.value,
                      }));
                    }}
                    value={userData.Email}
                    placeholder="Enter your email"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
              </div>
            </div>

            {/* Post Property Details */}
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Post Property Details</h3>
              <div className="grid grid-cols-6 gap-2">
                <label className="block mb-2 col-span-2 text-sm md:text-lg">
                  Property Name:
                  <input
                    type="text"
                    name="PropertyName"
                    onChange={handleInputChange}
                    value={formData.PropertyName}
                    placeholder="Enter Property Name"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 col-span-2 text-sm md:text-lg">
                  Address:
                  <input
                    type="text"
                    name="Address"
                    onChange={handleInputChange}
                    value={formData.Address}
                    placeholder="Enter address"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block col-span-2 mb-2 text-sm md:text-lg">
                  City:
                  <input
                    type="text"
                    name="City"
                    onChange={handleInputChange}
                    value={formData.City}
                    placeholder="Enter city"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 col-span-3 text-sm md:text-lg">
                  Landmark:
                  <input
                    type="text"
                    name="Landmark"
                    onChange={handleInputChange}
                    value={formData.Landmark}
                    placeholder="Enter landmark"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block mb-2 col-span-3 text-sm md:text-lg">
                  Pincode:
                  <input
                    type="number"
                    name="PinCode"
                    onChange={handleInputChange}
                    value={formData.PinCode}
                    placeholder="Enter pincode"
                    className="block w-full mt-1 p-2 border rounded-md"
                  />
                </label>
                <label className="block col-span-3 mb-2 text-sm md:text-lg">
                  Rent or Sale:
                  <select
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        ForRent: selectedValue === "rent",
                        ForSale: selectedValue === "sale",
                        Prices: {
                          ...(prev.Prices || {}),
                          SalesPrice:
                            selectedValue === "rent"
                              ? ""
                              : prev.Prices.SalesPrice,
                          RentPrice:
                            selectedValue === "sale"
                              ? ""
                              : prev.Prices.RentPrice,
                        },
                      }));
                    }}
                    value={
                      formData.ForRent ? "rent" : formData.ForSale ? "sale" : ""
                    }
                    className="block  w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>
                  </select>
                </label>
                <label className="block col-span-3 mb-2 text-sm md:text-lg">
                  Property Status:
                  <select
                    name="PropertyStatus"
                    onChange={handleInputChange}
                    value={formData.PropertyStatus}
                    className="block w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="NewLaunch">New Launch</option>
                    <option value="UnderConstruction">
                      Under Construction
                    </option>
                    <option value="ReadyToMove">Ready to Move</option>
                    <option value="OldConstruction">Old Cunstruction</option>
                  </select>
                </label>{" "}
              </div>
            </div>

            {/* Dynamic Inputs */}
            {renderAdditionalInputs()}
            {/* Area, Price, Image Upload, Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h3 className="text-lg font-light mb-2">
                Area (Sqft) 
              </h3>
              <div className="flex  gap-4">
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.min"
                
                  placeholder={"Min"}
                  onChange={handleInputChange}
                  variant={4}
                />
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.max"
             
                  placeholder={"Max"}
                  onChange={handleInputChange}
                  variant={4}
                />
              </div>
            </div>
              <div>
              <h3 className="text-lg font-light mb-2">
                Area (Sqyd) 
              </h3>
              <div className="flex  gap-4">
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.min"
                
                  placeholder={"Min"}
                  onChange={handleInputChange}
                  variant={4}
                />
                <InputField
                  type="text"
                  name="RequiredPropertyDetails.RequiredAreaSqft.max"
             
                  placeholder={"Max"}
                  onChange={handleInputChange}
                  variant={4}
                />
              </div>
            </div>
              <div className="mb-6">
                <h3 className="text-lg font-light mb-2">Price</h3>
                <input
                  type="number"
                  name={`Prices.${
                    formData.ForRent === true ? "RentPrice" : "SalesPrice"
                  }`}
                  value={
                    formData.Prices[
                      formData.ForRent === true ? "RentPrice" : "SalesPrice"
                    ]
                  }
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="block w-full mt-1 p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Upload Images</h3>
              <section className="mb-4">
                {formData?.PropertyPhotos?.map((photo, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mb-4 w-full">
                      <InputField
                        label={``}
                        type="text"
                        name={`PropertyPhotos[${index}]`}
                        value={photo}
                        onChange={(e) =>
                          handleMainPhotoChange(index, e.target.value)
                        }
                        placeholder={`Main Photo URL ${index + 1}`}
                        variant={4}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedPhotos = [...formData.PropertyPhotos];
                        updatedPhotos.splice(index, 1);
                        setFormData((prevData) => ({
                          ...prevData,
                          PropertyPhotos: updatedPhotos,
                        }));
                      }}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <UploadWidget
                    uwConfig={{
                      cloudName: "Millinum",
                      uploadPreset: "millinum",
                      multiple: true,
                      maxImageFileSize: 2000000,
                      folder: "Property",
                    }}
                    setFormData={setFormData}
                  />
                </div>
              </section>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-light mb-2">Description</h3>
              <textarea
                onChange={handleInputChange}
                name="PropertyDescription"
                value={formData.PropertyDescription}
                placeholder="Enter a brief description"
                className="block w-full mt-1 p-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className=" w-full  bg-[#1F4B43] text-sm text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostProperty;
