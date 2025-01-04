import React from "react";
import logo from "../../src/assets/logo final PNG.png";
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 mb-3 text-gray-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 pt-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
             <img
                     src={logo}
                     alt="Logo 1"
                     className=" w-[130px] mx-auto sm:w-[100px] md:w-[110px] xl:w-[120px] mb-3 "
                   />
            <p className="text-[.9rem] leading-relaxed text-black">
              At Millennium Properties, we connect buyers and sellers to create seamless transactions. Our mission is to help you find your dream property, with a focus on trust and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="sm:space-y-3   mx-auto flex  justify-between  text-start sm:grid ">
              {["Home", "AboutUs", "Property", "Service", "Quick Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-black">
              <li className="flex items-center">
              <a href="https://maps.app.goo.gl/bkNkxzhDT4JGRuWL6"> <span className="mr-2">📍</span> C/491, Ganesh Glory 11, Nr. Money Plant Highstreet, 
                Jagtpur Road, Gota, Ahmedabad -382481</a> 
              </li>
      
                <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:9898992554" className="hover:text-gray-900">
               Mayur BhaiDesai:9898992554 

                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:9898152554" className="hover:text-gray-900">
                Rutvik Desai:9898152554  

                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:9898512554" className="hover:text-gray-900">
                Back  Office:9898512554 

                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:support@realestatehub.com"
                  className="hover:text-gray-900"
                >
                 millenniumproperties45@gmail.com
                </a>
              </li>
            </ul>
          </div>
{/* 
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-600">
              Subscribe to get the latest updates and offers directly in your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600"
                aria-label="Enter your email address"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
          

            {/* Copyright */}
            <p className="text-sm text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Millennium Properties, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
