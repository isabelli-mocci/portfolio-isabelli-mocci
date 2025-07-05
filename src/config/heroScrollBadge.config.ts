import type { ScrollBadgeConfig } from '../types/heroScrollBadge.types';

export const SCROLL_BADGE_CONFIG: ScrollBadgeConfig = {
  target: {
    defaultSelector: '#projects',
    scrollBehavior: 'smooth',
  },
  animation: {
    initialDelay: 3.5,
    rotationDuration: '7s',
    fadeTransition: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 3.5 },
    },
  },
  dimensions: {
    container: { width: 120, height: 120 },
    outerCircle: { radius: 58, strokeWidth: 1.5 },
    innerCircle: { radius: 40 },
    arrow: { width: 32, height: 40 },
  },
  text: {
    content: 'SCROLL TO EXPLORE • SCROLL TO EXPLORE •\u00A0',
    fontSize: 11,
    letterSpacing: 3,
    pathLength: 251,
  },
  styling: {
    colors: {
      stroke: '#fff',
      fill: 'none',
      text: '#fff',
    },
    spacing: {
      dashArray: '12 8',
    },
  },
} as const;
