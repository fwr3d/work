import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; 
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  metadataBase: new URL('https://hurocatech.com'),
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
        
        <Navbar />  {/* Using the smart Navbar component */}
        {children}
        
      </body>
    </html>
  );
}