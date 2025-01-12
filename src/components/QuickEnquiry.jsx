import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import img from "../assets/support.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../../utils/InputFields";
import axios from "axios";
const QuickEnquiry = () => {
  const [formData, setFormData] = useState({
    EnquiryPersonName: "",
    EnquiryPersonEmail: "",
    EnquiryPersonPhone: "",
    EnquiryPersonMessage: "",
    EnquiryPropertyType: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://milaniumepropertybackend.vercel.app/api/enquiry",
        formData
      );
      console.log("Response:", response.data);
      alert("Enquiry submitted successfully!");
      setFormData({
        EnquiryPersonName: "",
        EnquiryPersonEmail: "",
        EnquiryPersonPhone: "",
        EnquiryType: "",
        EnquiryPersonMessage: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert(
        "An error occurred while submitting your enquiry. Please try again."
      );
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-[500px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat relative 
     before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[0px]"
      >
        <div className="absolute inset-0 bg-black/35 md:bg-black/45"></div>
        <div
          className="  relative z-10 flex flex-col items-center justify-center 
               text-center text-white h-full px-4"
          style={{
            textShadow: "4px 4px 8px rgba(2, 2, 0.5, 0.5)", // Apply text shadow to all children
          }}
        >
          <h2 className=" mt-10 text-2xl md:text-2xl lg:text-5xl font-normal">
            Quick Enquiry
          </h2>
          <p className="hidden text-white text-lg font-thin md:font-normal px-40">
            Whether you’re looking to buy, sell, or rent, our experienced team
            is here to guide you through <br></br> every step of the process.
            Fill out the form below,and we’ll get <br></br> back to you promptly
            with personalized assistance.
          </p>
          <Link to={"/"}>
            {" "}
            <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
              Back to Home &#8594;
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap bg-white p-8">
        {/* Left Section - Form Inputs */}

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Office Location</h2>
          <p>
            C/401, Ganesh Glory 11,Nr. Moneyplant Highstreet,Jagatpur Road,
            Gota, Ahmedabad-382481
          </p>
          <div className="map-container w-full h-[80%]">
            {/* Replace the coordinates with your office's latitude and longitude */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7339.078095836263!2d72.538186!3d23.113964!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA2JzUwLjMiTiA3MsKwMzInMjYuNyJF!5e0!3m2!1sen!2sin!4v1735298228605!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Right Section - Office Location with Map */}
        <div className="w-full mx-auto md:w-1/3 p-4">
          <h2 className="text-2xl font-semibold mb-4">Quick Enquiry</h2>

          <form className="space-y-4">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your Name"
              name="EnquiryPersonName"
              value={formData.EnquiryPersonName}
              onChange={handleInputChange}
              required={true}
              variant={3}
            />

            <InputField
              label="Email (Required)"
              type="text"
              placeholder="Enter your Email id"
              name="EnquiryPersonEmail"
              value={formData.EnquiryPersonEmail}
              onChange={handleInputChange}
              required={true}
              variant={3}
            />

            <InputField
              label="Phone (Required)"
              type="text"
              placeholder="Enter your contact number"
              name="EnquiryPersonPhone"
              value={formData.EnquiryPersonPhone}
              onChange={handleInputChange}
              required={true}
              variant={3}
            />
            <div className="mb-4 text-sm w-full">
              <label className="block text-sm font-medium text-gray-500">
                Looking For
              </label>
              <select
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    EnquiryPropertyType: e.target.value,
                  }));
                }}
                value={formData.EnquiryPropertyType}
                className="w-full   p-2 border-[1.5px] rounded-lg text-sm placeholder:text-[#1F4B43] border-[#1F4B43]"
              >
                <option value={"Property Services"}>Property Services</option>
                <option value={"Loan & Finance"}>Loan & Finance</option>
                <option value={"Inerior Design"}> Inerior Design</option>
           
              </select>
            </div>
            <InputField
              label="Message"
              type="textarea"
              name="EnquiryPersonMessage"
              placeholder="Enter Details of Enquiry"
              value={formData.EnquiryPersonMessage}
              onChange={handleInputChange}
              required={true}
              variant={3}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-4 w-full bg-[#1F4B43] text-sm  text-white p-2 rounded-md "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuickEnquiry;
