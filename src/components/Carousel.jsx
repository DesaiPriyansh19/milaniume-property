import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images, dynamicContent }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,  // Adding fade effect
  };

  return (
    <div className=" text-center relative h-[600px] w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-center items-center">
              <h1 className="text-white text-5xl font-medium">{dynamicContent[index].title}</h1>
              <p className="text-white text-lg font-thin">{dynamicContent[index].description}</p>
         
                <button className="mt-4 px-6 py-2 text-sm font-medium bg-[#E7C873] text-black rounded-lg">
               View all Details
                </button>
         
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
