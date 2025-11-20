import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huroca",
  description: "Revolutionizing the cattle industry with robotics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation */}
                <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Logo Placeholder */}
                                <a href="#" className="text-2xl font-bold text-black hover:opacity-80 transition-opacity">
                  Huroca
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