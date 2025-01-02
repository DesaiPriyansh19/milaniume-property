import React, { useEffect, useState } from "react";
import Room from "../assets/Room.jpeg";
import LocationLogo from "../../svg/Icon/Locationlogo/Index";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
function FeaturedProperty() {
  const [activeTab, setActiveTab] = useState("All Properties");
  const [filteredData, setFilteredData] = useState([]);
  const data = ["All Properties", "Commercial", "Residential", "Industrial"];

  const { data: PropertyData , loading } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/property"
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (PropertyData) {
      if (activeTab === "All Properties") {
        setFilteredData(PropertyData);
      } else {
        setFilteredData(
          PropertyData.filter((item) => item.PropertyType === activeTab)
        );
      }
    }
  }, [activeTab, PropertyData]);

  return (
    <>
      <h3 className="text-2xl text-center mt-11 font-medium ">
        Featured Properties
      </h3>
      
     
      <div className="w-full px-11 py-8">
        {/* Tabs */}
        <ul className="flex justify-center mb-6">
          {data.map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer text-[.6rem] lg:text-[.7rem] px-4 py-1 ${
                activeTab === tab
                  ? "border-[1px] rounded-3xl bg-[#f3fdfb] border-black"
                  : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>



       {/* Show skeleton loader when loading */}
       {loading ? (
       
       <SkeletonLoader/>
    
   ) : ( 
        <div className="lg:w-[90%] rounded-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredData.map((card) => (
            <div
              key={card._id}
              className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg"
              style={{
                backgroundImage: `url(${card.PropertyPhotos[0] || Room})`,
              }}
            >
              <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
                <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">
                  {card.ForSale ? "For Sale" : ""}
                </p>

                {card.ForRent && (
                  <p className="bg-[#247264] rounded-xl text-[.7rem] text-white px-3 py-1">
                    {card.ForRent && "For Rent"}
                  </p>
                )}
                <p className="bg-[#E7C873] text-black text-[.7rem] px-3 py-1 rounded-xl">
                  Featured
                </p>
              </div>
              <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
                <p className="text-[.9rem] font-normal">{card.PropertyName}</p>
                <div className="text-[.7rem] gap-1 flex items-center">
                  <LocationLogo className="" />
                  <p>{card.Landmark}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-3">
                    <p className="text-[.6rem] text-gray-70">
                      {card?.PropertyDetails?.Bathrooms} Bathrooms
                    </p>
                    <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">
                      {card?.PropertyDetails?.Bedrooms} Bedrooms
                    </p>
                    <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">
                      {card?.PropertyDetails?.Sqft} Sqft
                    </p>
                  </div>
                  <p className="text-white text-[.9rem] px-3 font-medium">
                    ₹
                    {card?.Prices?.SalesPrice
                      ? `${Intl.NumberFormat().format(
                          card.Prices.SalesPrice
                        )}/-`
                      : card?.Prices?.RentPrice
                      ? `${Intl.NumberFormat().format(
                          card.Prices.RentPrice
                        )}/month`
                      : "Price Not Available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>)}


        <div className="flex items-center justify-center">
          {" "}
    <Link to={'/properties'} >    <button
            className="mt-3 md:mt-5 px-4 py-2 text-[.7rem] font-extralight  bg-[#E7C873]
         text-black  rounded-3xl"
          >
            See All Listing &#8594;
          </button></Link> 
        </div>
      </div>
    </>
  );
}

export default FeaturedProperty;
