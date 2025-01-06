import React from "react";

const JobOffers = () => {
  const jobs = [
    {
      category: "Finance",
      title: "Financial Analyst",
      location: "San Diego, CA",
      type: "Full Time",
      salary: "Jun 2025",
      company: "Dynamics",
      icon: "path/to/icon1.png", // Replace with actual paths
    },
    {
      category: "Software Engineering",
      title: "Fullstack Web Developer",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "Jun 2025",
      company: "Synapsoft",
      icon: "path/to/icon2.png",
    },
    {
      category: "Human Resources",
      title: "Human Resources Coordinator",
      location: "San Diego, CA",
      type: "Full Time",
      salary: "Jun 2025",
      company: "DataLab",
      icon: "path/to/icon3.png",
    },
    {
      category: "Business Development",
      title: "Technical Writer",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "Jun 2025",
      company: "Codepress",
      icon: "path/to/icon4.png",
    },
    // Add more jobs here...
  ];

  return (
    <section className="py-12 w-[80%] bg-[#CAF0F8]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Job Offers</h2>
          <p className="text-gray-600">
            Search your career opportunity through 12,500+ jobs
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={job.icon}
                  alt={job.category}
                  className="w-10 h-10 bg-gray-100 p-2 rounded-lg"
                />
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{job.category}</p>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h3>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>{job.location}</p>
                <p>{job.type}</p>
                <p>{job.salary}</p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>{job.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-8">
          <a
            href="/all-jobs"
            className="inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            All Job Offers
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobOffers
