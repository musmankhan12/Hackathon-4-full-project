import Link from 'next/link';
import React from 'react';

const Uniquefeature = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-purple-50 w-full h-auto py-8 px-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="/uniquesofa.png.png"
          alt="Product Image"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 px-4">
        <h1 className="text-blue-800 text-xl md:text-2xl font-semibold text-center md:text-left">
          Unique Features of Latest & <br /> Trending Products
        </h1>
        <ol className="list-none mt-4 space-y-3">
          <li className="relative text-gray-500">
            <span className="absolute left-0 md:left-[-1.5rem] text-red-500 text-2xl">•</span>
            <span className="pl-6">All frames constructed with hardwood solids and laminates</span>
          </li>
          <li className="relative text-gray-500">
            <span className="absolute left-0 md:left-[-1.5rem] text-blue-500 text-2xl">•</span>
            <span className="pl-6">All frames constructed with hardwood solids and laminates</span>
          </li>
          <li className="relative text-gray-500">
            <span className="absolute left-0 md:left-[-1.5rem] text-[#6cd5f8] text-2xl">•</span>
            <span className="pl-6">All frames constructed with hardwood solids and laminates</span>
          </li>
        </ol>
        <div className="flex justify-center md:justify-start mt-6">
          <Link href="/shop">
            <button className="bg-pink-500 text-white rounded-sm px-6 py-2 hover:bg-pink-600 transition-colors">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Uniquefeature;
