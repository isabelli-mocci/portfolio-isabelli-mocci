import { useState, useCallback, useEffect, useRef } from 'react';
import type { NavigationLink } from '../types/navigation.types';
import { navigationService, type NavigationState } from '../services/NavigationService';
import { handleSmoothScroll } from '../utils/navigation.utils';
import { validateNavigationLinks } from '../utils/navigation.validators';
import { NAVIGATION_CONSTANTS } from '../constants/navigation.constants';

interface UseNavigationServiceProps {
  readonly links: ReadonlyArray<NavigationLink>;
  readonly smoothScroll?: boolean;
  readonly scrollOffset?: number;
  readonly onItemClick?: (link: NavigationLink) => void;
  readonly autoDetectActive?: boolean;
}

interface UseNavigationServiceReturn {
  readonly state: NavigationState;
  readonly handleNavigationClick: (link: NavigationLink) => void;
  readonly isActive: (linkId: string) => boolean;
}

export const useNavigationService = ({
  links,
  smoothScroll = true,
  scrollOffset = NAVIGATION_CONSTANTS.DEFAULT_SCROLL_OFFSET,
  onItemClick,
  autoDetectActive = true,
}: UseNavigationServiceProps): UseNavigationServiceReturn => {
  const [state, setState] = useState<NavigationState>(navigationService.getState());
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    validateNavigationLinks(links);
  }, [links]);

  useEffect(() => {
    unsubscribeRef.current = navigationService.subscribe(setState);
    
    return () => {
      unsubscribeRef.current?.();
    };
  }, []);

  useEffect(() => {
    if (!autoDetectActive) return;

    const detectActiveSection = () => {
      const sections = links
        .filter(link => link.href.startsWith('#'))
        .map(link => ({
          id: link.id,
          element: document.getElementById(link.href.slice(1)),
        }))
        .filter(section => section.element);

      let activeSection: string | undefined;
      const scrollPosition = window.scrollY + scrollOffset;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop - NAVIGATION_CONSTANTS.ACTIVE_DETECTION_THRESHOLD) {
            activeSection = section.id;
          }
        }
      }

      if (activeSection && activeSection !== state.activeItemId) {
        navigationService.setActiveItem(activeSection);
      }
    };

    const throttledDetect = throttle(detectActiveSection, 100);
    
    window.addEventListener('scroll', throttledDetect);
    window.addEventListener('hashchange', detectActiveSection);
    
    detectActiveSection();

    return () => {
      window.removeEventListener('scroll', throttledDetect);
      window.removeEventListener('hashchange', detectActiveSection);
    };
  }, [links, scrollOffset, autoDetectActive, state.activeItemId]);

  const handleNavigationClick = useCallback((link: NavigationLink) => {
    navigationService.setNavigating(true);
    
    if (smoothScroll && link.href.startsWith('#')) {
      handleSmoothScroll(link.href, scrollOffset);
    }
    
    navigationService.recordNavigation(link);
    onItemClick?.(link);
    
    setTimeout(() => {
      navigationService.setNavigating(false);
    }, NAVIGATION_CONSTANTS.TRANSITION_DURATION);
  }, [smoothScroll, scrollOffset, onItemClick]);

  const isActive = useCallback((linkId: string): boolean => {
    return state.activeItemId === linkId;
  }, [state.activeItemId]);

  return {
    state,
    handleNavigationClick,
    isActive,
  };
};

function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}
