import { useEffect } from 'react';

interface HideHeaderNavOptions {
  isActive: boolean;
  headerSelector?: string;
  navSelector?: string;
}

function setElementDisplay(selector: string, display: string) {
  try {
    const element = document.querySelector(selector) as HTMLElement | null;
    if (element) {
      element.style.display = display;
    }
  } catch {
    // *
  }
}

export function useHideHeaderNav({
  isActive,
  headerSelector = 'header',
  navSelector = 'nav',
}: HideHeaderNavOptions) {
  useEffect(() => {
    const hideNavigation = () => {
      document.body.style.overflow = 'hidden';
      setElementDisplay(headerSelector, 'none');
      setElementDisplay(navSelector, 'none');
    };

    const showNavigation = () => {
      document.body.style.overflow = '';
      setElementDisplay(headerSelector, '');
      setElementDisplay(navSelector, '');
    };

    if (isActive) {
      hideNavigation();
    } else {
      showNavigation();
    }

    return showNavigation;
  }, [isActive, headerSelector, navSelector]);
}
