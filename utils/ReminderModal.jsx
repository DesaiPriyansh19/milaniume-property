import React, { useState } from "react";
import useApiData from "../hooks/useApiData";
import InputField from "./InputFields";

export default function ReminderModal({ enquiry, requirement, close }) {
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
    ReminderType: "Online",
    Remarks: {
      Visit: false,
      CallBack: false,
      Meeting: false,
      CallNotAnswered: false,
    },
    Description: "",
    Address: "",
    Enquiry: enquiry?._id || null,
    Requirements: requirement?._id || null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const { addNew } = useApiData(
    "https://milaniumepropertybackend.vercel.app/api/reminder"
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nameParts = name.split(".");

    setFormData((prevData) => {
      if (nameParts.length > 1) {
        const updatedData = { ...prevData };
        let temp = updatedData;

        for (let i = 0; i < nameParts.length - 1; i++) {
          temp = temp[nameParts[i]]; // Navigate to the nested object
        }

        // Handle different input types dynamically
        if (type === "checkbox") {
          temp[nameParts[nameParts.length - 1]] = checked; // For checkbox, use checked value
        } else if (type === "date" && value) {
          // For date inputs, convert the string to Date object and then to ISO string
          temp[nameParts[nameParts.length - 1]] = new Date(value).toISOString(); // Convert to ISO string
        } else {
          temp[nameParts[nameParts.length - 1]] = value; // For other types, use the string value directly
        }

        return updatedData;
      }

      // For non-nested fields
      if (type === "checkbox") {
        return { ...prevData, [name]: checked }; // For checkbox, use checked value
      } else if (type === "date" && value) {
        return { ...prevData, [name]: new Date(value).toISOString() }; // Convert to ISO string
      }

      return { ...prevData, [name]: value }; // For other types, use the value directly
    });
    console.log(formData);
  };

  const handleSave = async () => {
    const dataToSend = { ...formData };

    // Remove Requirements if it's empty
    if (!dataToSend.Requirements) {
      delete dataToSend.Requirements;
    }
    if (!dataToSend.Enquiry) {
      delete dataToSend.Enquiry;
    }

    await addNew(dataToSend);
    close(); // Close the reminder modal
  };

  return (
    <div
      style={{ alignItems: "flex-start" }}
      className="fixed w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[51]"
    >
      <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h3 className="text-white text-xl font-bold mb-4">Set Reminder</h3>
        <div className="text-white">
          <div className="flex justify-center items-center w-full  ">
            <form className="w-full text-white rounded shadow-md">
              <div className="flex w-full gap-4 justify-between">
                {/* Example Input Fields */}
                <div className="mb-4 w-full">
                  <InputField
                    label="Name"
                    type="text"
                    name="Name"
                    placeholder="Enter your name"
                    value={formData?.Name}
                    onChange={handleInputChange}
                    autoComplete="name"
                    variant={1}
                  />
                </div>

                <div className="mb-4 w-full">
                  <InputField
                    label="Date & Time"
                    type="datetime-local"
                    name="Date&Time"
                    placeholder="Select date and time"
                    value={
                      formData?.["Date&Time"]
                        ? new Date(formData["Date&Time"])
                            .toISOString()
                            .slice(0, 16)
                        : "" // Ensure it's always a string (controlled input)
                    }
                    onChange={handleInputChange}
                    autoComplete="datetime"
                    variant={1}
                  />
                </div>
              </div>

              {!enquiry && (
                <>
                  <div className="mb-4 w-full">
                    <InputField
                      label="Requirement Person"
                      type="text"
                      name="Requirements"
                      placeholder="Enter Requirements"
                      disabled={true}
                      value={requirement?.RequiredPersonName}
                      onChange={handleInputChange}
                      autoComplete="requirements"
                      variant={1}
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <InputField
                      label="Requirement Description"
                      type="textarea"
                      name="RequiredPropertyDetails.RequiredDescription"
                      disabled={true}
                      placeholder="Enter Required Description"
                      value={
                        requirement?.RequiredPropertyDetails
                          ?.RequiredDescription
                      }
                      onChange={handleInputChange}
                      autoComplete="requirements"
                      variant={1}
                    />
                  </div>
                </>
              )}
              {!requirement && (
                <>
                  <div className="mb-4 w-full">
                    <InputField
                      label="Enquiry Person"
                      type="text"
                      name="EnquiryPersonName"
                      placeholder="Enter Enquiry Person Name"
                      disabled={true}
                      value={enquiry?.EnquiryPersonName}
                      onChange={handleInputChange}
                      autoComplete="enquirypersonname"
                      variant={1}
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <InputField
                      label="Enquiry Person Message"
                      type="textarea"
                      name="EnquiryPersonMessage"
                      disabled={true}
                      placeholder="Enquiry Person Message"
                      value={enquiry?.EnquiryPersonMessage}
                      onChange={handleInputChange}
                      autoComplete="requirements"
                      variant={1}
                    />
                  </div>
                </>
              )}

              <div className="mb-4 w-full">
                <InputField
                  label="Description"
                  type="textarea"
                  name="Description"
                  placeholder="Enter Description"
                  value={formData?.Description}
                  onChange={handleInputChange}
                  autoComplete="description"
                  variant={1}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={close}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Reminder
          </button>
        </div>
      </div>
    </div>
  );
}
