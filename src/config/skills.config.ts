export const SKILLS_SECTION_CONFIG = {
  TITLE: 'My Tech Stack',
  SUBTITLE: 'The technologies and tools that I use to create websites.',
  ANIMATION: {
    STAGGER_DELAY: 0.1,
    ITEM_DURATION: 0.4,
    INITIAL_Y_OFFSET: 40,
  },
  LAYOUT: {
    GRID_COLS: 5,
    GRID_ROWS: 3,
    GAP_MOBILE: 6,
    GAP_DESKTOP: 8,
    MAX_WIDTH: '7xl',
    MIN_HEIGHT: '90vh',
  },
} as const;

export const SKILLS_SECTION_STYLES = {
  CONTAINER: 'flex flex-col justify-center items-center min-h-[90vh] h-auto px-4 relative overflow-visible z-10',
  CONTENT: 'max-w-7xl mx-auto z-10 relative flex flex-col justify-center items-center h-full',
  TITLE: 'text-center text-4xl md:text-5xl mb-4 tracking-tight flex items-center gap-2',
  SUBTITLE: 'text-text-gray text-center font-medium md:text-lg mb-20 max-w-xl mx-auto',
  GRID: 'w-full grid grid-cols-5 grid-rows-3 gap-6 md:gap-8 px-2 md:px-0 flex-1 items-stretch',
  GRID_ITEM: 'flex flex-col items-center justify-end p-2 md:p-3 rounded-3xl transition-all duration-300 group relative z-10',
  ICON_ACCENT: 'inline-block align-middle text-text-green',
  ICON_SPARKLE: 'w-8 h-8 inline-block animate-spinSlow',
  ICON_ZAP: 'w-8 h-8 inline-block animate-bounce',
} as const;
