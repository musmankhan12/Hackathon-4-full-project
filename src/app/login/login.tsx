import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-[600px] bg-white '>

<div className="w-[410px] h-[380px] bg-slate-100 mt-36 mx-auto p-6 rounded-lg shadow-lg text-center">
  <h1 className="text-2xl font-bold mb-4">Login</h1>
  <p className="text-gray-600 mb-4">Please login using your account details below.</p>
  <input
    type="text"
    placeholder="Email Address"
    className="w-full p-3 mb-3 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
  />
  <input
    type="password"
    placeholder="Password"
    className="w-full p-3 mb-3 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
  />
  <p className="text-blue-500 mb-4 cursor-pointer hover:underline">Forgot your Password?</p>
  <button className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300">
    Sign In
  </button>
  <p className="mt-4 text-gray-600">
    Don’t have an Account?{' '}
    <span className="text-blue-500 cursor-pointer hover:underline">Create account</span>
  </p>
</div>

    </div>
  )
}

export default Login