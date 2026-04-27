import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f1e] to-[#0a0a0a] text-gray-300 pt-16 pb-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/Huroca-Icon.png" alt="Huroca" width={28} height={28} className="brightness-200 drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]" />
              <span className="text-xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.4)]">Huroca</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Pioneering autonomous robotics for the modern feedlot. Born in Alberta, built for the world.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-400 font-bold mb-5 text-sm uppercase tracking-widest">Pages</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['/home',       'Home'      ],
                ['/technology', 'Technology'],
                ['/why-us',     'Why Us'    ],
                ['/about',      'About'     ],
                ['/team',       'Team'      ],
                ['/contact',    'Contact'   ],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cyan-400 font-bold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-cyan-400 shrink-0" />
                <span className="text-gray-400">Lethbridge, Alberta<br />Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-cyan-400 shrink-0" />
                <a href="mailto:info@hurocatech.com" className="text-gray-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]">
                  info@hurocatech.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Huroca Technologies Inc. All rights reserved.</p>
          <p>Designed & Developed in Southern Alberta.</p>
        </div>
      </div>
    </footer>
  );
}
