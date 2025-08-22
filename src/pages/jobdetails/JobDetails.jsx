import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No job details found.</p>
      </div>
    );
  }

  const {_id, title, company, location, salary, description, requirements, logo } = job;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <img
          src={logo || "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
          alt={`${company} logo`}
          className="w-16 h-16 rounded-lg object-cover border mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      {/* Location & Salary */}
      <div className="flex justify-between mb-4 text-gray-700">
        <span>📍 {location || "Location not specified"}</span>
        <span>💰 {salary || "Negotiable"}</span>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
        <p className="text-gray-600 leading-relaxed">{description || "No description provided."}</p>
      </div>

      {/* Requirements */}
      {requirements && requirements.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {/* {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))} */}
          </ul>
        </div>
      )}

      {/* Apply Button */}
      <div className="text-right">
        <Link to={`/jobApply/${_id}`}>
             <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Apply Now
              </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
