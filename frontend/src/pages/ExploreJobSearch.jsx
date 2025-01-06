import React from 'react'

const ExploreJobSearch = () => {
  return (
    <div class="flex w-[80%] flex-wrap md:flex-nowrap gap-6 p-6">
  {/* <!-- Left Component --> */}
  <div class="flex-1 bg-white shadow-lg rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Explore suggested job searches</h2>
    <p class="text-gray-600">
      Along with conventional advertising and below-the-line activities,
      organizations and corporate bodies have come to realize that they need to invest.
    </p>
    <div class="mt-4">
      <img
        src="path/to/your/image1.jpg"
        alt="Job suggestions"
        class="rounded-lg w-full object-cover"
      />
    </div>
  </div>

  {/* <!-- Right Component --> */}
  <div class="flex-1 bg-gradient-to-tr from-purple-500 to-orange-400 shadow-lg rounded-lg p-6 text-white">
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Co-founder
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Project Manager
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Sales
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Developer
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Personal Assistant
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Board Member
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        HR Assistant
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Entrepreneur in residence
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Designer
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Managing Director
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Founding Partner
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Coach
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Financial Advisor
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Customers Operator
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Data Analyst
      </div>
      <div class="bg-white text-gray-800 rounded-full px-4 py-2 text-center">
        Dispatcher
      </div>
    </div>
  </div>
</div>

  )
}

export default ExploreJobSearch
