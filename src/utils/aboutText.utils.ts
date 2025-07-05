import type { CSSProperties } from 'react';
import { ABOUT_TEXT_CONSTANTS } from '../constants/aboutText.constants';

export const createIconStyle = (customStyle: Partial<CSSProperties> = {}): CSSProperties => ({
  color: ABOUT_TEXT_CONSTANTS.COLORS.PRIMARY,
  verticalAlign: 'middle',
  ...customStyle
});

export const validateIconConfig = (config: unknown): boolean => {
  const iconConfig = config as Record<string, unknown>;
  return !!(
    iconConfig?.Icon &&
    iconConfig?.ariaLabel &&
    iconConfig?.animationClass
  );
};

export const createAnimationClass = (baseName: string): string => {
  return `${baseName}-animate`;
};

export const formatMarginStyle = (left: string, right: string): CSSProperties => ({
  marginLeft: left,
  marginRight: right
});
