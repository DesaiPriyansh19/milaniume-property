import React from "react";
import logo from "../../src/assets/logo final PNG.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 pt-20 mb-3 text-gray-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 pt-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
          <img
  src={logo}
  alt="Logo 1"
  className="w-[130px] mx-auto sm:w-[100px] md:w-[110px] xl:w-[120px] mb-3 transition-transform duration-500 ease-in-out hover:brightness-110"
/>

            <p className="text-[.9rem] leading-relaxed text-black">
              At Millennium Properties, we connect buyers and sellers to
               create seamless transactions. Our mission is to help you to find
                your dream property, with a focus on trust and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div  className="flex flex-col lg:w-[60%] sm:ml-20">
            <h3 className="text-xl text-center font-bold mb-4">Other Pages</h3>
            <ul className="sm:space-y-3 mx-auto grid grid-cols-3  items-center gap-2 justify-between text-start sm:grid-cols-1">
  {[
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Property", path: "/properties" },
    { name: "Service", path: "/ourservices" },
    { name: "Contact Us", path: "/quickenquiry" },
  ].map((link, index) => (
    <li key={index} className="group relative">
      <Link
        to={link.path}
        className="text-sm hover:text-gray-900 transition relative z-10"
      >
        {link.name}
      </Link>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
    </li>
  ))}
</ul>

          </div>
            {/* Quick Links */}
            <div className="flex flex-col">
  <h3 className="text-xl text-center font-bold mb-4">Quick Links</h3>
  <ul className="sm:space-y-3 mx-auto flex justify-between text-start sm:grid">
    {/* Facebook Logo */}
    <li>
      <a
        href="https://www.facebook.com/profile.php?id=61565211002294"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition text-sm flex items-center group"
      >
        <FaFacebook
          size={24}
          className="mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600"
        />
       
      </a>
    </li>

    {/* Instagram Logo */}
    <li>
      <a
        href="https://www.instagram.com/millennium_properties45/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600 transition text-sm flex items-center group"
      >
        <FaInstagram
          size={24}
          className="mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-600"
        />
    
      </a>
    </li>
  </ul>
</div>

          {/* Contact Info */}
          <div className="">
  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
  <ul className="space-y-3 text-sm text-black">
    <li className="flex items-start group">
      <span className="mr-2">📍</span>
      <a
        href="https://maps.app.goo.gl/bkNkxzhDT4JGRuWL6"
        className="relative hover:text-gray-900 transition"
      >
        C/401, Ganesh Glory 11, Nr. Money Plant Highstreet, 
        Jagtapur Road, Gota, Ahmedabad -382481
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
    <li className="flex items-center group">
      <span className="mr-2">📞</span>
      <a
        href="tel:9898512554"
        className="relative hover:text-gray-900 transition"
      >
        Back Office: 9898512554
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
    <li className="flex items-center group">
      <span className="mr-2">📞</span>
      <a
        href="tel:9898152554"
        className="relative hover:text-gray-900 transition"
      >
        Manager: 9898152554
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
    <li className="flex items-center group">
      <span className="mr-2">📞</span>
      <a
        href="tel:9898992554"
        className="relative hover:text-gray-900 transition"
      >
        Founder: 9898992554
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
    <li className="flex items-center group">
      <span className="mr-2">✉️</span>
      <a
        href="mailto:support@realestatehub.com"
        className="relative hover:text-gray-900 transition"
      >
        millenniumproperties45@gmail.com
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E7C873] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  </ul>
</div>


        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
          

            {/* Copyright */}
            <p className="text-sm text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Millennium Properties, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
