import type { NavigationLink } from '../types/navigation.types';
import { NAVIGATION_ERRORS } from '../constants/navigation.constants';

export const validateNavigationLink = (link: NavigationLink): boolean => {
  if (!link) {
    throw new Error(NAVIGATION_ERRORS.INVALID_LINK);
  }
  
  if (!link.id || typeof link.id !== 'string') {
    throw new Error(NAVIGATION_ERRORS.MISSING_ID);
  }
  
  if (!link.name || typeof link.name !== 'string') {
    throw new Error(NAVIGATION_ERRORS.MISSING_NAME);
  }
  
  if (!link.href || typeof link.href !== 'string') {
    throw new Error(NAVIGATION_ERRORS.MISSING_HREF);
  }
  
  return true;
};

export const validateNavigationLinks = (links: ReadonlyArray<NavigationLink>): boolean => {
  if (!Array.isArray(links)) {
    throw new Error('Navigation links must be an array');
  }
  
  const ids = new Set<string>();
  
  links.forEach(link => {
    validateNavigationLink(link);
    
    if (ids.has(link.id)) {
      throw new Error(`Duplicate navigation link id: ${link.id}`);
    }
    
    ids.add(link.id);
  });
  
  return true;
};

export const isInternalLink = (href: string): boolean => {
  return href.startsWith('#') || href.startsWith('/');
};

export const isExternalLink = (href: string): boolean => {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
};

export const sanitizeHref = (href: string): string => {
  return href.trim().toLowerCase();
};
