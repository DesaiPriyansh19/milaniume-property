import React, { useState } from "react";
import Room from "../../assets/Room.jpeg";
import LocationLogo from "../../../svg/Icon/Locationlogo/Index";
function PropertyCards() {
    const [activeTab, setActiveTab] = useState("All Properties");

    // Sample data
    const data = {
      "All Properties": [
        { id: 1, type: "For Sale", price: "$395,000", features: ["3 Baths", "2 Garages", "Pool"], bgImg: Room },
        { id: 2, type: "For Rent", price: "$250,000", features: ["1 Bath", "1 Garage", "Garden"], bgImg: Room },
        { id: 3, type: "For Rent", price: "$250,000", features: ["1 Bath", "1 Garage", "Garden"], bgImg: Room },
        { id: 4, type: "For Rent", price: "$250,000", features: ["1 Bath", "1 Garage", "Garden"], bgImg: Room },
        { id: 5, type: "For Rent", price: "$250,000", features: ["1 Bath", "1 Garage", "Garden"], bgImg: Room },
        { id: 6, type: "For Rent", price: "$250,000", features: ["1 Bath", "1 Garage", "Garden"], bgImg: Room },
      ],
      Commercial: [
        { id: 1, type: "For Sale", price: "$500,000", features: ["4 Baths", "2 Garages", "Pool"], bgImg: Room },
      ],
    Residantial: [
        { id: 1, type: "For Sale", price: "$300,000", features: ["3 Beds", "2 Baths", "1 Garage"], bgImg: Room },
      ],
   Industrial: [
        { id: 1, type: "For Rent", price: "$1,000,000", features: ["10 Rooms", "5 Baths", "Parking"], bgImg: Room },
        { id: 2, type: "For Rent", price: "$1,000,000", features: ["10 Rooms", "5 Baths", "Parking"], bgImg: Room },
      ],
    };
  
    const handleTabClick = (tab) => {
      console.log("Tab clicked:", tab); // Debugging log
      setActiveTab(tab);
    };
  
    return (
      <div className="w-full px-11 py-8">
        {/* Tabs */}
        <ul className="flex justify-center mb-6">
          {Object.keys(data).map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer text-[.6rem] px-4 py-1 ${
                activeTab === tab ? "border-2 rounded-3xl bg-[#f3fdfb] border-black" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
  
        {/* Cards */}
        <div className="lg:w-[90%] rounded-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data[activeTab].map((card) => (
            <div
              key={card.id}
              className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${card.bgImg})` }}
            >
              <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
                <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">{card.type}</p>
                <p className="bg-[#E7C873] text-black text-[.7rem] px-3 py-1 rounded-xl">Featured</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
                <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
                <p className="text-[.7rem] gap-1 flex items-center">
                  <LocationLogo className="" />
                  Jodhpur, Satellite
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-[2px]">
                    {card.features.map((feature, index) => (
                      <p key={index} className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">
                        {feature}
                      </p>
                    ))}
                  </div>
                  <p className="text-white text-[.9rem] px-3 font-medium">{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      <div className="flex items-center justify-center"> <button  className="mt-3 md:mt-5 px-4 py-2 text-[.7rem] font-extralight  bg-[#E7C873]
         text-black hover:bg-transparent hover:text-white hover:border-[1px]
          hover:border-white rounded-3xl">See All Listing  &#8594;
   </button></div> 
      </div>
    );
}

export default PropertyCards