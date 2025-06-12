
"use client";

import type { ReactNode} from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  threshold?: number;
  triggerOnce?: boolean;
  animationDelay?: string; // e.g., '100ms', '0.1s'
  as?: keyof JSX.IntrinsicElements; // Allows rendering as different HTML elements
}

export function ScrollAnimationWrapper({
  children,
  className: propClassName,
  animationClassName = 'animate-fadeInUp', // Default animation
  threshold = 0.1,
  triggerOnce = true,
  animationDelay,
  as: Component = 'div', // Default to div
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && targetRef.current) {
              observer.unobserve(targetRef.current);
            }
          } else {
            if (!triggerOnce) {
              // Optional: Reset animation if it should trigger every time
              // setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <Component
      ref={targetRef}
      style={isVisible && animationDelay ? { animationDelay } : {}}
      className={cn(
        'opacity-0', // Start hidden, animation handles fade-in
        isVisible && animationClassName, // Apply animation class when visible
        propClassName
      )}
    >
      {children}
    </Component>
  );
}
