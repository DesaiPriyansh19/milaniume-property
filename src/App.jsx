import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoaderAnimation from "./components/LoaderAnimation";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPopup from "./components/LoginPopup";
import Properties from "./components/Properties/Properties";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true); // Loader visible on initial load
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  useEffect(() => {
    // Show the loader only on the first load of the website
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust time for animation
    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
    // Prevent scrolling when the loader is visible
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  return (
    <div className="font-roboto p-0 m-0">
      <AnimatePresence>
        {isVisible && <LoaderAnimation key="loader" />}
      </AnimatePresence>
      <Navbar handlePopupOpen={handlePopupOpen} />
      {isPopupOpen && <LoginPopup handlePopupClose={handlePopupClose} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
