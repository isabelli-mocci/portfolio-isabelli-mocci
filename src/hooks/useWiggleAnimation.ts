import { useCallback } from 'react';
import { ANIMATION_DURATIONS, ANIMATION_CLASSES } from '../constants/contact-button.constants';

export interface AnimationCleanup {
  (): void;
}

export const useWiggleAnimation = () => {
  return useCallback((element: HTMLButtonElement): AnimationCleanup | void => {
    if (!element || element.disabled) {
      return;
    }

    try {
      element.classList.remove(ANIMATION_CLASSES.WIGGLE);
      void element.offsetWidth;
      element.classList.add(ANIMATION_CLASSES.WIGGLE);
      
      const timeoutId = setTimeout(() => {
        if (element && element.isConnected) {
          element.classList.remove(ANIMATION_CLASSES.WIGGLE);
        }
      }, ANIMATION_DURATIONS.WIGGLE);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.warn('Animation failed to execute:', error);
    }
  }, []);
};
