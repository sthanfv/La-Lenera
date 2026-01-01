"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: '100' | '200' | '300';
}

export function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const delayMapping = {
    '100': 'delay-100',
    '200': 'delay-200',
    '300': 'delay-300',
  };
  const delayClass = delay ? delayMapping[delay] : '';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.17,0.55,0.55,1)]',
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
