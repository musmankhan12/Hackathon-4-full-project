"use client";
import Link from "next/link";

function OrderCompleted() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full sm:w-96">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Order Completed
        </h1>

        {/* Checkmark Icon */}
        <div className="text-6xl text-pink-500 mb-4">
          <span role="img" aria-label="checkmark">
            ✅
          </span>
        </div>

        {/* Order Completion Message */}
        <p className="text-lg  mb-4 font-bold text-gray-900">
          Your order is completed!
        </p>

        <p className="text-md text-gray-600 mb-6">
          Thank you for your order. We are processing it, and it will be shipped to you shortly. You will receive a confirmation email once your items are dispatched.
        </p>

        {/* Continue Shopping Button */}
        <Link href="/products">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition">
            Continue Shopping
          </button>
        </Link>

        {/* Clock Icon */}
        <div className="mt-6 text-4xl text-gray-500">
          <span role="img" aria-label="clock">
            ⏰
          </span>
        </div>
      </div>
    </main>
  );
}

export default OrderCompleted;
