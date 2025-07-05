import type { 
  WordPillAnimationConfig, 
  WordPillDragConfig, 
  WordPillStyleConfig 
} from '../types/wordPill.types';
import { WORD_PILL_CONSTANTS } from '../constants/wordPill.constants';

export const createWordPillConfig = () => ({
  animation: {
    initial: (rotation: number) => ({
      opacity: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_OPACITY,
      scale: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_SCALE,
      y: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_Y_OFFSET,
      rotate: rotation
    }),
    
    floating: (config: WordPillAnimationConfig) => {
      // Garantir que push sempre tenha valores válidos com fallback seguro
      const pushX = config.push?.x ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.x;
      const pushY = config.push?.y ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.y;
      
      return {
        opacity: WORD_PILL_CONSTANTS.ANIMATION.FINAL_OPACITY,
        scale: WORD_PILL_CONSTANTS.ANIMATION.FINAL_SCALE,
        y: [
          pushY,
          pushY - WORD_PILL_CONSTANTS.ANIMATION.FLOATING_OFFSET,
          pushY,
          pushY + WORD_PILL_CONSTANTS.ANIMATION.FLOATING_OFFSET,
          pushY
        ],
        x: pushX,
        rotate: config.initialRotation,
        transition: {
          y: {
            duration: WORD_PILL_CONSTANTS.ANIMATION.FLOATING_DURATION_BASE + Math.random(),
            repeat: Infinity,
            ease: WORD_PILL_CONSTANTS.ANIMATION.EASE,
          },
        },
      };
    },
    
    transition: (delay: number) => ({
      duration: WORD_PILL_CONSTANTS.ANIMATION.TRANSITION_DURATION,
      delay
    })
  },
  
  drag: (config: WordPillDragConfig) => ({
    drag: config.enabled,
    dragMomentum: config.momentum,
    dragElastic: config.elastic,
    dragConstraints: config.constraints
  }),
  
  style: (config: WordPillStyleConfig) => ({
    background: config.background,
    boxShadow: config.boxShadow,
    zIndex: config.zIndex
  })
});
