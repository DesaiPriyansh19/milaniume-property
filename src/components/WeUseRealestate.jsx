import React from 'react'
import image from '../assets/BgImage.png'
function WeUseRealestate() {
  return (
    <>
    <div className="px-4 sm:px-20 py-10 w-full flex flex-col md:flex-row">
         {/* Right Side for sm screen*/}
  <div className="flex-1 sm:hidden flex justify-center items-center ">
    <div className="w-full h-full  max-w-md max-h-md  overflow-hidden">
      <img
        src={image}
        alt="Real Estate"
        className="w-full h-full py-2 rounded-2xl object-cover"
      />
    </div>
  </div>
  {/* Left Side */}
  <div className="flex-1 text-center sm:text-start p-0 md:px-20 py-16">
    <h3 className="text-xl md:text-2xl font-medium mb-1">
      We Use Real Estate to Show<br />Our Appreciation of The World
    </h3>
    
    <p className="text-[.8rem]  px-2 sm:px-0 font-thin mb-8">
    With decades of expertise in Ahmedabad’s real estate landscape,
     we blend local insights with unparalleled experience to deliver
     homes and spaces that stand the test of time. Trust our legacy to build yours.
    </p>
    {/* Four Small Divs */}
    <div className="grid  grid-cols-2 gap-0 mb-8">
      <div className="p-1  text-center sm:text-start  rounded-lg ">
        <h3 className="text-2xl font-bold">10k+</h3>
        <p className="text-sm font-thin">Customers</p>
      </div>
      <div className="p-1   rounded-lg  text-center sm:text-start">
        <h3 className="text-2xl font-bold">15k</h3>
        <p className="text-sm font-thin">Properties for Sell</p>
      </div>
      <div className="p-1   rounded-lg  text-center sm:text-start">
        <h3 className="text-2xl font-bold">26K+</h3>
        <p className="text-sm font-thin">Properties for Buy</p>
      </div>
      <div className="p-1  rounded-lg  text-center sm:text-start">
        <h3 className="text-2xl font-bold">890</h3>
        <p className="text-sm font-thin">Daily completed transactions.</p>
      </div>
    </div>

    {/* Learn More Button */}
    <button className="bg-[#E7C873] text-black text-sm px-6 py-2 rounded-lg ">
      Learn More &#8594;
    </button>
  </div>

  {/* Right Side */}
  <div className="hidden flex-1 sm:flex h-full w-full p-0 m-0 justify-center items-center ">
    <div className="w-full h-full  max-w-md max-h-md  overflow-hidden">
      <img
        src={image}
        alt="Real Estate"
        className="w-full h-full md:py-16 lg:py-8 mx-auto rounded-2xl object-cover"
      />
    </div>
  </div>
</div>

    </>
  )
}

export default WeUseRealestate