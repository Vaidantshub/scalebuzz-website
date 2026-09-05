import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animationType?: 'char' | 'word';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.05,
  duration = 0.5,
  animationType = 'word'
}) => {
  const elements = animationType === 'word' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-block ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: duration,
            delay: index * delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: 'pre' }}
        >
          {animationType === 'word' ? `${element} ` : element}
        </motion.span>
      ))}
    </span>
  );
};
