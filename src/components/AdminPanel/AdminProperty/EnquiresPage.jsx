import React, { useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import ConfirmationModal from "../../../../utils/ConfirmationModal";

export default function EnquiresPage() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/enquiry";
  const { data, updateById } = useApiData(baseUrl);
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState({
    month: "", // Default to current month
    year: new Date().getFullYear(),
    currentYear: 2025,
    filterBy: "",
  });

  const filteredData = data?.filter((property) => {
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

    return matchesDate;
  });

  const handleUpdate = (id, data) => {
    console.log(data);
    const trashdata = {
      ...data,
      EnquiryStatus: "approved",
    };
    setModal({
      message: `Are you sure you have looked ${data.EnquiryPersonName} Enquiry?`,
      onConfirm: () => {
        updateById(id, trashdata); // Perform delete operation
        setModal(null); // Close modal
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  return (
    <>
      {modal && (
        <ConfirmationModal
          message={modal.message}
          onConfirm={modal.onConfirm}
          onCancel={modal.onCancel}
          color="#4ecdae"
        />
      )}
      <div className="text-white mx-auto p-4">
        <div className="flex justify-between mb-4">
          <div className="">
            {" "}
            <p className="text-xl font-semibold uppercase ">Enquiries</p>
            <p className=" text-sm text-gray-200">Your Customer Enquiries</p>
          </div>
          <div className="flex gap-4">
            <button
              className={`border ${
                filter.filterBy === "Today" && "bg-gray-800"
              } px-4 rounded`}
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
              className={`border ${
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
              className={`border ${
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
        <div className="text-white w-full grid grid-cols-3 gap-4">
          {filteredData.map((person, index) => (
            <div
              key={index}
              onClick={() => {
                handleUpdate(person._id, person);
              }}
              className={`bg-gray-900 relative p-4 transition-transform duration-300 cursor-pointer rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[0.98]`}
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
                  <div className="text-start">
                    <label className="text-xs  text-gray-400 uppercase font-semibold tracking-wider">
                      Phone
                    </label>
                    <p className="text-sm  font-medium text-gray-200">
                      {person.EnquiryPersonPhone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[98%] mx-auto mt-4 h-[1px] bg-gray-700"></div>
              <div className="px-3 mt-4 pb-2 border border-t-0 rounded-b-xl border-gray-700">
                <div className="mb-2">
                  <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                    Enquiry Property Type
                  </label>
                  <p className="text-sm text-gray-300 font-medium">
                    {person?.EnquiryPropertyType || "N | A"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                    Enquiry Message
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
