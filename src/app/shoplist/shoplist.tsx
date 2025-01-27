import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/shoplist1.png",
    price: "$99.99",
    oldPrice: "$149.99",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 2,
    name: "In nulla",
    image: "/shoplist2.png",
    price: "$99.00",
    oldPrice: "$130.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/shoplist3.png",
    price: "$119.99",
    oldPrice: "$199.99",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 4,
    name: "Porttitor cum",
    image: "/shoplist4.png",
    price: "$69.89",
    oldPrice: "$135.49",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 5,
    name: "Nunc in",
    image: "/shoplist5.png",
    price: "$89.49",
    oldPrice: "$168.89",
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 6,
    name: "Vitae facilisis",
    image: "/shoplist6.png",
    price: "$49.99",
    oldPrice: "$99.99",
    description: "consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 7,
    name: "Curabitur lectus",
    image: "/shoplist7.png",
    price: "$189.99",
    oldPrice: "$249.99",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
];

const ShopList = () => {
  return (
    <>
      <div className="font-sans text-[#151875]">
        <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
          <div>
            <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <label
                htmlFor="perPage"
                className="text-sm font-medium text-gray-700"
              >
                Per Page:
              </label>
              <input
                type="text"
                id="perPage"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sortBy"
                className="text-sm font-medium text-gray-700"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FB2E86]">
                View:
              </label>
              <input
                type="text"
                id="view"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {shoplist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className="mt-2 flex gap-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                      ></span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-red-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{product.description}</p>

                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <AiOutlineHeart size={24} />
                  </button>
                  <Link href="/cart">
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                      <AiOutlineShoppingCart size={24} />
                    </button>
                  </Link>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <AiOutlineEye size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
