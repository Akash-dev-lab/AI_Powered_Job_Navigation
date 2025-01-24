import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/bot-logo-removebg-preview.png";
import { UserDataContext } from "../context/UserContext";
import gsap from "gsap";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const TextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(TextRef.current, {
      opacity: 0,
      // y: 0,
    });

    tl.to(TextRef.current, {
      opacity: 1,
      duration: 0.3,
      y: 20,
      delay: 1,
    });
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error.response || error.message);
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <img className="w-12 max-sm:w-10" src={logo} alt="Bot Logo" />


        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex md:w-2/3 justify-evenly gap-64 absolute rounded-lg md:static top-20 right-5 w-2/4 bg-[#0095c7e8] md:bg-transparent py-4 md:py-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 items-center">
            <li>
              <button className="text-white hover:text-[#0077B6]">Home</button>
            </li>
            <li>
              <button className="text-white hover:text-[#0077B6]">Jobs</button>
            </li>
            <li>
              <button className="text-white hover:text-[#0077B6]">
                Companies
              </button>
            </li>
            <li>
              <button className="text-white hover:text-[#0077B6]">Blog</button>
            </li>
            <li>
              <button className="text-white hover:text-[#0077B6] flex items-center">
                All Pages <i className="ri-arrow-down-s-line"></i>
              </button>
            </li>
            <button
              className="border md:hidden hover:bg-[#0077B6] text-white px-4 py-1 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn && (
            <span className="text-white mr-4">
              Hello, {user.fullname.firstname}
            </span>
          )}
          {!isLoggedIn ? (
            <>
              <button
                className="border hover:bg-[#0077B6] text-white px-4 py-1 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="border hover:bg-[#0077B6] text-white px-4 py-1 rounded"
                onClick={handleSignup}
              >
                Signup
              </button>
            </>
          ) : (
            <button
              className="border hover:bg-[#0077B6] text-white px-4 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

      <button className="lg:hidden text-white" onClick={toggleMenu}>
        <i
          className={`ri-${isMenuOpen ? "close-line" : "menu-line"} text-2xl`}
        ></i>
      </button>
    </>
  );
};

export default NavBar;
