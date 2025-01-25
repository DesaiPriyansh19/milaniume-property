import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import axios from "axios";
import ReminderList from "./ReminderList";
import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";

export default function ViewProperty() {
  const initialFormData = {
    Name: "",
    MobileNumber: "",
    Email: "",
    "Date&Time": "",
    PropertyLocation: "",
    PropertyArea: {
      Sqft: "",
      Sqyd: "",
    },
    Condition: "",
    Availability: "",
    Budget: "",
    ReminderType: "",
    Remarks: {
      Visit: false,
      CallBack: false,
      Meeting: false,
      CallNotAnswered: false,
    },
    Description: "",
    Address: "",
    Enquiry: null,
    Requirements: null,
  };
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/reminder";
  const [formData, setFormData] = useState(initialFormData);
  const { data, updateById, addNew, deleteById } = useApiData(baseUrl);
  const [editData, setEditData] = useState({ type: "View", id: null });
  const [filter, setFilter] = useState({
    type: "verified",
    search: "",
    month: new Date().getMonth() + 1, // Default to current month
    year: new Date().getFullYear(),
    currentYear: 2025,
    propertyType: "",
  });

  useEffect(() => {
    if (data) {
      setFormData();
    }
  }, [data]);

  const filteredData = data.filter((property) => {
    const matchesType =
      filter.type === "verified" ? property?.Verified : !property?.Verified;

    const matchesSearch = filter.search
      ? property?._id?.toString().includes(filter.search)
      : true;

    const notInRecycleBin = property?.RecycleBin === false;

    const matchesDate =
      filter.month !== undefined && filter.year !== undefined
        ? new Date(property?.PropertyAddedDate) >=
            new Date(filter.year, filter.month - 1, 1) &&
          new Date(property?.PropertyAddedDate) <=
            new Date(filter.year, filter.month, 0)
        : true;

    const matchesPropertyType = filter.propertyType
      ? property?.PropertyType === filter.propertyType
      : true;

    return (
      matchesType &&
      matchesSearch &&
      notInRecycleBin &&
      matchesDate &&
      matchesPropertyType
    );
  });

  const handleEdit = (type, id) => {
    const selectedProperty = data.find((property) => property._id === id); // Find the selected property by ID

    if (selectedProperty) {
      // Set form data with the selected property's values, using the initialFormData as a template
      setFormData({
        Name: selectedProperty.Name || initialFormData.Name,
        MobileNumber:
          selectedProperty.MobileNumber || initialFormData.MobileNumber,
        Email: selectedProperty.Email || initialFormData.Email,
        "Date&Time":
          selectedProperty["Date&Time"] || initialFormData["Date&Time"],
        PropertyLocation:
          selectedProperty.PropertyLocation || initialFormData.PropertyLocation,
        PropertyArea: {
          Sqft:
            selectedProperty.PropertyArea?.Sqft ||
            initialFormData.PropertyArea.Sqft,
          Sqyd:
            selectedProperty.PropertyArea?.Sqyd ||
            initialFormData.PropertyArea.Sqyd,
        },
        Condition: selectedProperty.Condition || initialFormData.Condition,
        Availability:
          selectedProperty.Availability || initialFormData.Availability,
        Budget: selectedProperty.Budget || initialFormData.Budget,
        ReminderType:
          selectedProperty.ReminderType || initialFormData.ReminderType,
        Remarks: {
          Visit:
            selectedProperty.Remarks?.Visit || initialFormData.Remarks.Visit,
          CallBack:
            selectedProperty.Remarks?.CallBack ||
            initialFormData.Remarks.CallBack,
          Meeting:
            selectedProperty.Remarks?.Meeting ||
            initialFormData.Remarks.Meeting,
          CallNotAnswered:
            selectedProperty.Remarks?.CallNotAnswered ||
            initialFormData.Remarks.CallNotAnswered,
        },
        Description:
          selectedProperty.Description || initialFormData.Description,
        Address: selectedProperty.Address || initialFormData.Address,
        Enquiry: selectedProperty.Enquiry || initialFormData.Enquiry,
        Requirements:
          selectedProperty.Requirements || initialFormData.Requirements,
      });
    }

    // Update the editData state with the selected type and id
    setEditData({ type, id });
  };

  if (!data) {
    return (
      <p className="text-white text-center text-3xl mt-5 mx-auto p-4">
        Loading....
      </p>
    );
  }
  return (
    <>
      {editData.type === "View" && (
        <div className="text-white  mx-auto p-4">
          <div className="flex items-center mb-6 justify-between">
            <div>
              {" "}
              <p className="text-xl font-semibold uppercase text-[#E7C873] ">
                View Property
              </p>
              <p className=" text-sm text-gray-200"></p>
            </div>

            <div className="flex justify-between gap-4">
              <div className="relative">
                <select
                  onChange={(e) => {
                    setFilter((prev) => ({
                      ...prev,
                      propertyType: e.target.value,
                    }));
                  }}
                  value={filter.propertyType}
                  className="appearance-none text-white bg-transparent rounded-sm outline-none border border-white h-8 pl-2 pr-8"
                >
                  <option className="text-black" value="">
                    Select type
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
                </select>
                <span
                  style={{
                    transform: "rotate(180deg) translateY(50%)",
                    position: "absolute",
                    top: "38%",
                    right: "10px", // or whatever position you need
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 8.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select
                  onChange={(e) => {
                    setFilter((prev) => ({ ...prev, type: e.target.value }));
                  }}
                  value={filter.type}
                  className="appearance-none  text-sm text-white bg-transparent rounded-sm outline-none border border-white h-8 pl-2 pr-8"
                >
                  <option className="text-black" value="verified">
                    ✔ Verified
                  </option>
                  <option className="text-black" value="unverified">
                    ✖Un-Verified
                  </option>
                </select>

                <span
                  style={{
                    transform: "rotate(180deg) translateY(50%)",
                    position: "absolute",
                    top: "38%",
                    right: "10px", // or whatever position you need
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 8.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <button
                onClick={() => handleEdit("Add")}
                className=" bg-green-800 text-white h-8 px-5 hover:scale-95 shadow-sm hover:shadow-red-300 rounded "
              >
                +Add New Reminder
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 px-2 mb-4">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => {
                  setFilter((prev) => ({ ...prev, search: e.target.value }));
                }}
                value={filter.search}
                placeholder="Search Property Id"
                className="p-1 pl-10 rounded w-full h-full bg-transparent border "
              ></input>
              <div className="absolute  top-[15%] left-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="white"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
            </div>

            <div className="flex ">
              <div className="border bg-white text-black mx-auto rounded">
                <select
                  value={filter.month}
                  className="appearance-none bg-transparent outline-none text-sm  p-1 px-4 "
                  onChange={(e) =>
                    setFilter({ ...filter, month: e.target.value })
                  }
                >
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>

                  {/* Add other months */}
                </select>
                <span>/ </span>
                <select
                  value={filter.year}
                  className="appearance-none bg-transparent text-sm outline-none p-1 px-4"
                  onChange={(e) =>
                    setFilter({ ...filter, year: e.target.value })
                  }
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option
                      key={filter.currentYear - index}
                      value={filter.currentYear - index}
                    >
                      {filter.currentYear - index}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
      {editData.type === "View" && (
        <ReminderList
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
          deleteById={deleteById}
        />
      )}
      {editData.type === "Edit" && (
        <EditReminder
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
          deleteById={deleteById}
        />
      )}
      {editData.type === "Add" && (
        <AddReminder
          addNew={addNew}
          initialFormData={initialFormData}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
}
