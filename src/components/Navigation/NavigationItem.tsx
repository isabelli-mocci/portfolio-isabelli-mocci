import { memo } from 'react';
import type { NavigationItemProps } from '../../types/navigation.types';
import { NAVIGATION_STYLES } from '../../styles/navigation.styles';
import { createNavigationItemClassName } from '../../utils/navigation.utils';

const NavigationItemComponent = ({ 
  link, 
  isActive = false, 
  onClick 
}: NavigationItemProps) => {
  const className = createNavigationItemClassName(
    NAVIGATION_STYLES.item.base,
    isActive,
    NAVIGATION_STYLES.item.active,
    NAVIGATION_STYLES.item.hover
  );

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(link);
    }
  };

  return (
    <a
      href={link.href}
      className={className}
      onClick={handleClick}
      aria-label={link.ariaLabel || link.name}
      aria-current={isActive ? 'page' : undefined}
      data-testid={`nav-item-${link.id}`}
    >
      {link.icon && (
        <span className="mr-2" aria-hidden="true">
          {link.icon}
        </span>
      )}
      {link.name}
    </a>
  );
};

export const NavigationItem = memo(NavigationItemComponent);
NavigationItem.displayName = 'NavigationItem';
