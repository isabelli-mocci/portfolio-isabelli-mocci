import type { 
  WordPillProps, 
  WordPillPosition, 
  WordPillAnimationConfig, 
  WordPillDragConfig,
  WordPillStyleConfig,
  ValidatedWordPillProps
} from '../types/wordPill.types';
import { WORD_PILL_CONSTANTS } from '../constants/wordPill.constants';
import { wordPillStyles } from '../styles/wordPill.styles';

export const validateWordPillText = (text: string): boolean => {
  return typeof text === 'string' && text.trim().length > 0;
};

export const validatePosition = (position: WordPillPosition): boolean => {
  return typeof position.x === 'number' && typeof position.y === 'number';
};

export const sanitizeText = (text: string): string => {
  return text.trim().slice(0, 50);
};

export const createAnimationConfig = (props: WordPillProps): WordPillAnimationConfig => {
  const { initialRotation, delay, push } = props;
  
  const safePush: WordPillPosition = {
    x: push?.x ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.x,
    y: push?.y ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.y
  };
  
  if (!validatePosition(safePush)) {
    console.warn('WordPill: Invalid push position, using defaults');
    return {
      initialRotation: initialRotation ?? WORD_PILL_CONSTANTS.DEFAULTS.INITIAL_ROTATION,
      delay: Math.max(0, delay ?? WORD_PILL_CONSTANTS.DEFAULTS.DELAY),
      push: { ...WORD_PILL_CONSTANTS.DEFAULTS.PUSH }
    };
  }
  
  return {
    initialRotation: initialRotation ?? WORD_PILL_CONSTANTS.DEFAULTS.INITIAL_ROTATION,
    delay: Math.max(0, delay ?? WORD_PILL_CONSTANTS.DEFAULTS.DELAY),
    push: safePush
  };
};

export const createDragConfig = (enabled: boolean = false): WordPillDragConfig => ({
  enabled,
  momentum: WORD_PILL_CONSTANTS.DRAG.MOMENTUM,
  elastic: WORD_PILL_CONSTANTS.DRAG.ELASTIC,
  constraints: WORD_PILL_CONSTANTS.DRAG.CONSTRAINTS
});

export const createStyleConfig = (): WordPillStyleConfig => ({
  background: wordPillStyles.background,
  boxShadow: wordPillStyles.boxShadow,
  zIndex: wordPillStyles.zIndex
});

export const generateFloatingAnimation = (push: WordPillPosition) => {
  const randomDuration = WORD_PILL_CONSTANTS.ANIMATION.FLOATING_DURATION_BASE + Math.random();
  
  const safeX = push?.x ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.x;
  const safeY = push?.y ?? WORD_PILL_CONSTANTS.DEFAULTS.PUSH.y;
  
  return {
    opacity: WORD_PILL_CONSTANTS.ANIMATION.FINAL_OPACITY,
    scale: WORD_PILL_CONSTANTS.ANIMATION.FINAL_SCALE,
    y: [
      safeY, 
      safeY - WORD_PILL_CONSTANTS.ANIMATION.FLOATING_OFFSET, 
      safeY, 
      safeY + WORD_PILL_CONSTANTS.ANIMATION.FLOATING_OFFSET, 
      safeY
    ],
    x: safeX,
    transition: {
      y: {
        duration: randomDuration,
        repeat: Infinity,
        ease: WORD_PILL_CONSTANTS.ANIMATION.EASE,
      },
    },
  };
};

export const generateInitialAnimation = (rotation: number) => ({
  opacity: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_OPACITY,
  scale: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_SCALE,
  y: WORD_PILL_CONSTANTS.ANIMATION.INITIAL_Y_OFFSET,
  rotate: rotation
});

export const validateAndTransformProps = (props: WordPillProps): ValidatedWordPillProps => {
  if (!validateWordPillText(props.text)) {
    throw new Error('WordPill: text prop is required and must be a non-empty string');
  }

  const sanitizedText = sanitizeText(props.text);
  const animationConfig = createAnimationConfig(props);
  const dragConfig = createDragConfig(props.drag);
  const styleConfig = createStyleConfig();
  const className = [wordPillStyles.container, props.className].filter(Boolean).join(' ');

  return {
    text: sanitizedText,
    animation: animationConfig,
    drag: dragConfig,
    style: styleConfig,
    className
  };
};
