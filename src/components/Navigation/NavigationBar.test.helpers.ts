import type { NavigationLink } from '../../types/navigation.types';

export const createMockNavigationLinks = (): ReadonlyArray<NavigationLink> => [
  { 
    id: 'test-home',
    name: 'Test Home', 
    href: '#test-home',
    ariaLabel: 'Navigate to test home section'
  },
  { 
    id: 'test-about',
    name: 'Test About', 
    href: '#test-about',
    ariaLabel: 'Navigate to test about section'
  },
] as const;

export const createNavigationBarTestProps = () => ({
  links: createMockNavigationLinks(),
  className: 'test-class',
  testId: 'test-navigation-bar',
  showStatusIndicator: false,
  showContactButton: false,
});

export const createNavigationListTestProps = () => ({
  items: createMockNavigationLinks(),
  activeItemId: 'test-home',
  variant: 'horizontal' as const,
});

export const createNavigationItemTestProps = () => ({
  link: createMockNavigationLinks()[0],
  isActive: false,
});

export const createMockNavigationConfig = () => ({
  links: createMockNavigationLinks(),
  layout: {
    maxWidth: 'max-w-4xl',
    minHeight: 'min-h-[72px]',
    zIndex: 40,
  },
  behavior: {
    smooth: true,
    offset: 72,
  },
});
