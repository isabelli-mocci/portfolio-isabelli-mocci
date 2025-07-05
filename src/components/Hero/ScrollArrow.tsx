import React from 'react';
import type { ScrollArrowProps } from '../../types/heroScrollBadge.types';
import { SVG_VIEWBOX } from '../../constants/heroScrollBadge.constants';

const ScrollArrow: React.FC<ScrollArrowProps> = ({
  width,
  height,
  strokeColor,
  strokeWidth = 1,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox={SVG_VIEWBOX.ARROW}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="16"
      y1="4"
      x2="16"
      y2="30"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <polyline
      points="8,24 16,32 24,24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export default ScrollArrow;
