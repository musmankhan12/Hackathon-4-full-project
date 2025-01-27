'use client';

import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa'; 


function CreatorPage() {
  return (
    <>
     
      <div className="min-h-screen bg-[#f9f9f9] py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">
 
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/anii.jpg"
                alt="profile"
                width={150}
                height={150}
                className="rounded-full shadow-lg-[#1D3178]"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1D3178] flex items-center gap-2">
                About the Creator
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Hello, I’m <span className="font-semibold">M Usman</span>, a developer exploring the limitless
                opportunities in <span className="font-semibold">Generative AI</span>, <span className="font-semibold">Metaverse</span>, and <span className="font-semibold">WEB 3.0</span>. I specialize in creating interactive and innovative web solutions while staying ahead of cutting-edge trends.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                I do coding, you’ll find me studing and improving my skills all the time.
              </p>
            </div>
          </div>


          <div className="border-t border-gray-200"></div>

          <div className="bg-[#FEE5E5] sm:bg-[#EDEFFB] p-6 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#FB2E86] flex items-center justify-center gap-2">
              Feel Free to <span className="text-[#1D3178]">Knock</span> <FaHandshake className="text-[#FB2E86]" />
            </h2>
            <div className="mt-6 flex justify-center space-x-8 text-center text-2xl text-[#1D3178]">

              <a
                href="shumailamurk223@gmail.com"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>


              <a
                href=""
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/musmankhan12"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-usman-7507102b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default CreatorPage;