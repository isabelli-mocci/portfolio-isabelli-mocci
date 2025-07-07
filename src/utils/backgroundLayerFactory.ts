import React from 'react';
import type { BackgroundLayer, ParallaxOffset } from '../types/heroBackground.types';
import HeroStar from '../components/Hero/HeroStar';
import ParallaxImage from '../components/Background/BackgroundParallaxImage';
import BackgroundGradient from '../components/Background/BackgroundGradient';

interface LayerFactoryProps {
  layer: BackgroundLayer;
  parallaxOffset?: ParallaxOffset;
}

export const createBackgroundLayer = ({ layer, parallaxOffset }: LayerFactoryProps): React.ReactNode => {
  const { id, type, props } = layer;

  try {
    switch (type) {
      case 'star':
        return React.createElement(HeroStar, { key: id, ...props } as unknown as React.ComponentProps<typeof HeroStar>);
        
      case 'image':
        return React.createElement(ParallaxImage, { 
          key: id, 
          parallaxOffset, 
          ...props 
        } as unknown as React.ComponentProps<typeof ParallaxImage>);
        
      case 'gradient':
        return React.createElement(BackgroundGradient, { key: id, ...props } as unknown as React.ComponentProps<typeof BackgroundGradient>);
        
      default:
        console.warn(`Unknown background layer type: ${type}`);
        return null;
    }
  } catch (error) {
    console.error(`Error creating background layer ${id}:`, error);
    return null;
  }
};

export const renderBackgroundLayers = (
  layers: readonly BackgroundLayer[],
  parallaxOffset?: ParallaxOffset
): React.ReactNode[] => {
  return [...layers]
    .sort((a: BackgroundLayer, b: BackgroundLayer) => a.zIndex - b.zIndex)
    .map((layer: BackgroundLayer) => createBackgroundLayer({ layer, parallaxOffset }))
    .filter(Boolean);
};
