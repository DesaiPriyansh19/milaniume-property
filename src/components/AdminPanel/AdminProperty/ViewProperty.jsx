import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import EditProperty from "./EditProperty";
import AddProperty from "./AddProperty";

export default function ViewProperty() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/property";
  const { data, fetchById, updateById, addNew } = useApiData(baseUrl);
  const [editData, setEditData] = useState({ type: "View", id: null });
  const [formData, setFormData] = useState({
    PropertyName: "",
    PropertyType: [],
    ForSale: true,
    ForRent: false,
    Featured: false,
    Prices: {},
    PropertyDetails: {
      Bedrooms: "",
      Bathrooms: "",
      Sqft: "",
    },
    Area: "",
    Location: "",
    City: "",
    ContactDetails: {},
    PropertyPhotos: [],
  });

  useEffect(() => {
    if (data) {
      setFormData({
        PropertyName: data?.PropertyName,
        PropertyType: data?.PropertyType,
        ForSale: data?.ForSale,
        ForRent: data?.ForRent,
        Featured: data?.Featured,
        Prices: data?.Prices || "",
        PropertyDetails: {
          Bedrooms: data?.PropertyDetails?.Bedrooms || "",
          Bathrooms: data?.PropertyDetails?.Bathrooms || "",
          Sqft: data?.PropertyDetails?.Sqft || "",
        },
        Area: data?.Area,
        Location: data?.Location,
        City: data?.City,
        ContactDetails: data?.ContactDetails || "",
        PropertyPhotos: data?.PropertyPhotos || [],
      });
    }
  }, [data]);

  const handleEdit = (type, id) => {
    const selectedProperty = data.find((property) => property._id === id); // Filter data by ID
    if (selectedProperty) {
      setFormData({
        PropertyName: selectedProperty?.PropertyName,
        PropertyType: selectedProperty?.PropertyType,
        ForSale: selectedProperty?.ForSale,
        ForRent: selectedProperty?.ForRent,
        Featured: selectedProperty?.Featured,
        Prices: selectedProperty?.Prices || "",
        PropertyDetails: {
          Bedrooms: selectedProperty?.PropertyDetails?.Bedrooms || "",
          Bathrooms: selectedProperty?.PropertyDetails?.Bathrooms || "",
          Sqft: selectedProperty?.PropertyDetails?.Sqft || "",
        },
        Area: selectedProperty?.Area,
        Location: selectedProperty?.Location,
        City: selectedProperty?.City,
        ContactDetails: selectedProperty?.ContactDetails || "",
        PropertyPhotos: selectedProperty?.PropertyPhotos || [],
      });
    }
    setEditData({ type, id });
  };

  return (
    <>
      {editData.type === "View" && (
        <div className="text-white  mx-auto p-4">
          <div className="flex items-center mb-6 justify-between">
            <div>
              {" "}
              <p className="text-xl font-semibold uppercase ">View Property</p>
              <p className=" text-sm text-gray-200">
                Welcome to your Real Estate Portfolio
              </p>
            </div>
            <button
              onClick={() => handleEdit("Add")}
              className=" bg-red-500 text-white h-8 px-5  rounded "
            >
              Add New Estate
            </button>
          </div>
          <div className="text-white w-full grid grid-cols-4 gap-4">
            {data.map((property, index) => (
              <div
                key={index}
                onClick={() => handleEdit("Edit", property._id)}
                className="bg-gray-800  p-4 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition duration-300"
              >
                {/* Property Image */}
                <div className="h-48 w-full relative group bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={
                      property?.PropertyPhotos?.[0] ||
                      "https://i.pinimg.com/736x/ba/78/d2/ba78d2b517f4783313180e89a1780808.jpg"
                    }
                    alt={property?.PropertyName}
                    className="w-full h-full object-cover"
                  />

                  <p className="absolute inset-0 text-xl font-mono  backdrop-blur-sm w-full h-full ease-in-out duration-300 transition-opacity group-hover:opacity-100 flex opacity-0 justify-center items-center ">
                    <span>View Prop</span>{" "}
                    <span className="ml-2 mt-2 transition-transfrom ease-in-out duration-200 group-active:translate-x-2 group-active:-translate-y-2">
                      &#8599;
                    </span>
                  </p>
                  <p
                    className={`text-sm group-hover:opacity-0 ease-in-out duration-300 transition-opacity  absolute top-0 right-1 ${
                      property?.Featured
                        ? "bg-yellow-500 text-black"
                        : "bg-zinc-900 text-gray-200 opacity-75"
                    } inline-block p-2 my-2 rounded-md`}
                  >
                    {property?.Featured ? "Featured" : "Not Featured"}
                  </p>
                </div>

                {/* Property Details */}
                <div className="py-2">
                  <h2 className="text-lg font-semibold text-white truncate">
                    {property?.PropertyName || "Property Name"}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {property?.Area || "Location not available"}
                  </p>

                  <p className="text-base font-bold text-white mt-2">
                    ₹{" "}
                    {Intl.NumberFormat().format(property?.Prices?.SalesPrice) ||
                      Intl.NumberFormat().format(property?.Prices?.RentPrice) ||
                      "Price Not Available"}{" "}
                    /-
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {editData.type === "Edit" && (
        <EditProperty
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
        />
      )}
      {editData.type === "Add" && (
        <AddProperty addNew={addNew} handleEdit={handleEdit} />
      )}
    </>
  );
}
