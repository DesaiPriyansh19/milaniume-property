import React, { useState } from "react";
import UploadWidget from "../../UploadWidget/UploadWidget";
import InputField from "../../../../utils/InputFields";
import ResidentForm from "./ResidentForm";
import IndustrialForm from "./IndustrialForm";
import AgricultralPlot from "./AgricultralPlot";
import CommercialForm from "./CommercialForm";

export default function AddProperty({ addNew, handleEdit }) {
  const [formData, setFormData] = useState({
    PropertyName: "",
    PropertyType: "Commercial",
    PropertyStatus: "",
    ForSale: true,
    ForRent: false,
    Featured: false,
    Verified: true,
    Prices: {
      SalesPrice: "",
      RentPrice: "",
    },
    PropertyDetails: {
      Bedrooms: "",
      Bathrooms: "",
      Sqft: "",
    },

    Landmark: "",
    Address: "",
    PinCode: "",
    City: "",
    ContactDetails: {
      ContactEmail: "",
      ContactPhone: "",
    },
    PropertyPhotos: [],
    AllResidential: {
      FlatApartment: false,
      IndependentBuilderFloor: false,
      IndependentHouseVilla: false,
      ResidentialPlot: false,
      FarmHouse: false,
      Other: false,
    },
    AllCommercial: {
      ReadyToMoveOffices: false,
      BareShallOffices: false,
      ShopsRetail: false,
      CommercialInstLand: false,
      Warehouse: false,
      ColdStorage: false,
      Other: false,
    },
    AllIndustrial: {
      WareHouse: false,
      HeavyManufacturing: false,
      LightManufacturing: false,
      DistributionWarehouse: false,
      GeneralWarehouse: false,
      FlexSpace: false,
      ShowroomBuildings: false,
      ResearchAndDevelopment: false,
      DataCenter: false,
    },
    AllPlotLand: {
      ResidentialPlot: false,
      CommercialPlot: false,
      IndustrialPlot: false,
      AgriculturalLand: false,
      NonAgriculturalLand: false,
      WeekendVillaSite: false,
    },
    ResidentialAvailabilityType: {
      LowRiseApartment: false,
      Bungalow: false,
      Penthouse: false,
      RowHouse: false,
      HighRiseApartment: false,
      WeekendVillas: false,
      Tenament: false,
      Building: false,
    },
    BhkScheme: {
      oneBHK: false,
      twoBHK: false,
      threeBHK: false,
      fourBHK: false,
      fiveBHK: false,
      sixBHK: false,
      aboveSixBHK: false,
      duplex: false,
      pg: false,
    },
    CommercialPropertyFeatures: {
      BossCabin: false,
      ManagerCabin: false,
      WorkStation: false,
      Pantry: false,
      Reception: false,
      WaitingArea: false,
      CarParking: false,
    },
    Condition: {
      BuildingSite: false,
      StructuralFrameBuildingEnvelope: false,
      Roofing: false,
      Plumbing: false,
      Heating: false,
      AirConditioningVentilation: false,
      Electrical: false,
      VerticalTransportation: false,
      LifeSafetyFireProtection: false,
      InteriorElements: false,
      FullyFurnished: false,
      Furnished: false,
      SemiFurnished: false,
      KitchenFix: false,
      FixFurnished: false,
      Unfurnished: false,
    },
    ResidentAvailable: {
      ForFamily: false,
      ForExecutive: false,
      ForBachlore: false,
    },
    Amenities: {
      WaterSupply247: false,
      SeniorCitizenSitting: false,
      BanquetHall: false,
      HomeTheatre: false,
      IndoorsGame: false,
      OutdoorsGame: false,
      VisitorParking: false,
      AllottedParking: false,
      Lift: false,
      PowerBackup: false,
      GasLine: false,
      SwimmingPool: false,
      Garden: false,
      ChildrenPlayArea: false,
      ClubHouse: false,
      CCTV: false,
    },
    Facing: {
      East: false,
      North: false,
      NorthEast: false,
      NorthWest: false,
      South: false,
      SouthEast: false,
      SouthWest: false,
      West: false,
    },
    PropertyDescription: "",
    RecycleBin: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nameParts = name.split(".");
    setFormData((prevData) => {
      if (nameParts.length > 1) {
        const updatedData = { ...prevData };
        let temp = updatedData;

        // Traverse the nested object path
        for (let i = 0; i < nameParts.length - 1; i++) {
          temp = temp[nameParts[i]]; // Navigate to the nested object
        }

        // Update the final nested value
        temp[nameParts[nameParts.length - 1]] =
          type === "checkbox" ? checked : value;

        return updatedData;
      }

      // Handle non-nested fields
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleMainPhotoChange = (index, value) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.PropertyPhotos];
      updatedPhotos[index] = value;
      return { ...prevData, PropertyPhotos: updatedPhotos };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const filterDefaultValues = (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          const nestedFiltered = filterDefaultValues(obj[key]);

          // If all values inside the nested object are false, include it as an empty object
          if (Object.values(nestedFiltered).length === 0) {
            acc[key] = {}; // Include as an empty object
          } else {
            acc[key] = nestedFiltered; // Include the filtered nested object
          }
        } else if (Array.isArray(obj[key])) {
          if (obj[key].length > 0) acc[key] = obj[key]; // Include non-empty arrays
        } else if (obj[key] !== false && obj[key] !== "") {
          acc[key] = obj[key]; // Include values that are not default
        }
        return acc;
      }, {});
    };

    const filteredData = filterDefaultValues(formData);

    if (!Array.isArray(filteredData.PropertyPhotos)) {
      filteredData.PropertyPhotos = [];
    }

    try {
      const response = await addNew(filteredData);
      if (response.data.data) {
        console.log("true"); // Confirm the response is valid
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log the error
    }
    handleEdit("View");
  };

  return (
    <div className="text-white  mx-auto p-4">
      {" "}
      <div className="flex mb-6 justify-between">
        <div>
          {" "}
          <p className="text-xl font-semibold uppercase ">Add Property</p>
          <p className=" text-sm text-gray-200">
            Add New Real Estate To Your Portfolio
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className=" bg-blue-500 text-white h-10 p-2 rounded "
          >
            Confirm
          </button>
          <button
            onClick={() => {
              handleEdit("View");
            }}
            className=" bg-red-500 text-white h-10 px-3 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full  ">
        <form className="w-full text-white rounded shadow-md">
          <div className="flex w-full gap-4 justify-between">
            <div className="mb-4 w-full">
              <InputField
                label="Property Name"
                type="text"
                name="PropertyName"
                placeholder="PropertyName"
                value={formData.PropertyName}
                onChange={handleInputChange}
                autoComplete="propertyname"
                variant={1}
              />
            </div>
            <div className="mb-4  h-full  w-full">
              <InputField
                label="Property Type"
                type="select"
                name="PropertyType"
                value={formData.PropertyType}
                onChange={handleInputChange}
                variant={1}
                options={[
                  { value: "Commercial", label: "Commercial" },
                  { value: "Residential", label: "Residential" },
                  { value: "Industrial", label: "Industrial" },
                  { value: "Agricultural Plot", label: "Agricultural Plot" },
                  { value: "Rental Property", label: "Rental Property" },
                ]}
              />
            </div>
            <div className="mb-4  h-full  w-full">
              <InputField
                label="Property Status"
                type="select"
                name="PropertyStatus"
                value={formData.PropertyStatus}
                onChange={handleInputChange}
                variant={1}
                options={[
                  { value: "NewLaunch", label: "New Launch" },
                  { value: "UnderConstruction", label: "Under Construction" },
                  { value: "ReadyToMove", label: "Ready To Move" },
                  { value: "OldConstruction", label: "Old Construction " },
                ]}
              />
            </div>
          </div>
          {/* CheckBoxes */}
          <div
            className={`flex flex-wrap ${
              formData.PropertyType === "Agricultural Plot"
                ? "justify-normal gap-10"
                : "justify-between"
            }  gap-6`}
          >
            {/* Property Status */}
            <div>
              <label
                htmlFor={"Property Status"}
                className={"block text-sm mb-2  font-semibold"}
              >
                Property Status
              </label>
              <div className="flex flex-col mb-3 ">
                <InputField
                  type="checkbox"
                  id="ForSale"
                  label="For Sale"
                  name="ForSale"
                  variant={2}
                  checked={formData.ForSale}
                  onChange={handleInputChange}
                />

                <InputField
                  type="checkbox"
                  id="ForRent"
                  label="For Rent"
                  name="ForRent"
                  variant={2}
                  checked={formData.ForRent}
                  onChange={handleInputChange}
                />

                <InputField
                  type="checkbox"
                  id="Featured"
                  label="Featured"
                  name="Featured"
                  variant={2}
                  checked={formData.Featured}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {formData.PropertyType === "Commercial" && (
              <CommercialForm
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {(formData.PropertyType === "Residential" ||
              formData.PropertyType === "Rental Property") && (
              <ResidentForm
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            {formData.PropertyType === "Industrial" && (
              <IndustrialForm
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {formData.PropertyType === "Agricultural Plot" && (
              <AgricultralPlot
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {/* Facing */}
            <div>
              {/* Label for the Facing section */}
              <label
                htmlFor={"Facing"}
                className={"block text-sm mb-2 font-semibold"}
              >
                Facing
              </label>
              <div className="flex flex-col mb-3">
                <InputField
                  type="checkbox"
                  id="East"
                  label="East"
                  name="Facing.East"
                  variant={2}
                  checked={formData.Facing.East}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="North"
                  label="North"
                  name="Facing.North"
                  variant={2}
                  checked={formData.Facing.North}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="NorthEast"
                  label="North East"
                  name="Facing.NorthEast"
                  variant={2}
                  checked={formData.Facing.NorthEast}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="NorthWest"
                  label="North West"
                  name="Facing.NorthWest"
                  variant={2}
                  checked={formData.Facing.NorthWest}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="South"
                  label="South"
                  name="Facing.South"
                  variant={2}
                  checked={formData.Facing.South}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="SouthEast"
                  label="South East"
                  name="Facing.SouthEast"
                  variant={2}
                  checked={formData.Facing.SouthEast}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="SouthWest"
                  label="South West"
                  name="Facing.SouthWest"
                  variant={2}
                  checked={formData.Facing.SouthWest}
                  onChange={handleInputChange}
                />
                <InputField
                  type="checkbox"
                  id="West"
                  label="West"
                  name="Facing.West"
                  variant={2}
                  checked={formData.Facing.West}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4 justify-between">
            <div className="mb-4 w-full">
              <InputField
                label="SalesPrice"
                type="text"
                name="Prices.SalesPrice"
                placeholder="SalesPrice"
                value={formData.Prices.SalesPrice}
                onChange={handleInputChange}
                autoComplete="salesprice"
                variant={1}
              />
            </div>

            <div className="mb-4 w-full">
              <InputField
                label="RentPrice"
                type="text"
                name="Prices.RentPrice"
                placeholder="RentPrice"
                value={formData.Prices.RentPrice}
                onChange={handleInputChange}
                autoComplete="rentprice"
                variant={1}
              />
            </div>
          </div>

          <div className="flex w-full gap-4 justify-between">
            <div className="w-full mb-4">
              <InputField
                label="Bedrooms"
                type="text"
                name="PropertyDetails.Bedrooms"
                placeholder="Enter number of bedrooms"
                value={formData.PropertyDetails.Bedrooms}
                onChange={handleInputChange}
                autoComplete="bedrooms"
                variant={1}
              />
            </div>

            <div className="w-full mb-4">
              <InputField
                label="Bathrooms"
                type="text"
                name="PropertyDetails.Bathrooms"
                placeholder="Enter number of bathrooms"
                value={formData.PropertyDetails?.Bathrooms}
                onChange={handleInputChange}
                autoComplete="bathrooms"
                variant={1}
              />
            </div>

            <div className="w-full mb-4">
              <InputField
                label="Square Footage"
                type="text"
                name="PropertyDetails.Sqft"
                placeholder="Enter square footage"
                value={formData.PropertyDetails?.Sqft}
                onChange={handleInputChange}
                autoComplete="sqft"
                variant={1}
              />
            </div>

            <div className="w-full mb-4">
              <InputField
                label="Landmark"
                type="text"
                name="Landmark"
                placeholder="Enter Landmark"
                value={formData.Landmark}
                onChange={handleInputChange}
                autoComplete="Landmark"
                variant={1}
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <InputField
              label="Address"
              type="text"
              name="Address"
              placeholder="Enter Address"
              value={formData.Address}
              onChange={handleInputChange}
              autoComplete="Address"
              variant={1}
            />
          </div>
          <div className="w-full flex justify-between gap-4">
            <div className="w-full mb-4">
              <InputField
                label="City"
                type="text"
                name="City"
                placeholder="Enter city"
                value={formData.City}
                onChange={handleInputChange}
                autoComplete="city"
                variant={1}
              />
            </div>
            <div className="w-full mb-4">
              <InputField
                label="Pin Code"
                type="text"
                name="PinCode"
                placeholder="Enter PinCode"
                value={formData.PinCode}
                onChange={handleInputChange}
                autoComplete="pincode"
                variant={1}
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-4">
            <div className="w-full mb-4">
              <InputField
                label="Contact Email"
                type="email"
                name="ContactDetails.ContactEmail"
                placeholder="Enter contact email"
                value={formData.ContactDetails.ContactEmail}
                onChange={handleInputChange}
                autoComplete="email"
                variant={1}
              />
            </div>

            <div className="w-full mb-4">
              <InputField
                label="Contact Phone"
                type="tel"
                name="ContactDetails.ContactPhone"
                placeholder="Enter contact phone"
                value={formData.ContactDetails.ContactPhone}
                onChange={handleInputChange}
                autoComplete="tel"
                variant={1}
              />
            </div>
          </div>

          <section className="mb-4">
            <p className="text-base font-bold">Property Photos (URLs)</p>
            {formData?.PropertyPhotos?.map((photo, index) => (
              <div key={index} className="flex items-center">
                <div className="mb-4 w-full">
                  <InputField
                    label={`Main Photo URL ${index + 1}`}
                    type="text"
                    name={`PropertyPhotos[${index}]`}
                    value={photo}
                    onChange={(e) =>
                      handleMainPhotoChange(index, e.target.value)
                    }
                    placeholder={`Main Photo URL ${index + 1}`}
                    variant={1}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const updatedPhotos = [...formData.PropertyPhotos];
                    updatedPhotos.splice(index, 1);
                    setFormData((prevData) => ({
                      ...prevData,
                      PropertyPhotos: updatedPhotos,
                    }));
                  }}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setFormData((prevData) => ({
                    ...prevData,
                    PropertyPhotos: [...prevData.PropertyPhotos, ""], // Add a new empty photo input
                  }));
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
              >
                Add Blank Field Main Photo
              </button>
              <UploadWidget
                uwConfig={{
                  cloudName: "Millinum",
                  uploadPreset: "millinum",
                  multiple: true,
                  maxImageFileSize: 2000000,
                  folder: "Property",
                }}
                setFormData={setFormData}
              />
            </div>
          </section>
          <div className="w-full mb-4">
            <InputField
              label="Property Description"
              type="textarea"
              name="PropertyDescription"
              placeholder="Enter Property Description"
              value={formData.PropertyDescription}
              onChange={handleInputChange}
              autoComplete="propertydescription"
              variant={1}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
