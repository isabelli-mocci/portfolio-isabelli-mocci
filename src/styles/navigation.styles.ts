import type { NavigationStyles } from '../types/navigation.types';

export const NAVIGATION_STYLES: NavigationStyles = {
  header: 'fixed top-0 left-0 right-0 z-50 w-full p-4',
  nav: `flex items-center justify-between px-4 py-3
    rounded-full shadow-xl border-b-2 border-b-[#adff2f]
    backdrop-blur-3xl bg-gradient-to-br from-white/10 via-[#232323]/70 to-[#232323]/90
    bg-clip-padding backdrop-saturate-200
    transition-all duration-300
    overflow-hidden
    fixed left-1/2 top-4 -translate-x-1/2 z-40 w-full`,
  actionsContainer: 'flex items-center mr-0',
} as const;
