import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoaderAnimation from "./components/LoaderAnimation";
import "./App.css";

import Navbar from "./components/Navbar";

import { AnimatePresence } from "framer-motion";

import HomePage from "./components/HomePage";
import LoginPopup from "./components/LoginPopup";
import ViewProperty from "./components/AdminPanel/AdminProperty/ViewProperty";
import AddProperty from "./components/AdminPanel/AdminProperty/EditProperty";

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
      <div className="font-roboto  p-0 m-0 ">
        <Navbar handlePopupOpen={handlePopupOpen} />
        {isPopupOpen && <LoginPopup handlePopupClose={handlePopupClose} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<ViewProperty />} />
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
