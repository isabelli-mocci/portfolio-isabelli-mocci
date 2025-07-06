export { default as InfiniteMarquee } from './InfiniteMarquee';
export { default as MarqueeItem } from './MarqueeItem';
export type {
  MarqueeItem as MarqueeItemType,
  MarqueeConfiguration,
  MarqueeStyleConfiguration,
  InfiniteMarqueeProps,
} from '../../types/infiniteMarquee.types';
export { useMarqueeConfiguration } from '../../hooks/useMarqueeConfiguration';
export {
  DEFAULT_MARQUEE_CONFIGURATION,
  DEFAULT_STYLE_CONFIGURATION,
  ANIMATION_DURATION_BOUNDS,
} from '../../config/infiniteMarquee.config';
