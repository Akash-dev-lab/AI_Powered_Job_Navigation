import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/bot-logo-removebg-preview.png'

const NavBar = () => {
  const navigate = useNavigate()

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

  return (
    <div>
      <nav className="flex w-full justify-between py-2 rounded-full px-20 sticky top-1 bg-[#0096C7] ">
        <img className='w-12' src={logo} alt="Bot Logo" />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>Blog</li>
          <li>All Pages <i className="ri-arrow-down-s-line"></i></li>
          <i className="ri-search-line"></i>
        </ul>
        <button 
          className="bg-[#0076b681] hover:bg-[#0077B6] text-white px-4 rounded" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  )
}

export default NavBar
