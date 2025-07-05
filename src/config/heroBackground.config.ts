import type { BackgroundLayer } from '../types/heroBackground.types';
import binaryNumber from '../assets/images/binary-number-snail.png';
import organicGreen2 from '../assets/images/organic-green-2.svg';
import organicGreen from '../assets/images/organic-green.svg';

export const PARALLAX_CONFIG = {
  intensity: 6,
  transitionDuration: '0.25s',
  transitionEasing: 'cubic-bezier(.4,2,.6,1)',
} as const;

export const STAR_CONFIG = {
  defaultSize: 32,
  defaultStroke: 'white',
  defaultFill: 'none',
  defaultStrokeWidth: 2,
  opacity: 0.9,
} as const;

export const BACKGROUND_LAYERS: readonly BackgroundLayer[] = [
  {
    id: 'radial-gradient',
    type: 'gradient',
    props: {
      className: 'absolute right-[-10vw] top-[-10vw] w-[32vw] h-[32vw] bg-gradient-radial from-[#737373]/40 to-transparent rounded-full blur-2xl',
    },
    zIndex: 1,
  },
  {
    id: 'binary-number',
    type: 'image',
    props: {
      src: binaryNumber,
      alt: 'binary number pattern',
      className: 'absolute left-1/2 top-1/2 w-[70vw] h-[70vh] max-w-none max-h-none opacity-20',
      parallaxIntensity: 1,
    },
    zIndex: 2,
  },
  {
    id: 'organic-green-right',
    type: 'image',
    props: {
      src: organicGreen,
      alt: 'organic green decoration',
      className: 'absolute right-[3vw] top-[2vw] w-[18vw] max-w-[200px] opacity-80',
    },
    zIndex: 3,
  },
  {
    id: 'organic-green-left',
    type: 'image',
    props: {
      src: organicGreen2,
      alt: 'organic green decoration',
      className: 'absolute left-0 bottom-0 w-[22vw] max-w-[260px] opacity-80',
    },
    zIndex: 3,
  },
  {
    id: 'star-left',
    type: 'star',
    props: {
      className: 'absolute left-[8vw] top-[14vw] w-6 h-6',
      size: 24,
    },
    zIndex: 4,
  },
  {
    id: 'star-right-bottom',
    type: 'star',
    props: {
      className: 'absolute right-[18vw] bottom-[8vw] w-7 h-7',
      size: 28,
    },
    zIndex: 4,
  },
  {
    id: 'star-right-top',
    type: 'star',
    props: {
      className: 'absolute right-[8vw] top-[25vw] w-5 h-5',
      size: 20,
    },
    zIndex: 4,
  },
] as const;
