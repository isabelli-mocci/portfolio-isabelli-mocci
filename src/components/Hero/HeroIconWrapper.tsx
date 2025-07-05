import React from 'react';
import { cn } from '../../utils/heroHeading.utils';
import { HERO_HEADING_CONFIG } from '../../config/heroHeading.config';
import type { HeroIconWrapperProps } from '../../types/heroHeading.types';

export const HeroIconWrapper: React.FC<HeroIconWrapperProps> = ({
  children,
  position,
  animation = '',
  className = '',
}) => {
  const { iconWrapper } = HERO_HEADING_CONFIG.styling;
  
  const baseClasses = cn(
    iconWrapper.base,
    iconWrapper.positions[position],
    animation,
    className
  );

  const wrapperStyle = position === 'right' ? {
    width: 24,
    pointerEvents: 'none' as const,
  } : undefined;

  const iconStyle = position === 'right' ? {
    position: 'absolute' as const,
    left: 0,
    top: '-0.6em',
    pointerEvents: 'none' as const,
  } : undefined;

  return (
    <span className={baseClasses} style={wrapperStyle} data-testid={`icon-wrapper-${position}`}>
      {position === 'right' ? (
        <span style={iconStyle}>
          {children}
        </span>
      ) : (
        children
      )}
    </span>
  );
};

export default HeroIconWrapper;
