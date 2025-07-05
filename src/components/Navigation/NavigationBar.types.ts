import type { NavigationLink } from '../../types/navigation.types';

interface NavigationBarProps {
  readonly links?: ReadonlyArray<NavigationLink>;
  readonly className?: string;
  readonly testId?: string;
}

export type { NavigationBarProps };
