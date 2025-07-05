import type { NavigationConfig } from '../types/navigation.types';

export const NAVIGATION_CONFIG: NavigationConfig = {
  links: [
    { 
      id: 'home',
      name: 'Home', 
      href: '#home',
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
      ariaLabel: 'Navigate to blogs section'
    },
  ] as const,
  layout: {
    maxWidth: 'max-w-4xl',
    minHeight: 'min-h-[72px]',
    zIndex: 40,
  },
  behavior: {
    smooth: true,
    offset: 72,
  },
} as const;
