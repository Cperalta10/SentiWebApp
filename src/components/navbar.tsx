import React, { useState, useRef, useEffect } from 'react';
import { Navbar as MTNavbar } from '@material-tailwind/react';
import Image from 'next/image';

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'bio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 130;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsDropdownOpen(false);
  };

  const navItems = [
    { name: 'Bio', id: 'bio' },
    { name: 'Music', id: 'music' },
    { name: 'Shop', id: 'shop' },
    { name: 'Tour', id: 'tour' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-purple-900"
      placeholder=""
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="w-8 md:w-16"></div>
        <div className="flex items-center justify-center flex-1">
          <Image
            width={400}
            height={400}
            src="/logos/Sentimiento-Logotipo-Negro.PNG"
            alt="Senti Logo"
          />
        </div>
        <div
          className="relative w-16 md:w-16 flex justify-end"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
