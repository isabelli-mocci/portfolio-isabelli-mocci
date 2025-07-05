import type { Variants } from 'framer-motion';
import { SKILLS_SECTION_CONFIG } from '../config/skills.config';

export const createSkillsAnimationVariants = (): {
  containerVariants: Variants;
  itemVariants: Variants;
} => ({
  containerVariants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: SKILLS_SECTION_CONFIG.animation.staggerDelay,
      },
    },
  },
  itemVariants: {
    hidden: { 
      opacity: 0, 
      y: SKILLS_SECTION_CONFIG.animation.initialYOffset 
    },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: SKILLS_SECTION_CONFIG.animation.itemDuration 
      } 
    },
  },
});
