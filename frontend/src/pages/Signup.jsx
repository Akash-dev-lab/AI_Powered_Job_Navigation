import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import Image from '../assets/bot-logo-removebg-preview.png'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const { user, setUser } = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        setfirstName('')
        setlastName('')
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        console.log(`${import.meta.env.VITE_BASE_URL}/users/register`)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)


        if (response.status === 201) {
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
            <div className="flex flex-col gap-20 items-center justify-center h-[840px] text-blue-500">
                <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b bg-[#c2dde6]">
                    <h2 className="text-center text-4xl font-bold mb-8">Sign Up</h2>
                    <form onSubmit={submitHandler}>
                        <div className="mb-6">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-600"
                            >
                                First Name
                            </label>
                            <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                                <i className="fas fa-user text-white"></i>
                                <input onChange={(e) => setfirstName(e.target.value)} value={firstName}
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    className="w-full bg-transparent border-none focus:outline-none ml-2"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Last Name
                            </label>
                            <div className="flex items-center mt-1 bg-white rounded-full px-4 py-2">
                                <i className="fas fa-user text-white"></i>
                                <input onChange={(e) => setlastName(e.target.value)} value={lastName}
                                    type="text"
                                    required
                                    placeholder="Last Name"
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
                                Already have an Account?
                                <a href="/login" className="text-black hover:underline">
                                    Login
                                </a>
                            </p>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                className="w-full h-12 bg-[#0096C7] text-white rounded flex items-center justify-center shadow-lg hover:bg-[#0095c7c4]"
                            >Sign Up
                                <i className="fas fa-arrow-right text-xl text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <p className='text-[10px] text-black leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    );

}
export default Signup


