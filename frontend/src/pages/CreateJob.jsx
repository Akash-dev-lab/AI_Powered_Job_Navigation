import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/job/jobs`,
        { title, description, requirements: requirements.split(',') },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/admin-dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Failed to create job:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h1>Create Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Requirements (comma-separated)"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
        />
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default CreateJob;