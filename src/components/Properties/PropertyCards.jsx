import React from "react";
import Room from "../../assets/Room.jpeg";

function PropertyCards({ data }) {
  return (
    <div className=" w-[90%] px-5 md:px-4 rounded-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.map((card) => {
        return (
          <div
            key={card._id}
            className="relative bg-cover bg-center h-[300px]  sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg"
            style={{
              backgroundImage: `url(${card.PropertyPhotos[0] || Room})`,
            }}
          >
            <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
              <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">
                Apartment
              </p>
              <p
                className={`text-[.7rem] ${
                  card?.Featured
                    ? "bg-yellow-500 text-black"
                    : "bg-zinc-900 text-gray-200 opacity-75"
                }  px-3 py-1  rounded-xl`}
              >
                {card?.Featured ? "Featured" : "Not Featured"}
              </p>
            </div>
            <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
              <p className="text-[.9rem] font-normal">{card.PropertyName}</p>
              <p className="text-[.7rem] gap-1 flex items-center">
                <span className="material-icons">location_on</span>
                {card.Location}
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-[2px]">
                  <p className="text-[.6rem] text-gray-70  pr-2">
                    {card.PropertyDetails.Sqft} Sqft
                  </p>
                  <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">
                    {card.PropertyDetails.Bedrooms} Bedrooms
                  </p>
                  <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">
                    {card.PropertyDetails.Bathrooms} Bath
                  </p>
                </div>
                <p className="text-white text-[.9rem] px-3 font-medium">
                  ₹
                  {card?.Prices?.SalesPrice
                    ? Intl.NumberFormat().format(card.Prices.SalesPrice)
                    : card?.Prices?.RentPrice
                    ? `${Intl.NumberFormat().format(
                        card.Prices.RentPrice
                      )}/month`
                    : "Price Not Available"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyCards;
