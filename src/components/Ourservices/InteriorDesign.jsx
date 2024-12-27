import React from 'react';

const InteriorDesign = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">Interior Design Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          Transform your space with our unique interior design services.
        </p>
      </div>

      {/* Content for Interior Design Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800">Our Interior Design Services</h2>
          <p className="mt-4 text-gray-600">
            We specialize in both residential and commercial interior design:
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-600">
            <li>Residential Interiors</li>
            <li>Commercial Interiors</li>
            <li>Office Spaces</li>
            <li>Turnkey Projects</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Transform Your Space with Our Designers</h2>
        <p className="mt-4 text-lg">
          Let us design a space that works for you.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold">
          Get a Consultation
        </button>
      </div>
    </div>
  );
};

export default InteriorDesign;
