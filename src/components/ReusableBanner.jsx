import React from 'react';
import { Link } from 'react-router-dom';

const ReusableBanner = ({ bgImg, title, description, buttonText, buttonLink }) => {
  return (
    <div
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos="fade-out"
      className="w-full my-10 h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[0.5px]"
      style={{ backgroundImage: `url(${bgImg})` }}
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
