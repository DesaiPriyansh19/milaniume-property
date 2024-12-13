import React, { useState } from "react";
import UploadWidget from "../../UploadWidget/UploadWidget";

export default function AddProperty({ addNew, handleEdit }) {
  const [formData, setFormData] = useState({
    PropertyName: "",
    PropertyType: [],
    ForSale: true,
    ForRent: false,
    Prices: {},
    Bedrooms: "",
    Bathrooms: "",
    Sqft: "",
    Area: "",
    Location: "",
    City: "",
    ContactDetails: {},
    PropertyPhotos: [],
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
  const handleSelectChange = (e) => {
    const { name, value, multiple } = e.target;
  
    // Handle multiple select
    if (multiple) {
      const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedValues,
      }));
    } else {
      // Handle non-multiple select (if necessary)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleMainPhotoChange = (index, value) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.Photos];
      updatedPhotos[index] = value;
      return { ...prevData, Photos: updatedPhotos };
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("submited data", formData);
    await addNew(formData);
  };

  console.log(formData);
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
      <form className="w-full max-w-2xl p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="PropertyName" className="block text-sm font-semibold">
            Property Name
          </label>
          <input
            type="text"
            id="PropertyName"
            name="PropertyName"
            value={formData.PropertyName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PropertyType" className="block text-sm font-semibold">
            Property Type
          </label>
          <select
            name="PropertyType"
            id="PropertyType"
            value={formData.PropertyType}
            onChange={handleSelectChange}
            className="w-full p-2 border border-gray-300 rounded"
            multiple
          >
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Industrial">Industrial</option>
            <option value="Agricultural Plot">Agricultural Plot</option>
            <option value="Rental Property">Rental Property</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="ForSale" className="block text-sm font-semibold">
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

        <div className="mb-4">
          <label htmlFor="ForRent" className="block text-sm font-semibold">
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

        <div className="mb-4">
          <label htmlFor="SalesPrice" className="block text-sm font-semibold">
            Sales Price
          </label>
          <input
            type="text"
            id="SalesPrice"
            name="Prices.SalesPrice"
            value={formData.Prices.SalesPrice}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="RentPrice" className="block text-sm font-semibold">
            Rent Price
          </label>
          <input
            type="text"
            id="RentPrice"
            name="Prices.RentPrice"
            value={formData.Prices.RentPrice}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Bedrooms" className="block text-sm font-semibold">
            Bedrooms
          </label>
          <input
            type="number"
            id="Bedrooms"
            name="Bedrooms"
            value={formData.Bedrooms}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Bathrooms" className="block text-sm font-semibold">
            Bathrooms
          </label>
          <input
            type="number"
            id="Bathrooms"
            name="Bathrooms"
            value={formData.Bathrooms}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Sqft" className="block text-sm font-semibold">
            Square Footage
          </label>
          <input
            type="text"
            id="Sqft"
            name="Sqft"
            value={formData.Sqft}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Area" className="block text-sm font-semibold">
            Area
          </label>
          <input
            type="text"
            id="Area"
            name="Area"
            value={formData.Area}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Location" className="block text-sm font-semibold">
            Location
          </label>
          <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="block text-sm font-semibold">
            City
          </label>
          <input
            type="text"
            id="City"
            name="City"
            value={formData.City}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ContactEmail" className="block text-sm font-semibold">
            Contact Email
          </label>
          <input
            type="email"
            id="ContactEmail"
            name="ContactDetails.ContactEmail"
            value={formData.ContactDetails.ContactEmail}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ContactPhone" className="block text-sm font-semibold">
            Contact Phone
          </label>
          <input
            type="tel"
            id="ContactPhone"
            name="ContactDetails.ContactPhone"
            value={formData.ContactDetails.ContactPhone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Property Photos (URLs)</h2>
          {formData?.PropertyPhotos.map((photo, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                value={photo}
                onChange={(e) => handleMainPhotoChange(index, e.target.value)}
                className="w-full p-2 rounded border border-gray-300"
                placeholder={`Main Photo URL ${index + 1}`}
              />
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

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => {
          handleEdit("View");
        }}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Edit
      </button>
    </div>
  );
}
