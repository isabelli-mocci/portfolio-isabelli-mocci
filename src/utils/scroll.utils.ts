import { scrollService } from '../services/ScrollService';

export const scrollToElement = (
  selector: string, 
  behavior: ScrollBehavior = 'smooth'
): void => {
  scrollService.scrollToTarget(
    { selector },
    { behavior }
  );
};

export const createScrollHandler = (
  selector: string, 
  behavior: ScrollBehavior = 'smooth'
) => (): void => {
  scrollToElement(selector, behavior);
};
