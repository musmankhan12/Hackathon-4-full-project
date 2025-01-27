'use client';
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import necessary icons
import { useState } from 'react'; // To manage dropdown state

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-1 text-xs">
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-between px-4">
        
        {/* Left section (Email and Phone) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <FaEnvelope />
            <span className="text-xs">mhhasanul@gmail.com</span>
          </a>
          
          <a
            href="tel:1234567890"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span className="text-xs">(12345)67890</span>
          </a>
        </div>

        {/* Right section (Icons and Dropdowns) */}
        <div className="flex sm:flex-row items-center justify-between gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          {/* Wishlist Icon */}
          <a href="/shop" className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span className="text-xs">Wishlist</span>
          </a>

          {/* Shopping Cart Icon */}
          <a href="/shop" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </a>

          {/* Language Dropdown */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span className="text-xs">English</span>
            <span className="text-[10px]">▼</span>
            {languageDropdown && (
              <div className="absolute top-6 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span className="text-xs">USD</span>
            <span className="text-[10px]">▼</span>
            {currencyDropdown && (
              <div className="absolute top-6 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login Icon */}
          <a href="/login" className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span className="text-xs">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// Header
export const Header = () => {
  return (
    <div className='flex flex-col md:flex-row w-full md:w-[1170px] mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto'>
      <h2 className='font-bold mr-12 font-inter text-[#000000] text-center md:text-left text-2xl md:text-[20px]'>
        Hekto
      </h2>

      <ul className='flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-3 md:gap-[40px] text-[#000000]'>
        <Link href={"/"} className='font-poppins text-[14px] text-[#FB2E86] font-bold text-center md:text-left'>
          <select className='text-center'>
            <option value="">Home</option>
          </select>
        </Link>
        <Link href={"/"} className='font-poppins text-[14px] font-bold text-center md:text-left'>
          Pages
        </Link>
        <Link href={"/"} className='font-poppins text-[14px] font-bold text-center md:text-left'>
          Product
        </Link>
        <Link href={"/"} className='font-poppins text-[14px] font-bold text-center md:text-left'>
          Blog
        </Link>
        <Link href={"/"} className='font-poppins text-[14px] font-bold text-center md:text-left'>
          Shop
        </Link>
        <Link href={"/"} className='font-poppins text-[14px] font-bold text-center md:text-left'>
          Contact
        </Link>
      </ul>

      <div className='flex gap-3 mt-4 md:mt-0'>
        <button className='flex items-center w-full md:w-[150px] h-[35px] rounded-[4px] pl-[16px] pt-[6px] pb-[6px] pr-[10px] gap-[5px] bg-white'>
          <input 
            type='text' 
            className='font-poppins text-[12px] font-normal w-[110px] h-[16px] opacity-[50%] border-2 border-red-500 text-[#000000]' />
          <IoSearch className='w-[18px] h-[14px]' />
        </button>
      </div>
    </div>
  );
}
