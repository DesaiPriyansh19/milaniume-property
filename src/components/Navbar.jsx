import React, { useState } from "react";
import logo from "../../src/assets/logothree.jpeg";
import Call from "../../svg/Icon/Call/Index";
import MyProfileLogo from "../../svg/Icon/MyProfileLogo";

const Navbar = ({ handlePopupOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b pt-5 text-sm from-black w-full to-transparent bg-opacity-10 absolute inset-x-0 top-0 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo 1" className="w-10 h-10 rounded-full" />
          {/* Nav links for large devices */}
          <div className="hidden lg:flex text-sm space-x-6 ml-[50%]">
            <a href="#" className="text-white hover:text-[#E7C873]">
              Home
            </a>
            <a href="#" className="text-white hover:text-[#E7C873]">
              AboutUs
            </a>
            <a href="#" className="text-white hover:text-[#E7C873]">
              Property
            </a>
            <a href="#" className="text-white hover:text-[#E7C873]">
              Service
            </a>
          </div>
        </div>

        {/* Right: Contact and Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile view: Call icon and number */}
          <div className="lg:hidden flex items-center">
            <span className="w-6 h-6">
              <Call />
            </span>
            <p className="text-white ml-2">+918521221224</p>
          </div>
          {/* Hamburger menu for small devices */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Button and Contact for large devices */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="w-6 h-6">
              {" "}
              <Call />
            </span>
            <p className="text-white">+918521221224</p>
            <span onClick={handlePopupOpen}>
              <MyProfileLogo />
            </span>
            <button className="bg-transparent text-sm text-white px-4 py-1 rounded-full border-2 border-white hover:border-[#E7C873]">
              Add Property
            </button>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <span className="flex gap-5">
              <img src={logo} alt="Logo 1" className="w-10 h-10 rounded-full" />
              <span className="w-6 h-6">
                <MyProfileLogo />
              </span>
            </span>
            <button className="text-white" onClick={() => setIsMenuOpen(false)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-10">
            <a href="#" className="text-white text-lg">
              Home
            </a>
            <a href="#" className="text-white text-lg">
              AboutUs
            </a>
            <a href="#" className="text-white text-lg">
              Property
            </a>
            <a href="#" className="text-white text-lg">
              Service
            </a>

            <button className="bg-transparent text-sm text-white px-4 py-1 rounded-full border-2 border-[#E7C873]">
              Add Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
