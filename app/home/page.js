import Image from 'next/image';
import Link from 'next/link';
import HeroScene from '@/components/HeroScene';
import { ArrowRight } from 'lucide-react';

const PARTNERS = [
  { src: '/HUB.png',             alt: 'Hub for Neuroengineering Solutions', w: 'w-56' },
  { src: '/ACFA.png',            alt: 'Alberta Cattle Feeders Association',  w: 'w-44' },
  { src: '/UOFL_Horizontal.png', alt: 'University of Lethbridge',            w: 'w-56' },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── HERO ── */}
      <section className="relative flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white overflow-hidden">
        <HeroScene />

        {/* dark overlay so text reads over Spline */}
        <div className="absolute inset-0 bg-white/50 z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-6">
            Autonomous Precision Robotics
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Field Ready.<br />
            <span className="text-green-400">Any Environment.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Huroca combines advanced robotics and computer vision to automate agricultural processes — built for the realities of Southern Alberta feedlots.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Our Technology <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* fade to white at bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
      </section>

      {/* ── NETWORK ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-10">
            Our Network
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {PARTNERS.map(({ src, alt, w }) => (
              <div key={src} className={`relative h-16 ${w}`}>
                <Image src={src} alt={alt} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="224px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/technology', label: 'Technology',  desc: 'AI-driven injection & inventory systems'   },
              { href: '/why-us',     label: 'Why Us',      desc: 'Efficiency, safety & traceability'         },
              { href: '/about',      label: 'About',       desc: 'Born in Lethbridge, built for the world'   },
              { href: '/team',       label: 'Team',        desc: 'The people behind the technology'          },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group p-6 border border-gray-200 rounded-2xl hover:border-green-700 hover:bg-green-50 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-green-700 transition-colors">{label}</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm text-gray-600 leading-snug">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
