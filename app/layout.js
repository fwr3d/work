import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; 
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://hurocatech.com'),
  title: {
    default: "Huroca | Autonomous Cattle Robotics & AgTech AI in Alberta",
    template: "%s | Huroca - Feedlot Automation Experts"
  },
  description: "Leading AgTech innovation in Lethbridge, Alberta. Huroca revolutionizes the cattle industry with autonomous robotics, AI-driven computer vision, and precision vaccination for feedlots. Transforming livestock health management with industrial automation.",
  keywords: [
    "AgTech", "Robotics", "Artificial Intelligence", "Computer Vision", "Deep Learning", "Industrial Automation", "ROS 2", "NVIDIA Isaac Sim", "Precision Agriculture",
    "Cattle Vaccination", "Feedlot Automation", "Livestock Monitoring", "Animal Health Technology", "Precision Livestock Farming", "Beef Industry Tech", "Veterinary Robotics", "Autonomous Injection",
    "Lethbridge Robotics", "Alberta Tech Sector", "Southern Alberta AgTech", "Canada Agritech", "Lethbridge Startups", "PrairiesCan Technology",
    "Automated Cattle Chute", "Non-invasive Animal Care", "Feedlot Efficiency", "Smart Farming Solutions", "Agricultural Robotics Canada"
  ],
  authors: [{ name: "Huroca Technologies Inc." }],
  creator: "Huroca Technologies Inc.",
  publisher: "Huroca Technologies Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph for Social Media (LinkedIn/Facebook previews)
  openGraph: {
    title: "Huroca | The Future of Autonomous Feedlot Robotics",
    description: "Huroca uses advanced AI and robotics to automate cattle vaccination in Lethbridge, Alberta. Safer, faster, and more precise feedlot operations.",
    url: 'https://hurocatech.com',
    siteName: 'Huroca AgTech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Huroca-Icon.png', // Ensure this image is high-res (1200x630 recommended for social)
        width: 800,
        height: 600,
        alt: 'Huroca Robotic Arm for Cattle Vaccination',
      },
    ],
  },
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: "Huroca | Autonomous Precision Vaccination",
    description: "Revolutionizing the cattle industry in Alberta with high-tech robotics and AI automation.",
    images: ['/Huroca-Icon.png'], // Falls back to this image
  },
  // Search Engine Bot instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Huroca-Icon.png', 
    shortcut: '/Huroca-Icon.png',
    apple: '/Huroca-Icon.png',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        
        <Navbar />
        {children}
        <SpeedInsights />
        
      </body>
    </html>
  );
}