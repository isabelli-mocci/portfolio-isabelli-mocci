import type { NavigationConfig } from '../types/navigation.types';

export const NAVIGATION_CONFIG: NavigationConfig = {
  links: [
    { 
      id: 'home',
      name: 'Home', 
      href: '#hero',
      ariaLabel: 'Navigate to home section'
    },
    { 
      id: 'projects',
      name: 'Projects', 
      href: '#projects',
      ariaLabel: 'Navigate to projects section'
    },
    { 
      id: 'about',
      name: 'About', 
      href: '#about-me',
      ariaLabel: 'Navigate to about section'
    },
    { 
      id: 'skills',
      name: 'Skills', 
      href: '#skills',
      ariaLabel: 'Navigate to skills section'
    },
    { 
      id: 'blogs',
      name: 'Blogs', 
      href: '#blogs',
      ariaLabel: 'Navigate to blogs section',
      disabled: true
    },
  ] as const,
  layout: {
    maxWidth: 'max-w-3xl',
    minHeight: 'min-h-[48px]',
    zIndex: 50,
  },
  behavior: {
    smooth: true,
    offset: 48,
  },
} as const;
