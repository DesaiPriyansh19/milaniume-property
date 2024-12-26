import React, { useState, useEffect } from "react";
import { FaReact, FaGit, FaTwitter, FaGithub } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoaderAnimation from "./components/LoaderAnimation";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPopup from "./components/LoginPopup";
import Properties from "./components/Properties/Properties";
import AdminPanelDashBoard from "./components/AdminPanel/AdminProperty/AdminPanelDashBoard";
import "./App.css";
import AppLayout from "./components/AppLayout";
import QuickEnquiry from "./components/QuickEnquiry";
import RightSideLogos from './components/RightSideLogos'; // Import RightSideLogos component

function App() {
  const [isVisible, setIsVisible] = useState(true); // Loader visible on initial load
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    <div className="font-roboto p-0 m-0 min-h-screen flex flex-col">
      <AnimatePresence>
        {isVisible && location.pathname === "/" && (
          <LoaderAnimation key="loader" />
        )}
      </AnimatePresence>
      <AppLayout handlePopupOpen={handlePopupOpen}>
        {isPopupOpen && <LoginPopup handlePopupClose={handlePopupClose} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/quickenquiry" element={<QuickEnquiry />} />
          <Route path="/admin/:slug" element={<AdminPanelDashBoard />} />
        </Routes>
      </AppLayout>
      <RightSideLogos /> {/* Right-side logos component */}
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
