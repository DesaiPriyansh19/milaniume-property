import React, { useState } from "react";
import img2 from '../../assets/slider1.jpg.png'
import img from '../../assets/property_2_-853gCunl--transformed.webp'
import bgImg from "../../assets/pexels-clubhouseconvos-13620073.webp";
const PropertyDetailPage = () => {
  const images = [
  img,
    img2,
    img,
   img2,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <>
   <div className="relative w-full mb-0 pb-0">
    {/* Background Image with Blur */}
    <img
      src={bgImg}
      alt="Background"
      className="w-full h-[500px] sm:h-[500px] md:h-[600px] object-cover object-top filter blur-[0px]"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>

    {/* Text Content */}
    <div
      className="absolute mt-[100px] sm:mt-[50px] text-center inset-0 flex flex-col justify-center items-center text-white z-20"
      style={{
        textShadow: "4px 4px 8px rgba(1, 1, 0.9, 0.1)",
      }}
    >
      <h1 className="text-white text-3xl sm:text-3xl md:text-5xl px-2 md:px-0 font-normal">
    View Property Details
      </h1>
      <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
        Find Your Perfect Property – Where Your Search Ends.
      </p>
    </div>
  </div>
    <section className="bg-white py-16 px-8 sm:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section with Carousel */}
        <div className="relative mb-16">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
            {/* Current Image */}
            <img
              src={images[currentIndex]}
              alt={`Property Image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2  md:top-[90%] left-4 md:left-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              &#8592;
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 md:top-[90%] right-4 md:right-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Property Information */}
        <div className="flex flex-col sm:flex-row justify-between mb-12">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h2 className="text-4xl font-semibold text-gray-800">Modern Downtown Apartment</h2>
            <p className="text-xl text-gray-600 mt-2">123 Main St, Cityville, Country</p>
            <p className="text-2xl font-semibold text-gray-800 mt-6">$850,000</p>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-between">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-6 sm:mb-0 sm:w-1/3">
              <h4 className="text-xl font-semibold text-gray-800">Area</h4>
              <p className="text-sm text-gray-600">1,500 sq ft</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-6 sm:mb-0 sm:w-1/3">
              <h4 className="text-xl font-semibold text-gray-800">Bedrooms</h4>
              <p className="text-lg text-gray-600">3</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg sm:w-1/3">
              <h4 className="text-xl font-semibold text-gray-800">Bathrooms</h4>
              <p className="text-lg text-gray-600">2</p>
            </div>
          </div>
        </div>

        {/* Property Description */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Property Description</h3>
          <p className="text-lg text-gray-700">
            This spacious and luxurious apartment is located in the heart of downtown, offering easy access to shopping, dining, and entertainment.
            With modern interiors, high-end finishes, and breathtaking views of the city skyline, this property is a perfect blend of comfort and style.
            The apartment features an open floor plan, a contemporary kitchen, and large windows that bring in natural light. It is ideal for families
            or professionals looking for a stylish city living experience.
          </p>
        </div>

        {/* Property Features */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Property Features</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>High-end appliances</li>
            <li>Hardwood floors</li>
            <li>Marble countertops</li>
            <li>Private balcony with city views</li>
            <li>Built-in closet systems</li>
            <li>24/7 concierge services</li>
          </ul>
        </div>

        {/* Property Gallery */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery Image ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section></>
  );
};

export default PropertyDetailPage;
