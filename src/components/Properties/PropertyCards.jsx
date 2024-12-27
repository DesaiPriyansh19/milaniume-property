import React, { useState } from "react";
import Room from "../../assets/Room.jpeg";
import LocationLogo from "../../../svg/Icon/Locationlogo/Index";
import { Link } from "react-router-dom";
function PropertyCards() {
    
  
  return (
    <div className=" w-[90%] px-5 md:px-4 rounded-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Link to={'/properties/viewdetails'}>
      <div
        className="relative bg-cover bg-center h-[300px]  sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg  overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div></Link>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] p-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundImage: `url(${Room})` }} 
      >
        <div className="flex gap-2 items-center justify-center absolute top-4 left-4">
          <p className="bg-[#1F4B43] rounded-xl text-[.7rem] text-white px-3 py-1">Apartment</p>
         
        </div>
        <div className="absolute bottom-4 left-4 text-white pl-2 rounded-md">
          <p className="text-[.9rem] font-normal">Eaton Garth Penthouse</p>
          <p className="text-[.7rem] gap-1 flex items-center">
            <span className="material-icons">location_on</span>
            Jodhpur, Satellite
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[2px]">
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">2 Beds</p>
              <p className="text-[.6rem] text-gray-70 border-l-[1px] pl-2">1 Bath</p>
            </div>
            <p className="text-white text-[.9rem] px-3 font-medium">$1200/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCards