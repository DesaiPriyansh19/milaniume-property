import React from "react";
import InputField from "../../../../utils/InputFields";

export default function CommercialForm({ formData, handleInputChange }) {
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
          <InputField
            type="checkbox"
            id="ForSale"
            label="Ready to Move Offices"
            name="AllCommercial.ReadyToMoveOffices"
            variant={2}
            checked={formData.AllCommercial.ReadyToMoveOffices}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="BareShallOffices"
            label="Bare Shall Offices"
            name="AllCommercial.BareShallOffices"
            variant={2}
            checked={formData.AllCommercial.BareShallOffices}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="ShopsRetail"
            label="Shops/Retail"
            name="AllCommercial.ShopsRetail"
            variant={2}
            checked={formData.AllCommercial.ShopsRetail}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="CommercialInstLand"
            label="Commercial/Institutional Land"
            name="AllCommercial.CommercialInstLand"
            variant={2}
            checked={formData.AllCommercial.CommercialInstLand}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="Warehouse"
            label="Warehouse"
            name="AllCommercial.Warehouse"
            variant={2}
            checked={formData.AllCommercial.Warehouse}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="ColdStorage"
            label="Cold Storage"
            name="AllCommercial.ColdStorage"
            variant={2}
            checked={formData.AllCommercial.ColdStorage}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="Other"
            label="Other"
            name="AllCommercial.Other"
            variant={2}
            checked={formData.AllCommercial.Other}
            onChange={handleInputChange}
          />
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
          <InputField
            type="checkbox"
            id="WaterSupply247"
            label="24/7 Water Supply"
            name="Amenities.WaterSupply247"
            variant={2}
            checked={formData.Amenities.WaterSupply247}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="SeniorCitizenSitting"
            label="Senior Citizen Sitting"
            name="Amenities.SeniorCitizenSitting"
            variant={2}
            checked={formData.Amenities.SeniorCitizenSitting}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="BanquetHall"
            label="Banquet Hall"
            name="Amenities.BanquetHall"
            variant={2}
            checked={formData.Amenities.BanquetHall}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="HomeTheatre"
            label="Home Theatre"
            name="Amenities.HomeTheatre"
            variant={2}
            checked={formData.Amenities.HomeTheatre}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="IndoorsGame"
            label="Indoors Game"
            name="Amenities.IndoorsGame"
            variant={2}
            checked={formData.Amenities.IndoorsGame}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="OutdoorsGame"
            label="Outdoors Game"
            name="Amenities.OutdoorsGame"
            variant={2}
            checked={formData.Amenities.OutdoorsGame}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="VisitorParking"
            label="Visitor Parking"
            name="Amenities.VisitorParking"
            variant={2}
            checked={formData.Amenities.VisitorParking}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="AllottedParking"
            label="Allotted Parking"
            name="Amenities.AllottedParking"
            variant={2}
            checked={formData.Amenities.AllottedParking}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Lift"
            label="Lift"
            name="Amenities.Lift"
            variant={2}
            checked={formData.Amenities.Lift}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="PowerBackup"
            label="Power Backup"
            name="Amenities.PowerBackup"
            variant={2}
            checked={formData.Amenities.PowerBackup}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="GasLine"
            label="Gas Line"
            name="Amenities.GasLine"
            variant={2}
            checked={formData.Amenities.GasLine}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="SwimmingPool"
            label="Swimming Pool"
            name="Amenities.SwimmingPool"
            variant={2}
            checked={formData.Amenities.SwimmingPool}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Garden"
            label="Garden"
            name="Amenities.Garden"
            variant={2}
            checked={formData.Amenities.Garden}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ChildrenPlayArea"
            label="Children Play Area"
            name="Amenities.ChildrenPlayArea"
            variant={2}
            checked={formData.Amenities.ChildrenPlayArea}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ClubHouse"
            label="Club House"
            name="Amenities.ClubHouse"
            variant={2}
            checked={formData.Amenities.ClubHouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="CCTV"
            label="CCTV"
            name="Amenities.CCTV"
            variant={2}
            checked={formData.Amenities.CCTV}
            onChange={handleInputChange}
          />
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
          {/* Input fields for CommercialPropertyFeatures */}
          <InputField
            type="checkbox"
            id="BossCabin"
            label="Boss Cabin"
            name="CommercialPropertyFeatures.BossCabin"
            variant={2}
            checked={formData.CommercialPropertyFeatures.BossCabin}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="ManagerCabin"
            label="Manager Cabin"
            name="CommercialPropertyFeatures.ManagerCabin"
            variant={2}
            checked={formData.CommercialPropertyFeatures.ManagerCabin}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="WorkStation"
            label="Work Station"
            name="CommercialPropertyFeatures.WorkStation"
            variant={2}
            checked={formData.CommercialPropertyFeatures.WorkStation}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="Pantry"
            label="Pantry"
            name="CommercialPropertyFeatures.Pantry"
            variant={2}
            checked={formData.CommercialPropertyFeatures.Pantry}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="Reception"
            label="Reception"
            name="CommercialPropertyFeatures.Reception"
            variant={2}
            checked={formData.CommercialPropertyFeatures.Reception}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="WaitingArea"
            label="Waiting Area"
            name="CommercialPropertyFeatures.WaitingArea"
            variant={2}
            checked={formData.CommercialPropertyFeatures.WaitingArea}
            onChange={handleInputChange}
          />

          <InputField
            type="checkbox"
            id="CarParking"
            label="Car Parking"
            name="CommercialPropertyFeatures.CarParking"
            variant={2}
            checked={formData.CommercialPropertyFeatures.CarParking}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
