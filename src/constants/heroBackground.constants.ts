export const MOUSE_POSITION_DEFAULTS = {
  x: 0.5,
  y: 0.5,
} as const;

export const PARALLAX_DEFAULTS = {
  INTENSITY: 6,
  TRANSITION_DURATION: 250,
  CENTER_OFFSET: 0.5,
} as const;

export const VIEWPORT_UNITS = {
  VW: 'vw',
  VH: 'vh',
} as const;

export const CSS_CLASSES = {
  CONTAINER: 'pointer-events-none select-none absolute inset-0 w-full h-full z-[-1]',
  STAR_BASE: 'opacity-90',
} as const;

export const SVG_DEFAULTS = {
  VIEWBOX: '0 0 40 40',
  STAR_POINTS: '20,4 24,20 36,20 24,24 20,36 16,24 4,20 16,20',
} as const;
