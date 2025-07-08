import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ containerRef, className = '' }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateProgress = () => {
      const scrollLeft = element.scrollLeft;
      const scrollWidth = element.scrollWidth - element.clientWidth;
      const progressPercentage = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      
      setProgress(progressPercentage);
      setIsVisible(scrollLeft > 10 || scrollWidth > element.clientWidth);
    };

    const handleScroll = () => {
      updateProgress();
    };

    element.addEventListener('scroll', handleScroll);
    updateProgress();

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`scroll-indicator-centered bottom-8 z-30 ${className}`}
    >
      <div className='flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10'>
        <div className='w-20 h-1 bg-white/20 rounded-full overflow-hidden'>
          <motion.div
            className='h-full bg-gradient-to-r from-[#b0e57c] to-[#8bc34a] rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </div>
        <span className='text-xs text-white/60 font-medium min-w-[3ch]'>
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
