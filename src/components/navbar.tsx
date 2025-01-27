"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* all content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          <div>
            {/* logo */}
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl mb-3">
              Hekto
            </h2>
          </div>

          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black ">
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/">Home</Link>
              </li>

             
              <li
                className="relative p-4 hover:underline hover:text-pink-600 underline-offset-2"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <span className="cursor-pointer">Pages</span>
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md w-40 text-gray-800">
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/shop"
                        className="block px-4 py-2"
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/cart"
                        className="block px-4 py-2"
                      >
                        Billing Details
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/ordercomplete"
                        className="block px-4 py-2"
                      >
                        Order Complete
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/about"
                        className="block px-4 py-2"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/contact"
                        className="block px-4 py-2"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/login"
                        className="block px-4 py-2"
                      >
                        My Account
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/creatorpage"
                        className="block px-4 py-2"
                      >
                        About Creator
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link
                        href="/faq"
                        className="block px-4 py-2"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="p-4 hover:underline  hover:text-pink-600 underline-offset-2">
                <Link href="/products">Products</Link>
              </li>
              <li className="p-4 hover:underline  hover:text-pink-600 underline-offset-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="p-4 hover:underline  hover:text-pink-600 underline-offset-2">
                <Link href="/shoplist">Shop</Link>
              </li>
              <li className="p-4 hover:underline  hover:text-pink-600 underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            {/* Search bar - hidden on small screens */}
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center ">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white"
              />
            </div>

          
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
