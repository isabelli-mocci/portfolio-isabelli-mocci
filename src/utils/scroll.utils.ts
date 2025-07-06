import { scrollToTarget } from './navigation.utils';

export const scrollToElement = (
  selector: string, 
  behavior: ScrollBehavior = 'smooth'
): void => {
  scrollToTarget(
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
