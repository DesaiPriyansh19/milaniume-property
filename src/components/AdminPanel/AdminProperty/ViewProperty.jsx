import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import EditProperty from "./EditProperty";
import AddProperty from "./AddProperty";

export default function ViewProperty() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/property";
  const { data, fetchById, updateById, addNew, deleteById } =
    useApiData(baseUrl);
  const [editData, setEditData] = useState({ type: "View", id: null });

  const [formData, setFormData] = useState({
    id: "",
    PropertyName: "",
    PropertyType: [],
    ForSale: true,
    ForRent: false,
    Featured: false,
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
  });

  useEffect(() => {
    if (data) {
      setFormData({
        PropertyName: data?.PropertyName || "",
        PropertyType: data?.PropertyType || [],
        ForSale: data?.ForSale || true,
        ForRent: data?.ForRent || false,
        Featured: data?.Featured || false,
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
      });
    }
  }, [data]);

  const handleEdit = (type, id) => {
    const selectedProperty = data.find((property) => property._id === id); // Filter data by ID
    if (selectedProperty) {
      setFormData({
        id: selectedProperty._id || "",
        PropertyName: selectedProperty?.PropertyName || "",
        PropertyType: selectedProperty?.PropertyType || [],
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
              <p className="text-xl font-semibold uppercase ">View Property</p>
              <p className=" text-sm text-gray-200">
                Welcome to your Real Estate Portfolio
              </p>
            </div>
            <button
              onClick={() => handleEdit("Add")}
              className=" bg-red-500 text-white h-8 px-5  rounded "
            >
              Add New Estate
            </button>
          </div>
          <div className="text-white w-full grid grid-cols-4 gap-4">
            {data.map((property, index) => (
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
                  <p className="text-sm text-gray-400">
                    {property?.Landmark || "Location not available"}
                  </p>

                  <p className="text-base font-bold text-white mt-2">
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
        <EditProperty
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
          deleteById={deleteById}
        />
      )}
      {editData.type === "Add" && (
        <AddProperty addNew={addNew} handleEdit={handleEdit} />
      )}
    </>
  );
}
