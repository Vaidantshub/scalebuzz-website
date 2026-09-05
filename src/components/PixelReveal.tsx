import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PixelRevealProps {
  src: string;
  alt?: string;
  gridSize?: number; // Number of columns/rows in the grid (e.g., 20 means 20x20)
  className?: string;
  delay?: number;
}

export const PixelReveal: React.FC<PixelRevealProps> = ({
  src,
  alt = '',
  gridSize = 15,
  className = '',
  delay = 0.2,
}) => {
  // Generate a grid of blocks
  const blocks = useMemo(() => {
    const arr = [];
    const totalBlocks = gridSize * gridSize;
    for (let i = 0; i < totalBlocks; i++) {
      // Calculate a staggered delay based on the block's position
      // For a "sweep" effect, we sweep from top-left to bottom-right
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      const blockDelay = delay + (row + col) * 0.03;

      arr.push(
        <motion.div
          key={i}
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: blockDelay, ease: "easeInOut" }}
          className="bg-[#121215] w-full h-full origin-center border-[0.5px] border-[#000000]/20"
        />
      );
    }
    return arr;
  }, [gridSize, delay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Underlying Image */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
      />

      {/* Pixel Cover Grid */}
      <div 
        className="absolute inset-0 grid" 
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`
        }}
      >
        {blocks}
      </div>
    </div>
  );
};
