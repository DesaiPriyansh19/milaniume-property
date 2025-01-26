import React, { useState } from "react";
import InputField from "../../../../utils/InputFields";
import CommercialForm from "../AdminProperty/CommercialForm";
import ResidentForm from "../AdminProperty/ResidentForm";
import IndustrialForm from "../AdminProperty/IndustrialForm";
import AgricultralPlot from "../AdminProperty/AgricultralPlot";
import useApiData from "../../../../hooks/useApiData";
import ConfirmationModal from "../../../../utils/ConfirmationModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditReminder({
  updateById,
  handleEdit,
  setFormData,
  formData,
  editData,
  deleteById,
}) {
  const [modal, setModal] = useState(null);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      await updateById(editData.id, formData);
      handleEdit("View");
    } catch (error) {
      console.error("Error occurred:", error); // Log the error
    }
  };

  const handleDelete = (id, data) => {
    setModal({
      message: `Are you sure you want to delete ${data?.Name}'s reminder?`,
      onConfirm: () => {
        deleteById(id); // Perform delete operation
        setModal(null); // Close modal
        handleEdit("View");
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  console.log(formData);

  return (
    <div className="text-white  mx-auto p-4">
      {modal && (
        <ConfirmationModal
          message={modal.message}
          onConfirm={modal.onConfirm}
          onCancel={modal.onCancel}
        />
      )}{" "}
      <div className="flex mb-6 justify-between">
        <div>
          {" "}
          <p className="text-xl font-semibold uppercase ">Edit Reminder</p>
          <p className=" text-sm text-gray-200">Edit Reminder</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className=" bg-green-800 text-white h-10 p-2 rounded "
          >
            Confirm
          </button>
          <button
            onClick={() => {
              handleEdit("View");
            }}
            className=" bg-yellow-800 text-white h-10 px-3 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(formData.id, formData);
            }}
            className=" bg-red-800 text-white h-10 px-3 rounded"
          >
            Delete
          </button>
        </div>
      </div>
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
                label="Mobile Number"
                type="text"
                name="MobileNumber"
                placeholder="Enter your mobile number"
                value={formData?.MobileNumber}
                onChange={handleInputChange}
                autoComplete="tel"
                variant={1}
              />
            </div>

            <div className="mb-4 w-full">
              <InputField
                label="Email"
                type="email"
                name="Email"
                placeholder="Enter your email"
                value={formData?.Email}
                onChange={handleInputChange}
                autoComplete="email"
                variant={1}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="date-time-picker"
                className="block text-sm mb-2 font-semibold"
              >
                Date & Time
              </label>
              <DatePicker
                id="date-time-picker"
                wrapperClassName="w-full"
                selected={
                  formData?.["Date&Time"]
                    ? new Date(formData["Date&Time"])
                    : null
                }
                onChange={(date) => {
                  // Pass the selected date to setFormData
                  setFormData((prevData) => ({
                    ...prevData,
                    "Date&Time": date ? date.toISOString() : "", // Store as ISO string or empty if cleared
                  }));
                }}
                showTimeSelect
                name="Date&Time"
                timeFormat="HH:mm"
                timeIntervals={1}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select date and time"
                className="w-full p-4 border-b text-base bg-gray-800"
              />
            </div>
          </div>
          <div className="flex w-full gap-4 justify-between">
            <div className="mb-4 w-full">
              <InputField
                label="Property Area (Sqft)"
                type="text"
                name="PropertyArea.Sqft"
                placeholder="Enter area in Sqft"
                value={formData?.PropertyArea?.Sqft}
                onChange={handleInputChange}
                autoComplete="area-sqft"
                variant={1}
              />
            </div>

            <div className="mb-4 w-full">
              <InputField
                label="Property Area (Sqyd)"
                type="text"
                name="PropertyArea.Sqyd"
                placeholder="Enter area in Sqyd"
                value={formData?.PropertyArea?.Sqyd}
                onChange={handleInputChange}
                autoComplete="area-sqyd"
                variant={1}
              />
            </div>

            <div className="mb-4 w-full">
              <InputField
                label="Condition"
                type="text"
                name="Condition"
                placeholder="Enter condition"
                value={formData?.Condition}
                onChange={handleInputChange}
                autoComplete="condition"
                variant={1}
              />
            </div>
            <div className="mb-4 w-full">
              <InputField
                label="Reminder Type"
                type="select"
                name="ReminderType"
                value={formData?.PropertyType}
                onChange={handleInputChange}
                variant={1}
                options={[
                  { value: "Online", label: "Online" },
                  { value: "Offline", label: "Offline" },
                ]}
              />
            </div>
          </div>
          <div className="flex w-full gap-4 justify-between">
            <div className="mb-4 w-full">
              <InputField
                label="Property Location"
                type="text"
                name="PropertyLocation"
                placeholder="Enter Property Location"
                value={formData?.PropertyLocation}
                onChange={handleInputChange}
                autoComplete="propertyLocation"
                variant={1}
              />
            </div>
            <div className="mb-4 w-full">
              <InputField
                label="Availability"
                type="text"
                name="Availability"
                placeholder="Enter Availability"
                value={formData?.Availability}
                onChange={handleInputChange}
                autoComplete="availability"
                variant={1}
              />
            </div>
            <div className="mb-4 w-full">
              <InputField
                label="Budget"
                type="text"
                name="Budget"
                placeholder="Enter Budget"
                value={formData?.Budget}
                onChange={handleInputChange}
                autoComplete="budget"
                variant={1}
              />
            </div>
          </div>

          <div className="flex w-full justify-center mt-5 gap-4 flex-wrap">
            <InputField
              type="checkbox"
              id="Visit"
              label="Visit"
              name="Remarks.Visit"
              variant={2}
              checked={formData?.Remarks?.Visit}
              onChange={handleInputChange}
            />

            <InputField
              type="checkbox"
              id="CallBack"
              label="Call Back"
              name="Remarks.CallBack"
              variant={2}
              checked={formData?.Remarks?.CallBack}
              onChange={handleInputChange}
            />

            <InputField
              type="checkbox"
              id="Meeting"
              label="Meeting"
              name="Remarks.Meeting"
              variant={2}
              checked={formData?.Remarks?.Meeting}
              onChange={handleInputChange}
            />

            <InputField
              type="checkbox"
              id="CallNotAnswered"
              label="Call Not Answered"
              name="Remarks.CallNotAnswered"
              variant={2}
              checked={formData?.Remarks?.CallNotAnswered}
              onChange={handleInputChange}
            />
          </div>
          <div>
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
  );
}
