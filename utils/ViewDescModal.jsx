import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import ReminderModal from "./ReminderModal";

export default function ViewDescModal({
  data,
  close,
  deleteById,
  updateById,
  recycle,
}) {
  const [modal, setModal] = useState(null);
  const [showReminderModal, setShowReminderModal] = useState(false);

  const handleRecycleBin = () => {
    const trashdata = {
      ...data,
      RecycleBin: true,
    };
    setModal({
      message: `Are you sure you want to put this ${data.RequiredPersonName} requirement in recycle bin?`,
      onConfirm: async () => {
        console.log(trashdata);
        await updateById(data._id, trashdata); // Perform delete operation
        setModal(null); // Close modal
        close();
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  const handleRecover = () => {
    const trashdata = {
      ...data,
      RecycleBin: false,
    };
    setModal({
      message: `Are you sure you want recover ${data.RequiredPersonName} Enquiry?`,
      onConfirm: () => {
        updateById(data._id, trashdata); // Perform delete operation
        setModal(null); // Close modal
        close();
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  const handleDelete = () => {
    setModal({
      message: `Are you sure you want to put this ${data.EnquiryPersonName} Enquiry in recycle bin?`,
      onConfirm: async () => {
        await deleteById(data._id);
        setModal(null);
        close();
      },
      onCancel: () => setModal(null), // Close modal
    });
  };

  const handleReminder = () => {
    setShowReminderModal(true); // Open reminder modal
  };

  const closeReminderModal = () => {
    setShowReminderModal(false); // Close reminder modal
  };

  return (
    <div
      style={{ alignItems: "flex-start" }}
      className="fixed w-full inset-0 flex items-start pt-10 justify-center bg-black bg-opacity-50 z-50"
    >
      {modal && (
        <ConfirmationModal
          message={modal.message}
          onConfirm={modal.onConfirm}
          onCancel={modal.onCancel}
          color="#4ecdae"
        />
      )}

      {showReminderModal && (
        <ReminderModal
          requirement={data || {}} // Pass the data to ReminderModal with a fallback
          close={closeReminderModal} // Close reminder modal function
        />
      )}
      <div className="bg-gray-800 relative p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h3 className="text-white text-xl font-bold mb-4">
          Requirement Details
        </h3>
        <div className="text-white">
          {data ? (
            <>
              <p className="mb-2">
                <span className="font-semibold">Role:</span>{" "}
                {data.RequiredPersonRole || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {data.RequiredPersonName || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                {data.RequiredPersonPhone || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {data.RequiredPersonEmail || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Property Type:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredPropertyType || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredDescription || "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Area Sqft:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredAreaSqft
                  ? `${
                      data.RequiredPropertyDetails.RequiredAreaSqft.min || "N/A"
                    } - ${
                      data.RequiredPropertyDetails.RequiredAreaSqft.max || "N/A"
                    } Sqft`
                  : "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Area Sqyd:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredAreaSqyd
                  ? `${
                      data.RequiredPropertyDetails.RequiredAreaSqyd.min || "N/A"
                    } - ${
                      data.RequiredPropertyDetails.RequiredAreaSqyd.max || "N/A"
                    } Sqyd`
                  : "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Budget:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredBudget
                  ? `${
                      data.RequiredPropertyDetails.RequiredBudget.min || "N/A"
                    } - ${
                      data.RequiredPropertyDetails.RequiredBudget.max || "N/A"
                    }`
                  : "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Property Features:</span>
                <ul className="list-disc pl-5">
                  {data.AllResidential ? (
                    Object.entries(data.AllResidential).map(([key, value]) =>
                      value ? <li key={key}>{key}</li> : null
                    )
                  ) : (
                    <li>N/A</li>
                  )}
                  {data.AllCommercial
                    ? Object.entries(data.AllCommercial).map(([key, value]) =>
                        value ? <li key={key}>{key}</li> : null
                      )
                    : null}
                  {data.AllIndustrial
                    ? Object.entries(data.AllIndustrial).map(([key, value]) =>
                        value ? <li key={key}>{key}</li> : null
                      )
                    : null}
                  {data.AllPlotAndLand
                    ? Object.entries(data.AllPlotAndLand).map(([key, value]) =>
                        value ? <li key={key}>{key}</li> : null
                      )
                    : null}
                </ul>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Construction Status:</span>{" "}
                {data.RequiredPropertyDetails?.RequiredConstructionStatus ||
                  "N/A"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Availability:</span>
                <ul className="list-disc pl-5">
                  {data.ResidentialAvailability ? (
                    Object.entries(data.ResidentialAvailability).map(
                      ([key, value]) =>
                        value ? <li key={key}>{key}</li> : null
                    )
                  ) : (
                    <li>N/A</li>
                  )}
                </ul>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Facing:</span>
                <ul className="list-disc pl-5">
                  {data.Facing ? (
                    Object.entries(data.Facing).map(([key, value]) =>
                      value ? <li key={key}>{key}</li> : null
                    )
                  ) : (
                    <li>N/A</li>
                  )}
                </ul>
              </p>
            </>
          ) : (
            <p className="text-gray-400">No data available</p>
          )}
        </div>
        <div className="flex absolute top-3 right-3 justify-end gap-4">
          <button
            onClick={close}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
          {recycle === false && (
            <button
              onClick={handleRecover}
              className="bg-gray-200 text-green-500 px-4 py-2 rounded hover:bg-gray-300"
            >
              Recover
            </button>
          )}
          {recycle !== false && (
            <button
              onClick={handleReminder}
              className="bg-gray-200 text-blue-500 px-4 py-2 rounded hover:bg-gray-300"
            >
              Reminder
            </button>
          )}
          <button
            onClick={recycle ? handleRecycleBin : handleDelete}
            className="bg-gray-200 text-red-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            {recycle ? "Trash" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
