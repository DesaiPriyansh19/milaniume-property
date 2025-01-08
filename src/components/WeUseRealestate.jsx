import React from 'react'
import image from '../assets/Agent.jpg'
import { FaGlobe } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom'
function WeUseRealestate() {
  return (
    <>
<div className="px-6 w-[90%] bg-gray-100 mb-5 rounded-xl sm:px-3 py-4 max-w-7xl xl:max-w-[90rem] mx-auto flex flex-col md:flex-row">
  {/* Right Side for sm screen*/}
  <div className="flex-1 sm:hidden flex justify-center items-center">
    <div className="w-full h-full max-w-lg xl:max-w-2xl max-h-lg xl:max-h-2xl overflow-hidden">
      <img
        src={image}
        alt="Real Estate"
        className="w-full h-full py-4 rounded-3xl object-cover"
      />
    </div>
  </div>
  {/* Left Side */}
  <div className="flex-1 text-center sm:text-start p-0 md:px-24 py-20 xl:py-24">
    <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium mb-4 ">
      We Use Real Estate to Show<br />Our Appreciation of The World
    </h3>
    
    <p className="hidden sm:flex text-base xl:text-xl px-4 sm:px-0 font-thin mb-12">
      With decades of expertise in Ahmedabad’s real estate landscape,
      we blend local insights with unparalleled experience to deliver
      homes and spaces that stand the test of time. Trust our legacy to build yours.
    </p>
    {/* Four Small Divs */}
    <div className="grid grid-cols-2 gap-4 mb-12">
      <div className="p-2 text-center sm:text-start rounded-lg">
        <h3 className="text-3xl xl:text-4xl font-normal xl:font-normal">12+</h3>
        <p className="text-lg xl:text-xl font-thin">Years Of Experiance</p>
      </div>
      
      <div className="p-2 rounded-lg text-center sm:text-start">
        <h3 className="text-3xl xl:text-4xl font-normal xl:font-normal">26K+</h3>
        <p className="text-lg xl:text-xl font-thin">Properties for Buy</p>
      </div>
      <div className="p-2 rounded-lg text-center sm:text-start">
        <h3 className="text-3xl xl:text-4xl font-normal xl:font-normal">15k+</h3>
        <p className="text-lg xl:text-xl font-thin">Properties for sell</p>
      </div>
      <div className="p-2 rounded-lg text-center sm:text-start">
        <h3 className="text-3xl xl:text-4xl font-normal xl:font-normal">125+</h3>
        <p className="text-lg xl:text-xl font-thin">Work With Project</p>
      </div>
      <div className="flex items-center justify-start ml-2 h-full">
  <div className="text-center">
    <FaGlobe className="text-3xl  mx-auto" />
    <p className="text-lg font-thin mt-2">World Wide</p>
  </div>
</div>
    </div>

    {/* Learn More Button */}
    <Link to={'/aboutus'}>
      <button className="bg-[#E7C873] text-black text-lg  px-8 py-4 rounded-xl">
        Learn More &#8594;
      </button>
    </Link>
  </div>

  {/* Right Side */}
  <div className="hidden flex-1 sm:flex h-full w-[80%] p-0 m-0 justify-center items-center">
    <div className="w-full h-[90%] mx-auto pt-20 max-w-lg xl:max-w-2xl max-h-lg xl:max-h-2xl overflow-hidden">
      <img
        src={image}
        alt="Real Estate"
        className="w-full h-full mx-auto rounded-3xl object-cover"
      />
    </div>
  </div>
</div>



    </>
  )
}

export default WeUseRealestate