import React from 'react';

const LoanFinance = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">Loan & Finance Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get the best financing options for your property and project needs.
        </p>
      </div>

      {/* Content for Loan and Finance Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800">Our Loan Services</h2>
          <p className="mt-4 text-gray-600">
            We provide tailored loan solutions for your property goals:
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-600">
            <li>Home Loans</li>
            <li>Business Property Loans</li>
            <li>Land Purchase Loans</li>
            <li>Construction Finance</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Get Your Loan Today</h2>
        <p className="mt-4 text-lg">
          Speak to one of our experts and secure your loan.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LoanFinance;
