import { ANIMATION_DURATIONS } from '../constants/contact-button.constants';

export const createButtonClassName = (baseClassName: string, customClassName: string): string => {
  const classes = [
    baseClassName,
    `duration-${ANIMATION_DURATIONS.TRANSITION}`,
    customClassName,
  ].filter(Boolean);

  return classes.join(' ');
};

export const createAriaLabel = (label: string): string => 
  `${label} - Navigate to contact section`;

export const shouldDisableNavigation = (disabled: boolean): boolean => disabled;
