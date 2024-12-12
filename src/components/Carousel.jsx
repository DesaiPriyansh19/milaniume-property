import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FilterSection from './FilterSection';

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

  return (<>
    <div className=" text-center relative h-[500px] sm:h-[500px] md:h-[600px] w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[570px] sm:h-[500px] md:h-[600px]">
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div  style={{
    textShadow: "4px 4px 8px rgba(0.1, 0.2, 0.5, 0.7)", // Apply text shadow to all children
  }} className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black flex flex-col justify-center items-center">
              <h1 className="text-white text-3xl sm:text-3xl md:text-5xl px-2 md:px-0 font-normal ">{dynamicContent[index].title}</h1>
              <p className="text-white text-lg font-thin md:font-normal">{dynamicContent[index].description}</p>
         
                <button className="mt-4 px-6 py-2 text-sm font-light  bg-[#E7C873] text-black hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white rounded-lg">
               View all Details
                </button>
         
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <FilterSection/>
    </>
  );
};

export default Carousel;
