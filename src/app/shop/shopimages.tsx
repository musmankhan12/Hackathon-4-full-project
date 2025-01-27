'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Shopimages = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 1, price: 32.00, name: 'Ut diam consequat', color: 'Brown', size: 'XL', image: '/curt1.png' },
    { id: 2, quantity: 1, price: 32.00, name: 'Ut diam consequat', color: 'Brown', size: 'XL', image: '/curt2.png' },
    { id: 3, quantity: 1, price: 32.00, name: 'Ut diam consequat', color: 'Brown', size: 'XL', image: '/curt3.png' },
    { id: 4, quantity: 1, price: 32.00, name: 'Ut diam consequat', color: 'Brown', size: 'XL', image: '/curt4.png' },
  ]);

  const updateQuantity = (index: number, action: 'increment' | 'decrement') => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const currentItem = updatedItems[index];
      
      if (action === 'increment') {
        updatedItems[index] = { ...currentItem, quantity: currentItem.quantity + 1 };
      } else if (action === 'decrement' && currentItem.quantity > 1) {
        updatedItems[index] = { ...currentItem, quantity: currentItem.quantity - 1 };
      }
      
      return updatedItems;
    });
  };

  const handleClearCart = () => {
    if (cartItems.every(item => item.quantity === 0)) {
      alert('Your cart is empty, please select your product');
    } else {
      setCartItems([]);
    }
  };

  const handleUpdateCart = () => {
    setCartItems([...cartItems]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="w-full bg-white mt-10 py-8">
      <ul className="flex flex-wrap justify-start text-[#373783] gap-20 font-bold mt-8 mx-6 sm:mx-24 lg:mx-48 lg:mt-12 items-start">
        <li>Products</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between mx-6 sm:mx-24 lg:mx-44 gap-6">
        {/* Product List Section */}
        <div className="flex flex-col gap-2 w-full">
          {/* Loop for Product Items */}
          {cartItems.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={`Product ${item.id}`}
                className="w-[83px] h-[87px] object-cover"
              />

              <div className="mx-2 flex flex-col justify-between">
                <h1 className="text-xs font-medium">{item.name}</h1>
                <p className="text-[12px] text-slate-500">
                  Color {item.color} <br /> Size {item.size}
                </p>
              </div>

              <div className="flex items-center gap-4 mx-4">
                <p className="text-[#373783] text-[14px] mr-8">${item.price.toFixed(2)}</p>

                {/* Increment decrement button */}
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-md text-[#373783] font-bold"
                    onClick={() => updateQuantity(index, 'decrement')}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-md text-[#373783] font-bold"
                    onClick={() => updateQuantity(index, 'increment')}
                  >
                    +
                  </button>

                  <p className="text-[#373783] text-sm mx-16">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="w-[390px] sm:w-[400px] lg:w-[700px] lg:h-[310px] lg:mt-20 lg:mx-36 bg-slate-200 p-6 space-y-4 h-auto">
          <h1 className="text-xl font-bold text-[#373783] text-center">Cart Tools</h1>

          {/* Subtotals */}
          <div className="flex items-center justify-between w-full px-4 mt-14">
            <span className="text-xl font-medium text-[#373783]">Subtotals:</span>
            <span className="text-lg font-bold text-[#373783]">${calculateTotal()}</span>
          </div>
          <hr className="w-full border-t-2 border-[green] my-4" />

          {/* second sec */}
          <div className="flex items-center justify-between w-full px-4">
            <span className="text-xl font-medium text-[#373783]">Totals:</span>
            <span className="text-lg font-bold text-[#373783]">${calculateTotal()}</span>
          </div>
          <hr className="w-full border-t-2 border-[green] my-4" />
          <br />

          <Link href="/shipment">
            <button className="px-7 py-3 bg-green-500 text-white text-sm rounded-md font-medium hover:bg-green-400 mx-10 ">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-8 mt-10 mx-6 sm:mx-24 lg:mx-44 justify-between">
        <button
          className="px-4 py-1.5 bg-pink-500 text-white text-sm rounded-md font-medium hover:bg-green-400"
          onClick={handleUpdateCart}
        >
          Update Cart
        </button>
        <button
          className="px-4 py-1.5 bg-pink-500 text-white text-sm rounded-md font-medium hover:bg-green-400"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Shopimages;
