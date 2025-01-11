import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReusableBanner = ({ bgImgs = [], title, description, buttonText, buttonLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (bgImgs.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImgs.length);
      }, 4000); // Change background every 4 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [bgImgs]);

  // Show a fallback UI if no images are provided
  if (!bgImgs || bgImgs.length === 0) {
    return (
      <div className="w-full my-10 h-[400px] bg-gray-200 flex items-center justify-center text-gray-700">
        <p>No background images provided.</p>
      </div>
    );
  }

  return (
    <div
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos="fade-out"
      className="w-full my-10 h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[0.5px]"
      style={{
        backgroundImage: `url(${bgImgs[currentImageIndex]})`,
        transition: 'background-image 1s ease-in-out', // Smooth transition for background image change
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/35 md:bg-black/30"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h2 className="text-2xl md:text-2xl lg:text-5xl font-normal">{title}</h2>
        <p className="mt-4 text-lg md:text-xl lg:text-xl">{description}</p>
        <Link to={buttonLink}>
          <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
            {buttonText} &#8594;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReusableBanner;
