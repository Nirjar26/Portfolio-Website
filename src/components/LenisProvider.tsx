"use client";

import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AOSHandler() {
  useLenis(() => {
    AOS.refresh();
  });
  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    
    // Refresh AOS after a short delay for Safari/iOS
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, 
        duration: 2.5, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <AOSHandler />
      {children}
    </ReactLenis>
  );
}
