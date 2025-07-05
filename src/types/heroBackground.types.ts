export interface StarProps {
  className?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  size?: number;
}

export interface BackgroundElementProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface BackgroundImageProps extends BackgroundElementProps {
  src: string;
  alt: string;
  parallaxIntensity?: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ParallaxOffset {
  x: number;
  y: number;
}

export interface HeroBackgroundProps {
  className?: string;
  parallaxEnabled?: boolean;
  parallaxIntensity?: number;
  testId?: string;
}

export interface BackgroundLayerProps {
  [key: string]: unknown;
}

export interface BackgroundLayer {
  id: string;
  type: 'image' | 'gradient' | 'star';
  props: BackgroundLayerProps;
  zIndex: number;
}
