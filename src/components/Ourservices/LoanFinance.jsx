import React from 'react';
import bgImg from '../../assets/Loan&Finance.jpg'
const LoanFinance = () => {
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
               Loan & Finance
                </h1>
                <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
                Get the best financing options for your property and project needs.
                </p>
              </div>
            </div>
     

      {/* Content for Loan and Finance Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#247264]">Our Loan Services</h2>
          <p className="mt-4 text-gray-600">
            We provide tailored loan solutions for your property goals:
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-600">
            <li>Home Loans</li>
            <li>Business Property Loans</li>
            <li>Land Purchase Loans</li>
            <li>Construction Finance</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#247264] text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Get Your Loan Today</h2>
        <p className="mt-4 text-lg">
          Speak to one of our experts and secure your loan.
        </p>
        <button className="mt-6 px-4 py-2 bg-[#E7C873]  rounded text-[#247264] font-normal">
          Contat US
        </button>
      </div>
    </div>
  );
};

export default LoanFinance;
