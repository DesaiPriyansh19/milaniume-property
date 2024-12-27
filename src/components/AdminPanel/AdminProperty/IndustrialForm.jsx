import React from "react";
import InputField from "../../../../utils/InputFields";

export default function IndustrialForm({ formData, handleInputChange }) {
  return (
    <>
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
      {/* All Industrial */}
      <div>
        {/* Label for the AllIndustrial section */}
        <label
          htmlFor={"AllIndustrial"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Industrial
        </label>
        <div className="flex flex-col mb-3">
          <InputField
            type="checkbox"
            id="WareHouse"
            label="Warehouse"
            name="AllIndustrial.WareHouse"
            variant={2}
            checked={formData.AllIndustrial.WareHouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="HeavyManufacturing"
            label="Heavy Manufacturing"
            name="AllIndustrial.HeavyManufacturing"
            variant={2}
            checked={formData.AllIndustrial.HeavyManufacturing}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="LightManufacturing"
            label="Light Manufacturing"
            name="AllIndustrial.LightManufacturing"
            variant={2}
            checked={formData.AllIndustrial.LightManufacturing}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="DistributionWarehouse"
            label="Distribution Warehouse"
            name="AllIndustrial.DistributionWarehouse"
            variant={2}
            checked={formData.AllIndustrial.DistributionWarehouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="GeneralWarehouse"
            label="General Warehouse"
            name="AllIndustrial.GeneralWarehouse"
            variant={2}
            checked={formData.AllIndustrial.GeneralWarehouse}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="FlexSpace"
            label="Flex Space"
            name="AllIndustrial.FlexSpace"
            variant={2}
            checked={formData.AllIndustrial.FlexSpace}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ShowroomBuildings"
            label="Showroom Buildings"
            name="AllIndustrial.ShowroomBuildings"
            variant={2}
            checked={formData.AllIndustrial.ShowroomBuildings}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="ResearchAndDevelopment"
            label="Research & Development"
            name="AllIndustrial.ResearchAndDevelopment"
            variant={2}
            checked={formData.AllIndustrial.ResearchAndDevelopment}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="DataCenter"
            label="Data Center"
            name="AllIndustrial.DataCenter"
            variant={2}
            checked={formData.AllIndustrial.DataCenter}
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
    </>
  );
}
