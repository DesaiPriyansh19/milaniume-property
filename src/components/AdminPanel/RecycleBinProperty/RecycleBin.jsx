import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import RecycledProperty from "./RecycledProperty";
import {
  PropertyInitialData,
  deepMerge,
} from "../../../../utils/InitialStates";
import RecycledEnquires from "./RecycledEnquires";
import RecycledRequirements from "./RecycledRequirements";

export default function RecycleBin() {
  const [filter, setFilter] = useState({
    type: "verified",
    search: "",
    type: "property",
  });
  const baseUrl = `https://milaniumepropertybackend.vercel.app/api/${filter.type}/allprops/admin`;
  const { data, updateById, deleteById } = useApiData(baseUrl);
  const [editData, setEditData] = useState({ type: "View", id: null });
  const [formData, setFormData] = useState(PropertyInitialData);

  useEffect(() => {
    if (data) {
      setFormData((prevState) => deepMerge({ ...prevState }, data));
    }
  }, [data]);

  const filteredData = data.filter((property) => {
    const notInRecycleBin = property?.RecycleBin === true;

    const idMatched =
      !filter.search || property?._id?.toString().includes(filter.search);

    return notInRecycleBin && idMatched;
  });

  const handleEdit = (type, id) => {
    const selectedProperty = data.find((property) => property._id === id); // Filter data by ID
    if (selectedProperty) {
      setFormData({
        id: selectedProperty._id || "",
        PropertyName: selectedProperty?.PropertyName || "",
        PropertyType: selectedProperty?.PropertyType || [],
        PropertyStatus: selectedProperty?.PropertyStatus || "",
        ForSale:
          selectedProperty?.ForSale !== undefined
            ? selectedProperty?.ForSale
            : true, // Default true if undefined
        ForRent:
          selectedProperty?.ForRent !== undefined
            ? selectedProperty?.ForRent
            : false, // Default false if undefined
        Featured:
          selectedProperty?.Featured !== undefined
            ? selectedProperty?.Featured
            : false, // Default false if undefined
        Verified:
          selectedProperty?.Verified !== undefined
            ? selectedProperty?.Verified
            : false, // Default false if undefined
        Prices: selectedProperty?.Prices || {
          SalesPrice: "",
          RentPrice: "",
        },
        PropertyDetails: {
          Bedrooms: selectedProperty?.PropertyDetails?.Bedrooms || "",
          Bathrooms: selectedProperty?.PropertyDetails?.Bathrooms || "",
          Sqft: selectedProperty?.PropertyDetails?.Sqft || "",
        },
        Landmark: selectedProperty?.Landmark || "",
        Address: selectedProperty?.Address || "",
        PinCode: selectedProperty?.PinCode || "",
        City: selectedProperty?.City || "",
        ContactDetails: selectedProperty?.ContactDetails || {
          ContactEmail: "",
          ContactPhone: "",
        },
        PropertyPhotos: selectedProperty?.PropertyPhotos || [],
        AllResidential: {
          FlatApartment:
            selectedProperty?.AllResidential?.FlatApartment || false,
          IndependentBuilderFloor:
            selectedProperty?.AllResidential?.IndependentBuilderFloor || false,
          IndependentHouseVilla:
            selectedProperty?.AllResidential?.IndependentHouseVilla || false,
          ResidentialPlot:
            selectedProperty?.AllResidential?.ResidentialPlot || false,
          FarmHouse: selectedProperty?.AllResidential?.FarmHouse || false,
          Other: selectedProperty?.AllResidential?.Other || false,
        },
        AllCommercial: {
          ReadyToMoveOffices:
            selectedProperty?.AllCommercial?.ReadyToMoveOffices || false,
          BareShallOffices:
            selectedProperty?.AllCommercial?.BareShallOffices || false,
          ShopsRetail: selectedProperty?.AllCommercial?.ShopsRetail || false,
          CommercialInstLand:
            selectedProperty?.AllCommercial?.CommercialInstLand || false,
          Warehouse: selectedProperty?.AllCommercial?.Warehouse || false,
          ColdStorage: selectedProperty?.AllCommercial?.ColdStorage || false,
          Other: selectedProperty?.AllCommercial?.Other || false,
        },
        AllIndustrial: {
          WareHouse: selectedProperty?.AllIndustrial?.WareHouse || false,
          HeavyManufacturing:
            selectedProperty?.AllIndustrial?.HeavyManufacturing || false,
          LightManufacturing:
            selectedProperty?.AllIndustrial?.LightManufacturing || false,
          DistributionWarehouse:
            selectedProperty?.AllIndustrial?.DistributionWarehouse || false,
          GeneralWarehouse:
            selectedProperty?.AllIndustrial?.GeneralWarehouse || false,
          FlexSpace: selectedProperty?.AllIndustrial?.FlexSpace || false,
          ShowroomBuildings:
            selectedProperty?.AllIndustrial?.ShowroomBuildings || false,
          ResearchAndDevelopment:
            selectedProperty?.AllIndustrial?.ResearchAndDevelopment || false,
          DataCenter: selectedProperty?.AllIndustrial?.DataCenter || false,
        },
        AllPlotLand: {
          ResidentialPlot:
            selectedProperty?.AllPlotLand?.ResidentialPlot || false,
          CommercialPlot:
            selectedProperty?.AllPlotLand?.CommercialPlot || false,
          IndustrialPlot:
            selectedProperty?.AllPlotLand?.IndustrialPlot || false,
          AgriculturalLand:
            selectedProperty?.AllPlotLand?.AgriculturalLand || false,
          NonAgriculturalLand:
            selectedProperty?.AllPlotLand?.NonAgriculturalLand || false,
          WeekendVillaSite:
            selectedProperty?.AllPlotLand?.WeekendVillaSite || false,
        },
        ResidentialAvailabilityType: {
          LowRiseApartment:
            selectedProperty?.ResidentialAvailabilityType?.LowRiseApartment ||
            false,
          Bungalow:
            selectedProperty?.ResidentialAvailabilityType?.Bungalow || false,
          Penthouse:
            selectedProperty?.ResidentialAvailabilityType?.Penthouse || false,
          RowHouse:
            selectedProperty?.ResidentialAvailabilityType?.RowHouse || false,
          HighRiseApartment:
            selectedProperty?.ResidentialAvailabilityType?.HighRiseApartment ||
            false,
          WeekendVillas:
            selectedProperty?.ResidentialAvailabilityType?.WeekendVillas ||
            false,
          Tenament:
            selectedProperty?.ResidentialAvailabilityType?.Tenament || false,
          Building:
            selectedProperty?.ResidentialAvailabilityType?.Building || false,
        },
        BhkScheme: {
          oneBHK: selectedProperty?.BhkScheme?.oneBHK || false,
          twoBHK: selectedProperty?.BhkScheme?.twoBHK || false,
          threeBHK: selectedProperty?.BhkScheme?.threeBHK || false,
          fourBHK: selectedProperty?.BhkScheme?.fourBHK || false,
          fiveBHK: selectedProperty?.BhkScheme?.fiveBHK || false,
          sixBHK: selectedProperty?.BhkScheme?.sixBHK || false,
          aboveSixBHK: selectedProperty?.BhkScheme?.aboveSixBHK || false,
          duplex: selectedProperty?.BhkScheme?.duplex || false,
          pg: selectedProperty?.BhkScheme?.pg || false,
        },
        CommercialPropertyFeatures: {
          BossCabin:
            selectedProperty?.CommercialPropertyFeatures?.BossCabin || false,
          ManagerCabin:
            selectedProperty?.CommercialPropertyFeatures?.ManagerCabin || false,
          WorkStation:
            selectedProperty?.CommercialPropertyFeatures?.WorkStation || false,
          Pantry: selectedProperty?.CommercialPropertyFeatures?.Pantry || false,
          Reception:
            selectedProperty?.CommercialPropertyFeatures?.Reception || false,
          WaitingArea:
            selectedProperty?.CommercialPropertyFeatures?.WaitingArea || false,
          CarParking:
            selectedProperty?.CommercialPropertyFeatures?.CarParking || false,
        },
        Condition: {
          BuildingSite: selectedProperty?.Condition?.BuildingSite || false,
          StructuralFrameBuildingEnvelope:
            selectedProperty?.Condition?.StructuralFrameBuildingEnvelope ||
            false,
          Roofing: selectedProperty?.Condition?.Roofing || false,
          Plumbing: selectedProperty?.Condition?.Plumbing || false,
          Heating: selectedProperty?.Condition?.Heating || false,
          AirConditioningVentilation:
            selectedProperty?.Condition?.AirConditioningVentilation || false,
          Electrical: selectedProperty?.Condition?.Electrical || false,
          VerticalTransportation:
            selectedProperty?.Condition?.VerticalTransportation || false,
          LifeSafetyFireProtection:
            selectedProperty?.Condition?.LifeSafetyFireProtection || false,
          InteriorElements:
            selectedProperty?.Condition?.InteriorElements || false,
          FullyFurnished: selectedProperty?.Condition?.FullyFurnished || false,
          Furnished: selectedProperty?.Condition?.Furnished || false,
          SemiFurnished: selectedProperty?.Condition?.SemiFurnished || false,
          KitchenFix: selectedProperty?.Condition?.KitchenFix || false,
          FixFurnished: selectedProperty?.Condition?.FixFurnished || false,
          Unfurnished: selectedProperty?.Condition?.Unfurnished || false,
        },
        ResidentAvailable: {
          ForFamily: selectedProperty?.ResidentAvailable?.ForFamily || false,
          ForExecutive:
            selectedProperty?.ResidentAvailable?.ForExecutive || false,
          ForBachlore:
            selectedProperty?.ResidentAvailable?.ForBachlore || false,
        },
        Amenities: {
          WaterSupply247: selectedProperty?.Amenities?.WaterSupply247 || false,
          SeniorCitizenSitting:
            selectedProperty?.Amenities?.SeniorCitizenSitting || false,
          BanquetHall: selectedProperty?.Amenities?.BanquetHall || false,
          HomeTheatre: selectedProperty?.Amenities?.HomeTheatre || false,
          IndoorsGame: selectedProperty?.Amenities?.IndoorsGame || false,
          OutdoorsGame: selectedProperty?.Amenities?.OutdoorsGame || false,
          VisitorParking: selectedProperty?.Amenities?.VisitorParking || false,
          AllottedParking:
            selectedProperty?.Amenities?.AllottedParking || false,
          Lift: selectedProperty?.Amenities?.Lift || false,
          PowerBackup: selectedProperty?.Amenities?.PowerBackup || false,
          GasLine: selectedProperty?.Amenities?.GasLine || false,
          SwimmingPool: selectedProperty?.Amenities?.SwimmingPool || false,
          Garden: selectedProperty?.Amenities?.Garden || false,
          ChildrenPlayArea:
            selectedProperty?.Amenities?.ChildrenPlayArea || false,
          ClubHouse: selectedProperty?.Amenities?.ClubHouse || false,
          CCTV: selectedProperty?.Amenities?.CCTV || false,
        },
        Facing: {
          East: selectedProperty?.Facing?.East || false,
          North: selectedProperty?.Facing?.North || false,
          NorthEast: selectedProperty?.Facing?.NorthEast || false,
          NorthWest: selectedProperty?.Facing?.NorthWest || false,
          South: selectedProperty?.Facing?.South || false,
          SouthEast: selectedProperty?.Facing?.SouthEast || false,
          SouthWest: selectedProperty?.Facing?.SouthWest || false,
          West: selectedProperty?.Facing?.West || false,
        },
        PropertyDescription: selectedProperty?.PropertyDescription || "",
      });
    }
    setEditData({ type, id });
  };

  return (
    <>
      {editData.type === "View" && (
        <div className="flex items-center p-4 justify-between">
          <div>
            {" "}
            <p className="text-xl font-semibold uppercase text-[#E7C873] ">
              Recycle Bin
            </p>
            <p className=" text-sm text-gray-200">
              Your Recycle Property Over here
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => {
                  setFilter((prev) => ({ ...prev, search: e.target.value }));
                }}
                value={filter.search}
                placeholder="Enter ID:"
                className="p-1 pl-10 rounded w-full h-full bg-transparent border "
              ></input>
              <div className="absolute top-[15%] left-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="white"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                onChange={(e) => {
                  setFilter((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }));
                }}
                value={filter.type}
                className="appearance-none text-white bg-transparent rounded-sm outline-none border border-white h-8 pl-2 pr-8"
              >
                <option className="text-black" value={"property"}>
                  Property
                </option>
                <option className="text-black" value={"enquiry"}>
                  Enquires
                </option>
                <option className="text-black" value={"require"}>
                  Requirements
                </option>
              </select>
              <span
                style={{
                  transform: "rotate(180deg) translateY(50%)",
                  position: "absolute",
                  top: "38%",
                  right: "10px", // or whatever position you need
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 8.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
      {filter.type === "property" && (
        <RecycledProperty
          handleEdit={handleEdit}
          filteredData={filteredData}
          updateById={updateById}
          deleteById={deleteById}
          editData={editData}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {filter.type === "enquiry" && (
        <RecycledEnquires
          handleEdit={handleEdit}
          filteredData={filteredData}
          updateById={updateById}
          deleteById={deleteById}
          editData={editData}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {filter.type === "require" && (
        <RecycledRequirements
          handleEdit={handleEdit}
          filteredData={filteredData}
          updateById={updateById}
          deleteById={deleteById}
          editData={editData}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  );
}
