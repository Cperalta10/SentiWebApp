"use client";

import React from "react";
import Image from "next/image";

export function Posts() {
  return (
    <div className="container mx-auto mt-10 px-4 py-20">
      <h2 className="text-center mb-12 font-bold text-4xl">
        Featured Collection
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Summer Dress"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Summer Floral Dress</h6>
            <p className="text-gray-600 mb-2">Light and breezy floral pattern dress perfect for summer days</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Casual Jacket"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Denim Jacket</h6>
            <p className="text-gray-600 mb-2">Classic denim jacket with modern fit and styling</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Slim Fit Jeans"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Slim Fit Jeans</h6>
            <p className="text-gray-600 mb-2">Premium quality denim with perfect stretch and comfort</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Casual T-Shirt"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Premium Cotton T-Shirt</h6>
            <p className="text-gray-600 mb-2">Ultra-soft cotton t-shirt with modern minimalist design</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Winter Coat"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Winter Puffer Coat</h6>
            <p className="text-gray-600 mb-2">Warm and stylish winter coat with premium insulation</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            width={400}
            height={500}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Formal Shirt"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-white">
            <h6 className="font-semibold text-lg">Classic Oxford Shirt</h6>
            <p className="text-gray-600 mb-2">Timeless oxford shirt perfect for any formal occasion</p>
            <p className="text-xl font-bold text-blue-600">Sold Out (coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
