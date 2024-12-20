import React from 'react';
import FilterLogo from '../../../svg/Icon/FilterLogo/Index';


const FilterTwo = () => {
  return (<>
    <div className="relative w-full mb-[200px] sm:mb-[150px] md:mb-[150px] lg:mb-[100px] flex justify-center mt-0 ">
      <div className="absolute text-[.7rem] md:text-[.6rem] left-1/2 transform -translate-x-1/2 
        top-full w-full md:w-[95%] h-auto  md:h-[10vh] bg-black text-white grid grid-cols-1 md:flex 
        items-center justify-between px-2 py-4 md:py-2 md:px-4 rounded-none md:rounded-lg shadow-lg z-[9]">
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Area"
          className="flex-grow bg-transparent text-white placeholder-white text-[.7rem]
            px-3 py-2 h-[90%] w-[90%] md:w-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Dropdowns */}
        <select className="bg-transparent text-white px-3 py-2 rounded-lg mx-2 
          focus:outline-none focus:ring-2 focus:ring-black">
          <option className='text-black'>SALE & RENT</option>
          <option className='text-black'>For Sale</option>
          <option  className='text-black'>For Rent</option>
        </select>

        <select className="bg-transparent text-white px-3 py-2 rounded-lg mx-2 
          focus:outline-none focus:ring-2 focus:ring-black">
          <option className='text-black'>All Type</option>
          <option className='text-black'>RECIDENCIAL</option>
          <option className='text-black'>COMMERCIAL</option>
          <option className='text-black'>INDUSTRAIL</option>
          <option className='text-black'>PLOT & LAND </option>
        </select>

        {/* Filter Button */}
        <button className="flex items-center border border-gray-700 text-white 
          px-6 py-2 rounded-lg mx-2">
          <span className="w-4 h-4 mr-2"><FilterLogo/></span>
          Filter
        </button>

        {/* Search Button */}
        <button className="bg-[#E7C873]  text-black px-6 py-2 rounded-lg 
          hover:text-[#E7C873] font-medium hover:border hover:border-[#E7C873] hover:bg-black">
          Search
        </button>
      </div>
    </div>
   
    </>
  );
};

export default FilterTwo;
