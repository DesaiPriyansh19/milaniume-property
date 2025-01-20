import React, { useEffect, useState } from "react";
import logo from "../../src/assets/logo final PNG.png";
import Call from "../../svg/Icon/Call/Index";
import MyProfileLogo from "../../svg/Icon/MyProfileLogo";
import { Link, useNavigate } from "react-router-dom";
import pdf from "/Brochure-MillennumProperties.pdf?url";

import { jwtDecode } from "jwt-decode";

const Navbar = ({ handlePopupOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserInfoDiv, setShowUserInfoDiv] = useState(false);
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
  }, [showUserInfoDiv]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // Remove user info from localStorage
    setIsLoggedIn(false); // Update login state
    setIsAdmin(false); // Update admin state
    navigate("/"); // Redirect to the homepage or any desired route
    setShowUserInfoDiv(false);
  };

  const handleOnClick = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!isLoggedIn && !userInfo) {
      // User not logged in
      handlePopupOpen();
    } else {
      // User is logged in but not admin
      setShowUserInfoDiv(true);
    }
  };

  return (
    <nav className="bg-gradient-to-b pt-5 text-sm from-black w-full to-transparent bg-opacity-10 absolute inset-x-0 top-0 z-40">
      <div className="container mx-auto px-1 flex items-center justify-between lg:justify-evenly xl:gap-44 h-16">
        {/* Left: Logo */}
        <div className="flex items-center text-center justify-center">
          <img
            src={logo}
            alt="Logo 1"
            className="mx-2 w-[70px] sm:mx-0 sm:w-[90px] md:w-[80px] xl:w-[90px] transition-transform duration-500 ease-in-out hover:brightness-110 "
          />
    {/* Nav links for large devices */}
<div className="hidden lg:flex text-[.8rem] xl:text-[0.9rem]  px-28 lg:px-44 xl:px-70 space-x-6 xl:space-x-7 mx-auto">
  <Link
    to="/"
    className="text-white relative transition px-2 group"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/aboutus"
    className="text-white relative transition group"
  >
    About Us
    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/properties"
    className="text-white relative transition group"
  >
    Property
    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/ourservices"
    className="text-white relative transition group"
  >
    Service
    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to={"/quickenquiry"}
    className="text-white relative transition group"
  >
    Quick Contact
    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</div>

        </div>

        {/* Right: Contact and Menu */}
        <div className="flex items-center space-x-3 pr-4 lg:pr-1">
  {/* Mobile view: Call icon and number */}
  <div className="lg:hidden flex items-center">
    <a href="tel:+1234567890" className="w-6 h-6 hover:text-blue-500 transition-colors duration-300">
      <Call />
    </a>
  </div>

  <span className="w-9 h-9 md:hidden flex items-center justify-start hover:rotate-6 transition-transform duration-300">
    <MyProfileLogo />
  </span>

  {/* Hamburger menu for small devices */}
  <button
    className="lg:hidden text-white hover:text-gray-300 transition-color duration-300"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <svg
      className="w-8 h-8"
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
    <a href="tel:+9898992554" className="w-6 h-6 hover:scale-125 transition-transform duration-300 ">
      <Call />
    </a>

    <span onClick={handleOnClick} className="hover:scale-110 transition-transform duration-300">
      <MyProfileLogo />
    </span>

    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent text-sm text-white hover:text-[#1F4B43] px-4 py-1 rounded-full border-2 border-white hover:border-[#E7C873] hover:bg-[#E7C873] transition-all duration-300"
    >
      Brochure
    </a>
  </div>
</div>

      </div>

      {/* Side Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 z-50 flex flex-col">
          <div className=" flex justify-start  items-center p-0">
            <span className="absolute top-0 left-0 flex items-center justify-start gap-5">
              <img
                src={logo}
                alt="Logo 1"
                className="w-[70px] sm:mx-0 sm:w-[90px] m-5 "
              />
            </span>
            <button
              className="text-white absolute top-5 right-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-7 h-7 m-5 sm:h-9 sm:w-10"
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
              About Us
            </a>

            <Link
              to="/properties"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Property
            </Link>

            <Link
              to="/ourservices"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
             Our Service
            </Link>
            <Link
              to="/quickenquiry"
              className="text-white text-lg sm:text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Quick Enquiry
            </Link>
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
      {showUserInfoDiv && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium">Logged in successfully!</p>
            <div className="flex gap-2 text-sm text-white items-center mt-4">
              <button
                className=" px-6 py-2 bg-[#E7C873] rounded-full"
                onClick={() => setShowUserInfoDiv(false)}
              >
                Close
              </button>
              {isAdmin && (
                <Link
                  to="/admin"
                  className=" px-6 py-2 rounded-full  bg-[#E7C873] font-semibold"
                >
                  Admin
                </Link>
              )}
              <button
                className=" px-6 py-2 rounded-full bg-[#E7C873]  "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
