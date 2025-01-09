import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(`${import.meta.env.VITE_BASE_URL}`); // Connect to the backend

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs on component mount
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/job/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  // Listen for new job events
  useEffect(() => {
    socket.on('newJob', (job) => {
      setJobs((prevJobs) => [...prevJobs, job]);
    });

    // Clean up the event listener
    return () => {
      socket.off('newJob');
    };
  }, []);

  // Listen for new application events
  useEffect(() => {
    socket.on('newApplication', ({ jobId, application }) => {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === jobId
            ? { ...job, applications: [...job.applications, application] }
            : job
        )
      );
    });

    // Clean up the event listener
    return () => {
      socket.off('newApplication');
    };
  }, []);

  return (
    <div className='text-black flex gap-6 flex-col'>
      <h1>Job List</h1>
      {jobs.map((job) => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>Applications: {job.applications}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;