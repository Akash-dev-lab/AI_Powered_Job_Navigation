import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 rounded-full px-20 sticky top-1 bg-[#0096C7] ">
                <h3 className="text-center">AI-Powered</h3>
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Companies</li>
                    <li>Blog</li>
                    <li>All Pages <i className="ri-arrow-down-s-line"></i></li>
                    <i className="ri-search-line"></i>
                </ul>
                <button className="bg-[#0076b681] hover:bg-[#0077B6] text-white py-2 px-4 rounded">Logout</button>
            </nav>
    </div>
  )
}

export default NavBar
