import React from "react";
import InputField from "../../../../utils/InputFields";

export default function AgricultralPlot({
  formData,
  handleInputChange,
  disabled,
}) {
  return (
    <>
      {" "}
      {/* All Plot Land */}
      <div>
        <label
          htmlFor={"AllPlotLand"}
          className={"block text-sm mb-2 font-semibold"}
        >
          All Plot Land
        </label>
        <div className="flex flex-col mb-3">
          {[
            { id: "ResidentialPlot", label: "Residential Plot" },
            { id: "CommercialPlot", label: "Commercial Plot" },
            { id: "IndustrialPlot", label: "Industrial Plot" },
            { id: "AgriculturalLand", label: "Agricultural Land" },
            { id: "NonAgriculturalLand", label: "Non-Agricultural Land" },
            { id: "WeekendVillaSite", label: "Weekend Villa Site" },
          ].map(({ id, label }) => (
            <InputField
              key={id}
              type="checkbox"
              disabled={disabled ? true : false}
              id={id}
              label={label}
              name={`AllPlotLand.${id}`}
              variant={2}
              checked={formData.AllPlotLand[id]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}
