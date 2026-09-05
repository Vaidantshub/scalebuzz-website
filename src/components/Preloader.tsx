import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds loading
    const interval = 30; // update every 30ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      
      // Easing out the progress counter for a more organic feel
      const easeOutProgress = Math.floor(100 * (1 - Math.pow(1 - currentProgress / 100, 3)));
      setProgress(easeOutProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Small delay at 100% before triggering the exit animation
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 400);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#09090b] text-white"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
        >
          {/* Noise overlay to match site design */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

          {/* Central Logo Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase font-sans flex items-center">
                SCALEBUZZ
                <span className="w-3 h-3 md:w-5 md:h-5 bg-white rounded-full ml-2 md:ml-3 inline-block" />
              </h1>
            </motion.div>
          </div>

          {/* Bottom Progress Counter */}
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-end space-x-4"
            >
              <span className="text-6xl md:text-8xl font-mono font-bold leading-none tracking-tighter">
                {progress}
              </span>
              <span className="text-xl md:text-3xl font-mono text-zinc-500 pb-1 md:pb-2">%</span>
            </motion.div>
          </div>

          {/* Loading Bar */}
          <div className="absolute bottom-0 left-0 h-1 md:h-2 bg-zinc-800 w-full">
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
