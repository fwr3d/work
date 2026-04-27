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
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1e] to-[#1a1a2e]">

      {/* ── HERO ── */}
      <section className="relative flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated background glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-40" />

        <HeroScene />

        {/* dark overlay so text reads over Spline */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-6 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]">
            Autonomous Precision Robotics
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-3xl drop-shadow-[0_0_20px_rgba(0,217,255,0.3)]">
            Field Ready.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Any Environment.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Huroca combines advanced robotics and computer vision to automate agricultural processes — built for the realities of Southern Alberta feedlots.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm drop-shadow-[0_0_15px_rgba(0,217,255,0.5)] hover:drop-shadow-[0_0_25px_rgba(0,217,255,0.8)]"
            >
              Our Technology <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 font-semibold px-7 py-3.5 rounded-full transition-all text-sm hover:bg-cyan-500/10 hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.5)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* fade to dark at bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0f0f1e] to-transparent z-[2]" />
      </section>

      {/* ── NETWORK ── */}
      <section className="py-16 bg-[#0f0f1e] border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold text-cyan-400/60 uppercase tracking-widest text-center mb-10">
            Our Network
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {PARTNERS.map(({ src, alt, w }) => (
              <div key={src} className={`relative h-16 ${w} hover:drop-shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all`}>
                <Image src={src} alt={alt} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-300 brightness-75 hover:brightness-100" sizes="224px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-20 bg-gradient-to-b from-[#0f0f1e] to-[#0a0a0a]">
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
                className="group p-6 glass rounded-2xl hover:border-cyan-400/50 transition-all duration-200 hover:bg-cyan-500/10 hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/60 group-hover:text-cyan-400 transition-colors">{label}</span>
                  <ArrowRight size={16} className="text-cyan-500/40 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
