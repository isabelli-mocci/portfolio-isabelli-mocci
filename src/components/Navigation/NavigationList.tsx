import { memo } from 'react';
import type { NavigationListProps } from '../../types/navigation.types';
import { NAVIGATION_STYLES } from '../../styles/navigation.styles';
import { createNavigationListClassName } from '../../utils/navigation.utils';
import { NavigationItem } from './NavigationItem';

const NavigationListComponent = ({
  items,
  activeItemId,
  onItemClick,
  variant = 'horizontal',
  className,
}: NavigationListProps) => {
  const baseClassName = NAVIGATION_STYLES.list[variant];
  const listClassName = createNavigationListClassName(baseClassName, className);

  return (
    <nav 
      className={listClassName}
      role="navigation"
      aria-label="Main navigation"
      data-testid="navigation-list"
    >
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          link={item}
          isActive={activeItemId === item.id}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export const NavigationList = memo(NavigationListComponent);
NavigationList.displayName = 'NavigationList';
