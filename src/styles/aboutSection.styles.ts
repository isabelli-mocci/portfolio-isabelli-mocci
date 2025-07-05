const RESPONSIVE_BREAKPOINTS = {
  mobile: '',
  desktop: 'md:'
} as const;

const COMMON_STYLES = {
  flexCentered: 'flex items-center justify-center',
  fullSize: 'w-full h-full',
  absolute: 'absolute top-0 left-0',
  primaryGradient: 'bg-gradient-to-b from-bg-medium to-bg-dark',
  primaryColor: 'text-primary-color',
  responsivePadding: 'pb-4 md:pb-8',
  responsiveSpacing: 'gap-8 md:gap-0',
} as const;

const buildResponsiveClass = (mobile: string, desktop: string) => 
  `${mobile} ${RESPONSIVE_BREAKPOINTS.desktop}${desktop}`;

export const aboutSectionStyles = {
  section: `
    min-h-screen flex flex-col justify-center items-center py-0 px-0 
    ${COMMON_STYLES.primaryGradient} text-text-white 
    relative overflow-x-hidden
  `,
  
  container: `
    ${COMMON_STYLES.fullSize} flex flex-row
    ${buildResponsiveClass('items-start', 'items-end')} justify-center 
    relative flex-1 min-h-[80vh] ${COMMON_STYLES.responsiveSpacing}
  `,
  
  headingContainer: `
    flex flex-col justify-end items-start h-full pl-4 md:pl-8 ${COMMON_STYLES.responsivePadding}
    z-10 w-auto flex-shrink-0
  `,
  
  heading: `
    ${COMMON_STYLES.primaryColor} mb-0 leading-none text-left relative
  `,
  
  divider: `
    h-1 w-24 bg-primary-color rounded-full mt-4 mb-2 
    mx-0 opacity-80
  `,
  
  pillsContainer: `
    relative flex-1 min-h-[300px] ${RESPONSIVE_BREAKPOINTS.desktop}min-h-[500px] 
    ${buildResponsiveClass('w-full', 'w-auto')} mt-8 ${RESPONSIVE_BREAKPOINTS.desktop}mt-0
  `,
  
  pillsArea: `
    ${COMMON_STYLES.absolute} ${COMMON_STYLES.fullSize} pointer-events-none
  `,
  
  contactContainer: `
    ${COMMON_STYLES.flexCentered} w-full mt-2 mb-8
  `,
  
  contactButton: `
    scale-125 ${RESPONSIVE_BREAKPOINTS.desktop}scale-150
  `
} as const;
