import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import DeleteOrRecoverProperty from "./DeleteOrRecoverProperty";

export default function RecycleBinProperty() {
  const baseUrl =
    "https://milaniumepropertybackend.vercel.app/api/property/allprops/admin";
  const { data, updateById, deleteById } = useApiData(baseUrl);
  const [editData, setEditData] = useState({ type: "View", id: null });
  const [filter, setFilter] = useState({ type: "verified", search: "" });
  const [formData, setFormData] = useState({
    id: "",
    PropertyName: "",
    PropertyType: [],
    PropertyStatus: "",
    ForSale: true,
    ForRent: false,
    Featured: false,
    Verified: false,
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
  });

  useEffect(() => {
    if (data) {
      setFormData({
        PropertyName: data?.PropertyName || "",
        PropertyType: data?.PropertyType || [],
        PropertyStatus: data?.PropertyStatus || "",
        ForSale: data?.ForSale || true,
        ForRent: data?.ForRent || false,
        Featured: data?.Featured || false,
        Verified: data?.Verified || false,
        Prices: data?.Prices || {
          SalesPrice: "",
          RentPrice: "",
        },
        PropertyDetails: {
          Bedrooms: data?.PropertyDetails?.Bedrooms || "",
          Bathrooms: data?.PropertyDetails?.Bathrooms || "",
          Sqft: data?.PropertyDetails?.Sqft || "",
        },
        Area: data?.Area || "",
        Location: data?.Location || "",
        Landmark: data?.Landmark || "",
        Address: data?.Address || "",
        PinCode: data?.PinCode || "",
        City: data?.City || "",
        ContactDetails: data?.ContactDetails || {
          ContactEmail: "",
          ContactPhone: "",
        },
        PropertyPhotos: data?.PropertyPhotos || [],
        AllResidential: {
          FlatApartment: data?.AllResidential?.FlatApartment || false,
          IndependentBuilderFloor:
            data?.AllResidential?.IndependentBuilderFloor || false,
          IndependentHouseVilla:
            data?.AllResidential?.IndependentHouseVilla || false,
          ResidentialPlot: data?.AllResidential?.ResidentialPlot || false,
          FarmHouse: data?.AllResidential?.FarmHouse || false,
          Other: data?.AllResidential?.Other || false,
        },
        AllCommercial: {
          ReadyToMoveOffices: data?.AllCommercial?.ReadyToMoveOffices || false,
          BareShallOffices: data?.AllCommercial?.BareShallOffices || false,
          ShopsRetail: data?.AllCommercial?.ShopsRetail || false,
          CommercialInstLand: data?.AllCommercial?.CommercialInstLand || false,
          Warehouse: data?.AllCommercial?.Warehouse || false,
          ColdStorage: data?.AllCommercial?.ColdStorage || false,
          Other: data?.AllCommercial?.Other || false,
        },
        AllIndustrial: {
          WareHouse: data?.AllIndustrial?.WareHouse || false,
          HeavyManufacturing: data?.AllIndustrial?.HeavyManufacturing || false,
          LightManufacturing: data?.AllIndustrial?.LightManufacturing || false,
          DistributionWarehouse:
            data?.AllIndustrial?.DistributionWarehouse || false,
          GeneralWarehouse: data?.AllIndustrial?.GeneralWarehouse || false,
          FlexSpace: data?.AllIndustrial?.FlexSpace || false,
          ShowroomBuildings: data?.AllIndustrial?.ShowroomBuildings || false,
          ResearchAndDevelopment:
            data?.AllIndustrial?.ResearchAndDevelopment || false,
          DataCenter: data?.AllIndustrial?.DataCenter || false,
        },
        AllPlotLand: {
          ResidentialPlot: data?.AllPlotLand?.ResidentialPlot || false,
          CommercialPlot: data?.AllPlotLand?.CommercialPlot || false,
          IndustrialPlot: data?.AllPlotLand?.IndustrialPlot || false,
          AgriculturalLand: data?.AllPlotLand?.AgriculturalLand || false,
          NonAgriculturalLand: data?.AllPlotLand?.NonAgriculturalLand || false,
          WeekendVillaSite: data?.AllPlotLand?.WeekendVillaSite || false,
        },
        ResidentialAvailabilityType: {
          LowRiseApartment:
            data?.ResidentialAvailabilityType?.LowRiseApartment || false,
          Bungalow: data?.ResidentialAvailabilityType?.Bungalow || false,
          Penthouse: data?.ResidentialAvailabilityType?.Penthouse || false,
          RowHouse: data?.ResidentialAvailabilityType?.RowHouse || false,
          HighRiseApartment:
            data?.ResidentialAvailabilityType?.HighRiseApartment || false,
          WeekendVillas:
            data?.ResidentialAvailabilityType?.WeekendVillas || false,
          Tenament: data?.ResidentialAvailabilityType?.Tenament || false,
          Building: data?.ResidentialAvailabilityType?.Building || false,
        },
        BhkScheme: {
          oneBHK: data?.BhkScheme?.oneBHK || false,
          twoBHK: data?.BhkScheme?.twoBHK || false,
          threeBHK: data?.BhkScheme?.threeBHK || false,
          fourBHK: data?.BhkScheme?.fourBHK || false,
          fiveBHK: data?.BhkScheme?.fiveBHK || false,
          sixBHK: data?.BhkScheme?.sixBHK || false,
          aboveSixBHK: data?.BhkScheme?.aboveSixBHK || false,
          duplex: data?.BhkScheme?.duplex || false,
          pg: data?.BhkScheme?.pg || false,
        },
        CommercialPropertyFeatures: {
          BossCabin: data?.CommercialPropertyFeatures?.BossCabin || false,
          ManagerCabin: data?.CommercialPropertyFeatures?.ManagerCabin || false,
          WorkStation: data?.CommercialPropertyFeatures?.WorkStation || false,
          Pantry: data?.CommercialPropertyFeatures?.Pantry || false,
          Reception: data?.CommercialPropertyFeatures?.Reception || false,
          WaitingArea: data?.CommercialPropertyFeatures?.WaitingArea || false,
          CarParking: data?.CommercialPropertyFeatures?.CarParking || false,
        },
        Condition: {
          BuildingSite: data?.Condition?.BuildingSite || false,
          StructuralFrameBuildingEnvelope:
            data?.Condition?.StructuralFrameBuildingEnvelope || false,
          Roofing: data?.Condition?.Roofing || false,
          Plumbing: data?.Condition?.Plumbing || false,
          Heating: data?.Condition?.Heating || false,
          AirConditioningVentilation:
            data?.Condition?.AirConditioningVentilation || false,
          Electrical: data?.Condition?.Electrical || false,
          VerticalTransportation:
            data?.Condition?.VerticalTransportation || false,
          LifeSafetyFireProtection:
            data?.Condition?.LifeSafetyFireProtection || false,
          InteriorElements: data?.Condition?.InteriorElements || false,
          FullyFurnished: data?.Condition?.FullyFurnished || false,
          Furnished: data?.Condition?.Furnished || false,
          SemiFurnished: data?.Condition?.SemiFurnished || false,
          KitchenFix: data?.Condition?.KitchenFix || false,
          FixFurnished: data?.Condition?.FixFurnished || false,
          Unfurnished: data?.Condition?.Unfurnished || false,
        },
        ResidentAvailable: {
          ForFamily: data?.ResidentAvailable?.ForFamily || false,
          ForExecutive: data?.ResidentAvailable?.ForExecutive || false,
          ForBachlore: data?.ResidentAvailable?.ForBachlore || false,
        },
        Amenities: {
          WaterSupply247: data?.Amenities?.WaterSupply247 || false,
          SeniorCitizenSitting: data?.Amenities?.SeniorCitizenSitting || false,
          BanquetHall: data?.Amenities?.BanquetHall || false,
          HomeTheatre: data?.Amenities?.HomeTheatre || false,
          IndoorsGame: data?.Amenities?.IndoorsGame || false,
          OutdoorsGame: data?.Amenities?.OutdoorsGame || false,
          VisitorParking: data?.Amenities?.VisitorParking || false,
          AllottedParking: data?.Amenities?.AllottedParking || false,
          Lift: data?.Amenities?.Lift || false,
          PowerBackup: data?.Amenities?.PowerBackup || false,
          GasLine: data?.Amenities?.GasLine || false,
          SwimmingPool: data?.Amenities?.SwimmingPool || false,
          Garden: data?.Amenities?.Garden || false,
          ChildrenPlayArea: data?.Amenities?.ChildrenPlayArea || false,
          ClubHouse: data?.Amenities?.ClubHouse || false,
          CCTV: data?.Amenities?.CCTV || false,
        },
        Facing: {
          East: data?.Facing?.East || false,
          North: data?.Facing?.North || false,
          NorthEast: data?.Facing?.NorthEast || false,
          NorthWest: data?.Facing?.NorthWest || false,
          South: data?.Facing?.South || false,
          SouthEast: data?.Facing?.SouthEast || false,
          SouthWest: data?.Facing?.SouthWest || false,
          West: data?.Facing?.West || false,
        },
        PropertyDescription: data?.PropertyDescription || "",
      });
    }
  }, [data]);

  const filteredData = data.filter((property) => {
    const notInRecycleBin = property?.RecycleBin === true;

    return notInRecycleBin;
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
        <div className="text-white  mx-auto p-4">
          <div className="flex items-center mb-6 justify-between">
            <div>
              {" "}
              <p className="text-xl font-semibold uppercase ">Recycle Bin</p>
              <p className=" text-sm text-gray-200">
                Your Recycle Property Over here
              </p>
            </div>
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
          </div>
          <div className="text-white w-full grid grid-cols-3 gap-4">
            {filteredData.map((property, index) => (
              <div
                key={index}
                onClick={() => handleEdit("Edit", property._id)}
                className="bg-gray-800  p-4 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition duration-300"
              >
                {/* Property Image */}
                <div className="h-48 w-full relative group bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={
                      property?.PropertyPhotos?.[0] ||
                      "https://i.pinimg.com/736x/ba/78/d2/ba78d2b517f4783313180e89a1780808.jpg"
                    }
                    alt={property?.PropertyName}
                    className="w-full h-full object-cover"
                  />

                  <p className="absolute inset-0 text-xl font-mono  backdrop-blur-sm w-full h-full ease-in-out duration-300 transition-opacity group-hover:opacity-100 flex opacity-0 justify-center items-center ">
                    <span>View Prop</span>{" "}
                    <span className="ml-2 mt-2 transition-transfrom ease-in-out duration-200 group-active:translate-x-2 group-active:-translate-y-2">
                      &#8599;
                    </span>
                  </p>
                  <p
                    className={`text-sm group-hover:opacity-0 ease-in-out duration-300 transition-opacity  absolute top-0 right-1 ${
                      property?.Featured
                        ? "bg-yellow-500 text-black"
                        : "bg-zinc-900 text-gray-200 opacity-75"
                    } inline-block p-2 my-2 rounded-md`}
                  >
                    {property?.Featured ? "Featured" : "Not Featured"}
                  </p>
                </div>

                {/* Property Details */}
                <div className="py-2">
                  <h2 className="text-lg font-semibold text-white truncate">
                    {property?.PropertyName || "Property Name"}
                  </h2>
                  <p className="text-sm my-1 text-gray-300">
                    ID: {property?._id || "id not available"}
                  </p>
                  <p className="text-sm mb-2 text-gray-400">
                    {property?.Landmark || "Location not available"}
                  </p>

                  <p className="text-base font-bold text-white">
                    ₹
                    {property?.Prices?.SalesPrice
                      ? `${Intl.NumberFormat().format(
                          property.Prices.SalesPrice
                        )}/-`
                      : property?.Prices?.RentPrice
                      ? `${Intl.NumberFormat().format(
                          property.Prices.RentPrice
                        )}/month`
                      : "Price Not Available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {editData.type === "Edit" && (
        <DeleteOrRecoverProperty
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
          deleteById={deleteById}
        />
      )}
    </>
  );
}
