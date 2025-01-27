'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../../../scripts/types/products';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { IoCheckmarkCircle } from 'react-icons/io5';

const builder = imageUrlBuilder(client);

const Prodimage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [cartProductName, setCartProductName] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)[0..19] {
            _id,
            name,
            description,
            price,
            oldPrice,
            slug,
            image
          }`
        );
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const urlFor = (source: string | undefined) => {
    if (!source) return '/path/to/placeholder.jpg';
    return builder.image(source).url();
  };

  const handleAddToCart = (productName: string, productPrice: string) => {
    if (!productPrice || isNaN(parseFloat(productPrice))) {
      console.error('Invalid product price:', productPrice);
      return; // Do not proceed if price is invalid
    }
    setCartProductName(productName);
    setTotalPrice((prevPrice) => prevPrice + parseFloat(productPrice));
    setShowPopup(true);
    setIsDone(false);
  };

  const handleDoneClick = () => {
    setIsDone(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowCheckoutPopup(true);
    }, 1000);
  };

  return (
    <div className="mx-10 mt-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-purple-800">Latest Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-wrap justify-center gap-8">
        {products.length === 0 ? (
          <p>No products available at the moment.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="w-80 p-5 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
            >
              <Link href={`/products/${product.slug.current}`}>
                {product.image?.asset && (
                  <div className="relative h-60 w-full mb-4">
                    <Image
                      src={urlFor(product.image?.asset._ref)}
                      alt={product.name || 'Product Image'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name || 'Unnamed Product'}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg">
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through mr-2">${product.oldPrice}</span>
                  )}
                  <span className="text-green-600 font-bold">${product.price}</span>
                </p>
              </Link>

              <button
                className="w-full bg-purple-500 text-white py-2 rounded-md mt-4 transition-all duration-200 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
                onClick={() => handleAddToCart(product.name, product.price)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-auto text-center">
            {isDone ? (
              <IoCheckmarkCircle className="text-green-500 text-6xl animate-pulse mb-4" />
            ) : (
              <p className="text-xl font-semibold mb-4">Adding to Cart...</p>
            )}
            <h2 className="text-lg font-semibold mb-3">{`Product "${cartProductName}" added to cart!`}</h2>
            <button
              onClick={handleDoneClick}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg mt-4"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {showCheckoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-purple-600 p-8 rounded-xl shadow-2xl text-white max-w-md mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <p className="text-lg mb-4">Total Price: ${totalPrice}</p>
            <Link href="/cart">
              <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-bold">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prodimage;
