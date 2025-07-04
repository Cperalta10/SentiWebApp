"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";
import Image from "next/image";

export function Posts() {
  return (
    <div className="container mx-auto mt-10 px-4 py-20">
      <Typography variant="h2" className="text-center mb-12 font-bold">
        Featured Collection
      </Typography>
      
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
            <Typography variant="h6" className="font-semibold">Summer Floral Dress</Typography>
            <Typography className="text-gray-600 mb-2">Light and breezy floral pattern dress perfect for summer days</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
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
            <Typography variant="h6" className="font-semibold">Denim Jacket</Typography>
            <Typography className="text-gray-600 mb-2">Classic denim jacket with modern fit and styling</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
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
            <Typography variant="h6" className="font-semibold">Slim Fit Jeans</Typography>
            <Typography className="text-gray-600 mb-2">Premium quality denim with perfect stretch and comfort</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
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
            <Typography variant="h6" className="font-semibold">Premium Cotton T-Shirt</Typography>
            <Typography className="text-gray-600 mb-2">Ultra-soft cotton t-shirt with modern minimalist design</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
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
            <Typography variant="h6" className="font-semibold">Winter Puffer Coat</Typography>
            <Typography className="text-gray-600 mb-2">Warm and stylish winter coat with premium insulation</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
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
            <Typography variant="h6" className="font-semibold">Classic Oxford Shirt</Typography>
            <Typography className="text-gray-600 mb-2">Timeless oxford shirt perfect for any formal occasion</Typography>
            <Typography className="text-xl font-bold text-blue-600">Sold Out (coming soon)</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
