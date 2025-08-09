'use client';

import React from 'react';
import Image from 'next/image';

export function Shop() {
  return (
    <div id="shop" className="container mx-auto mt-10 px-4 py-20">
      <h2 className="text-center mb-12 font-bold text-4xl">
        Featured Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/store/tshirt.png"
            alt="White T-Shirt"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">White T-Shirt</h6>
            <p className="text-gray-600 mb-2">
              Premium cotton t-shirt with Sentimiento logo
            </p>
            <p className="text-xl font-bold text-blue-600">Coming Soon</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/store/hoodie.png"
            alt="White Hoodie"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">White Hoodie</h6>
            <p className="text-gray-600 mb-2">
              Cozy hoodie with Sentimiento branding
            </p>
            <p className="text-xl font-bold text-blue-600">Coming Soon</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/store/pants.png"
            alt="White Pants"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">White Pants</h6>
            <p className="text-gray-600 mb-2">
              Classic fit pants with Sentimiento logo
            </p>
            <p className="text-xl font-bold text-blue-600">Coming Soon</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/store/shorts.png"
            alt="White Shorts"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transformation duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">White Shorts</h6>
            <p className="text-gray-600 mb-2">
              Comfortable shorts with Sentimiento branding
            </p>
            <p className="text-xl font-bold text-blue-600">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
