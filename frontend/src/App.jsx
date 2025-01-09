import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Home from './components/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Signup from './pages/Signup'
import AdminLogin from './pages/AdminLogin'
import AdminSignup from './pages/AdminSignup'
import AdminDashboard from './components/AdminDashboard'
import CreateJob from './pages/CreateJob'
import JobDetails from './pages/JobDetails'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div className='bg-[#CAF0F8]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Route>
        <Route path='/home' element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
