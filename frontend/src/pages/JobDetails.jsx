import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/job/jobs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJob(response.data.job);
      } catch (error) {
        console.error('Failed to fetch job:', error.response?.data?.message || error.message);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <h2>Applications</h2>
      <ul>
        {job.applications.map((application, index) => (
          <li key={index}>
            <p>Name: {application.name}</p>
            <p>Email: {application.email}</p>
            <p>Details: {JSON.stringify(application.details)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetails;