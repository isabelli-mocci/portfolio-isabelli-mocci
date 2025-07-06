import React from 'react';
import type { InfiniteMarqueeProps } from '../../types/infiniteMarquee.types';
import { useMarqueeConfiguration } from '../../hooks/useMarqueeConfiguration';
import MarqueeItemComponent from './MarqueeItem';

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  configuration,
  styleConfiguration,
  testId = 'infinite-marquee',
}) => {
  const {
    duplicatedItems,
    containerTransform,
    animationStyle,
    mergedStyleConfiguration,
  } = useMarqueeConfiguration({
    items,
    configuration,
    styleConfiguration,
  });

  return (
    <div
      className={mergedStyleConfiguration.containerClassName}
      style={{ 
        transform: containerTransform, 
        transformOrigin: 'left center' 
      }}
      aria-hidden="true"
      data-testid={testId}
    >
      <div
        className="inline-block whitespace-nowrap select-none animate-marquee"
        style={animationStyle}
      >
        {duplicatedItems.map((item, index) => (
          <MarqueeItemComponent
            key={`${item.id}-${index}`}
            item={item}
            styleConfiguration={mergedStyleConfiguration}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
