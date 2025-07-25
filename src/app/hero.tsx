"use client";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            width={400}
            height={400}
            src="/image/DSC08859.JPG"
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
            Sentimiento is a rising independent artist in the Latin urban music scene, known for his emotional storytelling and genre-blending sound. Born and raised in Colima, Mexico, and later relocating to Los Angeles, California, he brings a powerful mix of cultural influence and personal experience to every track. As a singer, rapper, and producer, Sentimiento showcases his versatility through heartfelt lyrics, melodic hooks, and catchy flows that resonate deeply with listeners.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Exposed to a wide range of musical genres from an early age, he quickly developed a unique artistic voice. His music reflects a blend of Latin trap, reggaeton, R&B, and hip-hop—crafted with sincerity and soul. Through his sound, he explores the highs and lows of love, heartbreak, and emotional growth, turning his personal stories into anthems that fans connect with on a real level.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mt-12">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Follow Sentimiento</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-6">
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
              },
              { 
                href: "https://music.apple.com/us/artist/sentimiento/1464798149", 
                label: "Apple Music", 
                icon: "fa-brands fa-apple",
                bgColor: "bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400",
                hoverColor: "hover:from-gray-900 hover:via-gray-700 hover:to-gray-500"
              }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="group relative"
              >
                <div className={`w-16 h-16 ${link.bgColor} ${link.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl shadow-lg`}>
                  <i className={`${link.icon} text-white text-xl`} />
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
  );
}

export default Hero;
