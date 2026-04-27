"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LogoMark from '@/components/LogoMark';

const NAV_LINKS = [
  { href: '/technology', label: 'Technology' },
  { href: '/why-us',     label: 'Why Us'     },
  { href: '/about',      label: 'About'      },
  { href: '/team',       label: 'Team'       },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center -mt-1">
            <Link
              href="/home"
              className="flex items-center gap-1.5 hover:opacity-75 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-[1.7rem] font-bold tracking-tight text-black">Huroca</span>
              <span className="h-9 w-9 -translate-y-0.5 ml-0.5">
                <LogoMark className="h-full w-full object-contain brightness-0" />
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-green-800 font-semibold'
                    : 'text-gray-600 hover:text-green-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  pathname === href
                    ? 'text-green-800 font-semibold bg-green-50'
                    : 'text-gray-700 hover:text-green-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-bold text-green-800 hover:bg-green-50 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
