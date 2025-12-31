"use client";

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function MobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 z-50 transition-transform duration-300 flex justify-between items-center md:hidden",
      isVisible ? 'translate-y-0' : 'translate-y-full'
    )}>
      <span className="brand-title text-sm text-white">LA LEÑERA</span>
      <Button asChild size="sm" className="bg-accent text-accent-foreground font-headline uppercase text-xs">
        <a href="https://wa.me/573001234567?text=Hola,%20escribo%20a%20La%20Leñera.%20Necesito%20cotizar%20leña%20para%20asadero.">
          Cotizar
        </a>
      </Button>
    </div>
  );
}
