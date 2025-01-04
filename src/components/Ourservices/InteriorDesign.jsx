import React, { useState } from 'react';
import img1 from '../../assets/Interior design/inerior-image1.jpg'
import img2 from '../../assets/Interior design/inerior-image2.jpg'
import img3 from '../../assets/Interior design/inerior-image3.jpg'
const images = [
img1,
img2,
img3
];

const InteriorDesign = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section Over Carousel */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end  text-center text-white bg-black bg-opacity-25 z-10">
        <h1 className="text-4xl font-bold">Interior Design Services</h1>
        <p className="mt-4 text-lg mb-2">Transform your space with our unique interior design services.</p>
      </div>
      
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

      {/* Content Section */}
      <section className="py-16  text-center mx-auto bg-gray-100 rounded-lg w-[80%]">
        <h2 className="text-3xl font-bold text-[#247264]">Our Interior Design Services</h2>
        <p className="mt-4 text-gray-600">We specialize in both residential and commercial interior design:</p>
        <ul className="mt-6 text-center list-disc list-inside text-gray-600">
          <li>Interior designs (3D Customised)</li>
          <li>Civil Work</li>
          <li>All Electric Work</li>
          <li>Steel Fabrication</li>
          <li>Glass & Aluminium Work</li>
          <li>Paint & Polish Work</li>

        </ul>
      </section>

      {/* Call to Action */}
      <div className="bg-[#247264] text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Transform Your Space with Our Designers</h2>
        <p className="mt-4 text-lg">Let us design a space that works for you.</p>
        <button className="mt-6 px-4 py-2 bg-[#E7C873]   rounded text-[#247264] font-normal">
        contact us
        </button>
      </div>
    </div>
  );
};

export default InteriorDesign;
