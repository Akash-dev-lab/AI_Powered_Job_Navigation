import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/bot-logo-removebg-preview.png'
import { UserDataContext } from '../context/UserContext'

const NavBar = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserDataContext)

  console.log(user)

  const handleLogout = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.status === 200) {
        localStorage.removeItem('token')
        navigate('/')
      }
    } catch (error) {
      console.error('Error during logout:', error.response || error.message)
      navigate('/')
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const isLoggedIn = !!localStorage.getItem('token')

  return (
    <nav className="flex w-[80%] justify-between px-20 py-2 rounded-full sticky top-1 bg-[#0096C7] ">
      <img className='w-12' src={logo} alt="Bot Logo" />
      <div className='flex w-2/3 justify-evenly gap-64'>
      <ul className="flex gap-4 items-center">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>Blog</li>
        <li>All Pages <i className="ri-arrow-down-s-line"></i></li>
        <i className="ri-search-line"></i>
      </ul>
      <div className='flex items-center gap-2'>
        {isLoggedIn && <span className="text-white mr-4">Hello, {user.fullname.firstname}</span>}
        <button
          className="bg-[#0076b681] hover:bg-[#0077B6] text-white px-5 py-3 rounded"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? 'Logout' : 'Login/Register'}
        </button>
      </div>
      </div>
    </nav>
  )
}

export default NavBar
