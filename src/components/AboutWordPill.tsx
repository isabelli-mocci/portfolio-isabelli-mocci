// path: src/components/AboutWordPill.tsx

import { motion } from 'framer-motion';

interface WordPillProps {
  text: string;
  initialRotation?: number;
  initialX?: string | number;
  initialY?: string | number;
  delay?: number;
  push?: { x: number; y: number };
  drag?: boolean;
}

const WordPill: React.FC<WordPillProps> = ({
  text,
  initialRotation = 0,
  delay = 0,
  push = { x: 0, y: 0 },
  drag = false,
}) => {
  return (
    <motion.div
      className='absolute px-4 py-2 rounded-full text-sm text-text-white whitespace-nowrap cursor-pointer border border-white/30 backdrop-blur-md shadow-lg'
      style={{
        background:
          'linear-gradient(120deg, rgba(255,255,255,0.18) 60%, rgba(173,255,47,0.12) 100%)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        zIndex: 10,
      }}
      initial={{ opacity: 0, scale: 0.7, y: 30, rotate: initialRotation }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [push.y, push.y - 8, push.y, push.y + 8, push.y],
        x: push.x,
        rotate: initialRotation,
        transition: {
          y: {
            duration: 3 + Math.random(),
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      }}
      transition={{ duration: 0.5, delay }}
      drag={drag}
      dragMomentum={false}
      dragElastic={0.12}
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      aria-label={text}
    >
      {text}
    </motion.div>
  );
};

export default WordPill;
