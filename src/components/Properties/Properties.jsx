import React, { useState, useEffect } from "react";
import bgImg from "../../assets/pexels-clubhouseconvos-13620073.webp";
import PropertyCards from "./PropertyCards";
import { FiSearch } from "react-icons/fi"; // Import the search icon from React Icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useFetch from "../../../hooks/useFetch";
import SkeletonLoader from "../SkeletonLoader";
import FilterLogo from "../../../svg/Icon/FilterLogo/Index";
function Properties() {
  const [activeTab, setActiveTab] = useState("Residential");
  const [isModalOpen, setIsModalOpen] = useState(false); // Moved here
  const [mainData, setMainData] = useState([]);
  const { data, loading } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/property"
  );

  const [filterData, setFilterData] = useState({
    UserTypedArea: "",
    ResidentList: "",
    CommercialList: "",
    IndustrialList: "",
    PlotandLandList: "",
    SaleOrRent: "",
    Condition: "",
    AvailableFor: "",
    MinSqft: "",
    MaxSqft: "",
    MinBudget: "",
    MaxBudget: "",
    Bhk: "",
    selectedFeatures: [],
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFilterData((prev) => ({
      ...prev, // Spread the previous state to retain other keys
      selectedFeatures: checked
        ? [...prev.selectedFeatures, value] // Add the new value if checked
        : prev.selectedFeatures.filter((item) => item !== value), // Remove the value if unchecked
    }));
  };

  const handleFilterInput = (type, e) => {
    const selectedOption = e.target.value;

    setFilterData((prev) => {
      switch (type) {
        case "resident":
          return {
            ...prev,
            ResidentList: selectedOption,
            SaleOrRent: prev.SaleOrRent, // Retain the SaleOrRent filter
            CommercialList: "",
            IndustrialList: "",
            PlotandLandList: "",
            Condition: prev.Condition,
            AvailableFor: prev.AvailableFor,
            MinSqft: prev.MinSqft,
            MaxSqft: prev.MaxSqft,
            Bhk: prev.Bhk,
            selectedFeatures: [],
          };
        case "commercial":
          return {
            ...prev,
            CommercialList: selectedOption,
            SaleOrRent: prev.SaleOrRent,
            ResidentList: "",
            IndustrialList: "",
            PlotandLandList: "",
            Condition: prev.Condition,
            AvailableFor: "",
            MinSqft: prev.MinSqft,
            MaxSqft: prev.MaxSqft,
            Bhk: "",
            selectedFeatures: prev.selectedFeatures,
          };
        case "industrial":
          return {
            ...prev,
            IndustrialList: selectedOption,
            SaleOrRent: prev.SaleOrRent,
            ResidentList: "",
            CommercialList: "",
            PlotandLandList: "",
            Condition: "",
            AvailableFor: "",
            MinSqft: prev.MinSqft,
            MaxSqft: prev.MaxSqft,
            Bhk: "",
            selectedFeatures: [],
          };
        case "plotandland":
          return {
            ...prev,
            PlotandLandList: selectedOption,
            SaleOrRent: prev.SaleOrRent,
            ResidentList: "",
            CommercialList: "",
            IndustrialList: "",
            Condition: "",
            AvailableFor: "",
            MinSqft: prev.MinSqft,
            MaxSqft: prev.MaxSqft,
            Bhk: "",
            selectedFeatures: [],
          };
        case "saleOrRent":
          return {
            ...prev,
            SaleOrRent: selectedOption, // Update SaleOrRent filter for all categories
          };
        case "condition":
          return {
            ...prev,
            Condition: selectedOption, // Update SaleOrRent filter for all categories
          };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(filterData);

  useEffect(() => {
    if (data) {
      // Start by filtering based on activeTab
      let filteredData = data.filter((item) => item.PropertyType === activeTab);

      // Check which filter is active and apply it
      if (filterData.ResidentList) {
        filteredData = filteredData.filter(
          (item) =>
            item.ResidentialAvailabilityType &&
            item.ResidentialAvailabilityType[filterData.ResidentList]
        );
      } else if (filterData.CommercialList) {
        filteredData = filteredData.filter(
          (item) =>
            item.AllCommercial && item.AllCommercial[filterData.CommercialList]
        );
      } else if (filterData.IndustrialList) {
        filteredData = filteredData.filter(
          (item) =>
            item.AllIndustrial && item.AllIndustrial[filterData.IndustrialList]
        );
      } else if (filterData.PlotandLandList) {
        filteredData = filteredData.filter(
          (item) =>
            item.AllPlotLand && item.AllPlotLand[filterData.PlotandLandList]
        );
      } else if (filterData.Condition) {
        filteredData = filteredData.filter(
          (item) => item.Condition && item.Condition[filterData.Condition]
        );
      } else if (filterData.AvailableFor) {
        filteredData = filteredData.filter(
          (item) =>
            item.ResidentAvailable &&
            item.ResidentAvailable[filterData.AvailableFor]
        );
      } else if (filterData.MinSqft || filterData.MaxSqft) {
        filteredData = filteredData.filter(
          (item) =>
            parseFloat(item.PropertyDetails.Sqft) >= filterData.MinSqft &&
            parseFloat(item.PropertyDetails.Sqft) <= filterData.MaxSqft
        );
      } else if (filterData.MinBudget || filterData.MaxBudget) {
        filteredData = filteredData.filter((item) =>
          item.Prices.SalesPrice
            ? parseFloat(item.Prices.SalesPrice) >= filterData.MinBudget &&
              parseFloat(item.Prices.SalesPrice) <= filterData.MaxBudget
            : parseFloat(item.Prices.RentPrice) >= filterData.MinBudget &&
              parseFloat(item.Prices.RentPrice) <= filterData.MaxBudget
        );
      } else if (filterData.Bhk) {
        filteredData = filteredData.filter(
          (item) => item.BhkScheme && item.BhkScheme[filterData.Bhk]
        );
      } else if (filterData.UserTypedArea) {
        const searchTerms = filterData.UserTypedArea.toLowerCase().split(" "); // Split by spaces
        filteredData = filteredData.filter((item) =>
          searchTerms.every(
            (term) =>
              item.Landmark?.toLowerCase().includes(term) ||
              item.City?.toLowerCase().includes(term) ||
              item.PinCode?.toLowerCase().includes(term)
          )
        );
      }

      if (filterData.SaleOrRent) {
        filteredData = filteredData.filter((item) => {
          if (filterData.SaleOrRent === "Buy") {
            return item.ForSale === true;
          } else if (filterData.SaleOrRent === "Rent") {
            return item.ForRent === true;
          }
          return true; // Default case if filterData.SaleOrRent is invalid
        });
      }
      // Filter by selectedFeatures
      if (filterData.selectedFeatures.length > 0) {
        const featureMapping = {
          "BOSS CABIN": "BossCabin",
          "MANAGER CABIN": "ManagerCabin",
          "WORK STATION": "WorkStation",
          "CONFERENCE ROOM": "ConferenceRoom", // Add this key to the schema if necessary
          PANTRY: "Pantry",
          RECEPTION: "Reception",
          "WAITING AREA": "WaitingArea",
        };

        filteredData = filteredData.filter((item) =>
          filterData.selectedFeatures.every(
            (feature) =>
              item.CommercialPropertyFeatures?.[featureMapping[feature]]
          )
        );
      }

      // Update the main data
      setMainData(filteredData);
    }
  }, [activeTab, data, filterData]);

  const renderAdditionalInputs = () => {
    // Function to render dynamic filters
    const renderFilters = () => {
      switch (activeTab) {
        case "Residential":
          return (
            <>
              <div className=" w-full mb-4 mt-4 text-sm grid grid-cols-2   items-center justify-start ">
                {/* no1 */}
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Search
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setFilterData((prev) => ({
                        ...prev,
                        UserTypedArea: e.target.value,
                      }));
                    }}
                    value={filterData.UserTypedArea}
                    placeholder="ENTER PROPERTY AREA"
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  />
                </div>
                {/* no2 */}
                <div className="mb-4 text-sm w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Residential Type
                  </label>
                  <select
                    onChange={(e) => {
                      handleFilterInput("resident", e);
                    }}
                    className="w-full sm:w-52  p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={"LowRiseApartment"}>
                      LOW RISE APARTMENT
                    </option>
                    <option value={"HighRiseApartment"}>
                      HIGH RISE APARTMENT
                    </option>
                    <option value={"Bungalow"}>BUNGALOW</option>
                    <option value={"WeekendVillas"}>VILLAS</option>
                    <option value={"Tenament"}>TENAMENT</option>
                    <option value={"RowHouse"}>ROWHOUSE</option>
                    <option value={"FarmHouse"}>FARM HOUSE</option>
                  </select>
                </div>
                {/* no3 */}
                <div className="w-full mb-4">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sale/Rent
                  </label>
                  <select
                    onChange={(e) => handleFilterInput("saleOrRent", e)}
                    value={filterData.SaleOrRent}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={""}>Select Option</option>
                    <option value={"Buy"}>Buy</option>
                    <option value={"Rent"}>Rent</option>
                  </select>
                </div>
                {/* no4 */}
                <div className="mb-4 text-sm w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Residential Availability
                  </label>
                  <select
                    onChange={(e) => {
                      setFilterData((prev) => ({
                        ...prev,
                        Bhk: e.target.value,
                      }));
                    }}
                    value={filterData.Bhk}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={""}>Select BHK</option>
                    <option value={"oneBHK"}>1 BHK</option>
                    <option value={"twoBHK"}>2 BHK</option>
                    <option value={"threeBHK"}>3 BHK</option>
                    <option value={"fourBHK"}>4 BHK</option>
                    <option value={"fiveBHK"}>5 BHK</option>
                    <option value={"sixBHK"}>6 BHK</option>
                    <option value={"aboveSixBHK"}>Above 6 BHK</option>
                    <option value={"duplex"}>Duplex</option>
                    <option value={"pg"}>PG</option>
                  </select>
                </div>
                {/* no5 */}
                <div className="mb-4 text-sm w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Residential Condition
                  </label>
                  <select
                    onChange={(e) => handleFilterInput("condition", e)}
                    value={filterData.Condition}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={"FullyFurnished"}>FULLY FURNISHED</option>
                    <option value={"Furnished"}>FURNISHED</option>
                    <option value={"SemiFurnished"}>SEMI FURNISHED</option>
                    <option value={"FixFurnished"}>FIX-FURNISHED</option>
                    <option value={"KitchenFix"}>KITCHEN FIX</option>
                    <option value={"Unfurnished"}>UNFURNISHED</option>
                  </select>
                </div>
                {/* no6 */}
                <div className="mb-4 text-sm w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Available For
                  </label>
                  <select
                    onChange={(e) => {
                      setFilterData((prev) => ({
                        ...prev,
                        Condition: e.target.value,
                      }));
                    }}
                    value={filterData.Condition}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={"ForFamily"}>FOR FAMILY</option>
                    <option value={"ForExecutive"}>FOR EXECUTIVE</option>
                    <option value={"ForBachlore"}>FOR BACHELOR</option>
                  </select>
                </div>
                {/* no8 */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sqft/Sqyd
                  </label>
                  <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MinSqft}
                      placeholder="min"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MaxSqft}
                      placeholder="max"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                  </span>
                </div>
                {/* no7 */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Budget
                  </label>
                  <span className=" p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MinBudget}
                      placeholder="min"
                      className="w-full sm:w-[40%]  p-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MaxBudget}
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
              <div className="mb-4 mx-4 sm:mx-6  mt-4 text-sm grid grid-cols-1 sm:grid-cols-2  gap-5 items-start justify-start ">
                {/* Search */}
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Search
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setFilterData((prev) => ({
                        ...prev,
                        UserTypedArea: e.target.value,
                      }));
                    }}
                    value={filterData.UserTypedArea}
                    placeholder="ENTER PROPERTY AREA"
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  />
                </div>

                {/* Commercial Availability */}
                <div className="mb-4 text-sm">
                  <label className="block mb-2 text-sm text-gray-400">
                    Commercial Availability
                  </label>
                  <select
                    onChange={(e) => {
                      handleFilterInput("commercial", e);
                    }}
                    value={filterData.CommercialList}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg tex-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value="">Select Option</option>
                    <option value={"Office"}>OFFICE</option>
                    <option value={"Shop"}>SHOP</option>
                    <option value={"CoWorkingSpace"}>CO WORKING SPACE</option>
                    <option value={"ReadyToMoveOffices"}>
                      READY TO MOVE OFFICE
                    </option>
                    <option value={"Warehouse"}>WAREHOUSE</option>
                    <option value={"ColdStorage"}>COLD STORAGE</option>
                    <option value={"Other"}>OTHER</option>
                  </select>
                </div>

                {/* Sale/Rent */}
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sale/Rent
                  </label>
                  <select
                    onChange={(e) => handleFilterInput("saleOrRent", e)}
                    value={filterData.SaleOrRent}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={""}>Select Option</option>
                    <option value={"Buy"}>Buy</option>
                    <option value={"Rent"}>Rent</option>
                  </select>
                </div>

                {/* Commercial Condition */}
                <div className="mb-4 text-sm">
                  <label className="block mb-2 text-sm text-gray-400">
                    Commercial Condition
                  </label>
                  <select
                    onChange={(e) => handleFilterInput("condition", e)}
                    value={filterData.Condition}
                    className="w-full sm:w-52 p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={"FullyFurnished"}>FULLY FURNISHED</option>
                    <option value={"Furnished"}>FURNISHED</option>
                    <option value={"SemiFurnished"}>SEMI FURNISHED</option>
                    <option value={"FixFurnished"}>FIX-FURNISHED</option>
                    <option value={"KitchenFix"}>KITCHEN FIX</option>
                    <option value={"Unfurnished"}>UNFURNISHED</option>
                  </select>
                </div>

                {/* Sqft/Sqyd */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sqft/Sqyd
                  </label>
                  <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MinSqft}
                      placeholder="min"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MaxSqft}
                      placeholder="max"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                  </span>
                </div>

                {/* Budget */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Budget
                  </label>
                  <span className=" p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MinBudget}
                      placeholder="min"
                      className="w-full sm:w-[40%]  p-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MaxBudget}
                      placeholder="max"
                      className="w-full sm:w-[40%] p-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                  </span>
                </div>
              </div>
              {/* Commercial Availability Type */}
              <div className="mb-4 text-sm w-ful sm:w-[90%] md:w-[75%] mx-auto max-w-screen-lg">
                <label className="block mb-2 text-sm text-gray-400">
                  Commercial Availability Type
                </label>
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
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={filterData.selectedFeatures.includes(item)}
                        className="form-checkbox text-[#1F4B43]"
                        value={item}
                      />
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
                  <label className="block mb-2 text-sm text-gray-500">
                    Search
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setFilterData((prev) => ({
                        ...prev,
                        UserTypedArea: e.target.value,
                      }));
                    }}
                    value={filterData.UserTypedArea}
                    placeholder="Search Area"
                    className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  />
                </div>

                {/* Industrial Type */}
                <div className="mb-4 text-sm">
                  <label className="block mb-2 text-sm text-gray-500">
                    Industrial Type
                  </label>
                  <select
                    onChange={(e) => {
                      handleFilterInput("industrial", e);
                    }}
                    value={filterData.IndustrialList}
                    className="w-full p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value="">Select Industrial Type</option>
                    <option value={"WareHouse"}>Ware House</option>
                    <option value={"HeavyManufacturing"}>
                      Heavy Manufacturing
                    </option>
                    <option value={"LightManufacturing"}>
                      Light Manufacturing
                    </option>
                    <option value={"DistributionWarehouse"}>
                      Distribution Warehouse
                    </option>
                    <option value={"GeneralWarehouse"}>
                      General Warehouse
                    </option>
                    <option value={"FlexSpace"}>Flex Space</option>
                    <option value={"ShowroomBuildings"}>
                      Showroom Buildings
                    </option>
                    <option value={"ResearchAndDevelopment"}>
                      Research and Development
                    </option>
                    <option value={"DataCenter"}>Data Center</option>
                  </select>
                </div>

                {/* Rent/Buy */}
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sale/Rent
                  </label>
                  <select
                    onChange={(e) => handleFilterInput("saleOrRent", e)}
                    value={filterData.SaleOrRent}
                    className="w-full  p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                  >
                    <option value={""}>Select Option</option>
                    <option value={"Buy"}>Buy</option>
                    <option value={"Rent"}>Rent</option>
                  </select>
                </div>

                {/* Sqft/Sqyd */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Sqft/Sqyd
                  </label>
                  <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MinSqft}
                      placeholder="min"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxSqft: e.target.value,
                        }));
                      }}
                      value={filterData.MaxSqft}
                      placeholder="max"
                      className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                  </span>
                </div>

                {/* Budget */}
                <div className="mb-4 text-sm w-full sm:max-w-52">
                  <label className="block mb-2 text-sm text-gray-500">
                    Budget
                  </label>
                  <span className=" p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MinBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MinBudget}
                      placeholder="min"
                      className="w-full sm:w-[40%]  p-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                    <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                      To
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          MaxBudget: e.target.value,
                        }));
                      }}
                      value={filterData.MaxBudget}
                      placeholder="max"
                      className="w-full sm:w-[40%] p-2 text-sm placeholder:text-[#1F4B43] text-center"
                    />
                  </span>
                </div>
              </div>
            </>
          );

        case "Agricultural Plot":
          return (
            <>
              <>
                <div className="mb-4 mx-4 mt-4 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-start">
                  {/* Search */}
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-gray-500">
                      Search
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setFilterData((prev) => ({
                          ...prev,
                          UserTypedArea: e.target.value,
                        }));
                      }}
                      value={filterData.UserTypedArea}
                      placeholder="Search Area"
                      className="w-full p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                    />
                  </div>

                  {/* Plot and land */}
                  <div className="mb-4 text-sm">
                    <label className="block mb-2 text-sm text-gray-500">
                      Type
                    </label>
                    <select
                      onChange={(e) => {
                        handleFilterInput("plotandland", e);
                      }}
                      className="w-full p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
                    >
                      <option value="">Select Plot</option>
                      <option value={"ResidentialPlot"}>
                        Residential Plot
                      </option>
                      <option value={"CommercialPlot"}>Commercial Plot</option>
                      <option value={"IndustrialPlot"}>Industrial Plot</option>
                      <option value={"AgriculturalLand"}>
                        Agricultural Land
                      </option>
                      <option value={"NonAgriculturalLand"}>
                        Non Agricultural Land
                      </option>
                      <option value={"WeekendVillaSite"}>
                        Weekend Villa Site
                      </option>
                    </select>
                  </div>

                  {/* Rent/Buy */}
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-gray-500">
                      Sale/Rent
                    </label>
                    <select
                      onChange={(e) => handleFilterInput("saleOrRent", e)}
                      value={filterData.SaleOrRent}
                      className="w-full sm:w-auto  p-2 border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]"
                    >
                      <option value={""}>Select Option</option>
                      <option value={"Buy"}>Buy</option>
                      <option value={"Rent"}>Rent</option>
                    </select>
                  </div>

                  {/* Sqft/Sqyd */}
                  <div className="mb-4 text-sm w-full sm:max-w-52">
                    <label className="block mb-2 text-sm text-gray-500">
                      Sqft/Sqyd
                    </label>
                    <span className="p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                      <input
                        type="number"
                        onChange={(e) => {
                          setFilterData((prev) => ({
                            ...prev,
                            MinSqft: e.target.value,
                          }));
                        }}
                        value={filterData.MinSqft}
                        placeholder="min"
                        className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                      />
                      <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                        To
                      </label>
                      <input
                        type="number"
                        onChange={(e) => {
                          setFilterData((prev) => ({
                            ...prev,
                            MaxSqft: e.target.value,
                          }));
                        }}
                        value={filterData.MaxSqft}
                        placeholder="max"
                        className="w-full sm:w-[40%] py-2 text-sm placeholder:text-[#1F4B43] text-center"
                      />
                    </span>
                  </div>

                  {/* Budget */}
                  <div className="mb-4 text-sm w-full sm:max-w-52">
                    <label className="block mb-2 text-sm text-gray-500">
                      Budget
                    </label>
                    <span className=" p-[2px] sm:p-0 flex flex-row justify-center items-center rounded-lg border-[1.5px] border-[#1F4B43]">
                      <input
                        type="number"
                        onChange={(e) => {
                          setFilterData((prev) => ({
                            ...prev,
                            MinBudget: e.target.value,
                          }));
                        }}
                        value={filterData.MinBudget}
                        placeholder="min"
                        className="w-full sm:w-[40%]  p-2 text-sm placeholder:text-[#1F4B43] text-center"
                      />
                      <label className="block w-[10%] mx-1 text-sm text-[#1F4B43]">
                        To
                      </label>
                      <input
                        type="number"
                        onChange={(e) => {
                          setFilterData((prev) => ({
                            ...prev,
                            MaxBudget: e.target.value,
                          }));
                        }}
                        value={filterData.MaxBudget}
                        placeholder="max"
                        className="w-full sm:w-[40%] p-2 text-sm placeholder:text-[#1F4B43] text-center"
                      />
                    </span>
                  </div>
                </div>
              </>
            </>
          );

        default:
          return null;
      }
    };

    return (
      <div>
        {/* Tabs */}
        <div className=" hidden gap-4  mx-auto">
          {["Residential", "Commercial", "Industrial", "Agricultural Plot"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border hidden rounded-lg ${
                  activeTab === tab
                    ? "bg-[#1F4B43] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="w-full flex justify-center items-center">
          {" "}
          {/* Filter Button */}
          <button
            type="button"
            onClick={openModal}
            className="sm:px-9 xl:px-11 w-full sm:w-auto  flex items-center justify-center  py-2 text-sm xl:text-lg bg-[#1F4B43] text-white rounded-lg"
          >
            <span className="mr-1">
              <FiSearch className="" /> {/* Search icon */}
            </span>
            Search & Filter{" "}
            <span className="mx-1">
              <FilterLogo />
            </span>
          </button>
        </div>
        {/* Filter Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-[50%] overflow-y-auto max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 float-right text-xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Filters
              </h2>

              {/* Dynamic Filters */}
              <div className="text-sm  gap-4">{renderFilters()}</div>

              {/* Apply Filters Button */}
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-[#1F4B43] text-white rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="relative w-full mb-0 pb-0">
        {/* Background Image with Blur */}
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-[500px] sm:h-[500px] md:h-[600px] object-cover object-top filter blur-[0px]"
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
          {["Residential", "Commercial", "Industrial", "Agricultural Plot"].map(
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
          {/* Dynamic Inputs */}
          {renderAdditionalInputs()}
        </form>
      </div>

      <div className=" w-[90%] mx-auto text-start px-4 mb-2 font-extralight ">
        <p
          className="text-[.7rem] w-auto rounded-lg text-gray-500 
       border-gray-400"
        >
          Results {mainData?.length} Properties
        </p>
      </div>

      {/* Show skeleton loader when loading */}
      {loading ? <SkeletonLoader /> : <PropertyCards data={mainData} />}
    </>
  );
}

export default Properties;
