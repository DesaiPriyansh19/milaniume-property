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
    <div className="fixed right-0 top-1/2  transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      <FaPhoneAlt size={22} color="#1F4B43" />
      <FaWhatsapp size={29} color="#1F4B43" />
      <FaInstagram size={29} color="#1F4B43" />
      <FaFacebookF size={29} color="#1F4B43" />
    </div>
  );
};

export default RightSideLogos;
