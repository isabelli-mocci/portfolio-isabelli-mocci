import type { BackgroundLayer } from '../types/heroBackground.types';
import binaryNumber from '../assets/images/binary-number-snail.png';
import organicGreen2 from '../assets/images/organic-green-2.svg';
import organicGreen from '../assets/images/organic-green.svg';

export const PARALLAX_CONFIG = {
  intensity: 1.2,
  transitionDuration: '1.2s',
  transitionEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const STAR_CONFIG = {
  defaultSize: 12,
  defaultStroke: 'white',
  defaultFill: 'none',
  defaultStrokeWidth: 0.8,
  opacity: 0.25,
} as const;

export const BACKGROUND_LAYERS: readonly BackgroundLayer[] = [
  {
    id: 'radial-gradient',
    type: 'gradient',
    props: {
      className: 'absolute right-[-15vw] top-[-15vw] w-[40vw] h-[40vw] bg-gradient-radial from-white/8 via-white/4 to-transparent rounded-full blur-3xl',
    },
    zIndex: 1,
  },
  {
    id: 'secondary-gradient',
    type: 'gradient',
    props: {
      className: 'absolute left-[-10vw] bottom-[-10vw] w-[35vw] h-[35vw] bg-gradient-radial from-primary-color/6 to-transparent rounded-full blur-3xl',
    },
    zIndex: 1,
  },
  {
    id: 'binary-number',
    type: 'image',
    props: {
      src: binaryNumber,
      alt: 'binary number pattern',
      className: 'absolute left-1/2 top-1/2 w-[65vw] h-[55vh] max-w-none max-h-none opacity-20',
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
      className: 'absolute right-[3vw] top-[2vw] w-[18vw] max-w-[200px] opacity-50',
    },
    zIndex: 3,
  },
  {
    id: 'organic-green-left',
    type: 'image',
    props: {
      src: organicGreen2,
      alt: 'organic green decoration',
      className: 'absolute left-0 bottom-0 w-[22vw] max-w-[260px] opacity-20',
    },
    zIndex: 3,
  },
  {
    id: 'star-left',
    type: 'star',
    props: {
      className: 'absolute left-[10vw] top-[15vw] w-4 h-4 opacity-30',
      size: 16,
      parallaxIntensity: 0.2,
    },
    zIndex: 4,
  },
  {
    id: 'star-right-bottom',
    type: 'star',
    props: {
      className: 'absolute right-[20vw] bottom-[10vw] w-3 h-3 opacity-25',
      size: 12,
      parallaxIntensity: 0.15,
    },
    zIndex: 4,
  },
  {
    id: 'star-right-top',
    type: 'star',
    props: {
      className: 'absolute right-[12vw] top-[20vw] w-3 h-3 opacity-20',
      size: 12,
      parallaxIntensity: 0.1,
    },
    zIndex: 4,
  },
  {
    id: 'accent-dot-1',
    type: 'gradient',
    props: {
      className: 'absolute top-[25%] left-[15%] w-2 h-2 bg-primary-color/40 rounded-full blur-sm',
      parallaxIntensity: 0.3,
    },
    zIndex: 5,
  },
  {
    id: 'accent-dot-2',
    type: 'gradient',
    props: {
      className: 'absolute bottom-[30%] right-[25%] w-1.5 h-1.5 bg-white/30 rounded-full blur-sm',
      parallaxIntensity: 0.2,
    },
    zIndex: 5,
  },
] as const;
