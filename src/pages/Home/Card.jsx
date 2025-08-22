// src/components/Card.jsx
import React from "react";

const Card = () => {
  const companies = [
    {
      name: "Google",
      jobs: 12,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      jobs: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Amazon",
      jobs: 15,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Tesla",
      jobs: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
  ];

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-30 mb-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Featured Companies
      </h2>

      {/* Paragraph */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Discover the top companies hiring now. Click below to explore job
        opportunities that match your skills.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex items-center"
            style={{ height: "10vw" }} // 10% height of width
          >
            {/* Logo */}
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 object-contain mr-4"
            />

            {/* Texts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {company.name}
              </h3>
              <p className="text-sm text-gray-500">
                {company.jobs} jobs available
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
