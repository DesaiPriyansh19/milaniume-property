import React, { useState } from 'react';
import img1 from '../../assets/Interior design/inerior-image1.jpg'
import img2 from '../../assets/Interior design/inerior-image2.jpg'
import img3 from '../../assets/Interior design/inerior-image3.jpg'
import { MdDesignServices, MdConstruction, MdElectricalServices, MdPrecisionManufacturing, MdWindow, MdFormatPaint } from "react-icons/md";
import { Link } from 'react-router-dom';
const images = [
img1,
img2,
img3
];

const InteriorDesign = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    { icon: <MdDesignServices />, text: "Interior Designs (3D Customised)" }, // Design Icon
    { icon: <MdConstruction />, text: "Civil Work" }, // Construction Icon
    { icon: <MdElectricalServices />, text: "All Electric Work" }, // Electrical Icon
    { icon: <MdPrecisionManufacturing />, text: "Steel Fabrication" }, // Fabrication Icon
    { icon: <MdWindow />, text: "Glass & Aluminium Work" }, // Window Icon
    { icon: <MdFormatPaint />, text: "Paint & Polish Work" }, // Paint Icon
  ];
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-50 ext-gray-800">
     
      
      {/* Image Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-950 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
 {/* Hero Section Over Carousel */}
 <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end  text-center text-white bg-black bg-opacity-25 z-10">
        <h1 className="text-4xl font-bold">Interior Design Services</h1>
        <p className="mt-4 text-lg mb-2">Transform your space with our unique interior design services.</p>
      </div>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2  transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 sm: transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10095;
        </button>
      </div>
      <section className="py-20 my-4 px-6 mx-auto w-[85%] bg-white shadow-lg rounded-xl text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#247264] leading-tight">Our Interior Design Services</h2>
        <p className="mt-4 text-lg text-gray-700">
          We provide top-notch interior design solutions for both residential and commercial spaces.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
       <div
       key={index}
       className="group flex flex-col justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md h-44 w-full text-center
                  hover:bg-[#247264] hover:text-white transition-all duration-300"
     >
       {/* The icon will now turn white on hover */}
       <div className="text-5xl text-[#247264] mb-3 transition group-hover:text-white">
         {service.icon}
       </div> 
     
       {/* Text will also turn white on hover */}
       <p className="text-xl font-semibold transition group-hover:text-white">
         {service.text}
       </p> 
     </div>
     
        ))}
      </div>
    </section>


      {/* Call to Action */}
      <div className="bg-[#247264] text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Transform Your Space with Our Designers</h2>
        <p className="mt-4 text-lg">Let us design a space that works for you.</p>
       <Link to={'/quickenquiry'}><button className="mt-6 px-4 py-2 bg-[#E7C873]   rounded text-[#247264] font-normal">
        contact us
        </button></Link>
      </div>
    </div>
  );
};

export default InteriorDesign;
