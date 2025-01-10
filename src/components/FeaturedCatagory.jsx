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
import { Link } from 'react-router-dom';

function FeaturedCatagory() {
     useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
      }, []);
  return (
    <>
  <div className='flex justify-center  md:justify-between items-center mt-16 px-4 md:px-4 md:mr-7 '>
     <h2 className='text-2xl font-medium pl-9'>Our Services</h2>
  <Link to={'/ourservices'}>
   <button className=' hidden md:flex text-sm border text-center px-4  py-1 
  border-[#1F4B43] hover:bg-[#e6f6f3] rounded-md'>Explore  &#8594;</button></Link> 

    </div>
  
<p className='text-sm text-center md:text-start px-20 text-gray-500 '> wide range of Services</p>
    <div className='grid grid-cols-3 mt-5 px-5 md:px-10 lg:px-0 lg:flex gap-4 lg:gap-2 xl:gap-16 mx-auto items-center  justify-center py-3'>

    <Link to={'/properties'}>
    <div data-aos-duration="1400" data-aos-delay="100" data-aos="flip-up">
    <div className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px] flex-col justify-center items-center'>

    <span className=''><HomeLogo/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>

</div></div></Link>

<Link to={'/properties'}>
<div data-aos-duration="1400" data-aos-delay="250" data-aos="flip-up" 
className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px]  flex-col justify-center items-center'> 
    <span className=''><HomeLogo3/></span>
<p className='text-[.8rem] font-semibold'>Commercial Property</p>

</div></Link>
<Link to={'/properties'}>
<div data-aos-duration="1400" data-aos-delay="350" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px]  flex-col justify-center items-center'> 
    <span className=''><HomeLogo4/></span>
<p className='text-[.8rem] font-semibold'>Industrial Property</p>

</div></Link>
<Link to={'/properties'}>
<div data-aos-duration="1400" data-aos-delay="650" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px]  flex-col justify-center items-center'> 
    <span className='flex justify-center items-center'><img src={Agriculture} className=' w-[30%]'/></span>
<p className='text-[.8rem] font-semibold'>Agriculture Land  & <br></br> Project Land</p>

</div></Link>
<Link to={'/ourservices/loan'}>
<div data-aos-duration="1400" data-aos-delay="750" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px]  flex-col justify-center items-center'> 
 <span className='flex justify-center items-center'><img src={Loan} className=' w-[35%]'/></span>
<p className='text-[.8rem] font-semibold'>Loan and Finance</p>

</div></Link>
<Link to={'/ourservices/interior'}>
<div data-aos-duration="1400" data-aos-delay="950" data-aos="flip-up"
 className='bg-gray-100 hover:shadow-2xl cursor-pointer rounded-2xl py-3 text-center flex h-[130px]
         md:w-[120px] lg:w-[150px] xl:h-[170px] xl:w-[160px]  flex-col justify-center items-center'> 
   <span className='flex justify-center items-center'><img src={Intirial} className=' w-[40%]'/></span>
<p className='text-[.8rem] font-semibold px-0 '>Interior Design</p>

</div></Link>

    </div>
    <Link to={'/ourservices'}>
    <button className=' md:hidden ml-7 flex text-sm border text-center px-4 py-1 border-[#1F4B43] rounded-md'>Explore  &#8594;</button>
    </Link>
    </>
  )
}

export default FeaturedCatagory