import type { MousePosition, ParallaxOffset } from '../types/heroBackground.types';
import { PARALLAX_DEFAULTS, MOUSE_POSITION_DEFAULTS } from '../constants/heroBackground.constants';

export const calculateParallaxOffset = (
  mousePosition: MousePosition,
  intensity: number = PARALLAX_DEFAULTS.INTENSITY
): ParallaxOffset => {
  const normalizedX = mousePosition.x - PARALLAX_DEFAULTS.CENTER_OFFSET;
  const normalizedY = mousePosition.y - PARALLAX_DEFAULTS.CENTER_OFFSET;
  
  return {
    x: normalizedX * intensity,
    y: normalizedY * intensity,
  };
};

export const normalizeMousePosition = (
  clientX: number,
  clientY: number,
  containerRect: DOMRect
): MousePosition => {
  if (!containerRect || containerRect.width === 0 || containerRect.height === 0) {
    return MOUSE_POSITION_DEFAULTS;
  }
  
  const x = Math.max(0, Math.min(1, (clientX - containerRect.left) / containerRect.width));
  const y = Math.max(0, Math.min(1, (clientY - containerRect.top) / containerRect.height));
  
  return { x, y };
};

export const createParallaxTransform = (
  offset: ParallaxOffset,
  centered: boolean = true
): string => {
  const baseTransform = centered ? 'translate(-50%, -50%)' : '';
  const parallaxTransform = `translate(${offset.x}vw, ${offset.y}vh)`;
  
  return `${baseTransform} ${parallaxTransform}`.trim();
};

export const validateImageSource = (src: string): boolean => {
  return typeof src === 'string' && src.length > 0;
};

export const createTransitionStyle = (
  duration: string,
  easing: string
): React.CSSProperties => ({
  transition: `transform ${duration} ${easing}`,
});
