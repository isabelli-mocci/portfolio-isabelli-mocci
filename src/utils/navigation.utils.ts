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

export const getActiveNavigationItem = (
  links: ReadonlyArray<NavigationLink>,
  currentHash: string
): NavigationLink | undefined => {
  return links.find(link => link.href === currentHash || link.href === `#${currentHash}`);
};
