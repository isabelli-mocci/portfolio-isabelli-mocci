import type { HeroSectionConfig } from '../types/hero.refactored.types';

export const HERO_SECTION_CONFIG: HeroSectionConfig = {
  actions: {
    seeWork: {
      text: 'SEE MY WORK',
      targetSelector: '[data-hero-next]',
    },
    downloadCV: {
      text: 'DOWNLOAD CV',
      downloadUrl: '/assets/cv/isabelli-mocci-cv.pdf',
    },
  },
  scroll: {
    behavior: 'smooth',
    fallbackSelector: '#projects',
  },
} as const;
