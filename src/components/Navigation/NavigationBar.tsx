import { memo } from 'react';
import type { NavigationBarProps } from '../../types/navigation.types';
import { NAVIGATION_CONFIG } from '../../config/navigation.config';
import { NAVIGATION_STYLES } from '../../styles/navigation.styles';
import { createNavigationContainerClassName } from '../../utils/navigation.utils';
import { combineClassNames } from '../../utils/className.utils';
import { useNavigationService } from '../../hooks/useNavigationService';
import { NavigationList } from './NavigationList';
import ContactButton from './ContactButton';

const NavigationBarComponent = ({
  links = NAVIGATION_CONFIG.links,
  className,
  testId = 'navigation-bar',
  activeItemId,
  onItemClick,
  showContactButton = true,
  onContactClick,
}: NavigationBarProps) => {
  const { state, handleNavigationClick } = useNavigationService({
    links,
    smoothScroll: NAVIGATION_CONFIG.behavior.smooth,
    scrollOffset: NAVIGATION_CONFIG.behavior.offset,
    onItemClick,
    autoDetectActive: !activeItemId,
  });

  const currentActiveId = activeItemId ?? state.activeItemId;

  const navClassName = createNavigationContainerClassName(
    NAVIGATION_CONFIG.layout.maxWidth,
    NAVIGATION_CONFIG.layout.minHeight,
    NAVIGATION_STYLES.container.nav
  );

  return (
    <header
      className={combineClassNames(NAVIGATION_STYLES.container.header, className)}
      data-testid={testId}
      role="banner"
    >
      <nav className={`${navClassName} apple-nav-blur apple-nav-transition`} role="navigation">
        <NavigationList
          items={links}
          activeItemId={currentActiveId}
          onItemClick={handleNavigationClick}
          variant="horizontal"
        />
        
        {showContactButton && (
          <div className={NAVIGATION_STYLES.container.actionsContainer}>
            <ContactButton onClick={onContactClick} />
          </div>
        )}
      </nav>
    </header>
  );
};

export const NavigationBar = memo(NavigationBarComponent);
NavigationBar.displayName = 'NavigationBar';
