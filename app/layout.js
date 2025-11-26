import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; // Importing the smart navbar from the same folder

const inter = Inter({ subsets: ["latin"] });

// --- UPDATED METADATA FOR GOOGLE ---
export const metadata = {
  metadataBase: new URL('https://hurocatech.com'), // Change this to your actual domain if different
  title: {
    default: "Huroca",
    template: "%s | Huroca"
  },
  description: "Revolutionizing the cattle industry with robotics. Huroca automates feedlot vaccination using advanced computer vision and industrial robotics for safer, more precise animal care.",
  keywords: ["AgTech", "Robotics", "Cattle Vaccination", "Feedlot Automation", "Precision Agriculture", "Alberta Tech", "Lethbridge"],
  authors: [{ name: "Huroca Technologies Inc." }],
  creator: "Huroca Technologies Inc.",
  openGraph: {
    title: "Huroca | Autonomous Precision Vaccination",
    description: "Automating cattle vaccination for safer, more efficient feedlots.",
    url: 'https://hurocatech.com',
    siteName: 'Huroca',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Huroca | Autonomous Precision Vaccination",
    description: "Revolutionizing the cattle industry with robotics.",
  },
  icons: {
    icon: '/Huroca-Icon.png', // Ensure this matches your file name in public/
    shortcut: '/Huroca-Icon.png',
    apple: '/Huroca-Icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        
          <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
               <div className="flex items-center -mt-1">
                <a href="#" className="flex items-center gap-0 hover:opacity-80 transition-opacity">
                  {/* Using your specific icon file */}
                  
                  <span className="text-2xl font-bold text-black">Huroca</span>
                  <img src="/Huroca-Icon.png" alt="Huroca Logo" className="h-10 w-auto" />
                </a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="#technology" className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Our Technology</a>
                <a href="#whyus" className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Why Choose Us</a>
                <a href="#about" className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                <a href="#team" className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Our Team</a>
                <a
                  href="#contact"
                  className="bg-green-900 text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-green-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </nav>


        {children}
        
      </body>
    </html>
  );
}