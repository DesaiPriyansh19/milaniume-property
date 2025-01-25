import React, { useState } from "react";
import useApiData from "../../../../hooks/useApiData";

const ReminderList = ({
  updateById,
  handleEdit,
  setFormData,
  formData,
  editData,
  deleteById,
}) => {
  const { data } = useApiData(
    "https://milaniumepropertybackend.vercel.app/api/reminder"
  );

  const [openReminderId, setOpenReminderId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenReminderId(openReminderId === id ? null : id); // Toggle open/close state
  };

  return (
    <div className="mx-auto p-6 max-w-7xl">
      {/* Header */}
      <div className="flex mb-6 justify-between items-center">
        <div className="text-white">
          <p className="text-2xl font-semibold uppercase">View Reminder</p>
          <p className="text-sm text-gray-500">View All Reminders</p>
        </div>
      </div>

      {/* Reminder List */}
      <ul className="space-y-6">
        {data?.map((reminder) => (
          <li
            key={reminder._id}
            onClick={() => toggleAccordion(reminder._id)} // Toggle the accordion on list item click
            className="border border-gray-300 rounded-lg p-6 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-semibold text-white mb-4">
                {reminder?.Name || "No Name Available"}
              </h3>

              {reminder?.["Date&Time"] && (
                <p className="text-sm text-white">
                  <strong>Date & Time:</strong>{" "}
                  {new Date(reminder["Date&Time"]).toLocaleString()}
                </p>
              )}
            </div>

            {/* Accordion Panel */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openReminderId === reminder._id ? "max-h-screen" : "max-h-0"
              }`}
            >
              {reminder?.MobileNumber && (
                <p className="text-sm text-white">
                  <strong>Mobile Number:</strong> {reminder?.MobileNumber}
                </p>
              )}
              {reminder?.Email && (
                <p className="text-sm text-white">
                  <strong>Email:</strong> {reminder?.Email}
                </p>
              )}
              {reminder?.["Date&Time"] && (
                <p className="text-sm text-white">
                  <strong>Date & Time:</strong>{" "}
                  {new Date(reminder["Date&Time"]).toLocaleString()}
                </p>
              )}
              {reminder?.PropertyLocation && (
                <p className="text-sm text-white">
                  <strong>Property Location:</strong>{" "}
                  {reminder?.PropertyLocation}
                </p>
              )}
              {reminder?.PropertyArea?.Sqft && (
                <p className="text-sm text-white">
                  <strong>Property Area Sqft:</strong>{" "}
                  {reminder?.PropertyArea?.Sqft}
                </p>
              )}
              {reminder?.PropertyArea?.Sqyd && (
                <p className="text-sm text-white">
                  <strong>Property Area Sqyd:</strong>{" "}
                  {reminder?.PropertyArea?.Sqyd}
                </p>
              )}
              {reminder?.Condition && (
                <p className="text-sm text-white">
                  <strong>Condition:</strong> {reminder?.Condition}
                </p>
              )}
              {reminder?.Availability && (
                <p className="text-sm text-white">
                  <strong>Availability:</strong> {reminder?.Availability}
                </p>
              )}
              {reminder?.Budget && (
                <p className="text-sm text-white">
                  <strong>Budget:</strong> {reminder?.Budget}
                </p>
              )}
              {reminder?.ReminderType && (
                <p className="text-sm text-white">
                  <strong>Reminder Type:</strong> {reminder?.ReminderType}
                </p>
              )}

              {/* Remarks */}
              {(reminder?.Remarks?.Visit ||
                reminder?.Remarks?.CallBack ||
                reminder?.Remarks?.Meeting ||
                reminder?.Remarks?.CallNotAnswered) && (
                <div className="text-sm text-white">
                  <strong>Remarks:</strong>
                  <ul className="pl-4 space-y-1">
                    {reminder?.Remarks?.Visit && (
                      <li>Visit: {reminder?.Remarks?.Visit ? "Yes" : "No"}</li>
                    )}
                    {reminder?.Remarks?.CallBack && (
                      <li>
                        Call Back: {reminder?.Remarks?.CallBack ? "Yes" : "No"}
                      </li>
                    )}
                    {reminder?.Remarks?.Meeting && (
                      <li>
                        Meeting: {reminder?.Remarks?.Meeting ? "Yes" : "No"}
                      </li>
                    )}
                    {reminder?.Remarks?.CallNotAnswered && (
                      <li>
                        Call Not Answered:{" "}
                        {reminder?.Remarks?.CallNotAnswered ? "Yes" : "No"}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {reminder?.Enquiry && (
                <p className="text-sm text-white">
                  <strong>Enquiry Person:</strong>{" "}
                  {reminder?.Enquiry?.EnquiryPersonName}
                </p>
              )}
              {reminder?.Enquiry && (
                <p className="text-sm text-white">
                  <strong>Enquiry Person Message:</strong>{" "}
                  {reminder?.Enquiry?.EnquiryPersonMessage}
                </p>
              )}

              {reminder?.Requirements?.RequiredPersonName && (
                <p className="text-sm text-white">
                  <strong>Requirement Person:</strong>{" "}
                  {reminder?.Enquiry?.RequiredPersonName}
                </p>
              )}
              {reminder?.Requirements?.RequiredPropertyDetails
                ?.RequiredDescription && (
                <p className="text-sm text-white">
                  <strong>Requirements Description:</strong>{" "}
                  {
                    reminder?.Requirements?.RequiredPropertyDetails
                      ?.RequiredDescription
                  }
                </p>
              )}

              {reminder?.Description && (
                <p className="text-sm text-white">
                  <strong>Description:</strong> {reminder?.Description}
                </p>
              )}
              {reminder?.Address && (
                <p className="text-sm text-white">
                  <strong>Address:</strong> {reminder?.Address}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
