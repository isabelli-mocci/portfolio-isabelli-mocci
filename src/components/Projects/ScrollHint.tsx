import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollHintProps {
  className?: string;
}

const ScrollHint: React.FC<ScrollHintProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`scroll-indicator-centered bottom-4 z-20 ${className}`}
        >
          <div className='flex items-center gap-3 px-4 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10'>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='text-white/60 text-sm font-medium tracking-wide'
            >
              Scroll or drag to navigate
            </motion.div>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className='flex gap-1'
            >
              <div className='w-1.5 h-1.5 bg-white/40 rounded-full'></div>
              <div className='w-1.5 h-1.5 bg-white/60 rounded-full'></div>
              <div className='w-1.5 h-1.5 bg-white/40 rounded-full'></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;
