import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import ViewDescModal from "../../../../utils/ViewDescModal";

export default function UserRequirementPost() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/require";
  const { data: requirements } = useFetch(baseUrl);

  const [formData, setFormData] = useState({
    RequiredPersonRole: "",
    RequiredPersonName: "",
    RequiredPersonPhone: "",
    RequiredPersonEmail: "",
    RequiredAreaSqft: {
      max: "",
      min: "",
    },
    RequiredBudget: {
      max: "",
      min: "",
    },
    RequiredPropertyDetails: {
      RequiredPropertyType: "Residential",
      RequiredAreaSqft: { min: "", max: "" },
      RequiredBudget: { min: "", max: "" },
      RequiredPropertySellOrRent: "",
      RequiredConstructionStatus: "",
      RequiredDescription: "",
    },
    AllResidential: {
      "Flat/Apartment": false,
      "High Rise Apartment": false,
      Bungalows: false,
      Penthouse: false,
      "Low Rise Apartment": false,
      "Row House": false,
      "Weekend Villas": false,
      "Farm House": false,
    },
    AllCommercial: {
      Office: false,
      Shop: false,
      Showroom: false,
      "Co Working Space": false,
      "Ready to Move Offices": false,
      Warehouse: false,
      "Cold Storage": false,
      Other: false,
    },
    CommercialAvailability: {
      "Boss Cabin": false,
      "Manager Cabin": false,
      "Work Station": false,
      Pantry: false,
      Reception: false,
      "Waiting Area": false,
      "Car Parking": false,
    },
    AllIndustrial: {
      "Ware House": false,
      "Heavy Manufacturing": false,
      "Light Manufacturing": false,
      "Distribution Warehouse": false,
      "General Warehouse": false,
      "Flex Space": false,
      "Showroom Buildings": false,
      "Research And Development": false,
      "Data Center": false,
    },
    AllPlotAndLand: {
      "Residential Plot": false,
      "Commercial Plot": false,
      "Industrial Plot": false,
      "Agriculture Land": false,
      "Non - Agriculture Land": false,
      "Project Land": false,
    },
    Condition: {
      "Building Site": false,
      "Structural Frame & Building Envelope": false,
      "Semi Furnished": false,
      Roofing: false,
      Plumbing: false,
      Heating: false,
      "Air Conditioning & Ventilation": false,
      Electrical: false,
      "Vertical Transportation (Elevators & Escalators)": false,
      "Life Safety / Fire Protection": false,
      "Interior Elements": false,
      "Fully Furnished": false,
      Furnished: false,
      "Semi Furnished": false,
      "Kitchen Fix": false,
      "Fix Furnished": false,
      Unfurnished: false,
    },
    ResidentialAvailability: {
      "1 Bhk": false,
      "2 Bhk": false,
      "3 Bhk": false,
      "4 Bhk": false,
      "5 Bhk": false,
      "6 Bhk": false,
      "Above 6Bhk": false,
    },
    ResidentAvailableFor: {
      "FOR FAMILY": false,
      "FOR EXICUTIVE": false,
      "FOR BECHLORE": false,
    },
    Facing: {
      East: false,
      North: false,
      "North-East": false,
      "North-West": false,
      South: false,
      "South-East": false,
      "South-West": false,
      West: false,
    },
  });
  const [editData, setEditData] = useState("");

  useEffect(() => {
    if (requirements) {
      setFormData((prevData) => ({
        ...prevData,
        RequiredPersonRole: requirements?.RequiredPersonRole || "",
        RequiredPersonName: requirements?.RequiredPersonName || "",
        RequiredPersonPhone: requirements?.RequiredPersonPhone || "",
        RequiredPersonEmail: requirements?.RequiredPersonEmail || "",
        RequiredAreaSqft: {
          min: requirements?.RequiredAreaSqft?.min || "",
          max: requirements?.RequiredAreaSqft?.max || "",
        },
        RequiredBudget: {
          min: requirements?.RequiredBudget?.min || "",
          max: requirements?.RequiredBudget?.max || "",
        },
        RequiredPropertyDetails: {
          RequiredPropertyType:
            requirements?.RequiredPropertyDetails?.RequiredPropertyType ||
            "Residential",
          RequiredAreaSqft: {
            min:
              requirements?.RequiredPropertyDetails?.RequiredAreaSqft?.min ||
              "",
            max:
              requirements?.RequiredPropertyDetails?.RequiredAreaSqft?.max ||
              "",
          },
          RequiredBudget: {
            min:
              requirements?.RequiredPropertyDetails?.RequiredBudget?.min || "",
            max:
              requirements?.RequiredPropertyDetails?.RequiredBudget?.max || "",
          },
          RequiredPropertySellOrRent:
            requirements?.RequiredPropertyDetails?.RequiredPropertySellOrRent ||
            "",
          RequiredConstructionStatus:
            requirements?.RequiredPropertyDetails?.RequiredConstructionStatus ||
            "",
          RequiredDescription:
            requirements?.RequiredPropertyDetails?.RequiredDescription || "",
        },
        AllResidential: requirements?.AllResidential || {
          "Flat/Apartment": false,
          "High Rise Apartment": false,
          Bungalows: false,
          Penthouse: false,
          "Low Rise Apartment": false,
          "Row House": false,
          "Weekend Villas": false,
          "Farm House": false,
        },
        AllCommercial: requirements?.AllCommercial || {
          Office: false,
          Shop: false,
          Showroom: false,
          "Co Working Space": false,
          "Ready to Move Offices": false,
          Warehouse: false,
          "Cold Storage": false,
          Other: false,
        },
        CommercialAvailability: requirements?.CommercialAvailability || {
          "Boss Cabin": false,
          "Manager Cabin": false,
          "Work Station": false,
          Pantry: false,
          Reception: false,
          "Waiting Area": false,
          "Car Parking": false,
        },
        AllIndustrial: requirements?.AllIndustrial || {
          "Ware House": false,
          "Heavy Manufacturing": false,
          "Light Manufacturing": false,
          "Distribution Warehouse": false,
          "General Warehouse": false,
          "Flex Space": false,
          "Showroom Buildings": false,
          "Research And Development": false,
          "Data Center": false,
        },
        AllPlotAndLand: requirements?.AllPlotAndLand || {
          "Residential Plot": false,
          "Commercial Plot": false,
          "Industrial Plot": false,
          "Agriculture Land": false,
          "Non - Agriculture Land": false,
          "Project Land": false,
        },
        Condition: requirements?.Condition || {
          "Building Site": false,
          "Structural Frame & Building Envelope": false,
          "Semi Furnished": false,
          Roofing: false,
          Plumbing: false,
          Heating: false,
          "Air Conditioning & Ventilation": false,
          Electrical: false,
          "Vertical Transportation (Elevators & Escalators)": false,
          "Life Safety / Fire Protection": false,
          "Interior Elements": false,
          "Fully Furnished": false,
          Furnished: false,
          "Semi Furnished": false,
          "Kitchen Fix": false,
          "Fix Furnished": false,
          Unfurnished: false,
        },
        ResidentialAvailability: requirements?.ResidentialAvailability || {
          "1 Bhk": false,
          "2 Bhk": false,
          "3 Bhk": false,
          "4 Bhk": false,
          "5 Bhk": false,
          "6 Bhk": false,
          "Above 6Bhk": false,
        },
        ResidentAvailableFor: requirements?.ResidentAvailableFor || {
          "FOR FAMILY": false,
          "FOR EXICUTIVE": false,
          "FOR BECHLORE": false,
        },
        Facing: requirements?.Facing || {
          East: false,
          North: false,
          "North-East": false,
          "North-West": false,
          South: false,
          "South-East": false,
          "South-West": false,
          West: false,
        },
      }));
    }
  }, [requirements]);

  const handleView = (id) => {
    const selectedProperty = requirements.find(
      (property) => property._id === id
    ); // Filter data by ID
    if (selectedProperty) {
      setFormData({
        RequiredPersonRole: selectedProperty.RequiredPersonRole || "",
        RequiredPersonName: selectedProperty.RequiredPersonName || "",
        RequiredPersonPhone: selectedProperty.RequiredPersonPhone || "",
        RequiredPersonEmail: selectedProperty.RequiredPersonEmail || "",
        RequiredPropertyDetails: {
          RequiredPropertyType:
            selectedProperty.RequiredPropertyDetails?.RequiredPropertyType ||
            "",
          RequiredAreaSqft: {
            min:
              selectedProperty.RequiredPropertyDetails?.RequiredAreaSqft?.min ||
              "",
            max:
              selectedProperty.RequiredPropertyDetails?.RequiredAreaSqft?.max ||
              "",
          },
          RequiredBudget: {
            min:
              selectedProperty.RequiredPropertyDetails?.RequiredBudget?.min ||
              "",
            max:
              selectedProperty.RequiredPropertyDetails?.RequiredBudget?.max ||
              "",
          },
          RequiredPropertySellOrRent:
            selectedProperty.RequiredPropertyDetails
              ?.RequiredPropertySellOrRent || "",
          RequiredConstructionStatus:
            selectedProperty.RequiredPropertyDetails
              ?.RequiredConstructionStatus || "",
          RequiredDescription:
            selectedProperty.RequiredPropertyDetails?.RequiredDescription || "",
        },
        AllResidential: {
          "Flat/Apartment":
            selectedProperty.AllResidential?.["Flat/Apartment"] || false,
          "High Rise Apartment":
            selectedProperty.AllResidential?.["High Rise Apartment"] || false,
          Bungalows: selectedProperty.AllResidential?.Bungalows || false,
          Penthouse: selectedProperty.AllResidential?.Penthouse || false,
          "Low Rise Apartment":
            selectedProperty.AllResidential?.["Low Rise Apartment"] || false,
          "Row House": selectedProperty.AllResidential?.["Row House"] || false,
          "Weekend Villas":
            selectedProperty.AllResidential?.["Weekend Villas"] || false,
          "Farm House":
            selectedProperty.AllResidential?.["Farm House"] || false,
        },
        AllCommercial: {
          Office: selectedProperty.AllCommercial?.Office || false,
          Shop: selectedProperty.AllCommercial?.Shop || false,
          Showroom: selectedProperty.AllCommercial?.Showroom || false,
          "Co Working Space":
            selectedProperty.AllCommercial?.["Co Working Space"] || false,
          "Ready to Move Offices":
            selectedProperty.AllCommercial?.["Ready to Move Offices"] || false,
          Warehouse: selectedProperty.AllCommercial?.Warehouse || false,
          "Cold Storage":
            selectedProperty.AllCommercial?.["Cold Storage"] || false,
          Other: selectedProperty.AllCommercial?.Other || false,
        },
        CommercialAvailability: {
          "Boss Cabin":
            selectedProperty.CommercialAvailability?.["Boss Cabin"] || false,
          "Manager Cabin":
            selectedProperty.CommercialAvailability?.["Manager Cabin"] || false,
          "Work Station":
            selectedProperty.CommercialAvailability?.["Work Station"] || false,
          Pantry: selectedProperty.CommercialAvailability?.Pantry || false,
          Reception:
            selectedProperty.CommercialAvailability?.Reception || false,
          "Waiting Area":
            selectedProperty.CommercialAvailability?.["Waiting Area"] || false,
          "Car Parking":
            selectedProperty.CommercialAvailability?.["Car Parking"] || false,
        },
        AllIndustrial: {
          "Ware House": selectedProperty.AllIndustrial?.["Ware House"] || false,
          "Heavy Manufacturing":
            selectedProperty.AllIndustrial?.["Heavy Manufacturing"] || false,
          "Light Manufacturing":
            selectedProperty.AllIndustrial?.["Light Manufacturing"] || false,
          "Distribution Warehouse":
            selectedProperty.AllIndustrial?.["Distribution Warehouse"] || false,
          "General Warehouse":
            selectedProperty.AllIndustrial?.["General Warehouse"] || false,
          "Flex Space": selectedProperty.AllIndustrial?.["Flex Space"] || false,
          "Showroom Buildings":
            selectedProperty.AllIndustrial?.["Showroom Buildings"] || false,
          "Research And Development":
            selectedProperty.AllIndustrial?.["Research And Development"] ||
            false,
          "Data Center":
            selectedProperty.AllIndustrial?.["Data Center"] || false,
        },
        AllPlotAndLand: {
          "Residential Plot":
            selectedProperty.AllPlotAndLand?.["Residential Plot"] || false,
          "Commercial Plot":
            selectedProperty.AllPlotAndLand?.["Commercial Plot"] || false,
          "Industrial Plot":
            selectedProperty.AllPlotAndLand?.["Industrial Plot"] || false,
          "Agriculture Land":
            selectedProperty.AllPlotAndLand?.["Agriculture Land"] || false,
          "Non - Agriculture Land":
            selectedProperty.AllPlotAndLand?.["Non - Agriculture Land"] ||
            false,
          "Project Land":
            selectedProperty.AllPlotAndLand?.["Project Land"] || false,
        },
        Condition: {
          "Building Site":
            selectedProperty.Condition?.["Building Site"] || false,
          "Structural Frame & Building Envelope":
            selectedProperty.Condition?.[
              "Structural Frame & Building Envelope"
            ] || false,
          Roofing: selectedProperty.Condition?.Roofing || false,
          Plumbing: selectedProperty.Condition?.Plumbing || false,
          Heating: selectedProperty.Condition?.Heating || false,
          "Air Conditioning & Ventilation":
            selectedProperty.Condition?.["Air Conditioning & Ventilation"] ||
            false,
          Electrical: selectedProperty.Condition?.Electrical || false,
          "Vertical Transportation (Elevators & Escalators)":
            selectedProperty.Condition?.[
              "Vertical Transportation (Elevators & Escalators)"
            ] || false,
          "Life Safety / Fire Protection":
            selectedProperty.Condition?.["Life Safety / Fire Protection"] ||
            false,
          "Interior Elements":
            selectedProperty.Condition?.["Interior Elements"] || false,
          "Fully Furnished":
            selectedProperty.Condition?.["Fully Furnished"] || false,
          Furnished: selectedProperty.Condition?.Furnished || false,
          "Semi Furnished":
            selectedProperty.Condition?.["Semi Furnished"] || false,
          "Kitchen Fix": selectedProperty.Condition?.["Kitchen Fix"] || false,
          "Fix Furnished":
            selectedProperty.Condition?.["Fix Furnished"] || false,
          Unfurnished: selectedProperty.Condition?.Unfurnished || false,
        },
        ResidentialAvailability: {
          "1 Bhk": selectedProperty.ResidentialAvailability?.["1 Bhk"] || false,
          "2 Bhk": selectedProperty.ResidentialAvailability?.["2 Bhk"] || false,
          "3 Bhk": selectedProperty.ResidentialAvailability?.["3 Bhk"] || false,
          "4 Bhk": selectedProperty.ResidentialAvailability?.["4 Bhk"] || false,
          "5 Bhk": selectedProperty.ResidentialAvailability?.["5 Bhk"] || false,
          "6 Bhk": selectedProperty.ResidentialAvailability?.["6 Bhk"] || false,
          "Above 6Bhk":
            selectedProperty.ResidentialAvailability?.["Above 6Bhk"] || false,
        },
        ResidentAvailableFor: {
          "FOR FAMILY":
            selectedProperty.ResidentAvailableFor?.["FOR FAMILY"] || false,
          "FOR EXICUTIVE":
            selectedProperty.ResidentAvailableFor?.["FOR EXICUTIVE"] || false,
          "FOR BECHLORE":
            selectedProperty.ResidentAvailableFor?.["FOR BECHLORE"] || false,
        },
        Facing: {
          East: selectedProperty.Facing?.East || false,
          North: selectedProperty.Facing?.North || false,
          "North-East": selectedProperty.Facing?.["North-East"] || false,
          "North-West": selectedProperty.Facing?.["North-West"] || false,
          South: selectedProperty.Facing?.South || false,
          "South-East": selectedProperty.Facing?.["South-East"] || false,
          "South-West": selectedProperty.Facing?.["South-West"] || false,
          West: selectedProperty.Facing?.West || false,
        },
      });
    }
    setEditData(id);
  };

  console.log(formData);

  return (
    <div className="text-white  mx-auto p-4">
      {editData && (
        <ViewDescModal
          close={() => {
            setEditData("");
          }}
          data={formData}
        />
      )}
      <div className="mb-6">
        <p className="text-xl font-semibold uppercase ">Requirement Post</p>
        <p className=" text-sm text-gray-200">View All User Requirement Post</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <ul className="space-y-6 gap-4">
          {requirements?.map((requirement, index) => (
            <li
              key={index}
              onClick={() => handleView(requirement._id)}
              className="p-6 border cursor-pointer sticky top-0 z-10 bg-gray-800 text-white border-gray-700 rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">
                {requirement?.RequiredPersonRole}:{" "}
                {requirement?.RequiredPersonName}
              </h3>
              <p className="mb-1">
                <span className="font-semibold">Phone:</span>{" "}
                {requirement?.RequiredPersonPhone}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Email:</span>{" "}
                {requirement?.RequiredPersonEmail}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Property Type:</span>{" "}
                {requirement?.RequiredPropertyDetails?.RequiredPropertyType}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Description:</span>{" "}
                {requirement?.RequiredPropertyDetails?.RequiredDescription}
              </p>
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                {requirement?.RequiredPropertyDetails?.RequiredBudget?.min} -{" "}
                {requirement?.RequiredPropertyDetails?.RequiredBudget?.max}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
