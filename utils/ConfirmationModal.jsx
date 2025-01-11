import React from "react";

const ConfirmationModal = ({ message, onConfirm, onCancel, color }) => {
  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 p-6 rounded shadow-lg max-w-md w-full">
        <p className="text-lg text-white mb-4">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: color ? color : "#dc2626 ",
            }}
            onClick={onConfirm}
            className=" text-white px-4 py-2 rounded "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
