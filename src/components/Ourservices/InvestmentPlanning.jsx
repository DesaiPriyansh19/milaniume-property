import React from 'react';
import bgImg from '../../assets/pexels-tiger-lily-7109288.jpg' // Update with the appropriate background image
import { FaChartLine, FaUniversity, FaRegMoneyBillAlt, FaBriefcase, FaShieldAlt, FaPiggyBank } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InvestmentPlanning = () => {
  const services = [
    { icon: <FaChartLine />, text: "Portfolio Management" },
    { icon: <FaUniversity />, text: "Retirement Planning" },
    { icon: <FaRegMoneyBillAlt />, text: "Tax-efficient Investments" },
    { icon: <FaBriefcase />, text: "Business Investment Strategies" },
    { icon: <FaShieldAlt />, text: "Risk Assessment & Insurance" },
    { icon: <FaPiggyBank />, text: "Wealth Creation Plans" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="relative w-full mb-0 pb-0">
        {/* Background Image with Blur */}
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-[400px] sm:h-[300px] md:h-[500px] object-cover object-top filter blur-[0px]"
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
            Investment Planning
          </h1>
          <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
            Optimize your financial future with expert investment strategies.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 mx-auto w-[85%] my-5 bg-white shadow-lg rounded-xl text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#247264] leading-tight">Our Investment Services</h2>
          <p className="mt-4 text-lg text-gray-700">
            We offer personalized investment solutions to help you achieve your financial goals.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md h-44 w-full text-center
                        hover:bg-[#247264] hover:text-white transition-all duration-300"
            >
              <div className="text-4xl mb-3">{service.icon}</div> {/* Bigger Icon */}
              <p className="text-xl font-semibold">{service.text}</p> {/* Bigger Text */}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#247264] text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Start Your Investment Journey</h2>
        <p className="mt-4 text-lg">
          Speak to one of our experts and secure your financial future.
        </p>
        <Link to={'/quickenquiry'}>
          <button className="mt-6 px-4 py-2 bg-[#E7C873] rounded text-[#247264] font-normal">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvestmentPlanning;
