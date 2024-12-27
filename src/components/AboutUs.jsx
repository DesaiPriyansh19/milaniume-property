import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-8 sm:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a dynamic real estate agency committed to making your property journey seamless, enjoyable, and profitable.
          </p>
        </div>

        {/* Company Info Section */}
        <div className="lg:flex items-center justify-between space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Your Trusted Real Estate Partner</h3>
            <p className="text-lg text-gray-700">
              At [Company Name], we specialize in delivering high-quality real estate services tailored to your unique needs. Our experience and commitment to excellence ensures that every property transaction is handled with care and professionalism.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to buy, sell, or invest in real estate, we are here to offer guidance, advice, and a seamless experience.
            </p>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/500x400"
                alt="Real Estate Team"
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
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

        {/* Meet the Team Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
                <p className="text-gray-600">Lead Architect</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">Michael Lee</h4>
                <p className="text-gray-600">Real Estate Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
