import type { FooterAnimations } from '../types/footer.types';

export const FOOTER_ANIMATIONS: FooterAnimations = {
  logo: {
    duration: 0.8,
    delay: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  socialLinks: {
    duration: 0.8,
    delay: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  cta: {
    duration: 1,
    delay: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  copyright: {
    duration: 0.8,
    delay: 1,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
} as const;

export const FOOTER_STYLES = {
  container: 'bg-gradient-to-b from-bg-dark via-bg-dark to-bg-medium text-white pt-20 relative overflow-hidden',
  backdrop: 'absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 backdrop-blur-[1px]',
  content: 'relative z-10',
  
  marqueeWrapper: 'w-full mb-16',
  
  logoSection: 'flex flex-col items-center justify-center pb-12 px-8 max-w-4xl mx-auto',
  logoContainer: 'mb-8',
  logoImage: 'w-auto mx-auto opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-105 filter drop-shadow-lg',
  
  socialLinksContainer: 'flex justify-center gap-6 mb-14',
  socialLink: 'group relative',
  socialLinkBackground: 'absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500',
  socialLinkContent: 'relative p-4 flex items-center justify-center',
  socialLinkIcon: 'w-6 h-6 text-white/80 group-hover:scale-110 transition-all duration-300',
  socialLinkGlow: 'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500',
  
  ctaSection: 'relative w-full bg-gradient-to-b from-bg-dark/50 to-bg-medium/80 backdrop-blur-sm border-t border-white/5',
  ctaHighlight: 'absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-color/30 to-transparent',
  ctaContainer: 'py-20 px-8',
  ctaHeading: 'text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-center leading-tight max-w-4xl mx-auto',
  ctaPrimary: 'bg-gradient-to-r from-primary-color via-primary-color to-green-300 bg-clip-text text-transparent font-medium',
  ctaSecondary: 'text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extralight mt-4 block',
  
  copyrightSection: 'relative bg-bg-medium/40 backdrop-blur-md border-t border-white/5',
  copyrightContainer: 'py-6 px-8 text-center',
  copyrightText: 'text-white/50 text-sm font-light tracking-wide',
  copyrightSeparator: 'mx-3 text-white/20',
  copyrightLink: 'text-white/60 hover:text-primary-color transition-colors duration-300 font-normal',
} as const;
