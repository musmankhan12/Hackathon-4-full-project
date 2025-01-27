"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router hook
import Link from "next/link";

// Define the types for the form state
interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardholderName: string;
}

const Payment = () => {
  const router = useRouter(); // Initialize router

  // Set the state with an initial type
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardholderName: "",
  });

  // Define the event type for handleInputChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (
      !paymentInfo.cardNumber ||
      !paymentInfo.expirationDate ||
      !paymentInfo.cvv ||
      !paymentInfo.cardholderName
    ) {
      alert("Please fill out all the fields!");
      return;
    }

    console.log("Payment Info Submitted:", paymentInfo);

    // Display the payment complete message
    alert("Payment Details Submitted Successfully!");

    // Redirect to the next step (e.g., /confirmation page)
    router.push("/confirmation");
  };

  return (
    <div className="mt-7 max-w-2xl mx-auto p-6 bg-purple-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-purple-900 mb-6">
        Payment Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-purple-800 font-semibold mb-2">Cardholder Name:</label>
          <input
            type="text"
            name="cardholderName"
            value={paymentInfo.cardholderName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter your card number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-purple-800 font-semibold mb-2">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleInputChange}
            placeholder="Enter CVV"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
        </div>
        <br />
           <Link href='/ordercomplete'>
        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-purple-300 transition-all"
        >
          Complete Payment
        </button>
        </Link>

      </form>
    </div>
  );
};

export default Payment;
