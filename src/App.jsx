import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoaderAnimation from "./components/LoaderAnimation";
import "./App.css";

import Navbar from "./components/Navbar";

import { AnimatePresence } from "framer-motion";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
// import LoginPopup from "./components/LoginPopup";
// const images = [room, Img1];

// const dynamicContent = [
//   {
//     title: "Luxury Apartment",
//     description: "Your Dreams, Our Vision; A Sustainable Future",
//   },
//   {
//     title: "Welcome to Millennium Properties",
//     description: "We Build Your Dreams",
//   },
// ];

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  useEffect(() => {
    // Hide the animation after 3 seconds with smooth fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  return (
    <Router>
      <AnimatePresence>
        {isVisible && <LoaderAnimation key="loader" />}
      </AnimatePresence>
      <div className="font-roboto h-full p-0 m-0 w-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes for different pages */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
