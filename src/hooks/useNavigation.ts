import { useState, useCallback, useEffect } from 'react';
import type { NavigationLink } from '../types/navigation.types';
import { handleSmoothScroll, getActiveNavigationItem } from '../utils/navigation.utils';

interface UseNavigationProps {
  readonly links: ReadonlyArray<NavigationLink>;
  readonly smoothScroll?: boolean;
  readonly scrollOffset?: number;
  readonly onItemClick?: (link: NavigationLink) => void;
}

interface UseNavigationReturn {
  readonly activeItemId: string | undefined;
  readonly handleNavigationClick: (link: NavigationLink) => void;
}

export const useNavigation = ({
  links,
  smoothScroll = true,
  scrollOffset = 72,
  onItemClick,
}: UseNavigationProps): UseNavigationReturn => {
  const [activeItemId, setActiveItemId] = useState<string | undefined>();

  const handleNavigationClick = useCallback((link: NavigationLink) => {
    if (smoothScroll && link.href.startsWith('#')) {
      handleSmoothScroll(link.href, scrollOffset);
    }
    
    setActiveItemId(link.id);
    onItemClick?.(link);
  }, [smoothScroll, scrollOffset, onItemClick]);

  useEffect(() => {
    const updateActiveItem = () => {
      const currentHash = window.location.hash;
      const activeItem = getActiveNavigationItem(links, currentHash);
      setActiveItemId(activeItem?.id);
    };

    updateActiveItem();
    window.addEventListener('hashchange', updateActiveItem);
    
    return () => {
      window.removeEventListener('hashchange', updateActiveItem);
    };
  }, [links]);

  return {
    activeItemId,
    handleNavigationClick,
  };
};
