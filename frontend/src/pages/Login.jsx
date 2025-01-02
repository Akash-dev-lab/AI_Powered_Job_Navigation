import React from 'react'
import {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-purple-900 text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b from-purple-700 to-purple-800">
        <h2 className="text-center text-4xl font-bold mb-8">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <div className="flex items-center mt-1 bg-purple-600 rounded-full px-4 py-2">
              <i className="fas fa-user text-white"></i>
              <input onChange={(e) => setEmail(e.target.value)} value={email}
                type="email"
                required
                placeholder="Email"
                className="w-full bg-transparent border-none focus:outline-none placeholder-white ml-2 text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="flex items-center mt-1 bg-purple-600 rounded-full px-4 py-2">
              <i className="fas fa-lock text-white"></i>
              <input onChange={(e) => setPassword(e.target.value)} value={password}
                type="password"
                required
                placeholder="Password"
                className="w-full bg-transparent border-none focus:outline-none placeholder-white ml-2 text-white"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Haven't Account?{' '}
              <a href="/register" className="text-pink-500 hover:underline">
                Register
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600"
            >
              <i className="fas fa-arrow-right text-xl text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
