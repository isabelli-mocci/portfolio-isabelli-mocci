export const HERO_HEADING_DEFAULTS = {
  PERSON_NAME: 'Isabelli Mocci',
  PROFESSION: 'front-end developer',
  TEST_ID: 'hero-heading',
} as const;

export const CSS_CLASSES = {
  CONTAINER: 'z-10 flex flex-col items-center justify-center text-4xl md:text-6xl leading-tight text-center w-full',
  HEADING_PRIMARY: 'text-text-white',
  HEADING_SECONDARY: 'text-text-gray',
  HIGHLIGHT: 'text-text-white',
  ICON_WRAPPER_BASE: 'inline-block align-middle',
  ICON_LEFT: 'mr-2',
  ICON_RIGHT: 'relative ml-1',
  RAY_CONTAINER: 'relative inline-block',
  RAY_POSITIONED: 'absolute left-0 top-[-0.6em] animate-bounce',
} as const;

export const STYLING_CONSTANTS = {
  RAY_CONTAINER_WIDTH: 24,
  RAY_POINTER_EVENTS: 'none',
} as const;

export const TEXT_CONTENT = {
  CONNECTING_WORDS: {
    IS_A: 'is a',
    WHO: 'who',
    AND: 'and',
    TO_DELIVER: 'to deliver',
    WEBSITES: 'websites.',
  },
  DESCRIPTION_PARTS: {
    PREFIX: 'blends technical expertise',
    SUFFIX: 'creativity to deliver',
  },
} as const;
