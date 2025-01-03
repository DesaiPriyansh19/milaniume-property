import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 text-gray-black border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              At Real Estate Hub, we connect buyers and sellers to create seamless transactions. Our mission is to help you find your dream property, with a focus on trust and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                { platform: "Facebook", iconPath: "M22 12..." },
                { platform: "Twitter", iconPath: "M24 4.557..." },
                { platform: "GitHub", iconPath: "M12 2.163..." },
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
