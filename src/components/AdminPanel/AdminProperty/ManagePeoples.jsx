import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch";

export default function ManagePeoples() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const { data, loading } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/users"
  );

  const handleCheckboxChange = (id) => {
    if (selectedPeople.includes(id)) {
      setSelectedPeople(selectedPeople.filter((personId) => personId !== id));
    } else {
      setSelectedPeople([...selectedPeople, id]);
    }
  };

  if (loading && !data) {
    return <p className="text-white mx-auto p-4">Loading....</p>;
  }

  return (
    <div className="text-white mx-auto p-4">
      <p className="text-xl font-semibold uppercase">Manage Peoples</p>
      <p className="mb-6 text-sm text-gray-200">Manage Your Peoples</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-left text-gray-300 uppercase text-sm">
              <th className="px-4 py-2 ">
                <div
                  className={`w-5 h-5 rounded-md flex justify-center items-center cursor-pointer border-2 border-gray-300 ${
                    selectedPeople.length === data?.length
                      ? "bg-[#41a494]"
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
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {[...data]?.reverse().map((person, idx) => (
              <tr
                key={person._id}
                onClick={() => handleCheckboxChange(person._id)}
                className={`border-b border-gray-600 hover:bg-gray-700 cursor-pointer ${
                  selectedPeople.includes(person._id) ? "bg-gray-700" : ""
                }`}
              >
                <td className="px-4 py-2">
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex justify-center items-center font-bold border-gray-300 ${
                      selectedPeople.includes(person._id)
                        ? "bg-white text-[#41a494]"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleCheckboxChange(person._id)}
                  >
                    {selectedPeople.includes(person._id) ? "-" : "+"}
                  </div>
                </td>
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">{person.FullName || "-/-"}</td>
                <td className="px-4 py-2">{person.Email}</td>
                <td className="px-4 py-2">
                  {person.MobileNumber ? person.MobileNumber : "N/A"}
                </td>
                <td className="px-4 py-2">
                  {person.isAdmin ? "Admin" : "User"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
