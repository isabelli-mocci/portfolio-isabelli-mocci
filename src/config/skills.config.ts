export const SKILLS_SECTION_CONFIG = {
  content: {
    title: 'My Tech Stack',
    subtitle: 'The technologies and tools that I use to create websites.',
  },
  animation: {
    staggerDelay: 0.1,
    itemDuration: 0.4,
    initialYOffset: 40,
  },
  layout: {
    gridCols: 5,
    gridRows: 3,
    gapMobile: 6,
    gapDesktop: 8,
    maxWidth: '7xl',
    minHeight: '90vh',
  },
  styles: {
    container: 'flex flex-col justify-center items-center min-h-[90vh] h-auto px-4 relative overflow-visible z-10',
    content: 'max-w-7xl mx-auto z-10 relative flex flex-col justify-center items-center h-full',
    title: 'text-center text-4xl md:text-5xl mb-4 tracking-tight flex items-center gap-2 bg-gradient-to-r from-primary-color via-primary-color to-green-300 bg-clip-text text-transparent font-medium',
    subtitle: 'text-text-slate-100 text-center font-medium md:text-lg mb-20 max-w-xl mx-auto',
    grid: 'w-full grid grid-cols-5 grid-rows-3 gap-6 md:gap-8 px-2 md:px-0 flex-1 items-stretch',
    gridItem: 'flex flex-col items-center justify-end p-2 md:p-3 rounded-3xl transition-all duration-300 group relative z-10',
    iconAccent: 'inline-block align-middle text-text-green',
    iconSparkle: 'w-8 h-8 inline-block animate-spinSlow',
    iconZap: 'w-8 h-8 inline-block animate-bounce',
  },
} as const;
