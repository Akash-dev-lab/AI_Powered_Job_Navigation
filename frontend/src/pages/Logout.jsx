import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
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

    logout()
  }, [navigate, token])

  return null
}

export default Logout
