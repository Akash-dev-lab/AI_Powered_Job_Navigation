import React from 'react'
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import Image from '../assets/bot-logo-removebg-preview.png'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const { setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = {
      email: email,
      password: password,
    }

    setEmail('')
    setPassword('')

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
  }

  return (
    <div>
      <nav className='px-20 py-2'>
        <img className='w-12 ' src={Image} alt="" />
      </nav>
    <div className="flex items-center justify-center h-[840px] text-blue-500">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b bg-[#c2dde6]">
        <h2 className="text-center text-4xl font-bold mb-8">Login</h2>
        <form onSubmit={submitHandler}>
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
              Haven't Account?{' '}
              <a href="/signup" className="text-black hover:underline">
                Signup
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

export default Login;
