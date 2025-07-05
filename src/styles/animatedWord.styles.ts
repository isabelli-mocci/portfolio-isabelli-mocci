import { ANIMATION_DEFAULTS, CSS_CLASSES } from '../constants/animatedWord.constants';

export const ANIMATED_WORD_STYLES = {
  container: CSS_CLASSES.BASE,
  word: {
    base: {
      minWidth: ANIMATION_DEFAULTS.MIN_WIDTH,
      willChange: 'opacity,transform',
      opacity: 1,
      transform: 'scale(1)',
    },
    transitioning: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
  },
} as const;

export const createTransitionStyle = (
  isTransitioning: boolean,
  transitionDuration: number
): React.CSSProperties => ({
  ...ANIMATED_WORD_STYLES.word.base,
  ...(isTransitioning ? ANIMATED_WORD_STYLES.word.transitioning : {}),
  transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
});
