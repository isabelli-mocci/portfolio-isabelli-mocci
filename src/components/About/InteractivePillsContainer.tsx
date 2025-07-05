import { motion } from 'framer-motion';
import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';
import type { PillData, PillPosition } from '../../types/aboutSection.types';
import { calculatePillZIndex, calculatePillDelay } from '../../utils/aboutSection.utils';
import { usePillsData } from '../../hooks/usePillsData';
import WordPill from '../About/WordPill';

export const InteractivePillsContainer = () => {
  const { animations, layout, zIndex } = ABOUT_SECTION_CONFIG;
  const { pillsWithPositions } = usePillsData();
  
  return (
    <div
      className="relative flex-1 min-h-[300px] md:min-h-[500px] w-full md:w-auto mt-8 md:mt-0"
      style={{
        minWidth: layout.pills.container.minWidth,
        width: layout.pills.container.width,
        maxWidth: layout.pills.container.maxWidth,
        height: layout.pills.container.height,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {pillsWithPositions.map(({ pill, position, index }) => (
          <PillMotionWrapper
            key={pill.text}
            pill={pill}
            position={position}
            index={index}
            animations={animations}
            zIndex={calculatePillZIndex(zIndex.pills, index)}
          />
        ))}
      </div>
    </div>
  );
};

interface PillMotionWrapperProps {
  pill: PillData;
  position: PillPosition;
  index: number;
  animations: typeof ABOUT_SECTION_CONFIG.animations;
  zIndex: number;
}

const PillMotionWrapper = ({ 
  pill, 
  position, 
  index, 
  animations, 
  zIndex 
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
    <WordPill
      text={pill.text}
      initialRotation={pill.initialRotation}
      initialX={position.left}
      initialY={position.top}
      delay={calculatePillDelay(index, animations.pill.delayMultiplier)}
    />
  </motion.div>
);
