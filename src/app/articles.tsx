"use client";

import React from "react";

export function Articles() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center mb-12 text-4xl font-bold">
        Upcoming Tour Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tokyo */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tokyo" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold">Tokyo, Japan</h5>
            <p className="text-gray-600 mb-4">
              Experience the vibrant energy of Tokyo's city life, from the neon-lit streets of Shibuya to the serene temples of Asakusa.
            </p>
            <h6 className="text-blue-500 text-lg font-semibold">$2,499</h6>
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
            <h5 className="mb-2 text-xl font-semibold">Paris, France</h5>
            <p className="text-gray-600 mb-4">
              Discover the romance of Paris with visits to the Eiffel Tower, Louvre Museum, and charming cafés along the Seine.
            </p>
            <h6 className="text-blue-500 text-lg font-semibold">$1,999</h6>
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
            <h5 className="mb-2 text-xl font-semibold">Bali, Indonesia</h5>
            <p className="text-gray-600 mb-4">
              Immerse yourself in Bali's spiritual culture, pristine beaches, and lush rice terraces in this tropical paradise.
            </p>
            <h6 className="text-blue-500 text-lg font-semibold">$1,799</h6>
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
            <h5 className="mb-2 text-xl font-semibold">New York, USA</h5>
            <p className="text-gray-600 mb-4">
              Explore the iconic landmarks of the Big Apple, from Times Square to Central Park, and experience the city that never sleeps.
            </p>
            <h6 className="text-blue-500 text-lg font-semibold">$1,599</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
