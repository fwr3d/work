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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a2e] border-b border-cyan-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center -mt-1">
            <Link
              href="/home"
              className="flex items-center gap-1.5 hover:opacity-75 transition-opacity group"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-[1.7rem] font-bold tracking-tight text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.6)]">Huroca</span>
              <span className="h-9 w-9 -translate-y-0.5 ml-0.5">
                <LogoMark className="h-full w-full object-contain brightness-200 drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]" />
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  pathname === href
                    ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]'
                    : 'text-gray-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all drop-shadow-[0_0_15px_rgba(0,217,255,0.4)] hover:drop-shadow-[0_0_25px_rgba(0,217,255,0.7)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border-b border-cyan-500/20 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-all ${
                  pathname === href
                    ? 'text-cyan-400 font-semibold bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-bold text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
