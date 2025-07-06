export const STATUS_INDICATOR_CONSTANTS = {
  DEFAULT_STATUS: 'available',
  DEFAULT_SIZE: 'medium',
  DEFAULT_ANIMATED: true,

  ACCESSIBILITY: {
    DEFAULT_ARIA_LABEL: 'Current status indicator',
    PULSE_ARIA_HIDDEN: true,
  },

  ANIMATION: {
    PULSE_CLASS: 'animate-ping',
    PULSE_OPACITY: 'opacity-60',
    DOT_SHADOW: 'shadow-md',
  },

  LAYOUT: {
    GAP: 'gap-2',
    BORDER_RADIUS: 'rounded-full',
    BACKDROP_BLUR: 'backdrop-blur-md',
    MARGIN: 'ml-0',
  },

  TEST_ID_PREFIX: 'status-indicator',
} as const;
