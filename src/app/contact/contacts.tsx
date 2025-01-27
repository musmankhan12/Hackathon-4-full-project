'use client';

import Image from "next/image";

function ContactUs() {
  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 py-12 grid gap-12 md:grid-cols-2">
          {/* Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About Us</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
              aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
            </div>

            <h2 className="text-2xl font-bold text-[#151875] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
              amet erat vitae eget dolor lobortis quis bibendum quam.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <textarea
                placeholder="Type your message*"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              ></textarea>
              <button className="bg-[#FB2E86] text-white py-3 px-8 rounded-md hover:bg-[#F94C9B] transition-colors w-full md:w-auto">
                Send Mail
              </button>
            </form>
          </div>

          {/* Contact Way Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#151875] mb-8">Contact Way</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#5726DF]"></span>
                <div className="text-gray-600">
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
                <div className="text-gray-600">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#FFB265]"></span>
                <div className="text-gray-600">
                  <p>20 Margaret st, London</p>
                  <p>Great Britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#1BE982]"></span>
                <div className="text-gray-600">
                  <p>Free standard shipping</p>
                  <p>on all orders</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Image
                src="/contact1.png"
                alt="Connect"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
