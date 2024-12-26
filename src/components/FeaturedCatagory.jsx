import React, { useEffect } from 'react';
import HomeLogo from '../../svg/Icon/HomeLogo'
import HomeLogo2 from '../../svg/HomeLogo2/Index'
import HomeLogo3 from '../../svg/HomeLogo3/Index'
import HomeLogo4 from '../../svg/HomeLogo4/Index'
import HomeLogo5 from '../../svg/HomeLogo5/Index'
import HomeLogo6 from '../../svg/HomeLogo6/Index'
import Loan from '../assets/personal.png'
import Agriculture from '../assets/earth.png'
import Intirial from '../assets/living-room.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function FeaturedCatagory() {
     useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
      }, []);
  return (
    <>
  <div className='flex justify-center  md:justify-between items-center mt-16 px-4 md:px-9 '>
     <h2 className='text-2xl font-medium pl-9'>Our Services</h2>
    <button className=' hidden md:flex text-sm border text-center px-4  py-1 border-[#1F4B43] hover:bg-[#e6f6f3] rounded-md'>Explore  &#8594;</button>

    </div>
<p className='text-sm text-center md:text-start px-20 text-gray-500 '> wide range of Services</p>
    <div className='grid grid-cols-3 mt-5 px-1 md:px-0 md:flex gap-3 items-center  justify-center py-3'>

    <div data-aos-duration="1400" data-aos-delay="100" data-aos="flip-up">
        <div className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
    <span className=''><HomeLogo/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div></div>
<div data-aos-duration="1400" data-aos-delay="250" data-aos="flip-up" 
className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
    <span className=''><HomeLogo3/></span>
<p className='text-[.8rem] font-semibold'>Commercial Property</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div data-aos-duration="1400" data-aos-delay="350" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
    <span className=''><HomeLogo4/></span>
<p className='text-[.8rem] font-semibold'>Industrial Property</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div data-aos-duration="1400" data-aos-delay="650" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
    <span className='flex justify-center items-center'><img src={Agriculture} className=' w-[40%]'/></span>
<p className='text-[.8rem] font-semibold'>Agriculture & Project Land</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div data-aos-duration="1400" data-aos-delay="750" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
 <span className='flex justify-center items-center'><img src={Loan} className=' w-[40%]'/></span>
<p className='text-[.8rem] font-semibold'>Loan and Finance</p>

</div>
<div data-aos-duration="1400" data-aos-delay="950" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-uniqshadow cursor-pointer rounded-2xl py-3 text-center flex h-[130px] md:w-[120px] lg:[w-170px] flex-col justify-center items-center'> 
   <span className='flex justify-center items-center'><img src={Intirial} className=' w-[40%]'/></span>
<p className='text-[.8rem] font-semibold px-0 '>Interior Design</p>

</div>

    </div>
    <button className=' md:hidden ml-7 flex text-sm border text-center px-4 py-1 border-[#1F4B43] rounded-md'>Explore  &#8594;</button>
    </>
  )
}

export default FeaturedCatagory