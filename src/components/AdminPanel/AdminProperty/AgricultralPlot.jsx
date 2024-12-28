import React from "react";
import InputField from "../../../../utils/InputFields";

export default function AgricultralPlot({ formData, handleInputChange }) {
  return (
    <>
      {" "}
      {/* All Plot Land */}
      <div>
        {/* Label for the AllPlotLand section */}
        <label
          htmlFor={"AllPlotLand"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Plot Land
        </label>
        <div className="flex flex-col mb-3">
          <InputField
            type="checkbox"
            id="ResidentialPlot"
            label="Residential Plot"
            name="AllPlotLand.ResidentialPlot"
            variant={2}
            checked={formData.AllPlotLand.ResidentialPlot}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="CommercialPlot"
            label="Commercial Plot"
            name="AllPlotLand.CommercialPlot"
            variant={2}
            checked={formData.AllPlotLand.CommercialPlot}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="IndustrialPlot"
            label="Industrial Plot"
            name="AllPlotLand.IndustrialPlot"
            variant={2}
            checked={formData.AllPlotLand.IndustrialPlot}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="AgriculturalLand"
            label="Agricultural Land"
            name="AllPlotLand.AgriculturalLand"
            variant={2}
            checked={formData.AllPlotLand.AgriculturalLand}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="NonAgriculturalLand"
            label="Non-Agricultural Land"
            name="AllPlotLand.NonAgriculturalLand"
            variant={2}
            checked={formData.AllPlotLand.NonAgriculturalLand}
            onChange={handleInputChange}
          />
          <InputField
            type="checkbox"
            id="WeekendVillaSite"
            label="Weekend Villa Site"
            name="AllPlotLand.WeekendVillaSite"
            variant={2}
            checked={formData.AllPlotLand.WeekendVillaSite}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
