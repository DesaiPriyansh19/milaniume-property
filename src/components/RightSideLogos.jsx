import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const RightSideLogos = () => {
  const location = useLocation();

  // Check if the current route starts with `/admin`
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return;
  }
  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
   <a href="tel:9898992554"> <FaPhoneAlt
  
      size={22}
      color="#1F4B43"
      className="transition transform hover:scale-125 hover:text-green-500"
    /></a>
 <a href="https://wa.me/9898992554" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp
    size={29}
    color="#1F4B43"
    className="transition transform hover:scale-125 hover:text-green-500"
  />
</a>

    <FaInstagram
      size={29}
      color="#1F4B43"
      className="transition transform hover:scale-125 hover:text-green-500"
    />
    <FaFacebookF
      size={29}
      color="#1F4B43"
      className="transition transform hover:scale-125 hover:text-green-500"
    />
  </div>
  
  );
};

export default RightSideLogos;
