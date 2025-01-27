"use client";
import React, { useState } from "react";

interface FooterProps {
  className?: string; // Add className prop
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      setMessage("You have successfully signed up!");
      setIsError(false);
    } else {
      setMessage("Invalid email address");
      setIsError(true);
    }
  };

  return (
    <footer className={`bg-blue-50 py-12 ${className}`}> {/* Use className prop here */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hekto</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-3 rounded-md border ${
                isError ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              onClick={handleSignUp}
              className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              Sign Up
            </button>
            {message && (
              <p
                className={`text-sm mt-2 ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Contact Info <br /> 17 Princess Road, London, Greater London NW1
            8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Care</h2>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pages</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        ©Webecy - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
