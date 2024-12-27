import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import bgimg from '../assets/slider1.jpg.png'
import { Link } from 'react-router-dom';
function Discover() {
     useEffect(() => {
            AOS.init({ once: true }); // Initialize AOS
          }, []);
          
    return (
      <div  data-aos-duration="500" data-aos-delay="100" data-aos="fade-out"
      className="w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[1px]"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/35 md:bg-black/30"></div>
    
          {/* Content Section */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h2 className="text-2xl md:text-2xl lg:text-5xl font-normal">
              Discover a place you'll love to live
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-xl">
              Find your dream home in the perfect location.
            </p>
            <Link to={'/properties'}> <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
              View Properties &#8594;
            </button></Link> 
          </div>
        </div>
      );
}

export default Discover