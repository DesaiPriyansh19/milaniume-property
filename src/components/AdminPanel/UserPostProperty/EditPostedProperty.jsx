import React, { useState } from "react";
import ConfirmationModal from "../../../../utils/ConfirmationModal";
import InputField from "../../../../utils/InputFields";
import CommercialForm from "../AdminProperty/CommercialForm";
import ResidentForm from "../AdminProperty/ResidentForm";
import IndustrialForm from "../AdminProperty/IndustrialForm";
import AgricultralPlot from "../AdminProperty/AgricultralPlot";
import UploadWidget from "../../UploadWidget/UploadWidget";
import axios from "axios";

export default function EditPostedProperty({
  formData,
  setFormData,
  handleEdit,
  updateById,
  editData,
  details,
}) {
  const [modal, setModal] = useState(null);
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
      const updatedPhotos = [...prevData.Photos];
      updatedPhotos[index] = value;
      return { ...prevData, Photos: updatedPhotos };
    });
  };

  const handleDelete = (id, data) => {
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

    const filteredData = filterDefaultValues(data);

    if (!Array.isArray(filteredData.PropertyPhotos)) {
      filteredData.PropertyPhotos = [];
    }

    const trashdata = {
      ...filteredData,
      RecycleBin: true,
    };

    const filteredProperties = details.PostedProperties.filter(
      (prop) => prop._id !== id // Filter out the property with the matching id
    );

    setModal({
      message: `Are you sure you want to put this estate ${data.PropertyName} in recycle bin?`,
      onConfirm: async () => {
        await updateById(id, trashdata); // Perform delete operation
        // try {
        //   // Perform the API call using axios
        //   const response = await axios.put(
        //     `https://milaniumepropertybackend.vercel.app/api/userpostproperty/${details.selectedPersonId}`,
        //     { PostedProperties: filteredProperties }
        //   );

        //   if (response) {
        //     console.log(response.data);
        //   } else {
        //     console.error("Failed to delete the estate.");
        //   }
        // } catch (error) {
        //   console.error("Error:", error); // Handle any unexpected errors
        // }
        setModal(null); // Close modal
        handleEdit("View");
      },
      onCancel: () => setModal(null), // Close modal
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
      await updateById(editData.id, filteredData);
      console.log("Data updated successfully.");
      handleEdit("View");
    } catch (error) {
      console.error("Error updating data:", error); // Debugging error
    }

    handleEdit("View");
  };

  return (
    <>
      {modal && (
        <ConfirmationModal
          message={modal.message}
          onConfirm={modal.onConfirm}
          onCancel={modal.onCancel}
        />
      )}
      <div className="text-white  mx-auto p-4">
        {" "}
        <div className="flex mb-6 justify-between">
          <div>
            {" "}
            <p className="text-xl font-semibold uppercase ">
              {details.Fullname
                ? `Edit ${details.Fullname} Property`
                : "Edit Property"}
            </p>
            <p className=" text-sm text-gray-200">
              {" "}
              {details.Fullname
                ? `Editing ${details.Fullname} Real Estate`
                : "Edit Your Real Estate"}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className=" bg-green-500 text-white h-10 p-2 rounded "
            >
              Confirm
            </button>
            <button
              onClick={() => {
                handleEdit("View");
              }}
              className=" bg-blue-500 text-white h-10 px-3 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDelete(formData.id, formData);
              }}
              className=" bg-red-500 text-white h-10 px-3 rounded"
            >
              Trash
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full min-h-screen ">
          <form className="w-full text-white rounded shadow-md">
            <div className="grid grid-cols-10 gap-4">
              <div className="mb-4 col-span-4 w-full">
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
              <div className="mb-4  h-full col-span-2 w-full">
                <InputField
                  label="Property Type"
                  type="select"
                  name="PropertyType"
                  value={formData.PropertyType}
                  onChange={handleInputChange}
                  multiple={false}
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
              <div className="mb-4  h-full col-span-2 w-full">
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
              <div className="mb-4  h-full col-span-2  w-full">
                <InputField
                  label="Verified"
                  type="select"
                  name="Verified"
                  value={formData.Verified}
                  onChange={handleInputChange}
                  multiple={false}
                  variant={1}
                  options={[
                    { value: true, label: "True" },
                    { value: false, label: "False" },
                  ]}
                />
              </div>
            </div>
            {/* CheckBoxes */}
            <div
              className={`flex flex-wrap ${
                formData.PropertyType === "Agricultural Plot"
                  ? "justify-normal gap-20"
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

            {/* Sales and Rent Price */}
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

            <div className="flex w-full gap-4 justify-between">
              <div className="w-full mb-4">
                <InputField
                  label="Min Sqft"
                  type="text"
                  name="Area.Sqft.min"
                  placeholder="Enter Min Sqft"
                  value={formData?.Area?.Sqft?.min}
                  onChange={handleInputChange}
                  autoComplete="min-sqft"
                  variant={1}
                />
              </div>

              <div className="w-full mb-4">
                <InputField
                  label="Max Sqft"
                  type="text"
                  name="Area.Sqft.max"
                  placeholder="Enter Max Sqft"
                  value={formData?.Area?.Sqft?.max}
                  onChange={handleInputChange}
                  autoComplete="max-sqft"
                  variant={1}
                />
              </div>

              <div className="w-full mb-4">
                <InputField
                  label="Max Sqyd"
                  type="text"
                  name="Area.Sqyd.max"
                  placeholder="Enter Max Sqft"
                  value={formData?.Area?.Sqyd?.max}
                  onChange={handleInputChange}
                  autoComplete="max-sqyd"
                  variant={1}
                />
              </div>

              <div className="w-full mb-4">
                <InputField
                  label="Min Sqyd"
                  type="text"
                  name="Area.Sqyd.min"
                  placeholder="Enter Min Sqyd"
                  value={formData?.Area?.Sqyd?.min}
                  onChange={handleInputChange}
                  autoComplete="min-sqyd"
                  variant={1}
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <InputField
                label="Address"
                type="textarea"
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
              <p className="text-base font-bold ">Property Photos (URLs)</p>
              {formData?.PropertyPhotos.map((photo, index) => (
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
    </>
  );
}
