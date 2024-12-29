import React, { useState } from "react";
import useApiData from "../../../../hooks/useApiData";

export default function EnquiresPage() {
  const baseUrl = "https://milaniumepropertybackend.vercel.app/api/enquiry";
  const { data } = useApiData(baseUrl);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (id) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <div className="text-white mx-auto p-4">
      <p className="text-xl font-semibold uppercase">Enquiries</p>
      <p className="mb-6 text-sm text-gray-200">Your Customer Enquiries</p>
      <div className="text-white w-full grid grid-cols-4 gap-4">
        {data.map((person, index) => (
          <div
            key={index}
            className={`bg-gray-800 ${
              expandedIndex === person._id
                ? "opacity-100 max-h-[1000px] overflow-visible"
                : "opacity-100 max-h-[7rem] overflow-hidden"
            } relative p-4 transition-all duration-300 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[0.98] `}
            onClick={() => handleToggle(person._id)}
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
              className="absolute w-3 h-3 top-2 right-2 rounded-full"
            ></div>
            <div className="py-2">
              <h2 className="text-lg font-semibold text-white truncate">
                {person?.EnquiryPersonName || "N/A"}
              </h2>
              <p className="text-sm text-gray-400">
                {person?.EnquiryPersonMessage || "N/A"}
              </p>
            </div>

            <div
              className={`mt-4 ${
                expandedIndex === person._id ? "opacity-100 " : "opacity-0 "
              } transition-opacity duration-300 `}
            >
              <p className="text-sm mb-1 text-white">
                Email: {person.EnquiryPersonEmail}
              </p>
              <p className="text-sm text-white">
                Phone: {person.EnquiryPersonPhone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
