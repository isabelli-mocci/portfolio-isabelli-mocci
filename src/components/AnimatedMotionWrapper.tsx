import { motion } from 'framer-motion';
import type { WordPillAnimationConfig } from '../types/wordPill.types';

interface AnimatedMotionWrapperProps {
  children: React.ReactNode;
  animation: WordPillAnimationConfig;
  className: string;
  ariaLabel: string;
  style: React.CSSProperties;
}

export const AnimatedMotionWrapper = ({
  children,
  animation,
  className,
  ariaLabel,
  style
}: AnimatedMotionWrapperProps) => (
  <motion.div
    className={className}
    style={style}
    initial={{
      opacity: 0,
      scale: 0.7,
      y: 30,
      rotate: animation.initialRotation
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [
        animation.push.y,
        animation.push.y - 8,
        animation.push.y,
        animation.push.y + 8,
        animation.push.y
      ],
      x: animation.push.x,
      rotate: animation.initialRotation,
      transition: {
        y: {
          duration: 3 + Math.random(),
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }}
    transition={{ duration: 0.5, delay: animation.delay }}
    aria-label={ariaLabel}
  >
    {children}
  </motion.div>
);
