"use client";
import Link from 'next/link'; // Corrected import
import { useState } from 'react';

// Define type for the shipping information
interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

const ShipmentForm = () => {
  // TypeScript typing for state
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: '',
  });

  // Input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Submit handler with event type
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Shipping Info:', shippingInfo);
    alert('Shipment details submitted successfully!');
    // Add backend integration here
  };

  return (
    <div className="mt-7 max-w-2xl mx-auto p-6 bg-purple-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-purple-900 mb-6">Shipment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-purple-800 font-semibold mb-2">Full Name:</label>
          <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Address:</label>
          <textarea
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleInputChange}
            placeholder="Enter postal code"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Country:</label>
          <select
            name="country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          >
            <option value="">Select your country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>
        <br />

        {/* Remove Link from inside the button */}
        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-purple-300 transition-all"
        >
          Continue Shipping
        </button>
      </form>

      {/* Link usage corrected, remove <a> tag */}
      <Link href="/payment" className="block text-center text-purple-600 mt-4">
        Go to Payment Page
      </Link>
    </div>
  );
};

export default ShipmentForm;
