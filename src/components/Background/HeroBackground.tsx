import React, { useMemo } from 'react';
import { useParallaxMouse } from '../../hooks/useParallaxMouse';
import { calculateParallaxOffset } from '../../utils/heroBackground.utils';
import { renderBackgroundLayers } from '../../utils/backgroundLayerFactory';
import { BACKGROUND_LAYERS, PARALLAX_CONFIG } from '../../config/heroBackground.config';
import { CSS_CLASSES } from '../../constants/heroBackground.constants';
import type { HeroBackgroundProps } from '../../types/heroBackground.types';

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  className = '',
  parallaxEnabled = true,
  parallaxIntensity = PARALLAX_CONFIG.intensity,
  testId = 'hero-background',
}) => {
  const { mousePosition, containerRef } = useParallaxMouse({
    enabled: parallaxEnabled,
  });

  const parallaxOffset = useMemo(() => {
    if (!parallaxEnabled) return undefined;
    return calculateParallaxOffset(mousePosition, parallaxIntensity);
  }, [mousePosition, parallaxIntensity, parallaxEnabled]);

  const backgroundLayers = useMemo(() => {
    return renderBackgroundLayers(BACKGROUND_LAYERS, parallaxOffset);
  }, [parallaxOffset]);

  const containerClassName = useMemo(() => {
    return `${CSS_CLASSES.CONTAINER} ${className}`.trim();
  }, [className]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      data-testid={testId}
    >
      {backgroundLayers}
    </div>
  );
};

export default React.memo(HeroBackground);
