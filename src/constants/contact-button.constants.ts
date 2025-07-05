export const ANIMATION_DURATIONS = {
  WIGGLE: 400,
  SPIN: '2s',
  TRANSITION: '150ms',
  HOVER_TRANSFORM: '500ms',
} as const;

export const ANIMATION_CLASSES = {
  WIGGLE: 'animate-[wiggle_0.4s]',
  SPIN: 'animate-[spin_2s_linear_infinite]',
} as const;

export const BUTTON_DEFAULTS = {
  HREF: '#contact',
  LABEL: 'Contact me',
  CLASS_NAME: '',
  DISABLED: false,
} as const;

export const ARROW_ICON_CONFIG = {
  PATH: 'M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z',
  VIEW_BOX: '0 0 448 512',
} as const;
