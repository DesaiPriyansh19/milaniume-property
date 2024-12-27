import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OurServices = () => {
  // State to control the current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      name: 'Property Services',
      description: 'Buy, Sell, and Rent residential, commercial, and industrial properties.',
      link: '/ourservices/property',
      image: 'https://via.placeholder.com/400x250?text=Property+Services'
    },
    {
      name: 'Loan & Finance',
      description: 'Get tailored loan and financing options for your real estate projects.',
      link: '/ourservices/loan',
      image: 'https://via.placeholder.com/400x250?text=Loan+Services'
    },
    {
      name: 'Interior Design',
      description: 'Transform your home or office with expert interior design services.',
      link: '/ourservices/interior',
      image: 'https://via.placeholder.com/400x250?text=Interior+Design'
    }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 bg-[#1F4B43]">
        <h1 className="text-4xl mt-6 font-bold text-white">Our Services</h1>
        <p className="mt-4 text-lg text-white">Explore the services we offer to meet your real estate needs.</p>
      </div>

      {/* Carousel Section */}
      <section className="py-16 bg-[#f4fffd]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1F4B43]">Our Featured Services</h2>
          <div className="mt-6 flex justify-center items-center">
            {/* Carousel Image */}
            <div className="w-full max-w-md">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Carousel Info */}
            <div className="ml-6 text-left">
              <h3 className="text-2xl font-semibold text-[#E7C873]">{services[currentIndex].name}</h3>
              <p className="mt-4 text-[#1F4B43]">{services[currentIndex].description}</p>
              <Link
                to={services[currentIndex].link}
                className="mt-6 inline-block px-6 py-3 bg-[#E7C873] text-[#1F4B43] font-bold rounded "
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-[#E7C873] text-[#1F4B43]  rounded-l-lg "
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-[#E7C873] text-[#1F4B43]  rounded-r-lg "
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
