import React, { useState, useEffect } from 'react';
import LoaderAnimation from './components/LoaderAnimation';
import './App.css';
import Carousel from './components/Carousel';
import FilterSection from './components/FilterSection';
import Navbar from './components/Navbar';
import Img1 from '../src/assets/office.jpeg';
import room from '../src/assets/Room3.jpg';
import Cards from './components/Cards';
import WhyShould from './components/WhyShould';

const images = [
  Img1,
  room,
];

const dynamicContent = [
  { title: 'Welcome to Millennium Properties', description: 'We Build Your Dreams' },
  { title: 'Luxury Apartment', description: 'Your Dreams, Our Vision; A Sustainable Future' },
];

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the animation after 3 seconds with smooth fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isVisible && (
        <div className="h-screen w-full fixed top-0 left-0 flex items-center justify-center
         bg-transparent backdrop-blur-md  z-50 fade-out">
          <LoaderAnimation />
        </div>
      )}
      <div className="font-roboto h-full p-0 m-0 w-full">
        <Navbar />
        <Carousel images={images} dynamicContent={dynamicContent} />
        <Cards />
        <WhyShould />
      </div>
    </>
  );
}

export default App;
