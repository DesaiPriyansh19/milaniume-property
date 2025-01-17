import React from "react";
import DeleteOrRecoverProperty from "./DeleteOrRecoverProperty";

export default function RecycledProperty({
  handleEdit,
  filteredData,
  updateById,
  deleteById,
  editData,
  formData,
  setFormData,
}) {
  return (
    <>
      {editData.type === "View" && (
        <div className="text-white  mx-auto p-4">
          <div className="text-white w-full grid grid-cols-3 gap-4">
            {filteredData.map((property, index) => (
              <div
                key={index}
                onClick={() => handleEdit("Edit", property._id)}
                className="bg-gray-800  p-4 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition duration-300"
              >
                {/* Property Image */}
                <div className="h-48 w-full relative group bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={
                      property?.PropertyPhotos?.[0] ||
                      "https://i.pinimg.com/736x/ba/78/d2/ba78d2b517f4783313180e89a1780808.jpg"
                    }
                    alt={property?.PropertyName}
                    className="w-full h-full object-cover"
                  />

                  <p className="absolute inset-0 text-xl font-mono  backdrop-blur-sm w-full h-full ease-in-out duration-300 transition-opacity group-hover:opacity-100 flex opacity-0 justify-center items-center ">
                    <span>View Prop</span>{" "}
                    <span className="ml-2 mt-2 transition-transfrom ease-in-out duration-200 group-active:translate-x-2 group-active:-translate-y-2">
                      &#8599;
                    </span>
                  </p>
                  <p
                    className={`text-sm group-hover:opacity-0 ease-in-out duration-300 transition-opacity  absolute top-0 right-1 ${
                      property?.Featured
                        ? "bg-yellow-500 text-black"
                        : "bg-zinc-900 text-gray-200 opacity-75"
                    } inline-block p-2 my-2 rounded-md`}
                  >
                    {property?.Featured ? "Featured" : "Not Featured"}
                  </p>
                </div>

                {/* Property Details */}
                <div className="py-2">
                  <h2 className="text-lg font-semibold text-white truncate">
                    {property?.PropertyName || "Property Name"}
                  </h2>
                  <p className="text-sm my-1 text-gray-300">
                    ID: {property?._id || "id not available"}
                  </p>
                  <p className="text-sm mb-2 text-gray-400">
                    {property?.Landmark || "Location not available"}
                  </p>

                  <p className="text-base font-bold text-white">
                    ₹
                    {property?.Prices?.SalesPrice
                      ? `${Intl.NumberFormat().format(
                          property.Prices.SalesPrice
                        )}/-`
                      : property?.Prices?.RentPrice
                      ? `${Intl.NumberFormat().format(
                          property.Prices.RentPrice
                        )}/month`
                      : "Price Not Available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {editData.type === "Edit" && (
        <DeleteOrRecoverProperty
          updateById={updateById}
          handleEdit={handleEdit}
          setFormData={setFormData}
          formData={formData}
          editData={editData}
          deleteById={deleteById}
        />
      )}
    </>
  );
}
