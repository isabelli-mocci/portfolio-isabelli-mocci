/**
 * Utility function to smoothly scroll to the next section
 * @param targetSectionId - The ID of the target section to scroll to
 * @param offset - Optional offset from the top of the target section
 */
export const scrollToNextSection = (targetSectionId: string, offset: number = 0) => {
  const targetElement = document.getElementById(targetSectionId);
  
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Get the next section ID based on the current section
 * @param currentSectionId - The ID of the current section
 * @returns The ID of the next section or null if no next section
 */
export const getNextSectionId = (currentSectionId: string): string | null => {
  const sectionOrder = ['hero', 'projects', 'about-me', 'skills'];
  const currentIndex = sectionOrder.indexOf(currentSectionId);
  
  if (currentIndex !== -1 && currentIndex < sectionOrder.length - 1) {
    return sectionOrder[currentIndex + 1];
  }
  
  return null;
};

/**
 * Get the previous section ID based on the current section
 * @param currentSectionId - The ID of the current section
 * @returns The ID of the previous section or null if no previous section
 */
export const getPreviousSectionId = (currentSectionId: string): string | null => {
  const sectionOrder = ['hero', 'projects', 'about-me', 'skills'];
  const currentIndex = sectionOrder.indexOf(currentSectionId);
  
  if (currentIndex > 0) {
    return sectionOrder[currentIndex - 1];
  }
  
  return null;
};
