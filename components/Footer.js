import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/Huroca-Icon.png" alt="Huroca" width={28} height={28} className="brightness-0 invert" />
              <span className="text-xl font-black text-white">Huroca</span>
            </div>
            <p className="text-sm leading-relaxed text-green-400">
              Pioneering autonomous robotics for the modern feedlot. Born in Alberta, built for the world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Pages</h4>
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
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-green-500 shrink-0" />
                <span>Lethbridge, Alberta<br />Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-green-500 shrink-0" />
                <a href="mailto:info@hurocatech.com" className="hover:text-white transition-colors">
                  info@hurocatech.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-green-900 flex flex-col sm:flex-row justify-between gap-3 text-xs text-green-600">
          <p>&copy; {new Date().getFullYear()} Huroca Technologies Inc. All rights reserved.</p>
          <p>Designed & Developed in Southern Alberta.</p>
        </div>
      </div>
    </footer>
  );
}
