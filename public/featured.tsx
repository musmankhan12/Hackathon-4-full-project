"use client";

const Featured = () => {
  const productData = [
    {
      id: 1,
      name: "Cantilever Chair",
      code: "C123",
      price: "$150",
      image: "/featured1.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Cantilever Chair",
      code: "C124",
      price: "$200",
      image: "/featured2.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Cantilever Chair",
      code: "C125",
      price: "$180",
      image: "/featured3.png", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Cantilever Chair",
      code: "C126",
      price: "$170",
      image: "/featured4.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="p-4">
      {/* Featured Products Header */}
      <h2 className="text-navy-900 font-bold text-2xl text-center mb-6">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 p-3 rounded-md shadow-md text-center w-[220px] flex-shrink-0"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-[200px] h-[200px] object-cover rounded-md mb-3"
            />

            {/* Product Name */}
            <h3 className="text-pink-500 font-bold text-md">{product.name}</h3>

            {/* Product Code */}
            <p className="text-gray-600 text-sm mb-1">Code: {product.code}</p>

            {/* Product Price */}
            <p className="text-gray-800 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
