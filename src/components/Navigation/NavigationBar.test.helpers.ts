import type { NavigationLink } from '../../types/navigation.types';

export const createMockNavigationLinks = (): ReadonlyArray<NavigationLink> => [
  { name: 'Test Home', href: '#test-home' },
  { name: 'Test About', href: '#test-about' },
] as const;

export const createNavigationBarTestProps = () => ({
  links: createMockNavigationLinks(),
  className: 'test-class',
  testId: 'test-navigation-bar',
});
