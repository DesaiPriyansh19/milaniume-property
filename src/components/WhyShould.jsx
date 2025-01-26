import React from 'react'
import WhyOne from '../../svg/Icon/WhyOne/Index'
import WhyTwo from '../../svg/Icon/WhyTwo'
import WhyThree from '../../svg/Icon/WhyThree'

function WhyShould() {
  return (
    <>
    <section className='mt-5 xl:mt-20 mb-14'>
    <h3 className=' text-center text-2xl xl:text-4xl font-medium mb-1'>Why You Should Work With Us</h3>
    <p className='text-center text-[.8rem] xl:text-lg mb-6 md:mb-9'>Experience Trust, Excellence and Expertise</p>
    <div className='flex items-center xl:gap-36 justify-center w-[80%] mx-auto mb-2'>
    <div className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0 
                    transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg'>
        <span><WhyOne/></span>
        <p className='font-medium text-center text-sm sm:text-lg xl:text-xl'>Wide Range of Properties</p>
        <p className='text-[.7rem] xl:text-sm hidden md:flex text-center lg:px-2'>
            We offer expert legal help for all related property items in Ahmedabad.
        </p>
    </div>

    <div className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0 
                    transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg'>
        <span><WhyTwo/></span>
        <p className='font-medium text-center text-sm sm:text-lg xl:text-xl'>Buy or Rent Homes</p>
        <p className='text-[.7rem] xl:text-sm hidden md:flex text-center px-2'>
            We sell your home at the best market price and very quickly as well.
        </p>
    </div>

    <div className='flex flex-col gap-1 justify-center items-center mb-3 sm:mb-0 
                    transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg'>
        <span><WhyThree/></span>
        <p className='font-medium text-center text-sm sm:text-lg xl:text-xl'>Trusted by Thousands</p>
        <p className='text-[.7rem] xl:text-sm hidden md:flex text-center px-2'>
            We offer you free consultancy to get a loan for your new home.
        </p>
    </div>
</div>

    </section>
    </>
  )
}

export default WhyShould