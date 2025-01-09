import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/job/jobs`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error.response?.data?.message || error.message);
      }
    };
    fetchJobs();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/admin-login'); // Redirect to login page
  };

  return (
    <div className='gap-5 flex flex-col'>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/create-job">
        <button>Create New Job</button>
      </Link>
      <div>
        {jobs.map((job) => (
          <div key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <Link className='bg-blue-500' to={`/job/${job._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;