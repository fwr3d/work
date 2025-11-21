"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Smart Link Logic: 
  const getLink = (id) => isHome ? `#${id}` : `/#${id}`;
  const getHomeLink = () => isHome ? "#home" : "/";

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center -mt-1">
            <Link 
              href={getHomeLink()} 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={handleLinkClick}
            >

              <span className="text-2xl font-bold text-black">Huroca</span>
              <img src="/Huroca-Icon.png" alt="Huroca Logo"  className="h-10 w-auto -ml-5 mb-4"  />    
            </Link>
          </div>
          
          {/* DESKTOP Navigation (Hidden on mobile 'md' and smaller) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href={getLink("technology")} className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
              Our Technology
            </Link>
            <Link href={getLink("whyus")} className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
              Why Choose Us
            </Link>
            <Link href={getLink("about")} className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href={getLink("team")} className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
              Our Team
            </Link>
            <Link 
              href={getLink("contact")}
              className="bg-green-900 text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE Menu Button (Visible on mobile only) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link 
              href={getLink("technology")} 
              onClick={handleLinkClick}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Our Technology
            </Link>
            <Link 
              href={getLink("whyus")} 
              onClick={handleLinkClick}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Why Choose Us
            </Link>
            <Link 
              href={getLink("about")} 
              onClick={handleLinkClick}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              About Us
            </Link>
            <Link 
              href={getLink("team")} 
              onClick={handleLinkClick}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Our Team
            </Link>
            <Link 
              href={getLink("contact")} 
              onClick={handleLinkClick}
              className="block px-3 py-3 text-base font-medium text-green-800 font-bold hover:bg-green-50 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}