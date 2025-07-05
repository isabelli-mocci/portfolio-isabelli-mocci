import React from 'react';
import type { AnimatedCircleProps } from '../../types/heroScrollBadge.types';

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  radius,
  strokeColor,
  strokeWidth,
  dashArray,
  className = '',
}) => {
  const center = 60;
  const containerSize = 120;

  return (
    <svg
      width={containerSize}
      height={containerSize}
      className={className}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
      />
    </svg>
  );
};

export default AnimatedCircle;
