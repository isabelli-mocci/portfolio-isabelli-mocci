import type { HeroSectionConfig } from '../types/hero.types';
import type { HeroHeadingConfig } from '../types/heroHeading.types';
import type { ScrollBadgeConfig } from '../types/heroScrollBadge.types';

export const HERO_SECTION_CONFIG: HeroSectionConfig = {
  actions: {
    seeWork: {
      text: 'SEE MY WORK',
      targetSelector: '[data-hero-next]',
    },
    downloadCV: {
      text: 'DOWNLOAD CV',
      downloadUrl: '/src/assets/resume/cv_isabelli_cristina_mocci_dev_front-end.pdf',
    },
  },
  scroll: {
    behavior: 'smooth',
    fallbackSelector: '#projects',
  },
} as const;

export const HERO_HEADING_CONFIG: HeroHeadingConfig = {
  text: {
    defaultPersonName: 'Isabelli Mocci',
    defaultProfession: 'front-end developer',
    defaultDescription: {
      prefix: 'who',
      suffix: 'blends technical expertise and creativity to deliver',
      highlight: 'beautiful',
    },
  },
  styling: {
    container: 'z-10 flex flex-col justify-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center w-full max-w-8xl mx-auto px-4',
    headingPrimary: 'text-text-white',
    headingSecondary: 'text-text-gray',
    highlight: 'text-text-white',
    iconWrapper: {
      base: 'inline-block align-middle',
      positions: {
        left: 'mr-1 sm:mr-2',
        right: 'relative ml-1',
      },
    },
  },
} as const;

export const HERO_SCROLL_BADGE_CONFIG: ScrollBadgeConfig = {
  target: {
    defaultSelector: '#projects',
    scrollBehavior: 'smooth',
  },
  animation: {
    initialDelay: 3.5,
    rotationDuration: '7s',
    fadeTransition: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 3.5 },
    },
  },
  dimensions: {
    container: { width: 120, height: 120 },
    outerCircle: { radius: 58, strokeWidth: 1.5 },
    innerCircle: { radius: 40 },
    arrow: { width: 32, height: 40 },
  },
  text: {
    content: 'SCROLL TO EXPLORE • SCROLL TO EXPLORE •\u00A0',
    fontSize: 11,
    letterSpacing: 3,
    pathLength: 251,
  },
  styling: {
    colors: {
      stroke: '#fff',
      fill: 'none',
      text: '#fff',
    },
    spacing: {
      dashArray: '12 8',
    },
  },
} as const;
