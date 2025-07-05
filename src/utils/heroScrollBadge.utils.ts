import { SCROLL_BADGE_DEFAULTS } from '../constants/heroScrollBadge.constants';

export const scrollToElement = (
  selector: string = SCROLL_BADGE_DEFAULTS.TARGET_SELECTOR,
  behavior: ScrollBehavior = 'smooth'
): boolean => {
  try {
    const targetElement = document.querySelector(selector);
    
    if (!targetElement) {
      console.warn(`Element with selector "${selector}" not found for scrolling`);
      return false;
    }
    
    targetElement.scrollIntoView({ behavior });
    return true;
  } catch (error) {
    console.error('Error during scroll operation:', error);
    return false;
  }
};

export const validateSelector = (selector: string): boolean => {
  if (typeof selector !== 'string' || selector.trim().length === 0) {
    console.warn('Invalid selector provided for scroll operation');
    return false;
  }
  
  try {
    document.querySelector(selector);
    return true;
  } catch {
    console.warn(`Invalid CSS selector: "${selector}"`);
    return false;
  }
};

export const createScrollHandler = (
  targetSelector: string,
  onScroll?: () => void
) => (): void => {
  const success = scrollToElement(targetSelector);
  
  if (success && onScroll) {
    try {
      onScroll();
    } catch (error) {
      console.error('Error in scroll callback:', error);
    }
  }
};

export const generateCirclePath = (radius: number): string => {
  const centerX = 48;
  const centerY = 8;
  
  return `M${centerX},${centerY} a${radius},${radius} 0 1,1 0,${radius * 2} a${radius},${radius} 0 1,1 0,-${radius * 2}`;
};

export const calculateTextLength = (radius: number): number => {
  const circumference = 2 * Math.PI * radius;
  return Math.floor(circumference * 0.8);
};
