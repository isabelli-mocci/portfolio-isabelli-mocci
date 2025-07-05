import type { HeroHeadingConfig } from '../types/heroHeading.types';

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
    container: 'z-10 flex flex-col items-center justify-center text-4xl md:text-6xl leading-tight text-center w-full',
    headingPrimary: 'text-text-white',
    headingSecondary: 'text-text-gray',
    highlight: 'text-text-white',
    iconWrapper: {
      base: 'inline-block align-middle',
      positions: {
        left: 'mr-2',
        right: 'relative ml-1',
      },
    },
  },
} as const;
