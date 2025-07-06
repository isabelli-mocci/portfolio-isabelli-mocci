import type { NavigationLink } from '../types/navigation.types';

export const createNavigationItemClassName = (
  baseClass: string,
  isActive: boolean,
  activeClass: string,
  hoverClass: string
): string => {
  const classes = [baseClass, hoverClass];
  if (isActive) {
    classes.push(activeClass);
  }
  return classes.join(' ');
};

export const createNavigationListClassName = (
  baseClass: string,
  customClassName?: string
): string => {
  const classes = [baseClass];
  if (customClassName) {
    classes.push(customClassName);
  }
  return classes.join(' ');
};

export const createNavigationContainerClassName = (
  maxWidth: string,
  minHeight: string,
  baseNavClass: string
): string => {
  return `${baseNavClass} ${maxWidth} ${minHeight}`;
};

export const shouldNavigateToLink = (link: NavigationLink): boolean => {
  return Boolean(link.href && !link.isExternal);
};

interface ScrollOptions {
  behavior?: ScrollBehavior;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface ScrollTarget {
  selector: string;
  fallbackSelector?: string;
}

export const handleSmoothScroll = (
  href: string,
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  if (href.startsWith('#')) {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  }
};

export const scrollToTarget = (target: ScrollTarget, options: ScrollOptions = {}): boolean => {
  const { behavior = 'smooth', onSuccess, onError } = options;
  
  try {
    const element = findElement(target);
    
    if (!element) {
      const error = new Error(`Element not found: ${target.selector}`);
      onError?.(error);
      return false;
    }

    element.scrollIntoView({ behavior });
    onSuccess?.();
    return true;
  } catch (error) {
    onError?.(error as Error);
    return false;
  }
};

export const createScrollHandler = (target: ScrollTarget, options: ScrollOptions = {}) => {
  return () => scrollToTarget(target, options);
};

export const isValidSelector = (selector: string): boolean => {
  if (typeof selector !== 'string' || !selector.trim()) {
    return false;
  }
  
  try {
    document.querySelector(selector);
    return true;
  } catch {
    return false;
  }
};

const findElement = (target: ScrollTarget): Element | null => {
  let element = document.querySelector(target.selector);
  
  if (!element && target.fallbackSelector) {
    element = document.querySelector(target.fallbackSelector);
  }
  
  return element;
};

export const getActiveNavigationItem = (
  links: ReadonlyArray<NavigationLink>,
  currentHash: string
): NavigationLink | undefined => {
  return links.find(link => link.href === currentHash || link.href === `#${currentHash}`);
};
