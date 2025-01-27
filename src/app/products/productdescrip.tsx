import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Productdescrip = () => {
  return (
    <div className='w-full bg-white px-4 sm:px-8 lg:px-40'>
      {/* Navigation tabs */}
      <ul className='flex flex-wrap justify-center sm:justify-start gap-10 font-bold mt-20 underline text-[#3232a9]'>
        <li className='py-2 cursor-pointer'>Description</li>
        <li className='py-2 cursor-pointer'>Additional Info</li>
        <li className='py-2 cursor-pointer'>Reviews</li>
        <li className='py-2 cursor-pointer'>Video</li>
      </ul>

      {/* Product Description */}
      <div className='mt-10'>
        <h1 className='text-[#3232a9] font-semibold text-center sm:text-left'>Varius tempor.</h1>
        <p className='text-slate-400 mt-4 text-center sm:text-left'>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
          Montes, mauris varius ac est bibendum. <br />
          Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
          Magna eget faucibus <br />
          cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. 
          Dui, massa viverr.
        </p>
      </div>

      {/* More details */}
      <div className='mt-10'>
        <h1 className='text-[#3232a9] font-semibold text-center sm:text-left'>More details.</h1>
        {/* List items */}
        <ul className='flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 mt-4 px-4 sm:px-0'>
          <li className='flex items-start gap-2 text-slate-400 mb-2 sm:mb-0'>
            <FaLongArrowAltRight className='text-[#3232a9] mt-1'/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className='flex items-start gap-2 text-slate-400 mb-2 sm:mb-0'>
            <FaLongArrowAltRight className='text-[#3232a9] mt-1'/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className='flex items-start gap-2 text-slate-400 mb-2 sm:mb-0'>
            <FaLongArrowAltRight className='text-[#3232a9] mt-1'/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className='flex items-start gap-2 text-slate-400 mb-2 sm:mb-0'>
            <FaLongArrowAltRight className='text-[#3232a9] mt-1'/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
}

export default Productdescrip;
