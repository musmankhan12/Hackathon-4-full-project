import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Empty Heart
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Productitem = () => {
  return (
    <div className='w-full max-w-[1000px] h-auto bg-slate-50 mx-auto flex flex-col md:flex-row px-3 py-5 shadow-xl'>
      
      {/* Left side content (Product info like title, price, description, etc.) */}
      <div className='w-full md:w-1/2 flex flex-col justify-start mt-10 ml-3 mr-3'>
        <h1 className='text-blue-950 font-medium font-sans text-2xl mb-2'>Playwood arm chair</h1>
        
        <div>
          <span className='text-xs' role="img" aria-label="star">⭐</span>
          <span className='text-sm' role="img" aria-label="star">⭐</span>
          <span className='text-sm' role="img" aria-label="star">⭐</span>
          <span className='text-sm' role="img" aria-label="star">⭐</span>
          <span className='text-sm' role="img" aria-label="star">⭐</span>
        </div>

        <div className='flex gap-10 mt-3'>
          <p className='text-sm text-blue-950'>$32.00</p>
          <p className='text-sm text-pink-500 line-through'>$32.00</p>
        </div>

        <div className='mt-2'>
          <p className='text-blue-950 text-xl'>Color</p>
          <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Mauris tellus porttitor purus, et volutpat sit.</p>
        </div>

        <div className='flex gap-2 mt-3'>
          <h1>Add to Cart </h1>
          <FontAwesomeIcon icon={faHeartRegular} size="sm" className='cursor-pointer mt-1'/>
        </div>

        <div className='text-blue-950 text-sm font-semibold mt-2 gap-6'>
          <p>Categories:</p>
          <p>Tags</p>
        </div>

        <div className='flex gap-4 mt-4'>
          <p className='text-blue-950 text-sm font-semibold'>Share:</p>
          <a href="https://facebook.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faFacebook} size="lg" className='text-blue-800'/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faInstagram} size="lg" className='text-pink-500'/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="">
            <FontAwesomeIcon icon={faTwitter} size="lg" className='text-blue-500'/>
          </a>
        </div>
      </div>

      {/* Right side content (Images) */}
      <div className='w-full md:w-1/2 flex flex-col justify-start items-center mt-5'>
        {/* Large image (prod4) */}
        <div className='mb-3'>
          <Image src={'/prod4.png'} width={270} height={350} alt='product' className='w-[270px] h-[350px]' />
        </div>

        {/* 3 small images (prod1, prod2, prod3) aligned in a row */}
        <div className='flex gap-3 mb-7'>
          <Image src={'/prod1.png'} width={80} height={90} alt='product'/>
          <Image src={'/prod2.png'} width={80} height={90} alt='product'/>
          <Image src={'/prod3.png'} width={80} height={90} alt='product'/>
        </div>
      </div>

    </div>
  );
}

export default Productitem;
