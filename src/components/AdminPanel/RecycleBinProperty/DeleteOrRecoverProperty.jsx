import React, { useState } from "react";
import ConfirmationModal from "../../../../utils/ConfirmationModal";
import InputField from "../../../../utils/InputFields";
import ResidentForm from "../AdminProperty/ResidentForm";
import IndustrialForm from "../AdminProperty/IndustrialForm";
import AgricultralPlot from "../AdminProperty/AgricultralPlot";
import UploadWidget from "../../UploadWidget/UploadWidget";
import CommercialForm from "../AdminProperty/CommercialForm";

export default function DeleteOrRecoverProperty({
  formData,
  setFormData,
  handleEdit,
  updateById,
  deleteById,
  editData,
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

  const handleDelete = (id, name) => {
    setModal({
      message: `Are you sure you want to delete this estate ${name} from recycle bin?`,
      onConfirm: () => {
        deleteById(id); // Perform delete operation
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

    const recoverData = {
      ...filteredData,
      RecycleBin: false,
    };

    try {
      await updateById(editData.id, recoverData);
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
            <p className="text-xl font-semibold uppercase ">Edit Property</p>
            <p className=" text-sm text-gray-200">Edit Your Real Estate</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className=" bg-green-500 text-white h-10 p-2 rounded "
            >
              Recover
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
                handleDelete(formData.id, formData.PropertyName);
              }}
              className=" bg-red-500 text-white h-10 px-3 rounded"
            >
              Delete
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                    disabled={true}
                    id="ForSale"
                    label="For Sale"
                    name="ForSale"
                    variant={2}
                    checked={formData.ForSale}
                    onChange={handleInputChange}
                  />

                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="ForRent"
                    label="For Rent"
                    name="ForRent"
                    variant={2}
                    checked={formData.ForRent}
                    onChange={handleInputChange}
                  />

                  <InputField
                    type="checkbox"
                    disabled={true}
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
                  disabled={true}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {(formData.PropertyType === "Residential" ||
                formData.PropertyType === "Rental Property") && (
                <ResidentForm
                  disabled={true}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {formData.PropertyType === "Industrial" && (
                <IndustrialForm
                  disabled={true}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {formData.PropertyType === "Agricultural Plot" && (
                <AgricultralPlot
                  disabled={true}
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
                    disabled={true}
                    id="East"
                    label="East"
                    name="Facing.East"
                    variant={2}
                    checked={formData.Facing.East}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="North"
                    label="North"
                    name="Facing.North"
                    variant={2}
                    checked={formData.Facing.North}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="NorthEast"
                    label="North East"
                    name="Facing.NorthEast"
                    variant={2}
                    checked={formData.Facing.NorthEast}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="NorthWest"
                    label="North West"
                    name="Facing.NorthWest"
                    variant={2}
                    checked={formData.Facing.NorthWest}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="South"
                    label="South"
                    name="Facing.South"
                    variant={2}
                    checked={formData.Facing.South}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
                    id="SouthEast"
                    label="South East"
                    name="Facing.SouthEast"
                    variant={2}
                    checked={formData.Facing.SouthEast}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="checkbox"
                    disabled={true}
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
                    disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                      disabled={true}
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
                  disabled={true}
                  setFormData={setFormData}
                />
              </div>
            </section>

            <div className="w-full mb-4">
              <InputField
                label="Property Description"
                disabled={true}
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
