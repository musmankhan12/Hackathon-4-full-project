// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link'

export default function Aboutpage() {
  return (
    <div className="flex justify-center items-center w-full h-[430px] bg-white px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="lg:mr-8 mb-6 lg:mb-0">
          <Image 
            src="/about.png" 
            alt="Profile" 
            width={300} 
            height={200} 
            className="rounded-lg"
          />
        </div>
        <div className="text-center lg:text-left mb-6 lg:mb-0 mx-2">
          <h1 className="text-2xl font-bold text-blue-900">Know About Our E-commerce <br /> Business, History</h1>
          <p className="text-gray-500 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> 
            mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> 
            eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <Link href='/contact'>
          <button className='bg-pink-600 rounded-lg mt-5 w-[100px] h-[35px] text-white hover:bg-pink-700 transition-colors duration-300'>Contact us </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
