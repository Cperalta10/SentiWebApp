"use client";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="mt-10 w-full flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            width={400}
            height={400}
            src="/image/DSC08859.jpg"
            alt="Sentimiento sitting"
            className="rounded-2xl"
            priority
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sentimiento
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Sentimiento is a young, independent Latin urban artist blending reggaeton, trap, and melodic R&B with raw emotion and heartfelt storytelling. Born in Colima, Mexico and raised in Los Angeles, CA, he fuses the sounds of his roots with the energy of L.A. streets, crafting songs about heartbreak, love, and growth. As a singer, rapper, and producer, Sentimiento is a one-man creative force carving out a space in the Latin music scene.
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Follow Sentimiento</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex justify-center space-x-8">
              {[
                { 
                  href: "https://www.instagram.com/sentimiento.x", 
                  label: "Instagram", 
                  icon: "fa-brands fa-instagram",
                  bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
                  hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
                },
                { 
                  href: "https://open.spotify.com/playlist/37i9dQZF1E4o2WrrviFj9D", 
                  label: "Spotify", 
                  icon: "fa-brands fa-spotify",
                  bgColor: "bg-gradient-to-br from-green-400 to-green-600",
                  hoverColor: "hover:from-green-500 hover:to-green-700"
                },
                { 
                  href: "https://www.youtube.com/@SentimientoOfficial", 
                  label: "YouTube", 
                  icon: "fa-brands fa-youtube",
                  bgColor: "bg-gradient-to-br from-red-500 to-red-700",
                  hoverColor: "hover:from-red-600 hover:to-red-800"
                }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group relative"
                >
                  <div className={`w-20 h-20 ${link.bgColor} ${link.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl shadow-lg`}>
                    <i className={`${link.icon} text-white text-2xl`} />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      {link.label}
                    </div>
                    <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
