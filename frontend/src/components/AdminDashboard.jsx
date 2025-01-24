import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import profile from '../assets/Akash_bg_remove.png';

const AdminDashboard = () => {

  const { admin } = useAdmin()

  console.log(admin)

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    navigate('/admin-login');
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const HamBurgerOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 bg-white fixed h-full shadow-md transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b flex flex-col items-center gap-2">
          <img className='w-28 h-28 rounded-full cursor-pointer' src={profile} alt="Profile" />
          <h2 className="text-lg font-bold">{admin?.name || "Admin Name"}</h2>
          <p className="text-sm text-gray-500">{admin?.email || "Admin Role"}</p>
        </div>
        <nav className="mt-4 relative">
          <ul className='absolute left-3'>
            <div className='flex items-center'>
            <i className="ri-dashboard-line text-2xl"></i>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Dashboard</li>
            </div>
            <div className='flex items-center'>
            <i className="ri-wallet-line text-2xl"></i>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">My Wallet</li>
            </div>
            <div className='flex items-center'>
            <i className="ri-bar-chart-line text-2xl"></i>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Transaction</li>
            </div>
            <div className='flex items-center'>
            <i className="ri-team-line text-2xl"></i>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">My Team</li>
            </div>
            <div className='flex items-center'>
            <i className="ri-line-chart-line text-2xl"></i>
            <li className="p-4 hover:bg-gray-100 cursor-pointer">Research Data</li>
            </div>
          </ul>
        </nav>
        <div className="absolute bottom-4 w-full p-4">
          <button onClick={handleLogout} className="w-full bg-gray-200 py-2 rounded-lg">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`ml-64 p-8 transition-transform ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className='flex items-center justify-between gap-5'>
            <i className="ri-menu-fold-4-line text-2xl cursor-pointer" onClick={HamBurgerOpen}></i>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-lg"
            />
          
          <div className="relative">
            <i className="ri-notification-3-line text-2xl cursor-pointer"></i>
            <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              3
            </span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Total Projects</h3>
            <p className="text-2xl font-bold">10,724</p>
            <p className="text-xs text-green-500 mt-2">
              All running & completed projects
            </p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Completed Projects</h3>
            <p className="text-2xl font-bold">9,801</p>
            <p className="text-xs text-green-500 mt-2">
              +12% Completion rate this month
            </p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Running Projects</h3>
            <p className="text-2xl font-bold">923</p>
            <p className="text-xs text-blue-500 mt-2">
              +8% Running projects increase
            </p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-lg font-bold">Revenue Chart</h3>
          <p className="text-sm text-gray-500">This Year</p>
          <div className="mt-4">
            {/* Replace with a chart library */}
            <div className="bg-gray-200 h-40 rounded-lg"></div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-lg font-bold">Transactions</h3>
            <div className="mt-4">
              <p className="text-gray-700">
                Robert Carter <span className="text-green-500">+$2438.71</span>
              </p>
              <p className="text-sm text-gray-500">June 14, 2023</p>
            </div>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-lg font-bold">Team Performance</h3>
            <div className="bg-gray-200 h-40 rounded-lg mt-4"></div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default AdminDashboard;