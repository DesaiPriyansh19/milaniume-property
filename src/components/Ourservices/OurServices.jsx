import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/AboutUS.webp'
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

  return (<>
   <div style={{ backgroundImage: `url(${img})` }}
       className="w-full h-[500px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat relative 
       before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[0px]">
                 <div className="absolute inset-0 bg-black/35 md:bg-black/35"></div>
                 <div className="  relative z-10 flex flex-col items-center justify-center 
                 text-center text-white h-full px-4" style={{
                  textShadow: "4px 4px 8px rgba(2, 2, 0.5, 0.5)", // Apply text shadow to all children
                }} >
              <h2 className=" mt-0 text-2xl md:text-2xl lg:text-5xl font-normal">
              Our Services
              </h2>
              <p className="hidden md:flex mt-4 font-thin text-sm px-40">
              Explore the services we offer to meet your real estate needs.
              </p>
          <Link to={'/'}  >  <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
               Back to Home &#8594;
              </button></Link>
            </div>
       </div>
    <div className="bg-gray-50 text-gray-800">
    

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
    </>
  );
};

export default OurServices;
