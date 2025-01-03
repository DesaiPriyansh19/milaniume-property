import React, { useEffect, useState } from "react";
import logo from "../../src/assets/logo final PNG.png";
import Call from "../../svg/Icon/Call/Index";
import MyProfileLogo from "../../svg/Icon/MyProfileLogo";
import { Link, useNavigate } from "react-router-dom";
import pdf from "/Brochure-MillennumProperties.pdf?url";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ handlePopupOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
      if (userInfo) {
        try {
          const decodedToken = jwtDecode(userInfo.token);
          setIsLoggedIn(true);
          if (decodedToken?.isAdmin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Invalid token:", error);
          setIsLoggedIn(false);
          setIsAdmin(false);
        }
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    };
  
    verifyToken();
  }, []);
  
  const handleOnClick = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!isLoggedIn && !userInfo) {
      // User not logged in
      handlePopupOpen();
    } else if (isAdmin) {
      // User is admin
      navigate("/admin");
    } else {
      // User is logged in but not admin
      alert("Logged in successfully!");
    }
  };
  
  return (
    <nav className="bg-gradient-to-b pt-5 text-sm from-black w-full to-transparent bg-opacity-10 absolute inset-x-0 top-0 z-40">
      <div className="container mx-auto px-1 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center text-center justify-center">
          <img
            src={logo}
            alt="Logo 1"
            className="mx-2 w-[70px] sm:mx-0 sm:w-[90px] md:w-[80px] xl:w-[90px]  "
          />
          {/* Nav links for large devices */}
          <div className="hidden lg:flex text-[.8rem] xl:text-[1rem] px-28 xl:px-80   space-x-6 xl:space-x-8 mx-auto">
            <Link
              to="/"
              className="text-white px-2 hover:text-[#E7C873] hover:border-b-[1px]"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-white hover:text-[#E7C873] hover:border-b-[1px]"
            >
              AboutUs
            </Link>
            <Link
              to="/properties"
              className="text-white hover:text-[#E7C873] hover:border-b-[1px]"
            >
              Property
            </Link>
            <Link
              to="/ourservices"
              className="text-white hover:text-[#E7C873] hover:border-b-[1px]"
            >
              Service
            </Link>

            <Link
              to={"/quickenquiry"}
              className="text-white hover:text-[#E7C873] hover:border-b-[1px]"
            >
              Quick Contact
            </Link>
          </div>
        </div>

        {/* Right: Contact and Menu */}
        <div className="flex items-center space-x-3 pr-4 lg:pr-1">
          {/* Mobile view: Call icon and number */}
          <div className="lg:hidden flex items-center">
            <a href="tel:+1234567890" className="w-6 h-6 ">
              <Call />
            </a>
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
          <div className="hidden lg:flex items-center justify-center space-x-4">
            <a href="tel:+1234567890" className="w-6 h-6  ">
              <Call />
            </a>

            <span onClick={handleOnClick}>
              <MyProfileLogo />
            </span>
            {/* <button className="bg-transparent text-sm text-white px-4 py-1 rounded-full border-2 border-white hover:border-[#E7C873]">
            Brochure
            </button> */}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-sm text-white px-4 py-1 rounded-full border-2 border-white hover:border-[#E7C873]"
            >
              Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 z-50 flex flex-col">
          <div className=" flex justify-start items-center p-0">
            <span className="absolute top-0 left-0 flex items-center justify-start gap-5">
              <img
                src={logo}
                alt="Logo 1"
                className="w-[200px]  rounded-full"
              />
              <span className="w-11 h-11 flex items-center justify-start">
                <MyProfileLogo />
              </span>
            </span>
            <button
              className="text-white absolute top-5 right-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 sm:h-9 sm:w-10"
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
          <div className="absolute top-[20%] right-[10%] left-[10%] flex flex-col items-center space-y-4 mt-10">
            <Link
              to="/"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              AboutUs
            </a>

            <Link
              to="/properties"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Property
            </Link>
            <a
              href="#"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </a>

            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Brochure.pdf"
              className="bg-transparent text-sm text-white px-6 py-2 rounded-full border-2 border-[#E7C873]"
            >
              Brochure
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
