// hooks/usePerformanceCheck.js
import { useState, useEffect } from 'react';

export function usePerformanceCheck() {
  const [isLowSpec, setIsLowSpec] = useState(false);

  useEffect(() => {
    // 1. Network Check
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowNetwork = connection ? (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) : false;

    // 2. Hardware Check (Cores & RAM)
    const isLowCpu = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;

    // 3. User Preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setIsLowSpec(isSlowNetwork || isLowCpu || isLowMemory || prefersReducedMotion);
  }, []);

  return isLowSpec;
}