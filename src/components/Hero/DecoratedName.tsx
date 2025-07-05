import React from 'react';
import type { DecoratedNameProps } from '../../types/heroHeading.types';
import { validateDecoratedNameProps, cn } from '../../utils/heroHeading.utils';
import { HERO_HEADING_CONFIG } from '../../config/hero.config';

export const DecoratedName: React.FC<DecoratedNameProps> = ({
  name,
  starIcon,
  rayIcon,
  className = '',
}) => {
  // Validate props in development
  if (process.env.NODE_ENV === 'development') {
    const validation = validateDecoratedNameProps({ name, starIcon, rayIcon, className });
    if (!validation.isValid) {
      console.warn('DecoratedName validation:', validation.errors);
    }
  }

  const { iconWrapper } = HERO_HEADING_CONFIG.styling;

  return (
    <span className={className} data-testid="decorated-name">
      <span className={cn(iconWrapper.base, iconWrapper.positions.left, 'animate-pulse')}>
        {starIcon}
      </span>
      {name}
      <span 
        className={cn(iconWrapper.base, iconWrapper.positions.right)}
        style={{ width: 24 }}
      >
        <span
          className="absolute left-0 top-[-0.6em] animate-bounce"
          style={{ pointerEvents: 'none' }}
        >
          {rayIcon}
        </span>
      </span>
    </span>
  );
};

export default DecoratedName;
