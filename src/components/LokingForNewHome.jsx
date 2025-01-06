import React, { useEffect } from 'react';
import { FaPaperPlane, FaHome, FaCommentDots } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import imginqury from'../assets/icons8-inquiry-80.png'
import homimg from '../assets/LookingForNewHome.png'
import homimg2 from '../assets/LookingforHome2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import QuickContectLogo from '../../svg/QuickContact';
function LokingForNewHome() {
     useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
      }, []);
      
  return (
    <>
   <div className="w-[97%] md:w-[100%] lg:w-[100%] mx-auto xl:w-full xl:max-w-none flex flex-col md:flex-row justify-center gap-6 p-6 md:p-12">
  {/* First Div */}
  <div className="flex-1 bg-[#F9F9F9] 
       p-6 rounded-lg relative xl:h-[350px] xl:w-[700px] 
       xl:max-w-[700px] max-w-full">
  <h4 className="text-xl md:text-lg font-medium mb-2">
    Share Your Requirements
  </h4>
  <p className="text-[.7rem] mb-8 pr-11">
    Let us know your specific needs, and we'll help you find the best match.<br /> 
  </p>
  <Link to={'/yourrequirments'}>
    <button className="bg-[#1F4B43] text-sm text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
      Fill the Form &#8594;
    </button>
  </Link>
  {/* Small "A" at Bottom Right */}
  <span className="absolute bottom-4 right-4 w-[60px] md:w-[90px] xl:w-[190px]">
    <img src={homimg2} alt="Requirements" />
  </span>
</div>


  {/* Second Div */}
  <div className="flex-1 bg-[#FFF8F6] 
       p-6 rounded-lg relative xl:h-[350px] xl:w-[700px] 
       xl:max-w-[700px] max-w-full">
    <h4 className="text-xl md:text-lg font-medium mb-2">
      Want to sell your Property?
    </h4>
    <p className="text-[.7rem] mb-8 pr-6">
      Many offers you will get every day, trusted <br />by a community of thousands of users.
    </p>
    <Link to={'/postproperty'}>
  <button className="bg-[#1F4B43] mt-3 text-sm text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
    Post Property &#8594;
  </button>
</Link>

    {/* Small "A" at Bottom Right */}
    <span className="absolute bottom-4 right-4 w-[60px] md:w-[90px] xl:w-[190px]">
      <img src={homimg} alt="Selling" />
    </span>
  </div>

  {/* Third Div (Quick Inquiry) */}
  <div className="flex-1 bg-[#F4F4F9] 
       p-6 rounded-lg relative xl:h-[350px] xl:w-[700px] 
       xl:max-w-[700px] max-w-full">
    <h4 className="text-xl md:text-lg font-medium mb-2">
      Quick Inquiry
    </h4>
    <p className="text-[.7rem] mb-8 pr-6">
      Have questions? Our team is here to assist you with any inquiries you may have. <br />Feel free to reach out now!
    </p>
    <Link to={'/quickenquiry'}>
      <button className="bg-[#1F4B43] text-sm text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        Get in Touch &#8594;
      </button>
    </Link>
    {/* Small "A" at Bottom Right */}
    <span className="absolute bottom-4 right-4 w-[60px] md:w-[90px] xl:w-[190px]">
      <img src={imginqury} alt="Selling" />
    </span>
  </div>
</div>

  


{/* <div className='w-[90%] rounded-xl`  mx-auto grid grid-cols-1  py-10 md:flex justify-evenly items-center px-[10%] md:px-[10%]  gap-2'>
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
</div> */}
    </>
  )
}

export default LokingForNewHome