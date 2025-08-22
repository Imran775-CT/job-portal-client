// src/components/CompanyCard.jsx
import React from "react";

const CompanyCard = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100 p-6 flex items-center gap-6 max-w-6xl mx-auto mb-8">
      
      {/* Logo */}
      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Hiring Logo"
          className="w-14 h-14 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-gray-900">
          Senior Frontend Developer
        </h1>
        <p className="text-sm text-gray-600">
          Work with a dynamic team to build modern, scalable web apps.
        </p>
        <p className="text-sm text-gray-600">
          Location: <span className="text-gray-800 font-medium">Remote</span> | Full-time
        </p>
      </div>

      {/* Extra Info */}
      <div className="ml-auto text-right">
        <p className="text-sm text-gray-500">Posted 2 days ago</p>
        <p className="text-sm text-green-600 font-medium">12 Applications</p>
      </div>
    </div>
  );
};

export default CompanyCard;
