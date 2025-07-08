import { memo, useState } from 'react';
import type { NavigationBarProps } from '../../types/navigation.types';
import { NAVIGATION_CONFIG } from '../../config/navigation.config';
import { NAVIGATION_STYLES } from '../../styles/navigation.styles';
import { createNavigationContainerClassName } from '../../utils/navigation.utils';
import { combineClassNames } from '../../utils/className.utils';
import { useNavigationService } from '../../hooks/useNavigationService';
import { NavigationList } from './NavigationList';
import ContactButton from './ContactButton';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';

const NavigationBarComponent = ({
  links = NAVIGATION_CONFIG.links,
  className,
  testId = 'navigation-bar',
  activeItemId,
  onItemClick,
  showContactButton = true,
  onContactClick,
}: NavigationBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <>
      <header
        className={combineClassNames(NAVIGATION_STYLES.container.header, className)}
        data-testid={testId}
        role="banner"
      >
        <nav className={`${navClassName} apple-nav-blur apple-nav-transition`} role="navigation">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:w-full">
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
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="text-primary-color font-bold text-lg">IM</div>
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={links}
        activeItemId={currentActiveId}
        onItemClick={handleNavigationClick}
        onContactClick={onContactClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export const NavigationBar = memo(NavigationBarComponent);
NavigationBar.displayName = 'NavigationBar';
