import React from 'react'
import HomeLogo from '../../svg/Icon/HomeLogo'
import HomeLogo2 from '../../svg/HomeLogo2/Index'
import HomeLogo3 from '../../svg/HomeLogo3/Index'
import HomeLogo4 from '../../svg/HomeLogo4/Index'
import HomeLogo5 from '../../svg/HomeLogo5/Index'
import HomeLogo6 from '../../svg/HomeLogo6/Index'

function FeaturedCatagory() {
  return (
    <>
   <div className='flex justify-center md:justify-between items-center mt-16 px-4 md:px-9 '>
     <h2 className='text-2xl font-medium pl-9'>Featured Categories</h2>
    <button className=' hidden md:flex text-sm border text-center px-4  py-1 border-[#1F4B43] rounded-md'>Explore  &#8594;</button>

    </div>
<p className='text-sm text-center md:text-start px-20 text-gray-500 '> wide range of properties</p>
    <div className='grid grid-cols-3 mt-5 px-1 md:px-0 md:flex gap-3 items-center  justify-center py-3'>

<div className='bg-gray-100 rounded-2xl p-6 flex  flex-col justify-center items-center'> 
    <span className=''><HomeLogo/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div className='bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center'> 
    <span className=''><HomeLogo2/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div className='bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center'> 
    <span className=''><HomeLogo3/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div className='bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center'> 
    <span className=''><HomeLogo4/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div className='bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center'> 
    <span className=''><HomeLogo5/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>
<div className='bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center'> 
    <span className=''><HomeLogo6/></span>
<p className='text-[.8rem] font-semibold'>Residantial</p>
<p className='text-[.7rem]'>2 properties</p>
</div>

    </div>
    <button className=' md:hidden ml-7 flex text-sm border text-center px-4 py-1 border-[#1F4B43] rounded-md'>Explore  &#8594;</button>
    </>
  )
}

export default FeaturedCatagory