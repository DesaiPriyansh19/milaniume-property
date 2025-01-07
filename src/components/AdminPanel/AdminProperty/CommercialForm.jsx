import React from "react";
import InputField from "../../../../utils/InputFields";

export default function CommercialForm({
  formData,
  handleInputChange,
  disabled,
}) {
  return (
    <>
      {/* All Commercial */}
      <div>
        <label
          htmlFor={"All Commercial"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Commercial
        </label>

        <div className="flex flex-col mb-3">
          {[
            { id: "ForSale", label: "Ready to Move Offices" },
            { id: "BareShallOffices", label: "Bare Shall Offices" },
            { id: "ShopsRetail", label: "Shops/Retail" },
            {
              id: "CommercialInstLand",
              label: "Commercial/Institutional Land",
            },
            { id: "Warehouse", label: "Warehouse" },
            { id: "ColdStorage", label: "Cold Storage" },
            { id: "Other", label: "Other" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              disabled={disabled ? true : false}
              name={`AllCommercial.${id}`}
              variant={2}
              checked={formData.AllCommercial[id] || false}
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
              checked={formData.Amenities[id] || false}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      {/* Commercial Property Features */}
      <div>
        <label
          htmlFor={"CommercialPropertyFeatures"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Commercial Property Features
        </label>

        <div className="flex flex-col mb-3">
          {[
            { id: "BossCabin", label: "Boss Cabin" },
            { id: "ManagerCabin", label: "Manager Cabin" },
            { id: "WorkStation", label: "Work Station" },
            { id: "Pantry", label: "Pantry" },
            { id: "Reception", label: "Reception" },
            { id: "WaitingArea", label: "Waiting Area" },
            { id: "CarParking", label: "Car Parking" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              id={id}
              label={label}
              disabled={disabled ? true : false}
              name={`CommercialPropertyFeatures.${id}`}
              variant={2}
              checked={formData.CommercialPropertyFeatures[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}
