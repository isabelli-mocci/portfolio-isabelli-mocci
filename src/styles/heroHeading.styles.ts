import { HERO_HEADING_CONFIG } from '../config/hero.config';

export const HERO_HEADING_STYLES = {
  container: HERO_HEADING_CONFIG.styling.container,
  headings: {
    primary: HERO_HEADING_CONFIG.styling.headingPrimary,
    secondary: HERO_HEADING_CONFIG.styling.headingSecondary,
    highlight: HERO_HEADING_CONFIG.styling.highlight,
  },
  icons: {
    base: HERO_HEADING_CONFIG.styling.iconWrapper.base,
    left: HERO_HEADING_CONFIG.styling.iconWrapper.positions.left,
    right: HERO_HEADING_CONFIG.styling.iconWrapper.positions.right,
  },
} as const;

export const createIconWrapperClasses = (
  position: 'left' | 'right',
  customClass?: string
): string => {
  const baseClass = HERO_HEADING_STYLES.icons.base;
  const positionClass = position === 'left' 
    ? HERO_HEADING_STYLES.icons.left 
    : HERO_HEADING_STYLES.icons.right;
  
  return [baseClass, positionClass, customClass]
    .filter(Boolean)
    .join(' ');
};

export const createHeadingClasses = (
  variant: 'primary' | 'secondary',
  customClass?: string
): string => {
  const variantClass = variant === 'primary' 
    ? HERO_HEADING_STYLES.headings.primary 
    : HERO_HEADING_STYLES.headings.secondary;
  
  return [variantClass, customClass]
    .filter(Boolean)
    .join(' ');
};
