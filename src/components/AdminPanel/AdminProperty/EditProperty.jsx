import React from "react";
import UploadWidget from "../../UploadWidget/UploadWidget";
import InputField from "../../../../utils/InputFields";

export default function EditProperty({
  formData,
  setFormData,
  handleEdit,
  updateById,
  editData,
}) {
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
  const handleSelectChange = (e) => {
    const { name, multiple } = e.target;

    if (multiple) {
      const selectedValues = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedValues,
      }));
    }
    return {
      ...prevData,
      [name]: value,
    };
  };
  const handleMainPhotoChange = (index, value) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.Photos];
      updatedPhotos[index] = value;
      return { ...prevData, Photos: updatedPhotos };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited data", formData);
    updateById(editData.id, formData);
    handleEdit("View");
  };

  return (
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
      <div className="flex justify-center items-center w-full min-h-screen ">
        <form className="w-full text-white rounded shadow-md">
          <div className="grid grid-cols-2 w-full gap-4 justify-between">
            <div className="col-span-1 row-span-2">
              {" "}
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
              {/* CheckBox */}
              <div className="flex flex-col">
                <label
                  htmlFor={"Property Status"}
                  className={"block text-sm mb-2 font-semibold"}
                >
                  Property Status
                </label>{" "}
                <div className="flex items-center gap-4">
                  <div className="mb-4  flex gap-2 items-center">
                    <label
                      htmlFor="ForSale"
                      className="block text-sm font-semibold"
                    >
                      For Sale
                    </label>
                    <input
                      type="checkbox"
                      id="ForSale"
                      name="ForSale"
                      checked={formData.ForSale}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4  flex gap-2 items-center">
                    <label
                      htmlFor="ForRent"
                      className="block text-sm font-semibold"
                    >
                      For Rent
                    </label>
                    <input
                      type="checkbox"
                      id="ForRent"
                      name="ForRent"
                      checked={formData.ForRent}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4  flex gap-2 items-center">
                    <label
                      htmlFor="Featured"
                      className="block text-sm font-semibold"
                    >
                      Featured
                    </label>
                    <input
                      type="checkbox"
                      id="Featured"
                      name="Featured"
                      checked={formData.Featured}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 col-span-1 row-span-2 h-full  w-full">
              <InputField
                label="Property Type"
                type="select"
                name="PropertyType"
                value={formData.PropertyType}
                onChange={handleSelectChange}
                multiple={true}
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
                label="Area"
                type="text"
                name="Area"
                placeholder="Enter area"
                value={formData.Area}
                onChange={handleInputChange}
                autoComplete="area"
                variant={1}
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-4">
            <div className="w-full mb-4">
              <InputField
                label="Location"
                type="text"
                name="Location"
                placeholder="Enter location"
                value={formData.Location}
                onChange={handleInputChange}
                autoComplete="location"
                variant={1}
              />
            </div>

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
            <h2 className="text-2xl font-bold mb-4">Property Photos (URLs)</h2>
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
        </form>
      </div>
    </div>
  );
}
