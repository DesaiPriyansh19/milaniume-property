import React from "react";
import InputField from "../../../../utils/InputFields";

export default function IndustrialForm({ formData, handleInputChange,disabled }) {
  return (
    <>
      {/* Condition */}
      <div>
        <label
          htmlFor={"Condition"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Condition
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "BuildingSite", label: "Building Site" },
            {
              id: "StructuralFrameBuildingEnvelope",
              label: "Structural Frame/Building Envelope",
            },
            { id: "Roofing", label: "Roofing" },
            { id: "Plumbing", label: "Plumbing" },
            { id: "Heating", label: "Heating" },
            {
              id: "AirConditioningVentilation",
              label: "Air Conditioning/Ventilation",
            },
            { id: "Electrical", label: "Electrical" },
            { id: "VerticalTransportation", label: "Vertical Transportation" },
            {
              id: "LifeSafetyFireProtection",
              label: "Life Safety/Fire Protection",
            },
            { id: "InteriorElements", label: "Interior Elements" },
            { id: "FullyFurnished", label: "Fully Furnished" },
            { id: "Furnished", label: "Furnished" },
            { id: "SemiFurnished", label: "Semi-Furnished" },
            { id: "KitchenFix", label: "Kitchen Fix" },
            { id: "FixFurnished", label: "Fix Furnished" },
            { id: "Unfurnished", label: "Unfurnished" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              disabled={disabled ? true : false}
              type="checkbox"
              id={id}
              label={label}
              name={`Condition.${id}`}
              variant={2}
              checked={formData.Condition[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      {/* All Industrial */}
      <div>
        <label
          htmlFor={"AllIndustrial"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Industrial
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "WareHouse", label: "Warehouse" },
            { id: "HeavyManufacturing", label: "Heavy Manufacturing" },
            { id: "LightManufacturing", label: "Light Manufacturing" },
            { id: "DistributionWarehouse", label: "Distribution Warehouse" },
            { id: "GeneralWarehouse", label: "General Warehouse" },
            { id: "FlexSpace", label: "Flex Space" },
            { id: "ShowroomBuildings", label: "Showroom Buildings" },
            { id: "ResearchAndDevelopment", label: "Research & Development" },
            { id: "DataCenter", label: "Data Center" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              disabled={disabled ? true : false}
              name={`AllIndustrial.${id}`}
              variant={2}
              checked={formData.AllIndustrial[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      {/* Amenties */}
      <div>
        <label
          htmlFor={"Amenities"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Amenities
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "WaterSupply247", label: "24/7 Water Supply" },
            { id: "SeniorCitizenSitting", label: "Senior Citizen Sitting" },
            { id: "BanquetHall", label: "Banquet Hall" },
            { id: "HomeTheatre", label: "Home Theatre" },
            { id: "IndoorsGame", label: "Indoors Game" },
            { id: "OutdoorsGame", label: "Outdoors Game" },
            { id: "VisitorParking", label: "Visitor Parking" },
            { id: "AllottedParking", label: "Allotted Parking" },
            { id: "Lift", label: "Lift" },
            { id: "PowerBackup", label: "Power Backup" },
            { id: "GasLine", label: "Gas Line" },
            { id: "SwimmingPool", label: "Swimming Pool" },
            { id: "Garden", label: "Garden" },
            { id: "ChildrenPlayArea", label: "Children Play Area" },
            { id: "ClubHouse", label: "Club House" },
            { id: "CCTV", label: "CCTV" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              disabled={disabled ? true : false}
              label={label}
              name={`Amenities.${id}`}
              variant={2}
              checked={formData.Amenities[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}
