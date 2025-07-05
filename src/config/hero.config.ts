import type { HeroConfig } from '../types/hero.types';

export const HERO_CONFIG: HeroConfig = {
  buttons: {
    seeWork: {
      text: 'SEE MY WORK',
      variant: 'primary',
    },
    downloadCV: {
      text: 'DOWNLOAD CV',
      variant: 'secondary',
    },
  },
  scroll: {
    targetSelector: '[data-hero-next]',
    behavior: 'smooth',
  },
} as const;
