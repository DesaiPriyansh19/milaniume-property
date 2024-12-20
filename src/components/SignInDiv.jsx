import React from 'react'

function SignInDiv() {
  return (
<div className='w-full sm:w-[90%] md:w-[75%] rounded-none md:rounded-xl px-4 sm:pl-10 sm:pr-0 gap-4 py-4 sm:py-10 mt-12 sm:mt-24 mb-6 sm:mb-9 flex flex-wrap sm:flex-nowrap justify-center items-center mx-auto bg-[#1F4B43]'>
  <div className='w-full sm:w-[70%] text-white text-center sm:text-left'>
    <h4 className='text-[1rem] sm:text-[1.2rem] font-medium'>
      Sign in to streamline your search
    </h4>
    <p className='text-[.6rem] sm:text-[.7rem] font-normal mt-2'>
      Save properties, create alerts and keep track of the enquiries you send to agents.
    </p>
  </div>
  <div className='w-full sm:w-[40%] mt-0 sm:mt-0 flex items-center justify-center sm:justify-end'>
    <button className='bg-[#E7C873] hover:border-2 hover:bg-transparent hover:border-[#E7C873] hover:text-[#E7C873] flex items-center justify-center gap-1
      rounded-lg px-4 py-1 md:py-2 text-[#1F4B43] text-[.7rem] sm:text-[.8rem] mr-4 font-medium'>
      Sign in or create an account <span className='text-[1rem] sm:text-[1.2rem]'>
        &#8594;
      </span>
    </button>
  </div>
</div>

  )
}

export default SignInDiv