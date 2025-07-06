import React from 'react';
import type { MarqueeItem, MarqueeStyleConfiguration } from '../../types/infiniteMarquee.types';

interface MarqueeItemComponentProps {
  item: MarqueeItem;
  styleConfiguration: MarqueeStyleConfiguration;
}

const MarqueeItemComponent: React.FC<MarqueeItemComponentProps> = React.memo(({
  item,
  styleConfiguration,
}) => {
  return (
    <span className={styleConfiguration.itemClassName}>
      {item.label}
      <span className={styleConfiguration.separatorClassName}>
        {styleConfiguration.separatorSymbol}
      </span>
    </span>
  );
});

MarqueeItemComponent.displayName = 'MarqueeItemComponent';

export default MarqueeItemComponent;
