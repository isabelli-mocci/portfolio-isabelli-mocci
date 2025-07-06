import type { MarqueeConfiguration, MarqueeStyleConfiguration } from '../types/infiniteMarquee.types';

export const DEFAULT_MARQUEE_CONFIGURATION: MarqueeConfiguration = {
  speed: 60,
  direction: 'left',
  rotationAngle: -3,
  duplicateCount: 3,
};

export const DEFAULT_STYLE_CONFIGURATION: MarqueeStyleConfiguration = {
  containerClassName: 'relative w-full overflow-hidden bg-bg-dark py-4 border-t border-b border-text-gray flex items-center mt-20',
  itemClassName: 'text-text-white text-lg md:text-xl px-8 inline-flex items-center',
  separatorClassName: 'ml-8 text-primary-color',
  separatorSymbol: '✦',
};

export const ANIMATION_DURATION_BOUNDS = {
  MIN: 10,
  MAX: 100,
} as const;
