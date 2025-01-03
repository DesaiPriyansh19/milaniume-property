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
      <p className="text-2xl font-bold uppercase tracking-wide text-white mb-2">
        Enquiries
      </p>
      <p className="mb-6 text-base text-gray-300 tracking-wide">
        Your Customer Enquiries
      </p>
      <div className="text-white w-full grid grid-cols-3 gap-6">
        {data.map((person, index) => (
          <div
            key={index}
            className={`bg-gray-900 relative p-4 transition-transform duration-300 cursor-pointer rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[0.98]`}
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

              <div className={`flex items-center mt-4 justify-between`}>
                <div>
                  <label className="text-xs  text-gray-400 uppercase font-semibold tracking-wider">
                    Email
                  </label>
                  <p className="text-sm font-medium text-gray-200">
                    {person.EnquiryPersonEmail}
                  </p>
                </div>
                <div className="text-end">
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
              <label className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                Enquiry Message
              </label>
              <p className="text-sm text-gray-300 font-medium">
                {person.EnquiryPersonMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
