import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/AboutUS.webp';
import img1 from '../../assets/pexels-rdne-8292896.jpg'
import img2 from '../../assets/pexels-kindelmedia-7579047.jpg'
import img3 from '../../assets/interiordesign3.jpg'

const services = [
  {
    name: 'Property Services',
    description: 'Buy, sell, and rent residential, commercial, and industrial properties with expert assistance, market insights, and legal support. Our dedicated agents ensure a seamless experience from property selection to final transaction. We provide property valuation, legal documentation support, and negotiation services to help you get the best deal.',
    details: [
      'Comprehensive property search and listing',
      'Legal and financial advisory for smooth transactions',
      'Market trend analysis and investment guidance',
      'Property documentation and verification services'
    ],
    link: '/properties',
    image:img2
  },
  {
    name: 'Loan & Finance',
    description: 'Secure the best mortgage rates and customized financial plans tailored to your real estate investment needs. We provide expert financial guidance, loan approvals, and refinancing options to help you make the best decision. Our advisors help navigate bank procedures and ensure seamless loan disbursal.',
    details: [
      'Assistance with home and commercial property loans',
      'Customized financial plans based on your needs',
      'Loan refinancing and interest rate negotiation',
      'Guidance through paperwork and bank formalities'
    ],
    link: '/ourservices/loan',
    image:img1 },
  {
    name: 'Interior Design',
    description: 'Revamp your space with elegant and functional designs, curated by industry-leading experts. Our team specializes in modern, classic, and contemporary interiors, ensuring your home or office reflects your unique style and personality. We provide 3D visualization, material selection, and budget planning for a smooth experience.',
    details: [
      'Personalized interior design consultation',
      '3D rendering and visualization before execution',
      'Material sourcing and vendor management',
      'End-to-end execution from concept to completion'
    ],
    link: '/ourservices/interior',
    image:img3
  },
  
];

const OurServices = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-[500px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat relative 
        before:absolute before:inset-0 before:bg-black/20 "
      >
        <div className="absolute inset-0  "></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6 md:px-12"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}>
          <h2 className="text-3xl md:text-5xl font-normal">Our Services</h2>
          <p className="hidden md:block mt-4 text- lg:text-xl px-6 lg:px-40 font-light">Discover our range of real estate services, designed to provide you with an effortless and rewarding property experience.</p>
          <Link to={'/'}>
            <button className="mt-6 p-6 py-2 text-sm bg-[#E7C873] text-black rounded-lg font-normal shadow-md transition-transform transform hover:scale-110">Back to Home →</button>
          </Link>
        </div>
      </div>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
          <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}> 
              <img src={service.image} alt={service.name} className="w-full h-full rounded-lg shadow-xl 
              transition-transform transform hover:scale-105" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl font-bold text-[#1F4B43]">{service.name}</h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">{service.description}</p>
              <ul className="mt-4 text-gray-600 list-disc pl-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-lg py-1">{detail}</li>
                ))}
              </ul>
              <Link to={service.link} className="mt-8 inline-block px-6 py-2 bg-[#E7C873] text-[#1F4B43] font-normal rounded-lg shadow-md transition-transform transform hover:scale-110">Learn More</Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default OurServices;
