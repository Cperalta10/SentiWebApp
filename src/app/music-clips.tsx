"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MusicClip {
  id: number;
  title: string;
  description: string;
  duration: string;
  platform: string;
  videoId: string;
  thumbnail: string;
  link: string;
}

export function MusicClips() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const musicClips: MusicClip[] = [
    {
      id: 0,
      title: "Sentimiento - La Mejor Vista",
      description: "Visualizer de la canción original 'La Mejor Vista'",
      duration: "3:20",
      platform: "YouTube",
      videoId: "I6IqUXsIQX0",
      thumbnail: "https://img.youtube.com/vi/I6IqUXsIQX0/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=I6IqUXsIQX0"
    },
    {
      id: 1,
      title: "Sentimiento - Dame Un Besito",
      description: "Visualizer de la canción original 'Dame Un Besito'",
      duration: "2:56",
      platform: "YouTube",
      videoId: "uYcDyIe-8uo",
      thumbnail: "https://img.youtube.com/vi/uYcDyIe-8uo/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=uYcDyIe-8uo"
    },
    {
      id: 2,
      title: "Sentimiento - A Escondidas",
      description: "Visualizer de la canción original 'A Escondidas'",
      duration: "3:17",
      platform: "YouTube",
      videoId: "V4JKxiOn6ck",
      thumbnail: "https://img.youtube.com/vi/V4JKxiOn6ck/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=V4JKxiOn6ck"
    },
    {
      id: 3,
      title: "Sentimiento - Quiero Volverte Loca",
      description: "Visualizer de la canción original 'Quiero Volverte Loca'",
      duration: "3:06",
      platform: "YouTube",
      videoId: "ja8KI2Xny_s",
      thumbnail: "https://img.youtube.com/vi/ja8KI2Xny_s/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=ja8KI2Xny_s"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section className="container mx-auto mt-10 px-4 py-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl mb-4">
          Latest Music Videos
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Watch Sentimiento's latest music videos and experience the raw emotion behind his music.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {musicClips.map((clip) => (
          <article
            key={clip.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
          >
            {/* Video Player or Thumbnail */}
            <div className="relative">
              {playingVideo === clip.videoId ? (
                <div className="w-full h-64 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${clip.videoId}?autoplay=1&rel=0`}
                    title={clip.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t-xl"
                    loading="lazy"
                  ></iframe>
                </div>
              ) : (
                <>
                  <Image
                    width={400}
                    height={256}
                    src={clip.thumbnail}
                    alt={`Thumbnail for ${clip.title}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Play Button Overlay */}
                  <button
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handleVideoClick(clip.videoId)}
                    aria-label={`Play ${clip.title}`}
                  >
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                      <i className="fa-solid fa-play text-3xl text-white ml-1" aria-hidden="true"></i>
                    </div>
                  </button>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                    {clip.duration}
                  </div>
                  
                  {/* YouTube Logo */}
                  <div className="absolute top-3 left-3 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                    YouTube
                  </div>
                </>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200">
                  {clip.title}
                </h3>
                <i className="fa-brands fa-youtube text-red-500" aria-hidden="true"></i>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {clip.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <i className="fa-solid fa-clock" aria-hidden="true"></i>
                  <span>{clip.duration}</span>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={clip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                    aria-label={`Watch ${clip.title} on YouTube`}
                  >
                    <i className="fa-solid fa-external-link-alt" aria-hidden="true"></i>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@SentimientoOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          aria-label="Subscribe to Sentimiento Official on YouTube"
        >
          <i className="fa-brands fa-youtube text-xl" aria-hidden="true"></i>
          Subscribe on YouTube
        </a>
      </div>
    </section>
  );
}

export default MusicClips; 