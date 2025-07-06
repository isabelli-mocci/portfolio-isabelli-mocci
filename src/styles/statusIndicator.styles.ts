import type { StatusIndicatorStyleConfig } from '../types/statusIndicator.types';
import { STATUS_INDICATOR_CONSTANTS } from '../constants/statusIndicator.constants';

const { LAYOUT, ANIMATION } = STATUS_INDICATOR_CONSTANTS;

export const STATUS_INDICATOR_STYLES: StatusIndicatorStyleConfig = {
  container: {
    base: `flex items-center ${LAYOUT.GAP} ${LAYOUT.BORDER_RADIUS} border shadow-md ${LAYOUT.BACKDROP_BLUR} ${LAYOUT.MARGIN}`,
    sizes: {
      small: 'px-2 py-0.5',
      medium: 'px-4 py-1',
      large: 'px-6 py-2',
    },
  },
  pulseContainer: {
    base: 'relative flex',
    sizes: {
      small: 'h-3 w-3',
      medium: 'h-5 w-5',
      large: 'h-7 w-7',
    },
  },
  dot: {
    base: `relative inline-flex ${LAYOUT.BORDER_RADIUS} ${ANIMATION.DOT_SHADOW} m-auto`,
    sizes: {
      small: 'h-1.5 w-1.5',
      medium: 'h-2.5 w-2.5',
      large: 'h-3.5 w-3.5',
    },
  },
  text: {
    base: `flex flex-col leading-tight font-bold tracking-wide uppercase`,
    sizes: {
      small: 'text-xs',
      medium: 'text-xs',
      large: 'text-sm',
    },
  },
} as const;
