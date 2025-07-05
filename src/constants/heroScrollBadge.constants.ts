export const SCROLL_BADGE_DEFAULTS = {
  TARGET_SELECTOR: '#projects',
  ARIA_LABEL: 'Scroll to explore',
  TEST_ID: 'hero-scroll-badge',
  Z_INDEX: {
    CONTAINER: 20,
    BUTTON: 10,
    CIRCLE: 1,
    TEXT: 3,
    ARROW: 10,
  },
} as const;

export const ANIMATION_CONSTANTS = {
  FADE_DELAY: 3.5,
  ROTATION_DURATION: 7,
  ROTATION_FROM: '0 48 48',
  ROTATION_TO: '360 48 48',
} as const;

export const CSS_CLASSES = {
  CONTAINER: 'absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center',
  BUTTON: 'relative flex items-center justify-center w-full h-full bg-transparent border-none outline-none cursor-pointer',
  CIRCLE: 'absolute',
  TEXT: 'absolute drop-shadow-lg',
  ARROW_CONTAINER: 'flex items-center justify-center w-20 h-20 rounded-full shadow-xl',
  DISABLED: 'opacity-50 cursor-not-allowed',
} as const;

export const SVG_VIEWBOX = {
  ARROW: '0 0 32 40',
  TEXT_CIRCLE: '0 0 96 96',
} as const;
