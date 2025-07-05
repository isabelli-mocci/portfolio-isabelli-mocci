import React from 'react';
import type { BackgroundElementProps } from '../types/heroBackground.types';

const BackgroundGradient: React.FC<BackgroundElementProps> = ({
  className = '',
  style,
}) => (
  <div
    className={className}
    style={style}
  />
);

export default BackgroundGradient;
