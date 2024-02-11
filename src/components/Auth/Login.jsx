import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl mb-6 text-center font-semibold text-blue-500">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
