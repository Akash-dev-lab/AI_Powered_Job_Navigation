import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/bot-logo-removebg-preview.png'
import { useAdmin } from '../context/AdminContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin called'); // Debugging line
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`, {
        email,
        password,
      });
      localStorage.setItem('token', JSON.stringify(response.data.token))
      const adminDetails = { name: 'Akash', email };
      localStorage.setItem('admin', JSON.stringify(adminDetails));
      setAdmin(adminDetails);
      console.log('Admin details set in localStorage and context:', adminDetails); // Debugging line
      navigate('/admin-dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
    }
  };

  const UserLogin = () => {
    navigate('/login')
  }

  return (
      <div>
        <nav className='py-2 flex w-full md:w-[80%] mx-auto max-md:w-[80%] justify-between items-center px-4 md:px-20 rounded-full sticky top-1 bg-[#0096C7] z-50'>
          <img className='w-12 ' src={Image} alt="" />
  
          <button onClick={UserLogin} className='bg-transparent border text-white text-sm  border-white rounded px-4 py-3'>
            User Login
          </button>
        </nav>
      <div className="flex items-center justify-center h-[840px] text-blue-500">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b bg-[#c2dde6]">
          <h2 className="text-center text-4xl font-bold mb-8">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                <i className="fas fa-user text-white"></i>
                <input onChange={(e) => setEmail(e.target.value)} value={email}
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent border-none focus:outline-none ml-2"
                />
              </div>
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                <i className="fas fa-lock text-white"></i>
                <input onChange={(e) => setPassword(e.target.value)} value={password}
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full bg-transparent border-none focus:outline-none ml-2"
                />
              </div>
            </div>
  
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Haven't Admin Account?{' '}
                <a href="/admin-signup" className="text-black hover:underline">
                 Admin Signup
                </a>
              </p>
            </div>
  
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full h-12 bg-[#0096C7] text-white rounded flex items-center justify-center shadow-lg hover:bg-[#0095c7c4]"
              >Login
                <i className="fas fa-arrow-right text-xl text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
};

export default AdminLogin;