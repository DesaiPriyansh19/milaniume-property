import React, { useEffect, useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import axios from "axios";
import ReminderList from "./ReminderList";
import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";

export default function ViewProperty() {
  const initialFormData = {
    id: "",
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
    type: "",
    search: "",
    month: new Date().getMonth() + 1, // Default to current month
    year: new Date().getFullYear(),
    currentYear: 2025,
    propertyType: "",
  });

  // useEffect(() => {
  //   if (data) {
  //     setFormData();
  //   }
  // }, [data]);

  const filteredData = data.filter((property) => {
    const matchesType =
      filter.type === ""
        ? true // Show all data when filter.type is blank
        : filter.type === "Offline"
        ? property?.ReminderType === "Offline"
        : property?.ReminderType !== "Offline";

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to 00:00:00

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    yesterday.setHours(0, 0, 0, 0); // Normalize yesterday's date to 00:00:00

    const propertyDate = new Date(property?.["Date&Time"]);
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
    return matchesType && matchesDate;
  });

  const handleEdit = (type, id) => {
    const selectedProperty = data.find((property) => property._id === id); // Find the selected property by ID

    if (selectedProperty) {
      // Set form data with the selected property's values, using the initialFormData as a template
      setFormData({
        id: selectedProperty._id || initialFormData.id,
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
                View Reminder
              </p>
              <p className=" text-sm text-gray-200">Your Reminders</p>
            </div>

            <div className="flex justify-between gap-4">
              <div className="relative">
                <select
                  onChange={(e) => {
                    setFilter((prev) => ({ ...prev, type: e.target.value }));
                  }}
                  value={filter.type}
                  className="appearance-none  text-sm text-white bg-transparent rounded-sm outline-none border border-white h-8 pl-2 pr-8"
                >
                  <option className="text-black" value="">
                    Select Type
                  </option>
                  <option className="text-black" value="Offline">
                    Offline
                  </option>
                  <option className="text-black" value="Online">
                    Online
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
                className={`border ${
                  filter.filterBy === "Today" && "bg-gray-800"
                } px-4 py-1 rounded`}
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
                className={`border  py-1  ${
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
                className={`border  py-1  ${
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

              <button
                onClick={() => handleEdit("Add")}
                className=" bg-green-800 text-white h-8 px-5 hover:scale-95 shadow-sm hover:shadow-red-300 rounded "
              >
                +Add New Reminder
              </button>
            </div>
          </div>

          <div className="grid  gap-6 px-2 mb-4">
            {/* <div className="relative">
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
            </div> */}

            <div className="border bg-white text-black ml-auto rounded">
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
                onChange={(e) => setFilter({ ...filter, year: e.target.value })}
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
      )}
      {editData.type === "View" && (
        <ReminderList
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          data={filteredData}
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
