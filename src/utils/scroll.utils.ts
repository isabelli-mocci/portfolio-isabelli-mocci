export const scrollToElement = (
  selector: string, 
  behavior: ScrollBehavior = 'smooth'
): void => {
  const targetElement = document.querySelector(selector);
  
  if (!targetElement) {
    console.warn(`Element with selector "${selector}" not found for scrolling`);
    return;
  }
  
  targetElement.scrollIntoView({ behavior });
};

export const createScrollHandler = (
  selector: string, 
  behavior: ScrollBehavior = 'smooth'
) => (): void => {
  scrollToElement(selector, behavior);
};
