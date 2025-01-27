import Shoplist from "./shoplist";

const Page = () => {
  return (
    <div className="bg-purple-100 w-full flex flex-col items-center justify-start py-10 px-6 sm:px-10 lg:px-20">
      <h1 className="text-4xl font-bold text-[#151875] mt-10 text-center sm:text-left">Shop List</h1>
      <div className="mt-4 text-gray-600 text-center sm:text-left">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Page</span>
        <span className="mx-2">/</span>
        <span className="text-pink-500 font-semibold">Shopping List</span>
      </div>

      <div className="mt-10 w-full">
        <Shoplist />
      </div>
    </div>
  );
};

export default Page;
