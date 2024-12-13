import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import EditProperty from "./EditProperty";
import AddProperty from "./AddProperty";

export default function ViewProperty() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/property";
  const { data, fetchById, updateById, addNew } = useApiData(baseUrl);
  const [editData, setEditData] = useState("View");
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
    ContactDetails:{},
    PropertyPhotos: [],
  });

  useEffect(() => {
    if (data && data[0]) {
      setFormData({
        PropertyName: data[0]?.PropertyName,
        PropertyType: data[0]?.PropertyType,
        ForSale: data[0]?.ForSale,
        ForRent: data[0]?.ForRent,
        Prices: data[0]?.Prices || "",
        Bedrooms: data[0]?.PropertyDetails?.Bedrooms || "",
        Bathrooms: data[0]?.PropertyDetails?.Bathrooms || "",
        Sqft: data[0]?.PropertyDetails?.Sqft || "",
        Area: data[0]?.Area,
        Location: data[0]?.Location,
        City: data[0]?.City,
        ContactDetails: data[0]?.ContactDetails || "",
        PropertyPhotos: data[0]?.PropertyPhotos || [],
      });
    }
  }, [data]);

  const handleEdit = (type) => {
    setEditData(type);
  };

  useEffect(() => {
    fetchById("675bf85922b89f22fc8c3ce6");
  }, []); // Empty dependency array to run only once

  console.log(data);

  return (
    <>
      {editData === "View" && (
        <div className="text-black w-full min-h-screen flex flex-col items-center justify-center">
          <p>
            <strong>Property Name:</strong> {data[0]?.PropertyName}
          </p>
          <p>
            <strong>Property Type:</strong> {data[0]?.PropertyType.join(", ")}
          </p>
          <p>
            <strong>For Sale:</strong> {data[0]?.ForSale ? "Yes" : "No"}
          </p>
          <p>
            <strong>For Rent:</strong> {data[0]?.ForRent ? "Yes" : "No"}
          </p>
          <p>
            <strong>Sales Price:</strong> {data[0]?.Prices?.SalesPrice}
          </p>
          <p>
            <strong>Rent Price:</strong> {data[0]?.Prices?.RentPrice || "N/A"}
          </p>
          <div>
            <strong>Property Details:</strong>
            <ul>
              <li>
                <strong>Bedrooms:</strong> {data[0]?.PropertyDetails?.Bedrooms}
              </li>
              <li>
                <strong>Bathrooms:</strong>{" "}
                {data[0]?.PropertyDetails?.Bathrooms}
              </li>
              <li>
                <strong>Square Footage:</strong>{" "}
                {data[0]?.PropertyDetails?.Sqft}
              </li>
            </ul>
          </div>
          <p>
            <strong>Area:</strong> {data[0]?.Area}
          </p>
          <p>
            <strong>Location:</strong> {data[0]?.Location}
          </p>
          <p>
            <strong>City:</strong> {data[0]?.City}
          </p>
          <p>
            <strong>Email:</strong> {data[0]?.ContactDetails?.ContactEmail}
          </p>
          <p>
            <strong>Phone:</strong> {data[0]?.ContactDetails?.ContactPhone}
          </p>
          <div>
            <strong>Property Photos:</strong>
            <ul>
              {data[0]?.PropertyPhotos?.map((photo, index) => (
                <li key={index}>
                  <a href={photo} target="_blank" rel="noopener noreferrer">
                    {photo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                handleEdit("Edit");
              }}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleEdit("Add");
              }}
              className="bg-red-500 text-white p-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
      )}
      {editData === "Edit" && (
        <EditProperty
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {editData === "Add" && (
        <AddProperty addNew={addNew} handleEdit={handleEdit} />
      )}
    </>
  );
}
