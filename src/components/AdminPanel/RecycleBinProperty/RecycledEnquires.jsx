import React, { useState } from "react";

import ConfirmationModal from "../../../../utils/ConfirmationModal";

export default function RecycledEnquires({
  filteredData,
  updateById,
  deleteById,
}) {
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState({
    month: "",
    year: new Date().getFullYear(),
    currentYear: 2025,
    filterBy: "",
    approveStatus: "All",
    propertyType: "",
  });

  const morefilter = filteredData?.filter((property) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to 00:00:00

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    yesterday.setHours(0, 0, 0, 0); // Normalize yesterday's date to 00:00:00

    const propertyDate = new Date(property?.EnquiryPersonDate);
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

    const matchesStatus =
      filter.approveStatus && filter.approveStatus !== "All"
        ? property.EnquiryStatus === filter.approveStatus
        : true;

    const matchesPropertyType =
      filter.propertyType && filter.propertyType !== "All Enquiry Type"
        ? property.EnquiryPropertyType === filter.propertyType
        : true;

    return matchesDate && matchesStatus && matchesPropertyType;
  });

  const handleUpdate = (id, data) => {
    const trashdata = {
      ...data,
      RecycleBin: false,
    };
    setModal({
      message: `Are you sure you want recover ${data.EnquiryPersonName} Enquiry?`,
      onConfirm: () => {
        updateById(id, trashdata); // Perform delete operation
        setModal(null); // Close modal
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  const handleRecycleBin = (data) => {
    setModal({
      message: `Are you sure you want to put this ${data.EnquiryPersonName} Enquiry in recycle bin?`,
      onConfirm: async () => {
        await deleteById(data._id);
        setModal(null);
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  return (
    <>
      <div className="text-white mx-auto p-4">
        {modal && (
          <ConfirmationModal
            message={modal.message}
            onConfirm={modal.onConfirm}
            onCancel={modal.onCancel}
            color="#4ecdae"
          />
        )}
        <div className="flex justify-end mb-4">
          <div className="flex gap-4 w-full">
            <div className="border w-[30%] text-black bg-white rounded">
              <select
                value={filter.month}
                className="appearance-none bg-transparent outline-none  p-1 px-4 "
                onChange={(e) =>
                  setFilter({ ...filter, month: e.target.value, filterBy: "" })
                }
              >
                <option value="">Select Month</option>
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
                className="appearance-none bg-transparent outline-none p-1 px-4"
                onChange={(e) =>
                  setFilter({ ...filter, year: e.target.value, filterBy: "" })
                }
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option
                    key={filter.currentYear - index}
                    value={parseInt(filter.currentYear - index)}
                  >
                    {filter.currentYear - index}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                onChange={(e) => {
                  setFilter((prev) => ({
                    ...prev,
                    approveStatus: e.target.value,
                  }));
                }}
                value={filter.approveStatus}
                className="appearance-none  bg-transparent outline-none border border-white h-8 pl-2 pr-8"
              >
                <option className="text-black" value="All">
                  ⚪ All
                </option>
                <option className="text-black" value="approved">
                  ✔ Read
                </option>
                <option className="text-black" value="pending">
                  ✖ Unread
                </option>
              </select>

              <span
                style={{
                  transform: "rotate(180deg) translateY(50%)",
                  position: "absolute",
                  top: "25%",
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
          </div>
          <div className="flex gap-4 justify-center items-center">
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
          </div>
        </div>

        <div className="text-white w-full grid grid-cols-3 gap-4">
          {morefilter.reverse().map((person, index) => (
            <div
              key={index}
              className={`bg-gray-900 relative p-4 transition-transform duration-300 cursor-pointer rounded-xl shadow-lg hover:shadow-xl transform `}
            >
              <div
                style={{
                  backgroundColor:
                    person.EnquiryStatus === "pending"
                      ? "red"
                      : person.EnquiryStatus === "overlooked"
                      ? "orange"
                      : person.EnquiryStatus === "approved"
                      ? "green"
                      : "transparent",
                }}
                className="absolute w-2 h-2 top-2 right-2 rounded-full"
              ></div>
              <div className="px-3 border border-b-0 rounded-t-xl border-gray-700">
                <div className="flex items-center mt-2 justify-between">
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                      Name
                    </label>
                    <h2 className="text-base font-semibold text-white truncate">
                      {person?.EnquiryPersonName || "N/A"}
                    </h2>
                  </div>
                  <div className="text-end">
                    <label className="text-xs  text-gray-400 uppercase font-semibold tracking-wider">
                      Date of enquiry
                    </label>
                    <p className="text-base  text-gray-300">
                      {person?.EnquiryPersonDate
                        ? new Date(person.EnquiryPersonDate).toLocaleDateString(
                            "en-GB"
                          )
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className={` items-center mt-4 justify-between`}>
                  <div>
                    <label className="text-xs  text-gray-400 uppercase font-semibold tracking-wider">
                      Email
                    </label>
                    <p className="text-sm font-medium text-gray-200">
                      {person.EnquiryPersonEmail}
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-start">
                      <label className="text-xs  text-gray-400 uppercase font-semibold tracking-wider">
                        Phone
                      </label>
                      <p className="text-sm  font-medium text-gray-200">
                        {person.EnquiryPersonPhone}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleUpdate(person._id, person);
                        }}
                        className="bg-white px-2 py-1 rounded text-black hover:text-white hover:bg-gray-900 transition-colors ease-in-out duration-300"
                      >
                        Recover
                      </button>

                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          handleRecycleBin(person);
                        }}
                        className="bg-white px-2 py-1 rounded text-black hover:text-white hover:bg-gray-900 transition-colors ease-in-out duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[98%] mx-auto mt-4 h-[1px] bg-gray-700"></div>
              <div className="px-3 mt-4 pb-2 border border-t-0 rounded-b-xl border-gray-700">
                <div className="mb-2">
                  <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                    Enquiry Type
                  </label>
                  <p className="text-sm text-gray-300 font-medium">
                    {person?.EnquiryPropertyType || "N | A"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                    Message
                  </label>
                  <p className="text-sm text-gray-300 font-medium">
                    {person.EnquiryPersonMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
