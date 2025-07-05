import { motion } from 'framer-motion';
import type { WordPillDragConfig } from '../types/wordPill.types';

interface DraggableWrapperProps {
  children: React.ReactNode;
  dragConfig: WordPillDragConfig;
  className: string;
  ariaLabel: string;
  style: React.CSSProperties;
}

export const DraggableWrapper = ({
  children,
  dragConfig,
  className,
  ariaLabel,
  style
}: DraggableWrapperProps) => (
  <motion.div
    className={className}
    style={style}
    drag={dragConfig.enabled}
    dragMomentum={dragConfig.momentum}
    dragElastic={dragConfig.elastic}
    dragConstraints={dragConfig.constraints}
    aria-label={ariaLabel}
  >
    {children}
  </motion.div>
);
