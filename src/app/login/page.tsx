import React from 'react';
import Login from './login';

const Page = () => {
  return (
    <div className="bg-purple-100 w-full h-screen flex flex-col items-center justify-center"> {/* Full screen and center alignment */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Account</h1>
      <div className="text-gray-600 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Page</span>
        <span className="mx-2">/</span>
        <span className="text-pink-500 font-semibold">My Account</span>
      </div>
      <Login />
    </div>
  );
};

export default Page;
