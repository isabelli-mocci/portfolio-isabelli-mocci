import { useMemo } from 'react';
import type { 
  MarqueeItem, 
  MarqueeConfiguration, 
  MarqueeStyleConfiguration,
  InfiniteMarqueeProps 
} from '../types/infiniteMarquee.types';
import { DEFAULT_MARQUEE_CONFIGURATION, DEFAULT_STYLE_CONFIGURATION } from '../config/infiniteMarquee.config';
import {
  normalizeMarqueeItems,
  calculateAnimationDuration,
  duplicateItems,
  createMarqueeTransform,
  createMarqueeAnimationStyle,
} from '../utils/infiniteMarquee.utils';

interface UseMarqueeConfigurationReturn {
  normalizedItems: MarqueeItem[];
  duplicatedItems: MarqueeItem[];
  animationDuration: number;
  containerTransform: string;
  animationStyle: React.CSSProperties;
  mergedConfiguration: MarqueeConfiguration;
  mergedStyleConfiguration: MarqueeStyleConfiguration;
}

export const useMarqueeConfiguration = ({
  items,
  configuration,
  styleConfiguration,
}: Pick<InfiniteMarqueeProps, 'items' | 'configuration' | 'styleConfiguration'>): UseMarqueeConfigurationReturn => {
  return useMemo(() => {
    const mergedConfiguration: MarqueeConfiguration = {
      ...DEFAULT_MARQUEE_CONFIGURATION,
      ...configuration,
    };

    const mergedStyleConfiguration: MarqueeStyleConfiguration = {
      ...DEFAULT_STYLE_CONFIGURATION,
      ...styleConfiguration,
    };

    const normalizedItems = normalizeMarqueeItems(items);
    const duplicatedItems = duplicateItems(normalizedItems, mergedConfiguration.duplicateCount);
    const animationDuration = calculateAnimationDuration(mergedConfiguration.speed);
    const containerTransform = createMarqueeTransform(mergedConfiguration.rotationAngle);
    const animationStyle = createMarqueeAnimationStyle(animationDuration, mergedConfiguration.direction);

    return {
      normalizedItems,
      duplicatedItems,
      animationDuration,
      containerTransform,
      animationStyle,
      mergedConfiguration,
      mergedStyleConfiguration,
    };
  }, [items, configuration, styleConfiguration]);
};
