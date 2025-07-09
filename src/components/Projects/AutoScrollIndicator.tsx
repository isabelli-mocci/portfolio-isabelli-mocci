import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AutoScrollIndicatorProps {
  isVisible: boolean;
  nextSectionName?: string;
  direction?: 'up' | 'down';
}

const AutoScrollIndicator: React.FC<AutoScrollIndicatorProps> = ({ 
  isVisible, 
  nextSectionName = 'next section',
  direction = 'down'
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ 
            duration: 0.4, 
            ease: 'easeOut',
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
          className='scroll-indicator-fixed-centered bottom-20 z-50'
        >
          <div className='flex items-center gap-3 px-6 py-3 bg-black/70 rounded-full border border-white/20 shadow-2xl'>
            <motion.div
              animate={{ 
                y: direction === 'down' ? [0, -4, 0] : [0, 4, 0],
                opacity: [0.6, 1, 0.6],
                scaleX: -1
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className='text-[#b0e57c] text-sm font-medium'
            >
              {direction === 'down' ? '↓' : '↑'}
            </motion.div>
            <span className='text-white/90 text-sm font-medium tracking-wide'>
              Scrolling to {nextSectionName}
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className='w-3 h-3 border-2 border-[#b0e57c] border-t-transparent rounded-full'
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoScrollIndicator;
