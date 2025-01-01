import React from 'react'
import bgImage from "../assets/WhatsApp Image 2025-01-01 at 07.13.50_dd84140b.jpg"

const MainSection = () => {
  return (
    <div className="container flex bg-cover text-black object-fill h-[50%] bg-no-repeat py-3 mx-auto w-screen items-center">
                <div className="w-2/4 flex flex-col">
                    <h1 className="text-5xl font-poppins font-bold mb-4 leading-tight">Find The Perfect Job <br /> For You</h1>
                    <p className="text-md font-roboto font-normal mb-8">
                        Search Your Carrer Opportunity thought 18200+ Jobs
                    </p>

                    <div className="flex w-2/4">
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                        />
                        <button className="bg-[#0096C7] text-white px-6 py-2 rounded-r-lg hover:bg-[#0077B6] transition">
                            Search
                        </button>
                    </div>
                    <div className="w-2/4 flex mt-5 items-center">
                    <h3>Popular Searches</h3>
                    </div>
                </div>

                <div className="w-2/4 flex justify-center items-center">
                <img className="w-96 rounded-full" src={bgImage} alt="Background" />
                </div>
            </div>
  )
}

export default MainSection
