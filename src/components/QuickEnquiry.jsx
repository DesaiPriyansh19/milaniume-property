import React,{ Component } from 'react';
import 'tailwindcss/tailwind.css';
import img from '../assets/support.jpg'
import { Link } from 'react-router-dom';
const QuickEnquiry = () => {
  return (<>
  <div style={{ backgroundImage: `url(${img})` }}
     className="w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat relative 
     before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[1px]">
               <div className="absolute inset-0 bg-black/35 md:bg-black/45"></div>
               <div className="  relative z-10 flex flex-col items-center justify-center 
               text-center text-white h-full px-4" style={{
                textShadow: "4px 4px 8px rgba(2, 2, 0.5, 0.5)", // Apply text shadow to all children
              }} >
            <h2 className=" mt-10 text-2xl md:text-2xl lg:text-5xl font-normal">
            Quick Enquiry
            </h2>
            <p className="hidden md:flex mt-4 font-medium text-sm px-40">
            Whether you’re looking to buy, sell, or rent, our experienced team is here to guide you through <br></br> every step of the process. Fill out the form below,and we’ll get <br></br> back to you promptly with personalized assistance.


            </p>
        <Link to={'/'}  >  <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
             Back to Home &#8594;
            </button></Link>
          </div>
     </div>
    <div className="flex flex-wrap bg-white p-8"
    >
      {/* Left Section - Form Inputs */}
      
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Our Office Location</h2>
        <p>C-401, Ganesh Glory 11,Nr. Moneyplant Highstreet,Jagatpur Road, Gota, Ahmedabad-382481</p>
        <div className="map-container w-full h-64">
          {/* Replace the coordinates with your office's latitude and longitude */}
          <iframe 
            src="https://maps.app.goo.gl/qVzyNCnEpvbDT5JC9" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
      {/* Right Section - Office Location with Map */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Quick Enquiry</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email (Required)</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone (Required)</label>
            <input 
              type="tel" 
              id="phone" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              rows="4" 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default QuickEnquiry;
