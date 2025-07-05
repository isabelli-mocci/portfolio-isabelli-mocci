export const aboutSectionStyles = {
  section: `
    min-h-screen flex flex-col justify-center items-center py-0 px-0 
    bg-gradient-to-b from-bg-medium to-bg-dark text-text-white 
    relative overflow-x-hidden
  `,
  
  container: `
    w-full flex flex-col md:flex-row items-start md:items-end 
    justify-center relative flex-1 min-h-[80vh] gap-8 md:gap-0
  `,
  
  headingContainer: `
    flex flex-col justify-end items-start h-full pl-8 pb-4 md:pb-8 
    z-10 w-full md:w-auto
  `,
  
  heading: `
    text-primary-color mb-0 leading-none text-left relative
  `,
  
  divider: `
    h-1 w-24 bg-primary-color rounded-full mt-4 mb-2 
    mx-auto md:mx-0 opacity-80
  `,
  
  pillsContainer: `
    relative flex-1 min-h-[300px] md:min-h-[500px] 
    w-full md:w-auto mt-8 md:mt-0
  `,
  
  pillsArea: `
    absolute top-0 left-0 w-full h-full pointer-events-none
  `,
  
  contactContainer: `
    flex items-center justify-center w-full mt-2 mb-8
  `,
  
  contactButton: `
    scale-125 md:scale-150
  `
} as const;
