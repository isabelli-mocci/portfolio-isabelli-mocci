import type { NavigationConfig } from '../types/navigation.types';

export const NAVIGATION_CONFIG: NavigationConfig = {
  links: [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blogs', href: '#blogs' },
  ] as const,
  maxWidth: 'max-w-4xl',
  minHeight: 'min-h-[72px]',
  zIndex: 40,
} as const;
