import React, { useEffect } from 'react';
import { FaPaperPlane, FaHome, FaCommentDots } from 'react-icons/fa';

import homimg from '../assets/LookingForNewHome.png'
import homimg2 from '../assets/LookingforHome2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
function LokingForNewHome() {
     useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
      }, []);
      
  return (
    <>
    <div className="w-[97%] md:w-[90%] lg:w-[80%] mx-auto max-w-4xl flex flex-col md:flex-row gap-6 p-6 md:p-12">
  {/* First Div */}
  <div className="flex-1 bg-[#F9F9F9] max-w-sm p-6 rounded-lg relative">
    <h4 className="text-xl md:text-lg font-medium mb-2">
      Looking for the new Property?
    </h4>
    <p className="text-[.7rem] mb-8 pr-11">
      many offers every day. dont't miss offers <br></br>on site, trusted by a community of thousands of users.
    </p>
      <Link to={'/properties'}><button className="bg-[#1F4B43] text-sm text-white px-6 py-2 rounded-lg ">
      Get Started &#8594;
    </button></Link>
    {/* Small "A" at Bottom Right */}
    <span className="absolute bottom-4 right-4 w-[60px] md:w-[90px]"><img src={homimg2}/></span>
  </div>

  {/* Second Div */}
  <div className="flex-1 bg-[#FFF8F6] max-w-sm  p-6 rounded-lg relative">
    <h4 className="text-xl md:text-lg font-medium mb-2">
    Want to sell your
    Property?
    </h4>
    <p className="text-[.7rem] mb-8 pr-6">
    many offers you will get  every day , trusted <br></br>by a  community of thousands of users.
    </p>
    <Link to={'/postproperty'}><button className="bg-[#1F4B43] text-sm text-white px-6 py-2 rounded-lg ">
      Get Started &#8594;
    </button></Link>
    {/* Small "A" at Bottom Right */}
    <span className="absolute bottom-4 right-4 w-[60px] md:w-[90px]"><img src={homimg}/></span>
  </div>
</div>
<div className='w-full grid grid-cols-1 md:flex justify-evenly items-center px-[10%] md:px-[10%]  gap-2'>
<Link to={'/yourrequirments'}>  
   <button data-aos-duration="500" data-aos-delay="100" data-aos="fade-in" 
className=' w-full md:w-full px-5 hover:bg-[#e8f4f4]
     text-[#1F4B43] text-sm flex justify-center items-center gap-2
      font-semibold border-[1.2px] border-[#1F4B43] rounded-xl  py-2'> 
  <FaPaperPlane className=''/>Your Requirements</button></Link> 
  <Link to={'/postproperty'}>     <button data-aos-duration="500" 
  data-aos-delay="250" data-aos="fade-in" className='w-full px-9 hover:bg-[#e8f4f4]
     text-[#1F4B43] text-sm flex justify-center items-center gap-2
      font-semibold border-[1.2px] border-[#1F4B43] rounded-xl py-2'>   
      <FaHome  />Post Property</button></Link>
  <Link to={'/quickenquiry'}> <button data-aos-duration="500" data-aos-delay="350" 
  data-aos="fade-in" className='w-full  px-9 hover:bg-[#e8f4f4]
     text-[#1F4B43] text-sm flex justify-center items-center gap-2 
     font-semibold border-[1.2px] border-[#1F4B43] rounded-xl py-2'>
        <FaCommentDots  />Quick Enquiry</button></Link> 
</div>
    </>
  )
}

export default LokingForNewHome