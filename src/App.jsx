import React, { useState, useEffect } from "react";
import LoaderAnimation from "./components/LoaderAnimation";
import "./App.css";
import Carousel from "./components/Carousel";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import Img1 from "../src/assets/office.jpeg";
import room from "../src/assets/Room3.jpg";
import Cards from "./components/Cards";
import WhyShould from "./components/WhyShould";
import { AnimatePresence } from "framer-motion";
import LoginPopup from "./components/LoginPopup";
const images = [room,Img1];

const dynamicContent = [
  {
    title: "Luxury Apartment",
    description: "Your Dreams, Our Vision; A Sustainable Future",
  },
  {
    title: "Welcome to Millennium Properties",
    description: "We Build Your Dreams",
  },

];

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

  return (
    
    <>
       <AnimatePresence>
        {isVisible && <LoaderAnimation key="loader" />}
      </AnimatePresence>
      <div className="font-roboto h-full p-0 m-0 w-full">
    
     
        <Navbar />
        {/* <LoginPopup   /> */}
        <Carousel images={images} dynamicContent={dynamicContent} />
        <Cards />
        <WhyShould />
      </div>
    </>
  );
}

export default App;
