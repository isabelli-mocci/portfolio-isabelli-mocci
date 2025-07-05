export const WORD_PILL_CONSTANTS = {
  ANIMATION: {
    INITIAL_OPACITY: 0,
    INITIAL_SCALE: 0.7,
    INITIAL_Y_OFFSET: 30,
    FINAL_OPACITY: 1,
    FINAL_SCALE: 1,
    FLOATING_OFFSET: 8,
    FLOATING_DURATION_BASE: 3,
    TRANSITION_DURATION: 0.5,
    EASE: 'easeInOut'
  },
  
  DRAG: {
    MOMENTUM: false,
    ELASTIC: 0.12,
    CONSTRAINTS: {
      left: -40,
      right: 40,
      top: -40,
      bottom: 40
    }
  },
  
  STYLING: {
    Z_INDEX: 10,
    BORDER_RADIUS: 'rounded-full',
    PADDING: 'px-4 py-2',
    TEXT_SIZE: 'text-sm',
    BORDER: 'border border-white/30',
    BACKDROP: 'backdrop-blur-md',
    SHADOW: 'shadow-lg',
    CURSOR: 'cursor-pointer',
    WHITESPACE: 'whitespace-nowrap'
  },
  
  COLORS: {
    BACKGROUND_GRADIENT: 'linear-gradient(120deg, rgba(255,255,255,0.18) 60%, rgba(173,255,47,0.12) 100%)',
    BOX_SHADOW: '0 4px 16px rgba(0,0,0,0.18)'
  },
  
  DEFAULTS: {
    INITIAL_ROTATION: 0,
    DELAY: 0,
    PUSH: { x: 0, y: 0 },
    DRAG: false
  }
} as const;
