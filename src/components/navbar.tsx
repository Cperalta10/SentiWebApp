import React, { useState, useRef, useEffect } from 'react';
import { Navbar as MTNavbar } from '@material-tailwind/react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items, getTotalItems, getTotalPrice, removeFromCart } = useCart();

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
    { name: 'Shows', id: 'show' },
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
            className="relative flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-white"
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
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                {getTotalItems()}
              </span>
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-12 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
              {/* Navigation Section */}
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Navigation
                </h3>
              </div>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                >
                  {item.name}
                </button>
              ))}

              {/* Cart Section */}
              <div className="px-4 py-2 border-t border-gray-100 mt-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Shopping Cart ({getTotalItems()} items)
                </h3>
              </div>

              {items.length === 0 ? (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  Your cart is empty
                </div>
              ) : (
                <>
                  <div className="max-h-48 overflow-y-auto">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center px-4 py-2 hover:bg-gray-50"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md mr-3"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.quantity} × ${item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">
                        Total: ${getTotalPrice().toFixed(2)}
                      </span>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
