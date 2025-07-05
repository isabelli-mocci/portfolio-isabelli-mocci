import { CSS_CLASSES, SCROLL_BADGE_DEFAULTS } from '../constants/heroScrollBadge.constants';

export const SCROLL_BADGE_STYLES = {
  container: CSS_CLASSES.CONTAINER,
  button: {
    base: CSS_CLASSES.BUTTON,
    disabled: CSS_CLASSES.DISABLED,
  },
  elements: {
    circle: CSS_CLASSES.CIRCLE,
    text: CSS_CLASSES.TEXT,
    arrowContainer: CSS_CLASSES.ARROW_CONTAINER,
  },
} as const;

export const createContainerStyle = (
  width: number,
  height: number,
  zIndex: number = SCROLL_BADGE_DEFAULTS.Z_INDEX.CONTAINER
): React.CSSProperties => ({
  width,
  height,
  zIndex,
});

export const createElementStyle = (zIndex: number): React.CSSProperties => ({
  zIndex,
});

export const combineClassNames = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
