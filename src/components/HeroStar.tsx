import React from 'react';
import type { StarProps } from '../types/heroBackground.types';
import { CSS_CLASSES, SVG_DEFAULTS } from '../constants/heroBackground.constants';
import { STAR_CONFIG } from '../config/heroBackground.config';

const HeroStar: React.FC<StarProps> = ({
  className = '',
  stroke = STAR_CONFIG.defaultStroke,
  fill = STAR_CONFIG.defaultFill,
  strokeWidth = STAR_CONFIG.defaultStrokeWidth,
  size = STAR_CONFIG.defaultSize,
}) => (
  <svg
    className={`${CSS_CLASSES.STAR_BASE} ${className}`}
    width={size}
    height={size}
    viewBox={SVG_DEFAULTS.VIEWBOX}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points={SVG_DEFAULTS.STAR_POINTS} />
  </svg>
);

export default HeroStar;
