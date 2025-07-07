import React from 'react';
import InfiniteMarquee from '../Marquee/InfiniteMarquee';
import type { MarqueeConfig } from '../../types/footer.types';
import { FOOTER_STYLES } from '../../constants/footer.constants';

interface FooterMarqueeProps {
  readonly config: MarqueeConfig;
  readonly className?: string;
}

export const FooterMarquee: React.FC<FooterMarqueeProps> = ({ 
  config, 
  className = '' 
}) => (
  <div className={`${FOOTER_STYLES.marqueeWrapper} ${className}`}>
    <InfiniteMarquee
      items={[...config.labels]}
      configuration={{
        speed: config.speed,
        direction: config.direction,
        rotationAngle: config.rotationAngle,
        duplicateCount: config.duplicateCount,
      }}
      styleConfiguration={{
        containerClassName:
          'relative w-full overflow-hidden bg-bg-dark/80 backdrop-blur-sm py-4 border-t border-b border-white/10 flex items-center',
        itemClassName:
          'text-lg md:text-xl px-8 inline-flex items-center tracking-[0.2em] uppercase font-medium',
        separatorClassName: 'ml-16 text-primary-color/70',
        separatorSymbol: '✦',
      }}
    />
  </div>
);
