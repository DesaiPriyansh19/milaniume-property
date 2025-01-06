import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import PostedPropertyList from "./PostedPropertyList";

export default function UserPostedProperty() {
  const initialState = {
    view: "PersonView",
    selectedPersonId: "",
    Fullname: "",
    Email: "",
    PostedProperties: [],
  };
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedUserProperty, setSelectedUserProperty] =
    useState(initialState);
  const baseUrl =
    "https://milaniumepropertybackend.vercel.app/api/userpostproperty";
  const { data } = useFetch(baseUrl);
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

  return (
    <>
      {selectedUserProperty.view === "PersonView" && (
        <div className="text-white  mx-auto p-4">
          <div className="mb-6">
            <p className="text-xl font-semibold uppercase ">User Post</p>
            <p className=" text-sm mb-4 text-gray-200">View All User Post</p>
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
                  {data?.map((person, idx) => (
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
