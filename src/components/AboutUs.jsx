import React from "react";
import img from '../../public/about2.jpg'
import { Link } from "react-router-dom";
import WhyShould from "./WhyShould";
import WeUseRealestate from "./WeUseRealestate";
import img2 from '../assets/nice-suit.jpg'
import img3 from '../assets/—Pngtree—women avatar with long black_8494146.png'
import person from '../assets/—Pngtree—businessman user avatar wearing suit_8385663.png'
const AboutUs = () => {
  return (<>
   <div style={{ backgroundImage: `url(${img})` }}
     className="w-full h-[500px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat relative 
     before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[0px]">
               <div className="absolute inset-0 bg-black/35 md:bg-black/35"></div>
               <div className="  relative z-10 flex flex-col items-center justify-center 
               text-center text-white h-full px-4" style={{
                textShadow: "4px 4px 8px rgba(2, 2, 0.5, 0.5)", // Apply text shadow to all children
              }} >
            <h2 className=" mt-0 text-2xl md:text-2xl lg:text-5xl font-normal">
            About Us
            </h2>
            <p className="hidden md:flex mt-4 font-thin text-sm px-40">
            We are a dynamic real estate agency committed to <br></br>making your property journey seamless, enjoyable, and profitable.


            </p>
        <Link to={'/'}  >  <button className="mt-6 px-4 py-2 bg-[#E7C873] text-sm text-black rounded-lg font-normal">
             Back to Home &#8594;
            </button></Link>
          </div>
     </div>
    <section className=" py-16 px-8 sm:px-16 lg:px-32">

      <div className="max-w-screen-xl mx-auto">
    

        {/* Company Info Section */}
        <div className="lg:flex items-center justify-between space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-medium text-gray-800 mb-4">Your Trusted Real Estate Partner</h3>
            <p className="text-lg text-gray-700">
              At Millenuime, we specialize in delivering high-quality real estate services tailored to your unique needs. Our experience and commitment to excellence ensures that every property transaction is handled with care and professionalism.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to buy, sell, or invest in real estate, we are here to offer guidance, advice, and a seamless experience.
            </p>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={img2}
                alt="Real Estate Team"
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24 mb-11">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 rounded-lg p-8 text-center">
              <div className="bg-indigo-500 text-white p-4 rounded-full inline-flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Trust & Integrity</h4>
              <p className="text-gray-600">
                We believe in honest communication and maintaining long-term relationships built on trust.
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 rounded-lg p-8 text-center">
              <div className="bg-green-500 text-white p-4 rounded-full inline-flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technology and innovative solutions to ensure the best outcomes for our clients.
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 rounded-lg p-8 text-center">
              <div className="bg-yellow-500 text-white p-4 rounded-full inline-flex items-center justify-center mb-6">
                <i className="fas fa-heart text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centric</h4>
              <p className="text-gray-600">
                We always put our clients' needs first, providing tailored services that deliver results.
              </p>
            </div>
          </div>
        </div>
<WhyShould/>

        {/* Meet the Team Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src={person}
                alt="Team Member 1"
                className="mx-auto h-auto object-cover w-[55%]"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Mayur Desai</h4>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src={person}
                alt="Team Member 2"
                className="mx-auto h-auto object-cover w-[55%]"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Rutvik Desai</h4>
                <p className="text-gray-600">Manager</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <div className=" w-full grid grid-cols-2 gap-1">
                <img
                src={img3}
                alt="Team Member 3"
                className="mx-auto h-full object-cover w-[100%]"
              />
                  <img
                src={img3}
                alt="Team Member 3"
                className="mx-auto h-full object-cover w-[100%]"
              />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Tulsi Mewada &
                Dhruvi Mewada</h4>
                <p className="text-gray-600">Real Estate Consultant</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <div className=" w-full grid grid-cols-2 gap-1">
                <img
                src={person}
                alt="Team Member 3"
                className="mx-auto h-auto object-cover w-[70%]"
              />
                <img
                src={person}
                alt="Team Member 3"
                className="mx-auto h-auto object-cover w-[70%]"
              />

<img
                src={person}
                alt="Team Member 3"
                className="mx-auto h-auto object-cover w-[70%]"
              />                  <img
                src={person}
                alt="Team Member 3"
                className="mx-auto h-auto object-cover w-[70%]"
              />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Sales And Field Team</h4>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
