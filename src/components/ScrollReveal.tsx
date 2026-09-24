import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  duration = 700,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once it's visible if we only want it to animate once
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getBaseStyle = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(40px)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translateY(-40px)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(40px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(-40px)' };
      case 'zoom-in':
        return { opacity: 0, transform: 'scale(0.95)' };
      default:
        return { opacity: 0, transform: 'translateY(40px)' };
    }
  };

  const getVisibleStyle = () => {
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!isVisible ? getBaseStyle() : getVisibleStyle()),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
