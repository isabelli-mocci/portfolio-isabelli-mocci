import React, { useMemo } from 'react';
import type { BackgroundImageProps, ParallaxOffset } from '../types/heroBackground.types';
import { createParallaxTransform, createTransitionStyle, validateImageSource } from '../utils/heroBackground.utils';
import { PARALLAX_CONFIG } from '../config/heroBackground.config';

interface ParallaxImageProps extends BackgroundImageProps {
  parallaxOffset?: ParallaxOffset;
  centered?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  style,
  parallaxOffset,
  parallaxIntensity = 1,
  centered = true,
}) => {
  const isValidSource = useMemo(() => validateImageSource(src), [src]);
  
  const transformStyle = useMemo(() => {
    if (!parallaxOffset) return {};
    
    const adjustedOffset = {
      x: parallaxOffset.x * parallaxIntensity,
      y: parallaxOffset.y * parallaxIntensity,
    };
    
    return {
      transform: createParallaxTransform(adjustedOffset, centered),
      ...createTransitionStyle(
        PARALLAX_CONFIG.transitionDuration,
        PARALLAX_CONFIG.transitionEasing
      ),
    };
  }, [parallaxOffset, parallaxIntensity, centered]);

  const combinedStyle = useMemo(() => ({
    ...transformStyle,
    ...style,
  }), [transformStyle, style]);

  if (!isValidSource) {
    console.warn(`Invalid image source: ${src}`);
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={combinedStyle}
    />
  );
};

export default ParallaxImage;
