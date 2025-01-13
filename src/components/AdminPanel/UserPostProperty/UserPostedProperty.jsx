import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import PostedPropertyList from "./PostedPropertyList";
import axios from "axios";

export default function UserPostedProperty() {
  const baseUrl =
    "https://milaniumepropertybackend.vercel.app/api/userpostproperty";
  const { data } = useFetch(baseUrl);
  const initialState = {
    view: "PersonView",
    selectedPersonId: "",
    Fullname: "",
    Email: "",
    PostedProperties: [],
  };

  const [filter, setFilter] = useState({
    month: "", // Default to current month
    year: new Date().getFullYear(),
    currentYear: 2025,
    filterBy: "",
  });

  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedUserProperty, setSelectedUserProperty] =
    useState(initialState);

  const handleCheckboxChange = (id) => {
    if (selectedPeople.includes(id)) {
      setSelectedPeople(selectedPeople.filter((personId) => personId !== id));
    } else {
      setSelectedPeople([...selectedPeople, id]);
    }
  };

  const handleSelectUserChange = (person) => {
    setSelectedUserProperty((prev) => {
      const newProperties = person.PostedProperties.filter(
        (prop) => !prev.PostedProperties.includes(prop)
      );
      return {
        ...prev,
        view: "PropertyView",
        selectedPersonId: person._id,
        Fullname: person.Fullname,
        Email: person.Email,
        PostedProperties: [...prev.PostedProperties, ...newProperties],
      };
    });
  };

  const handleExcel = async () => {
    const filterData = {
      filterBy: filter.filterBy,
      year: filter.year,
      month: filter.month,
    };
    try {
      const params = new URLSearchParams(filterData).toString();
      const url = `https://milaniumepropertybackend.vercel.app/api/userpostproperty/userpost/get-excel?${params}`;

      // Make sure the response type is set to 'blob' for binary data (Excel file)
      const response = await axios.get(url, { responseType: "blob" });

      // Check if the response is successful
      if (response.status === 200) {
        // Create a Blob from the response data
        const blob = response.data;

        // Create an Object URL for the Blob
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create a temporary link to download the file
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "UserPostDetails.xlsx"); // Specify the file name
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up the link element
        document.body.removeChild(link);
      }
    } catch (err) {
      console.log("Error downloading file: ", err.message);
    }
  };

  const filteredData = data?.filter((property) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to 00:00:00

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    yesterday.setHours(0, 0, 0, 0); // Normalize yesterday's date to 00:00:00

    const propertyDate = new Date(property?.UserPostAdded);
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

  console.log(filter);
  return (
    <>
      {selectedUserProperty.view === "PersonView" && (
        <div className="text-white  mx-auto p-4">
        
      
       <div className="mb-6">
        <div className="flex justify-evenly items-center">
          <div className="">  <p className="text-xl font-semibold uppercase text-[#E7C873]">User Post</p>
            <p className=" text-sm mb-4 text-gray-200">View All User Post</p></div> 
            <div>
             
              <div className="flex  gap-4 mb-3">
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


            </div>
            <div className=" w-full flex justify-end  gap-2 items-center mb-4 ">
            <div className="border rounded mb-1 bg-white text-black text-sm">
                <select
                  value={filter.month}
                  className="appearance-none bg-white text-black outline-none  p-1 px-4 "
                  onChange={(e) =>
                    setFilter({
                      ...filter,
                      month: e.target.value,
                      filterBy: "",
                    })
                  }
                >
                  <option className="text-black" value="">
                    Select Month
                  </option>
                  <option className="text-black" value={1}>
                    January
                  </option>
                  <option className="text-black" value={2}>
                    February
                  </option>
                  <option className="text-black" value={3}>
                    March
                  </option>
                  <option className="text-black" value={4}>
                    April
                  </option>
                  <option className="text-black" value={5}>
                    May
                  </option>
                  <option className="text-black" value={6}>
                    June
                  </option>
                  <option className="text-black" value={7}>
                    July
                  </option>
                  <option className="text-black" value={8}>
                    August
                  </option>
                  <option className="text-black" value={9}>
                    September
                  </option>
                  <option className="text-black" value={10}>
                    October
                  </option>
                  <option className="text-black" value={11}>
                    November
                  </option>
                  <option className="text-black" value={12}>
                    December
                  </option>

                  {/* Add other months */}
                </select>
                <span>/ </span>
                <select
                  value={filter.year}
                  className="appearance-none bg-white text-black outline-none p-1 px-4"
                  onChange={(e) =>
                    setFilter({ ...filter, year: e.target.value, filterBy: "" })
                  }
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option
                      key={filter.currentYear - index}
                      value={filter.currentYear - index}
                      className="text-black"
                    >
                      {filter.currentYear - index}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={handleExcel} className="py-1 border-[1.5px] border-[#E7C873] text-sm hover:scale-95 hover:bg-[#E7C873] hover:text-black  rounded px-4">
              Download ⬇
                </button>
              </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-gray-800 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-700 text-left text-gray-300 uppercase text-sm">
                    <th className="px-4 py-3">
                      <div
                        className={`w-6 h-6 rounded-md flex justify-center items-center cursor-pointer border-2 border-gray-400 ${
                          selectedPeople.length === data?.length
                            ? "bg-[#41a494] text-white"
                            : "bg-transparent"
                        }`}
                        onClick={() => {
                          if (selectedPeople.length === data?.length) {
                            setSelectedPeople([]);
                          } else {
                            setSelectedPeople(data.map((person) => person._id));
                          }
                        }}
                      >
                        {selectedPeople.length === data?.length ? "-" : "+"}
                      </div>
                    </th>
                    <th className="px-4 py-3">No</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Listed Property</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData?.map((person, idx) => (
                    <tr
                      key={person._id}
                      onClick={() => {
                        handleSelectUserChange(person);
                      }}
                      className={`border-b group border-gray-600 hover:bg-gray-700 cursor-pointer ${
                        selectedPeople.includes(person._id) ? "bg-gray-700" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex justify-center items-center font-bold border-gray-400 ${
                            selectedPeople.includes(person._id)
                              ? "bg-[#41a494] text-white"
                              : "bg-transparent text-gray-400"
                          }`}
                          onClick={() => handleCheckboxChange(person._id)}
                        >
                          {selectedPeople.includes(person._id) ? "-" : "+"}
                        </div>
                      </td>
                      <td className="px-4 py-3">{idx + 1}</td>
                      <td className="px-4 py-3">{person.Fullname || "-/-"}</td>
                      <td className="px-4 py-3">{person.Email}</td>
                      <td className="px-4 py-3">{person.Role}</td>
                      <td className="px-4 py-3">
                        {person.PostedProperties.length}
                      </td>
                      <td className="px-4 relative py-3">
                        View{" "}
                        <span className="absolute top-[28%] transition-transform ease-in-out duration-300 group-hover:translate-x-2 left-[50%]">
                          &rarr;
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {selectedUserProperty.view === "PropertyView" && (
        <PostedPropertyList
          setSelectedUserProperty={setSelectedUserProperty}
          initialState={initialState}
          data={selectedUserProperty.PostedProperties}
          details={selectedUserProperty}
        />
      )}
    </>
  );
}
