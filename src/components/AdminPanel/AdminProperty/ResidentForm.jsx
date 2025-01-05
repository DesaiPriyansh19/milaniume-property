import React from "react";
import InputField from "../../../../utils/InputFields";

export default function ResidentForm({ formData, handleInputChange }) {
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
          <InputField
            type="checkbox"
            id="FlatApartment"
            label="Flat/Apartment"
            name="AllResidential.FlatApartment"
            variant={2}
            checked={formData.AllResidential.FlatApartment}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="IndependentBuilderFloor"
            label="Independent/Builder Floor"
            name="AllResidential.IndependentBuilderFloor"
            variant={2}
            checked={formData.AllResidential.IndependentBuilderFloor}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="IndependentHouseVilla"
            label="Independent House/Villa"
            name="AllResidential.IndependentHouseVilla"
            variant={2}
            checked={formData.AllResidential.IndependentHouseVilla}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ResidentialPlot"
            label="Residential Plot"
            name="AllResidential.ResidentialPlot"
            variant={2}
            checked={formData.AllResidential.ResidentialPlot}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="FarmHouse"
            label="Farm House"
            name="AllResidential.FarmHouse"
            variant={2}
            checked={formData.AllResidential.FarmHouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Other"
            label="Other"
            name="AllResidential.Other"
            variant={2}
            checked={formData.AllResidential.Other}
            onChange={handleInputChange}
          />
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
          <InputField
            type="checkbox"
            id="BuildingSite"
            label="Building Site"
            name="Condition.BuildingSite"
            variant={2}
            checked={formData.Condition.BuildingSite}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="StructuralFrameBuildingEnvelope"
            label="Structural Frame/Building Envelope"
            name="Condition.StructuralFrameBuildingEnvelope"
            variant={2}
            checked={formData.Condition.StructuralFrameBuildingEnvelope}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Roofing"
            label="Roofing"
            name="Condition.Roofing"
            variant={2}
            checked={formData.Condition.Roofing}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Plumbing"
            label="Plumbing"
            name="Condition.Plumbing"
            variant={2}
            checked={formData.Condition.Plumbing}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Heating"
            label="Heating"
            name="Condition.Heating"
            variant={2}
            checked={formData.Condition.Heating}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="AirConditioningVentilation"
            label="Air Conditioning/Ventilation"
            name="Condition.AirConditioningVentilation"
            variant={2}
            checked={formData.Condition.AirConditioningVentilation}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Electrical"
            label="Electrical"
            name="Condition.Electrical"
            variant={2}
            checked={formData.Condition.Electrical}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="VerticalTransportation"
            label="Vertical Transportation"
            name="Condition.VerticalTransportation"
            variant={2}
            checked={formData.Condition.VerticalTransportation}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="LifeSafetyFireProtection"
            label="Life Safety/Fire Protection"
            name="Condition.LifeSafetyFireProtection"
            variant={2}
            checked={formData.Condition.LifeSafetyFireProtection}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="InteriorElements"
            label="Interior Elements"
            name="Condition.InteriorElements"
            variant={2}
            checked={formData.Condition.InteriorElements}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="FullyFurnished"
            label="Fully Furnished"
            name="Condition.FullyFurnished"
            variant={2}
            checked={formData.Condition.FullyFurnished}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Furnished"
            label="Furnished"
            name="Condition.Furnished"
            variant={2}
            checked={formData.Condition.Furnished}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="SemiFurnished"
            label="Semi-Furnished"
            name="Condition.SemiFurnished"
            variant={2}
            checked={formData.Condition.SemiFurnished}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="KitchenFix"
            label="Kitchen Fix"
            name="Condition.KitchenFix"
            variant={2}
            checked={formData.Condition.KitchenFix}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="FixFurnished"
            label="Fix Furnished"
            name="Condition.FixFurnished"
            variant={2}
            checked={formData.Condition.FixFurnished}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Unfurnished"
            label="Unfurnished"
            name="Condition.Unfurnished"
            variant={2}
            checked={formData.Condition.Unfurnished}
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
          <InputField
            type="checkbox"
            id="LowRiseApartment"
            label="Low Rise Apartment"
            name="ResidentialAvailabilityType.LowRiseApartment"
            variant={2}
            checked={formData.ResidentialAvailabilityType.LowRiseApartment}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Bungalow"
            label="Bungalow"
            name="ResidentialAvailabilityType.Bungalow"
            variant={2}
            checked={formData.ResidentialAvailabilityType.Bungalow}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Penthouse"
            label="Penthouse"
            name="ResidentialAvailabilityType.Penthouse"
            variant={2}
            checked={formData.ResidentialAvailabilityType.Penthouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="RowHouse"
            label="Row House"
            name="ResidentialAvailabilityType.RowHouse"
            variant={2}
            checked={formData.ResidentialAvailabilityType.RowHouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="HighRiseApartment"
            label="High Rise Apartment"
            name="ResidentialAvailabilityType.HighRiseApartment"
            variant={2}
            checked={formData.ResidentialAvailabilityType.HighRiseApartment}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="WeekendVillas"
            label="Weekend Villas"
            name="ResidentialAvailabilityType.WeekendVillas"
            variant={2}
            checked={formData.ResidentialAvailabilityType.WeekendVillas}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Tenament"
            label="Tenament"
            name="ResidentialAvailabilityType.Tenament"
            variant={2}
            checked={formData.ResidentialAvailabilityType.Tenament}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="Building"
            label="Building"
            name="ResidentialAvailabilityType.Building"
            variant={2}
            checked={formData.ResidentialAvailabilityType.Building}
            onChange={handleInputChange}
          />
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
          <InputField
            type="checkbox"
            id="oneBHK"
            label="1 BHK"
            name="BhkScheme.oneBHK"
            variant={2}
            checked={formData.BhkScheme.oneBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="twoBHK"
            label="2 BHK"
            name="BhkScheme.twoBHK"
            variant={2}
            checked={formData.BhkScheme.twoBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="threeBHK"
            label="3 BHK"
            name="BhkScheme.threeBHK"
            variant={2}
            checked={formData.BhkScheme.threeBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="fourBHK"
            label="4 BHK"
            name="BhkScheme.fourBHK"
            variant={2}
            checked={formData.BhkScheme.fourBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="fiveBHK"
            label="5 BHK"
            name="BhkScheme.fiveBHK"
            variant={2}
            checked={formData.BhkScheme.fiveBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="sixBHK"
            label="6 BHK"
            name="BhkScheme.sixBHK"
            variant={2}
            checked={formData.BhkScheme.sixBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="aboveSixBHK"
            label="Above 6 BHK"
            name="BhkScheme.aboveSixBHK"
            variant={2}
            checked={formData.BhkScheme.aboveSixBHK}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="duplex"
            label="Duplex"
            name="BhkScheme.duplex"
            variant={2}
            checked={formData.BhkScheme.duplex}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="pg"
            label="PG"
            name="BhkScheme.pg"
            variant={2}
            checked={formData.BhkScheme.pg}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Resident Available */}
      <div>
        {/* Label for the ResidentAvailable section */}
        <label
          htmlFor={"ResidentAvailable"}
          className={"block text-sm mb-2 font-semibold"}
        >
          Resident Available
        </label>
        <div className="flex flex-col mb-3">
          <InputField
            type="checkbox"
            id="ForFamily"
            label="For Family"
            name="ResidentAvailable.ForFamily"
            variant={2}
            checked={formData.ResidentAvailable.ForFamily}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ForExecutive"
            label="For Executive"
            name="ResidentAvailable.ForExecutive"
            variant={2}
            checked={formData.ResidentAvailable.ForExecutive}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ForBachlore"
            label="For Bachlore"
            name="ResidentAvailable.ForBachlore"
            variant={2}
            checked={formData.ResidentAvailable.ForBachlore}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
