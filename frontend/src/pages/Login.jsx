import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-purple-900 text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b from-purple-700 to-purple-800">
        <h2 className="text-center text-4xl font-bold mb-8">Login</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <div className="flex items-center mt-1 bg-purple-600 rounded-full px-4 py-2">
              <i className="fas fa-user text-white"></i>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full bg-transparent border-none focus:outline-none placeholder-white ml-2 text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="flex items-center mt-1 bg-purple-600 rounded-full px-4 py-2">
              <i className="fas fa-lock text-white"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full bg-transparent border-none focus:outline-none placeholder-white ml-2 text-white"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Haven't Account?{' '}
              <a href="/register" className="text-pink-500 hover:underline">
                Register
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600"
            >
              <i className="fas fa-arrow-right text-xl text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
