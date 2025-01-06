import React from "react";

const TrendingJobs = () => {
  const jobs = [
    {
      title: "Crisis Intervention Specialist",
      location: "Canada - Remote",
      salary: "$97,500",
      average: "Avg. salary",
      icon: "path/to/icon1.png", // Replace with actual paths
    },
    {
      title: "Virtual Scheduler - Remote",
      location: "New York - USA",
      salary: "$98,000",
      average: "Avg. salary",
      icon: "path/to/icon2.png",
    },
    {
      title: "Patient Care Advocate",
      location: "Washington - USA",
      salary: "$99,700",
      average: "Avg. salary",
      icon: "path/to/icon3.png",
    },
  ];

  return (
    <section className="py-10 w-[80%] bg-[#CAF0F8]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Trending jobs</h2>
          <a href="/all-jobs" className="text-blue-500 hover:text-blue-700">
            See all jobs
          </a>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={job.icon}
                  alt={job.title}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>
              <div className="text-gray-700 text-sm">
                <p>
                  <span className="font-bold">{job.salary}</span> - {job.average}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;
