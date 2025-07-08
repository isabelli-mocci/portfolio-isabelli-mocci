import type {
  NavigationStyles,
  NavigationTheme,
} from '../types/navigation.types';
import { COMPONENT_BORDER_RADIUS } from '../constants/borderRadius.constants';

export const NAVIGATION_THEME: NavigationTheme = {
  primary: '#adff2f',
  secondary: '#232323',
  accent: '#ffffff',
  text: '#ffffff',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
} as const;

export const NAVIGATION_STYLES: NavigationStyles = {
  container: {
    header: 'fixed top-0 left-0 right-0 z-50 w-full px-2 py-1.5 md:px-3 md:py-2',
    nav: `flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2
      ${COMPONENT_BORDER_RADIUS.NAVBAR} 
      backdrop-blur-3xl backdrop-saturate-180
      bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03]
      border border-white/[0.08] 
      shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
      shadow-[#adff2f]/5
      transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
      supports-[backdrop-filter]:bg-gradient-to-r 
      supports-[backdrop-filter]:from-white/[0.03] 
      supports-[backdrop-filter]:via-white/[0.06] 
      supports-[backdrop-filter]:to-white/[0.03]
      fixed left-1/2 top-2 md:top-3 -translate-x-1/2 z-50 
      w-[calc(100%-1rem)] md:w-[calc(100%-1.5rem)] max-w-3xl
      active:scale-[0.99] active:transition-transform active:duration-150`,
    actionsContainer: 'flex items-center gap-0.5 md:gap-1',
  },
  list: {
    horizontal: 'flex items-center gap-3 md:gap-4',
    vertical: 'flex flex-col gap-1.5 md:gap-2',
  },
  item: {
    base: `text-white/80 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
      text-sm md:text-base font-medium tracking-[0.02em]
      hover:text-white hover:scale-[1.02] 
      active:scale-[0.98] active:transition-transform active:duration-100
      relative px-2 py-1 md:px-2.5 md:py-1 rounded-lg
      before:absolute before:inset-0 before:rounded-lg
      before:bg-gradient-to-r before:from-[#adff2f]/0 before:via-[#adff2f]/0 before:to-[#adff2f]/0
      before:transition-all before:duration-400 before:ease-out before:opacity-0
      hover:before:from-[#adff2f]/5 hover:before:via-[#adff2f]/10 hover:before:to-[#adff2f]/5
      hover:before:opacity-100
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 
      after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#adff2f] after:to-transparent
      after:transition-all after:duration-400 after:ease-out after:rounded-full
      hover:after:w-8/12`,
    active: `text-[#adff2f] font-semibold 
      before:from-[#adff2f]/10 before:via-[#adff2f]/20 before:to-[#adff2f]/10 before:opacity-100
      after:w-10/12 after:opacity-100`,
    hover: 'hover:text-white',
  },
} as const;
