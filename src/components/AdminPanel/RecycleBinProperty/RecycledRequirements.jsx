import React, { useEffect, useState } from "react";
import ViewDescModal from "../../../../utils/ViewDescModal";

export default function RecycledRequirements({
  filteredData,
  deleteById,
  updateById,
}) {
  const [formData, setFormData] = useState({
    _id: "",
    RequiredPersonRole: "",
    RequiredPersonName: "",
    RequiredPersonPhone: "",
    RequiredPersonEmail: "",
    RequiredPersonDate: "",
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

  const [filter, setFilter] = useState({
    month: "", // Default to current month
    year: new Date().getFullYear(),
    currentYear: 2025,
    filterBy: "",
    propertyType: "",
  });
  const [editData, setEditData] = useState("");

  console.log(filteredData)

  useEffect(() => {
    if (filteredData) {
      setFormData((prevData) => ({
        ...prevData,
        _id: filteredData._id || "",
        RequiredPersonRole: filteredData?.RequiredPersonRole || "",
        RequiredPersonName: filteredData?.RequiredPersonName || "",
        RequiredPersonDate: filteredData?.RequiredPersonDate || "",
        RequiredPersonPhone: filteredData?.RequiredPersonPhone || "",
        RequiredPersonEmail: filteredData?.RequiredPersonEmail || "",
        RequiredAreaSqft: {
          min: filteredData?.RequiredAreaSqft?.min || "",
          max: filteredData?.RequiredAreaSqft?.max || "",
        },
        RequiredBudget: {
          min: filteredData?.RequiredBudget?.min || "",
          max: filteredData?.RequiredBudget?.max || "",
        },
        RequiredPropertyDetails: {
          RequiredPropertyType:
            filteredData?.RequiredPropertyDetails?.RequiredPropertyType ||
            "Residential",
          RequiredAreaSqft: {
            min:
              filteredData?.RequiredPropertyDetails?.RequiredAreaSqft?.min ||
              "",
            max:
              filteredData?.RequiredPropertyDetails?.RequiredAreaSqft?.max ||
              "",
          },
          RequiredBudget: {
            min:
              filteredData?.RequiredPropertyDetails?.RequiredBudget?.min || "",
            max:
              filteredData?.RequiredPropertyDetails?.RequiredBudget?.max || "",
          },
          RequiredPropertySellOrRent:
            filteredData?.RequiredPropertyDetails?.RequiredPropertySellOrRent ||
            "",
          RequiredConstructionStatus:
            filteredData?.RequiredPropertyDetails?.RequiredConstructionStatus ||
            "",
          RequiredDescription:
            filteredData?.RequiredPropertyDetails?.RequiredDescription || "",
        },
        AllResidential: filteredData?.AllResidential || {
          "Flat/Apartment": false,
          "High Rise Apartment": false,
          Bungalows: false,
          Penthouse: false,
          "Low Rise Apartment": false,
          "Row House": false,
          "Weekend Villas": false,
          "Farm House": false,
        },
        AllCommercial: filteredData?.AllCommercial || {
          Office: false,
          Shop: false,
          Showroom: false,
          "Co Working Space": false,
          "Ready to Move Offices": false,
          Warehouse: false,
          "Cold Storage": false,
          Other: false,
        },
        CommercialAvailability: filteredData?.CommercialAvailability || {
          "Boss Cabin": false,
          "Manager Cabin": false,
          "Work Station": false,
          Pantry: false,
          Reception: false,
          "Waiting Area": false,
          "Car Parking": false,
        },
        AllIndustrial: filteredData?.AllIndustrial || {
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
        AllPlotAndLand: filteredData?.AllPlotAndLand || {
          "Residential Plot": false,
          "Commercial Plot": false,
          "Industrial Plot": false,
          "Agriculture Land": false,
          "Non - Agriculture Land": false,
          "Project Land": false,
        },
        Condition: filteredData?.Condition || {
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
        ResidentialAvailability: filteredData?.ResidentialAvailability || {
          "1 Bhk": false,
          "2 Bhk": false,
          "3 Bhk": false,
          "4 Bhk": false,
          "5 Bhk": false,
          "6 Bhk": false,
          "Above 6Bhk": false,
        },
        ResidentAvailableFor: filteredData?.ResidentAvailableFor || {
          "FOR FAMILY": false,
          "FOR EXICUTIVE": false,
          "FOR BECHLORE": false,
        },
        Facing: filteredData?.Facing || {
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
  }, [filteredData]);
  const extrafilter = filteredData?.filter((property) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to 00:00:00

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    yesterday.setHours(0, 0, 0, 0); // Normalize yesterday's date to 00:00:00

    const propertyDate = new Date(property?.RequiredPersonDate);
    propertyDate.setHours(0, 0, 0, 0); // Normalize the property date to 00:00:00

    const isToday =
      propertyDate.getFullYear() === today.getFullYear() &&
      propertyDate.getMonth() === today.getMonth() &&
      propertyDate.getDate() === today.getDate();

    const isYesterday =
      propertyDate.getFullYear() === yesterday.getFullYear() &&
      propertyDate.getMonth() === yesterday.getMonth() &&
      propertyDate.getDate() === yesterday.getDate();

    const matchesDate =
      filter.filterBy === "Today"
        ? isToday // Show only today's entries
        : filter.filterBy === "Yesterday"
        ? isYesterday // Show only yesterday's entries
        : filter.filterBy === "All" // Show all entries if 'All' filter is selected
        ? true
        : filter.year && !filter.month // Show entries for the selected year, all months
        ? propertyDate.getFullYear() === Number(filter.year)
        : filter.month && filter.year // Show entries for selected month/year
        ? propertyDate >= new Date(filter.year, filter.month - 1, 1) &&
          propertyDate <= new Date(filter.year, filter.month, 0)
        : true; // Show all entries if no filter is selected

    const matchesPropertyType = filter.propertyType
      ? property.RequiredPropertyDetails?.RequiredPropertyType ===
        filter.propertyType
      : true;

    return matchesDate && matchesPropertyType;
  });



  const handleView = (id) => {
    const selectedProperty = filteredData.find(
      (property) => property._id === id
    ); // Filter data by ID
    if (selectedProperty) {
      setFormData({
        _id: selectedProperty._id || "",
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
  return (
    <div className="text-white  mx-auto p-4">
      {editData && (
        <ViewDescModal
          close={() => {
            setEditData("");
          }}
          data={formData}
          recycle={false}
          updateById={updateById}
          deleteById={deleteById}
        />
      )}
      <div className="mb-2 flex justify-between">
        <div className="flex gap-1 ">
          <select
            value={filter.propertyType}
            className="appearance-none bg-transparent border outline-none  p-1 px-4 "
            onChange={(e) =>
              setFilter({ ...filter, propertyType: e.target.value })
            }
          >
            <option className="text-black" value="">
              Select type ▼
            </option>
            <option className="text-black" value={"Residential"}>
              Residential
            </option>
            <option className="text-black" value={"Commercial"}>
              Commercial
            </option>
            <option className="text-black" value={"Industrial"}>
              Industrial
            </option>
            <option className="text-black" value={"Plot&Land"}>
              Agricultural Plot
            </option>

            {/* Add other months */}
          </select>

          <button
            className={`border  ${
              filter.filterBy === "Today" && "bg-gray-800"
            } px-4 rounded`}
            onClick={() =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                filterBy: prevFilter.filterBy === "Today" ? "" : "Today", // Toggle between today and no filter
              }))
            }
          >
            Today's
          </button>
          <button
            className={`border ${
              filter.filterBy === "Yesterday" && "bg-gray-800"
            } px-4 rounded`}
            onClick={() =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                filterBy:
                  prevFilter.filterBy === "Yesterday" ? "" : "Yesterday", // Toggle between today and no filter
              }))
            }
          >
            Yesterday's
          </button>
          <button
            className={`border ${
              filter.filterBy === "All" && "bg-gray-800"
            } px-4 rounded`}
            onClick={() =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                filterBy: prevFilter.filterBy === "All" ? "" : "All", // Toggle between today and no filter
              }))
            }
          >
            All
          </button>
        </div>
        <div className="border rounded ">
          <select
            value={filter.month}
            className="appearance-none bg-transparent outline-none  p-1 px-4 "
            onChange={(e) =>
              setFilter({ ...filter, month: e.target.value, filterBy: "" })
            }
          >
            <option className="text-black" value="">
              Select Month
            </option>
            <option className="text-black" value={1}>
              January
            </option>
            <option className="text-black" value={2}>
              February
            </option>
            <option className="text-black" value={3}>
              March
            </option>
            <option className="text-black" value={4}>
              April
            </option>
            <option className="text-black" value={5}>
              May
            </option>
            <option className="text-black" value={6}>
              June
            </option>
            <option className="text-black" value={7}>
              July
            </option>
            <option className="text-black" value={8}>
              August
            </option>
            <option className="text-black" value={9}>
              September
            </option>
            <option className="text-black" value={10}>
              October
            </option>
            <option className="text-black" value={11}>
              November
            </option>
            <option className="text-black" value={12}>
              December
            </option>

            {/* Add other months */}
          </select>
          <span>/ </span>
          <select
            value={filter.year}
            className="appearance-none bg-transparent outline-none p-1 px-4"
            onChange={(e) =>
              setFilter({ ...filter, year: e.target.value, filterBy: "" })
            }
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option
                key={filter.currentYear - index}
                value={filter.currentYear - index}
                className="text-black"
              >
                {filter.currentYear - index}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="px- bg-gray-800 rounded-lg shadow-lg">
        <ul className="space-y-6 gap-4">
          {extrafilter
            ?.slice()
            .reverse()
            .map((requirement, index) => (
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
