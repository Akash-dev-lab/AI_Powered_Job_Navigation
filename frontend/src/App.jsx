import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Home from './components/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'

const App = () => {
  return (
    <div className='bg-[#CAF0F8]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
