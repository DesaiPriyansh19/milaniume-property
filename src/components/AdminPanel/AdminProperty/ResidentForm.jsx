import React from "react";
import InputField from "../../../../utils/InputFields";

export default function ResidentForm({ formData, handleInputChange,disabled }) {
  return (
    <>
      {/* All Residential */}
      <div>
        {/* Label for the AllResidential section */}
        <label
          htmlFor={"AllResidential"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Residential
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "FlatApartment", label: "Flat/Apartment" },
            {
              id: "IndependentBuilderFloor",
              label: "Independent/Builder Floor",
            },
            { id: "IndependentHouseVilla", label: "Independent House/Villa" },
            { id: "ResidentialPlot", label: "Residential Plot" },
            { id: "FarmHouse", label: "Farm House" },
            { id: "Other", label: "Other" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              disabled={disabled ? true : false}
              name={`AllResidential.${id}`}
              variant={2}
              checked={formData.AllResidential[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      {/* Condition */}
      <div>
        {/* Label for the Condition section */}
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
              type="checkbox"
              id={id}
              disabled={disabled ? true : false}
              label={label}
              name={`Condition.${id}`}
              variant={2}
              checked={formData.Condition[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      {/* Amenties */}
      <div>
        {/* Label for the Amenities section */}
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
              label={label}
              disabled={disabled ? true : false}
              name={`Amenities.${id}`}
              variant={2}
              checked={formData.Amenities[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      {/* Residential Availability Type */}
      <div>
        {/* Label for the ResidentialAvailabilityType section */}
        <label
          htmlFor={"ResidentialAvailabilityType"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Residential Availability Type
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "LowRiseApartment", label: "Low Rise Apartment" },
            { id: "Bungalow", label: "Bungalow" },
            { id: "Penthouse", label: "Penthouse" },
            { id: "RowHouse", label: "Row House" },
            { id: "HighRiseApartment", label: "High Rise Apartment" },
            { id: "WeekendVillas", label: "Weekend Villas" },
            { id: "Tenament", label: "Tenament" },
            { id: "Building", label: "Building" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              disabled={disabled ? true : false}
              label={label}
              name={`ResidentialAvailabilityType.${id}`}
              variant={2}
              checked={formData.ResidentialAvailabilityType[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      {/* BhkScheme */}
      <div>
        <label
          htmlFor={"BhkScheme"}
          className={"block text-sm mb-2 font-semibold"}
        >
          BHK Scheme
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "oneBHK", label: "1 BHK" },
            { id: "twoBHK", label: "2 BHK" },
            { id: "threeBHK", label: "3 BHK" },
            { id: "fourBHK", label: "4 BHK" },
            { id: "fiveBHK", label: "5 BHK" },
            { id: "sixBHK", label: "6 BHK" },
            { id: "aboveSixBHK", label: "Above 6 BHK" },
            { id: "duplex", label: "Duplex" },
            { id: "pg", label: "PG" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              name={`BhkScheme.${id}`}
              variant={2}
              disabled={disabled ? true : false}
              checked={formData.BhkScheme[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      {/* Resident Available */}
      <div>
        <label
          htmlFor={"ResidentAvailable"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Resident Available
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "ForFamily", label: "For Family" },
            { id: "ForExecutive", label: "For Executive" },
            { id: "ForBachlore", label: "For Bachelor" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              disabled={disabled ? true : false}
              name={`ResidentAvailable.${id}`}
              variant={2}
              checked={formData.ResidentAvailable[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}
