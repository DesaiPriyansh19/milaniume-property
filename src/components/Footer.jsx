import React from "react";
import logo from "../../src/assets/logo final PNG.png";
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 text-gray-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 pt-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
             <img
                     src={logo}
                     alt="Logo 1"
                     className=" w-[100px] mx-auto sm:w-[90px] md:w-[100px] xl:w-[90px] mb-3 "
                   />
            <p className="text-[.7rem] leading-relaxed text-gray-600">
              At Millennium Properties, we connect buyers and sellers to create seamless transactions. Our mission is to help you find your dream property, with a focus on trust and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="sm:space-y-2 flex items-center justify-between sm:justify-center text-start sm:grid">
              {["Home", "Properties", "Agents", "Blog", "Contact Us"].map((link, index) => (
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
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">📍</span> 123 Main Street, Cityville, USA
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+1234567890" className="hover:text-gray-900">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:support@realestatehub.com"
                  className="hover:text-gray-900"
                >
                  support@realestatehub.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              {[
                { platform: "Facebook", iconPath: "M18 2h-3a7 7 0 00-7 7v3H5v4h3v8h4v-8h3l1-4h-4V9a1 1 0 011-1h3V4z" },
                { platform: "Twitter", iconPath: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.47 4.47v1A10.66 10.66 0 013 4.1s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { platform: "GitHub", iconPath: "M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.22c-3.34.72-4-1.61-4-1.61a3.15 3.15 0 00-1.32-1.74c-1.09-.75.08-.73.08-.73a2.49 2.49 0 011.82 1.22 2.5 2.5 0 003.42 1 2.51 2.51 0 01.75-1.58c-2.67-.3-5.47-1.34-5.47-5.94A4.66 4.66 0 015.14 8.55a4.3 4.3 0 01.11-3.17s1-.32 3.3 1.25a11.4 11.4 0 016 0C15.87 5 17 4.7 17 4.7a4.3 4.3 0 01.11 3.17 4.66 4.66 0 011.24 3.23c0 4.6-2.8 5.63-5.47 5.94a2.82 2.82 0 01.81 2.19v3.25c0 .31.22.69.83.58A12 12 0 0012 0z" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-gray-900 transition"
                  aria-label={`Follow us on ${social.platform}`}
                  title={social.platform}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Real Estate Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
