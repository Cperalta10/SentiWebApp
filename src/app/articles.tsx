"use client";

import React from "react";

export function Articles() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center mb-12 text-4xl font-bold">
        Upcoming Tour Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tour Placeholder" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col items-center justify-center">
            <h5 className="mb-2 text-xl font-semibold">Coming Soon</h5>
            <p className="text-gray-600 mb-4 text-center">Details for this tour will be announced soon.</p>
            <h6 className="text-blue-500 text-lg font-semibold">—</h6>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tour Placeholder" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col items-center justify-center">
            <h5 className="mb-2 text-xl font-semibold">Coming Soon</h5>
            <p className="text-gray-600 mb-4 text-center">Details for this tour will be announced soon.</p>
            <h6 className="text-blue-500 text-lg font-semibold">—</h6>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tour Placeholder" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col items-center justify-center">
            <h5 className="mb-2 text-xl font-semibold">Coming Soon</h5>
            <p className="text-gray-600 mb-4 text-center">Details for this tour will be announced soon.</p>
            <h6 className="text-blue-500 text-lg font-semibold">—</h6>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/logos/Sentimiento-Logotipo-Negro.PNG" 
            alt="Tour Placeholder" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col items-center justify-center">
            <h5 className="mb-2 text-xl font-semibold">Coming Soon</h5>
            <p className="text-gray-600 mb-4 text-center">Details for this tour will be announced soon.</p>
            <h6 className="text-blue-500 text-lg font-semibold">—</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
