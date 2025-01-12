import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoaderAnimation from "./components/LoaderAnimation";
import HomePage from "./components/HomePage";
import LoginPopup from "./components/LoginPopup";
import Properties from "./components/Properties/Properties";
import AdminPanelDashBoard from "./components/AdminPanel/AdminProperty/AdminPanelDashBoard";
import "./App.css";
import AppLayout from "./components/AppLayout";
import QuickEnquiry from "./components/QuickEnquiry";
import RightSideLogos from "./components/RightSideLogos"; // Import RightSideLogos component
import YourRequirements from "./components/YourRequirements";
import PostProperty from "./components/PostProperty";
import OurServices from "./components/Ourservices/OurServices";
import PropertyServices from "./components/Ourservices/PropertyServices";
import LoanFinance from "./components/Ourservices/LoanFinance";
import InteriorDesign from "./components/Ourservices/InteriorDesign";
import AboutUs from "./components/AboutUs";
import PropertyDetailPage from "./components/Properties/PropertyDetails";
import { ActiveProvider } from "../context/activeContext";
import ProtectRoutes from "../utils/ProtectRoutes";

// ScrollToTop component to scroll to the top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

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

        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Animate page transitions */}
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/properties"
              element={
                <motion.div
                  key="properties"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Properties />
                </motion.div>
              }
            />
            <Route
              path="/properties/viewdetails/:id"
              element={
                <motion.div
                  key="property-detail"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <PropertyDetailPage />
                </motion.div>
              }
            />
            <Route
              path="/aboutus"
              element={
                <motion.div
                  key="about-us"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <AboutUs />
                </motion.div>
              }
            />

            <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
            <Route
              path="/quickenquiry"
              element={
                <motion.div
                  key="quick-enquiry"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <QuickEnquiry />
                </motion.div>
              }
            />
            <Route
              path="/admin/:slug"
              element={
                <ProtectRoutes>
                  <motion.div
                    key="admin-dashboard"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                    }}
                    exit={{
                      opacity: 0,
                      filter: "blur(10px)",
                      backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <AdminPanelDashBoard />
                  </motion.div>
                </ProtectRoutes>
              }
            />

            <Route
              path="/yourrequirments"
              element={
                <motion.div
                  key="your-requirements"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <YourRequirements />
                </motion.div>
              }
            />
            <Route
              path="/postproperty"
              element={
                <motion.div
                  key="post-property"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <PostProperty />
                </motion.div>
              }
            />

            <Route
              path="/ourservices"
              element={
                <motion.div
                  key="our-services"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <OurServices />
                </motion.div>
              }
            />
            <Route
              path="/ourservices/property"
              element={
                <motion.div
                  key="property-services"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <PropertyServices />
                </motion.div>
              }
            />
            <Route
              path="/ourservices/loan"
              element={
                <motion.div
                  key="loan-finance"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <LoanFinance />
                </motion.div>
              }
            />
            <Route
              path="/ourservices/interior"
              element={
                <motion.div
                  key="interior-design"
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    backgroundColor: "rgba(0.4, 0.4, 0.5, 0.6)", // Dark background
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <InteriorDesign />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </AppLayout>
      <RightSideLogos /> {/* Right-side logos component */}
    </div>
  );
}

export default function RootApp() {
  return (
    <ActiveProvider>
      <Router>
        <App />
      </Router>
    </ActiveProvider>
  );
}
