import React from 'react';
import Call from '../../svg/Icon/Call/Index';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b pt-5 text-sm from-black to-transparent bg-opacity-10 absolute inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src="/path/to/logo1.png" alt="Logo 1" className="w-10 h-10" />
          <div className="hidden text-sm lg:flex space-x-6 ml-[50%]">
            <a href="#" className="text-white hover:text-[#E7C873]  ">Home</a>
            <a href="#" className="text-white hover:text-[#E7C873] ">AboutUs</a>
            <a href="#" className="text-white hover:text-[#E7C873] ">Property</a>
            <a href="#" className="text-white  hover:text-[#E7C873] ">Service</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img src="src/assets/CallLogo.png" alt="Logo 2" className="w-6 h-6" />
          <p className="text-white">+918521221224</p>
          <img src="src/assets/Contact.png" alt="Logo 3" className="w-8 h-8" />
          <button className="bg-transparent text-sm text-white px-4 py-1 rounded-full border-2  border-white hover:border-[#E7C873]">
            Add Property
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
