"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import ArticleCard from "@/components/article-card";

export function Articles() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Typography variant="h2" className="text-center mb-12">
        Upcoming Tour Locations
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tokyo */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tokyo" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <Typography variant="h5" className="mb-2">Tokyo, Japan</Typography>
            <Typography className="text-gray-600 mb-4">
              Experience the vibrant energy of Tokyo's city life, from the neon-lit streets of Shibuya to the serene temples of Asakusa.
            </Typography>
            <Typography variant="h6" className="text-blue-500">$2,499</Typography>
          </div>
        </div>

        {/* Paris */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Paris" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <Typography variant="h5" className="mb-2">Paris, France</Typography>
            <Typography className="text-gray-600 mb-4">
              Discover the romance of Paris with visits to the Eiffel Tower, Louvre Museum, and charming cafés along the Seine.
            </Typography>
            <Typography variant="h6" className="text-blue-500">$1,999</Typography>
          </div>
        </div>

        {/* Bali */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Bali" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <Typography variant="h5" className="mb-2">Bali, Indonesia</Typography>
            <Typography className="text-gray-600 mb-4">
              Immerse yourself in Bali's spiritual culture, pristine beaches, and lush rice terraces in this tropical paradise.
            </Typography>
            <Typography variant="h6" className="text-blue-500">$1,799</Typography>
          </div>
        </div>

        {/* New York */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="New York" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <Typography variant="h5" className="mb-2">New York, USA</Typography>
            <Typography className="text-gray-600 mb-4">
              Explore the iconic landmarks of the Big Apple, from Times Square to Central Park, and experience the city that never sleeps.
            </Typography>
            <Typography variant="h6" className="text-blue-500">$1,599</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
