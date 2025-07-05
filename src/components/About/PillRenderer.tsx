import { motion } from 'framer-motion';
import type { PillData, PillPosition } from '../../types/aboutSection.types';
import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';
import { calculatePillZIndex, calculatePillDelay } from '../../utils/aboutSection.utils';
import WordPill from './WordPill';

interface PillRendererProps {
  pill: PillData;
  position: PillPosition;
  index: number;
}

export const PillRenderer = ({ pill, position, index }: PillRendererProps) => {
  const { animations, zIndex } = ABOUT_SECTION_CONFIG;
  const pillZIndex = calculatePillZIndex(zIndex.pills, index);
  const delay = calculatePillDelay(index, animations.pill.delayMultiplier);

  return (
    <PillMotionWrapper
      position={position}
      pill={pill}
      animations={animations}
      zIndex={pillZIndex}
    >
      <WordPill
        text={pill.text}
        initialRotation={pill.initialRotation}
        initialX={position.left}
        initialY={position.top}
        delay={delay}
      />
    </PillMotionWrapper>
  );
};

interface PillMotionWrapperProps {
  position: PillPosition;
  pill: PillData;
  animations: typeof ABOUT_SECTION_CONFIG.animations;
  zIndex: number;
  children: React.ReactNode;
}

const PillMotionWrapper = ({ 
  position, 
  pill, 
  animations, 
  zIndex, 
  children 
}: PillMotionWrapperProps) => (
  <motion.div
    style={{
      position: 'absolute',
      left: position.left,
      top: position.top,
      zIndex,
      pointerEvents: 'auto',
    }}
    initial={{ rotate: pill.initialRotation }}
    drag
    dragMomentum={animations.drag.momentum}
    dragElastic={animations.drag.elastic}
    dragTransition={animations.drag.transition}
  >
    {children}
  </motion.div>
);
