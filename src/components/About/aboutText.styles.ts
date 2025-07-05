export const aboutTextStyles = {
  section: `
    w-full flex flex-col items-center justify-center mt-16 mb-16 z-30 
    max-w-3xl mx-auto px-4 md:px-0 relative
  `,
  
  container: `
    relative z-10 w-full
  `,
  
  paragraph: `
    text-white text-justify text-2xl mb-4 md:mb-6 leading-relaxed font-light
  `,
  
  paragraphWrap: `
    text-white text-justify text-2xl mb-4 md:mb-6 leading-relaxed font-light 
    flex flex-wrap items-center gap-2
  `,
  
  paragraphLast: `
    text-white text-justify text-2xl mb-8 leading-relaxed font-light
  `,
  
  emphasized: `
    text-white font-semibold
  `,
  
  animatedIcon: `
    inline-block align-middle
  `,
  
  spacedIcon: `
    inline-block align-middle mr-1
  `,
  
  exclamationIcon: `
    inline-block align-middle ml-0 mr-1
  `
} as const;
