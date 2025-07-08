import React from 'react';

interface AnimatedIconProps {
  Icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
  ariaLabel: string;
  animationClass: string;
  style?: React.CSSProperties;
  className?: string;
}

export const AnimatedIcon = ({ 
  Icon, 
  ariaLabel, 
  animationClass, 
  style = {},
  className = "inline-block align-middle"
}: AnimatedIconProps) => (
  <span
    className={`${animationClass} ${className}`}
    aria-label={ariaLabel}
  >
    <Icon
      className="text-primary-color"
      style={{
        verticalAlign: 'middle',
        ...style
      }}
    />
  </span>
);
