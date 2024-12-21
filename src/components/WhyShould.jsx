import React from 'react'
import WhyOne from '../../svg/Icon/WhyOne/Index'
import WhyTwo from '../../svg/Icon/WhyTwo'
import WhyThree from '../../svg/Icon/WhyThree'

function WhyShould() {
  return (
    <>
    <section className='mt-10'>
    <h3 className=' text-center text-2xl font-medium mb-1'>Why You Should Work With Us</h3>
    <p className='text-center text-[.8rem] mb-6'>Experience Trust, Excellence, and Expertise</p>
    <div className='flex items-center justify-center w-[80%] mx-auto mb-2'>
        <div className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0'>
            <span className=''><WhyOne/></span>
         <p className='font-medium  text-center text-sm sm:text-lg '>Wide Range of Properties</p>
         <p className='text-[.7rem] hidden md:flex  text-center lg:px-2'>We offer expert legal help for all related property
        items in Ahmedabad.</p></div>

        <div className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0'>
            <span className=''><WhyTwo/></span>
         <p className='font-medium  text-center text-sm sm:text-lg '>Buy or Rent Homes</p>
        <p className='text-[.7rem] hidden md:flex text-center px-2'>We sell your home at the best market price and very
        quickly as well.</p></div>

        <div  className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0'>
            <span><WhyThree/></span>
         <p className='font-medium  text-center text-sm sm:text-lg '>Trusted by Thousands</p>
         <p className='text-[.7rem] hidden md:flex text-center px-2'>We offer you free consultancy to get a loan for your
         new home.</p></div>
    </div>
    </section>
    </>
  )
}

export default WhyShould