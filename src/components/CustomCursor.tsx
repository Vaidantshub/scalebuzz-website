import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };

    checkTouch();
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const projectElement = target?.closest('[data-cursor-text]');
      
      if (projectElement) {
        setIsHovered(true);
        setCursorText(projectElement.getAttribute('data-cursor-text') || 'VIEW →');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', checkTouch);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkTouch);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`transition-all duration-200 flex items-center justify-center ${
          isHovered
            ? 'w-24 h-24 bg-white text-zinc-950 border border-transparent scale-100 shadow-xl font-bold rounded-full -translate-x-1/2 -translate-y-1/2'
            : 'scale-100'
        }`}
      >
        {isHovered ? (
          <span className="text-[11px] font-mono font-extrabold tracking-wider text-zinc-950 uppercase text-center px-2">
            {cursorText}
          </span>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_12px_rgba(186,230,253,0.8)]"
          >
            <defs>
              {/* Chrome / Mirror Reflection Gradient */}
              <linearGradient id="mirror-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#d1d5db" />
                <stop offset="48%" stopColor="#6b7280" />
                <stop offset="50%" stopColor="#111827" /> {/* Sharp horizon line */}
                <stop offset="55%" stopColor="#9ca3af" />
                <stop offset="85%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
              {/* Bright Metallic Edge */}
              <linearGradient id="mirror-border" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#7dd3fc" floodOpacity="0.8" />
              </filter>
            </defs>
            <path
              d="M 1 1 L 1 23 L 7 17 L 13 27 L 17 25 L 11 15 L 20 15 Z"
              fill="url(#mirror-grad)"
              stroke="url(#mirror-border)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              filter="url(#neon-glow)"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
