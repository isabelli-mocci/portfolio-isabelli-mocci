import type { MarqueeItem, MarqueeConfiguration } from '../types/infiniteMarquee.types';
import { ANIMATION_DURATION_BOUNDS } from '../config/infiniteMarquee.config';

export const normalizeMarqueeItems = (items: string[] | MarqueeItem[]): MarqueeItem[] => {
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        id: `marquee-item-${index}`,
        label: item,
      };
    }
    return item;
  });
};

export const calculateAnimationDuration = (speed: number): number => {
  return Math.max(ANIMATION_DURATION_BOUNDS.MIN, ANIMATION_DURATION_BOUNDS.MAX - speed);
};

export const duplicateItems = <T>(items: T[], count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(...items);
  }
  return result;
};

export const createMarqueeTransform = (rotationAngle: number): string => {
  return `rotate(${rotationAngle}deg)`;
};

export const createMarqueeAnimationStyle = (
  duration: number,
  direction: MarqueeConfiguration['direction']
): React.CSSProperties => {
  return {
    '--marquee-duration': `${duration}s`,
    '--marquee-direction': direction === 'left' ? 'normal' : 'reverse',
  } as React.CSSProperties;
};
