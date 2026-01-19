"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePerformanceCheck } from '../hooks/usePerformanceCheck';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-100" />, 
});

export default function HeroScene() {
  const isLowSpec = usePerformanceCheck();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile || isLowSpec) return null;

  return (
    <div className={`absolute inset-0 z-0 hidden md:block transition-opacity duration-1000 ease-in-out ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
       <Spline scene="https://prod.spline.design/QkMeddUzFh1r5iQy/scene.splinecode" onLoad={() => setIsSplineLoaded(true)} />
    </div>
  );
}