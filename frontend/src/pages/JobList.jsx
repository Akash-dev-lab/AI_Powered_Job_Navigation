import React from "react";
import JobCard from "./JobCards";
import { useNavigate } from "react-router-dom";

const JobList = () => {

  const navigate = useNavigate();

  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "San Francisco, CA",
      jobType: "Full-time",
      experience: "3+ years",
      posted: "2 days ago",
      skills: ["B.com", "B.E", "Accounting"],
    },
    {
      title: "Data Analyst",
      company: "Insight Corp",
      location: "New York, NY",
      type: "Part-time",
      experience: "2+ years",
      posted: "1 week ago",
      skills: ["SQL", "Python", "Excel"],
    },
    {
      title: "Project Manager",
      company: "Global Solutions",
      location: "Remote",
      type: "Contract",
      experience: "5+ years",
      posted: "3 days ago",
      skills: ["Agile", "Scrum", "Leadership"],
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "4+ years",
      posted: "5 days ago",
      skills: ["Figma", "Sketch", "HTML/CSS"],
    },
    {
      title: "Marketing Specialist",
      company: "Brand Co",
      location: "Chicago, IL",
      type: "Internship",
      experience: "1+ year",
      posted: "2 weeks ago",
      skills: ["SEO", "Content Writing", "Social Media"],
    },
  ];

  const handleViewAll = () => {
    navigate("/Job", { state: { jobs } }); // Pass the job list to the /Job route
  };

  return (
    <section className="container md:space-y-5 flex flex-col gap-10">
      <div className="flex mx-6 justify-between items-center">
        <h2 className="max-sm:text-lg text-2xl font-bold text-gray-800">Job picks for you</h2>
        <button
          onClick={handleViewAll}
          className="text-blue-500 hover:text-blue-700"
        >
          View All
        </button>
      </div>

      <div className="flex gap-7">
        {jobs.slice(0, 3).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;
