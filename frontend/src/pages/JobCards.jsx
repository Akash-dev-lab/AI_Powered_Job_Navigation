import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Job`, { state: { job } }); // Passing job details to the /Job route
  };

  return (
    <div className="max-w-lg w-full p-4 bg-white shadow-md rounded-lg">
      <div className="job-card border-b border-gray-300 pb-4 mb-4">
        <div className="job-header">
          <h2 className="text-xl text-black font-semibold">{job.title}</h2>
          <p className="text-gray-600">
            {job.company} - {job.location}
          </p>
        </div>
        <div className="job-details text-black mt-3">
          <p>
            <span className="font-semibold">Job Type:</span> {job.jobType}
          </p>
          <p>
            <span className="font-semibold">Experience:</span> {job.experience}
          </p>
          <p>
            <span className="font-semibold">Posted:</span> {job.posted}
          </p>
          <p>
            <span className="font-semibold">Skills Required:</span>{" "}
            {job.skills.join(", ")}
          </p>
        </div>
        <div className="job-actions mt-4 flex gap-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Apply Now
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
            Save
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
            Share
          </button>
        </div>
      </div>
      <button
        onClick={handleViewDetails}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        View
      </button>
    </div>
  );
};

export default JobCard;
