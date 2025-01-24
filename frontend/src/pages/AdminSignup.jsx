import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/bot-logo-removebg-preview.png'

const AdminSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token); // Save token
      navigate('/admin-dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Registration failed:', error.response?.data?.message || error.message);
    }
  };

  const UserSignup = () =>{
    navigate('/signup')
  }

 return (
     <div>
       <nav className='py-2 flex w-full md:w-[80%] mx-auto max-md:w-[80%] justify-between items-center px-4 md:px-20 rounded-full sticky top-1 bg-[#0096C7] z-50'>
                 <img className='w-12 ' src={Image} alt="" />
         
                 <button onClick={UserSignup} className='bg-transparent border text-white text-sm  border-white rounded px-4 py-3'>
                   User Signup
                 </button>
               </nav>
       <div className="flex flex-col gap-20 items-center justify-center h-[840px] text-blue-500">
         <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b bg-[#c2dde6]">
           <h2 className="text-center text-4xl font-bold mb-8">Admin Sign Up</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-6">
               <label
                 htmlFor="name"
                 className="block text-sm font-medium text-gray-600"
               >
                 Name
               </label>
               <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                 <i className="fas fa-user text-white"></i>
                 <input
                   onChange={(e) => setName(e.target.value)}
                   value={name}
                   type="text"
                   required
                   placeholder="Your Name..."
                   className="w-full bg-transparent border-none focus:outline-none ml-2"
                 />
               </div>
             </div>
 
             
             <div className="mb-6">
               <label
                 htmlFor="email"
                 className="block text-sm font-medium text-gray-600"
               >
                 Email
               </label>
               <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                 <i className="fas fa-user text-white"></i>
                 <input
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
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
                 <input
                   onChange={(e) => setPassword(e.target.value)}
                   value={password}
                   type="password"
                   required
                   placeholder="Password"
                   className="w-full bg-transparent border-none focus:outline-none ml-2"
                 />
               </div>
             </div>
 
             <div className="text-center">
               <p className="text-sm text-gray-600">
                 Already an Admin?
                 <a href="/admin-login" className="text-black hover:underline">
                  Admin Login
                 </a>
               </p>
             </div>
 
             <div className="flex justify-center mt-8">
               <button
                 type="submit"
                 className="w-full h-12 bg-[#0096C7] text-white rounded flex items-center justify-center shadow-lg hover:bg-[#0095c7c4]"
               >
                 Sign Up
                 <i className="fas fa-arrow-right text-xl text-white"></i>
               </button>
             </div>
           </form>
         </div>
         <p className="text-[10px] text-black leading-tight">
           This site is protected by reCAPTCHA and the{" "}
           <span className="underline">Google Privacy Policy</span> and{" "}
           <span className="underline">Terms of Service apply</span>.
         </p>
       </div>
     </div>
   );
};

export default AdminSignup;