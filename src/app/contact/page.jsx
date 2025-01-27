import Contact from "./contacts";

const Shop = () => {
  return (
    
    <div className="bg-purple-100 w-full  flex-col items-center justify-start py-10 grid sm:grid-cols-1  lg:grid-cols-2 xl:flex"> {/* Adjust height and remove fixed h-[200px] */}
      <h1 className="text-3xl font-bold text-gray-800 mt-10 sm:mx-10">Contact us</h1>
      <div className="mt-4 text-gray-600">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Page</span>
        <span className="mx-2">/</span>
        <span className="text-pink-500 font-semibold">Contact us</span>
      </div>

      <div className="mt-10 w-full"> {/* Adjusted margin-top */}
        
      </div>

<Contact/>
    </div>
  );
};

export default Shop;
