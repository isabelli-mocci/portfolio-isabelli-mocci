import type { AnimatedWordConfig } from '../types/animatedWord.types';
import { HERO_WORDS, ANIMATION_DEFAULTS, CSS_CLASSES } from '../constants/animatedWord.constants';

export const ANIMATED_WORD_CONFIG: AnimatedWordConfig = {
  words: HERO_WORDS,
  intervalDuration: ANIMATION_DEFAULTS.INTERVAL_DURATION,
  transitionDuration: ANIMATION_DEFAULTS.TRANSITION_DURATION,
  className: CSS_CLASSES.BASE,
  style: {
    minWidth: ANIMATION_DEFAULTS.MIN_WIDTH,
    willChange: 'opacity,transform',
  },
} as const;
