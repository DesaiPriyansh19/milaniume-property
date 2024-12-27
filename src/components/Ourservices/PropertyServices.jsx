import React from 'react';

const PropertyServices = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">Property Services</h1>
        <p className="mt-4 text-lg text-gray-600">Buy, Sell, and Rent Residential, Commercial, and Industrial Properties.</p>
      </div>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800">What We Offer</h2>
          <p className="mt-4 text-gray-600">
            Our property services are designed to help you with every step of buying, selling, or renting properties.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Services */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700">Residential Properties</h3>
              <p className="mt-4 text-gray-600">
                Find your dream home with our expert residential property services.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700">Commercial Properties</h3>
              <p className="mt-4 text-gray-600">
                We provide commercial real estate solutions for businesses of all sizes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700">Industrial Properties</h3>
              <p className="mt-4 text-gray-600">
                From warehouses to factories, we help you find the right industrial space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Ready to Find Your Property?</h2>
        <p className="mt-4 text-lg">
          Get in touch with us today and let us help you find the perfect property.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PropertyServices;
