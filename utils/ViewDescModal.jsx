import React from "react";

export default function ViewDescModal({ data, close }) {
  return (
    <div className="fixed w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 relative p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h3 className="text-white text-xl font-bold mb-4">
          Requirement Details
        </h3>
        <div className="text-white">
          {data ? (
            <>
              <p className="mb-2">
                <span className="font-semibold">Role:</span>{" "}
                {data.RequiredPersonRole}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {data.RequiredPersonName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                {data.RequiredPersonPhone}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {data.RequiredPersonEmail}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Property Type:</span>{" "}
                {data.RequiredPropertyDetails.RequiredPropertyType}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {data.RequiredPropertyDetails.RequiredDescription}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Budget:</span>{" "}
                {data.RequiredPropertyDetails.RequiredBudget.min} -{" "}
                {data.RequiredPropertyDetails.RequiredBudget.max}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Property Features:</span>
                <ul className="list-disc pl-5">
                  {Object.entries(data.AllResidential).map(([key, value]) =>
                    value ? <li key={key}>{key}</li> : null
                  )}
                  {Object.entries(data.AllCommercial).map(([key, value]) =>
                    value ? <li key={key}>{key}</li> : null
                  )}
                  {Object.entries(data.AllIndustrial).map(([key, value]) =>
                    value ? <li key={key}>{key}</li> : null
                  )}
                  {Object.entries(data.AllPlotAndLand).map(([key, value]) =>
                    value ? <li key={key}>{key}</li> : null
                  )}
                </ul>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Construction Status:</span>{" "}
                {data.RequiredPropertyDetails.RequiredConstructionStatus}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Availability:</span>
                <ul className="list-disc pl-5">
                  {Object.entries(data.ResidentialAvailability).map(
                    ([key, value]) => (value ? <li key={key}>{key}</li> : null)
                  )}
                </ul>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Facing:</span>
                <ul className="list-disc pl-5">
                  {Object.entries(data.Facing).map(([key, value]) =>
                    value ? <li key={key}>{key}</li> : null
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
        </div>
      </div>
    </div>
  );
}
