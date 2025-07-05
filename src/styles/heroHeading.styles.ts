import { CSS_CLASSES } from '../constants/heroHeading.constants';

export const HERO_HEADING_STYLES = {
  container: CSS_CLASSES.CONTAINER,
  headings: {
    primary: CSS_CLASSES.HEADING_PRIMARY,
    secondary: CSS_CLASSES.HEADING_SECONDARY,
    highlight: CSS_CLASSES.HIGHLIGHT,
  },
  icons: {
    base: CSS_CLASSES.ICON_WRAPPER_BASE,
    left: CSS_CLASSES.ICON_LEFT,
    right: CSS_CLASSES.ICON_RIGHT,
  },
  ray: {
    container: CSS_CLASSES.RAY_CONTAINER,
    positioned: CSS_CLASSES.RAY_POSITIONED,
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
