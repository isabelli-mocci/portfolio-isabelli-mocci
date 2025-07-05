import { memo } from 'react';
import type { NavigationBarProps } from './NavigationBar.types';
import { NAVIGATION_CONFIG } from '../../config/navigation.config';
import { NAVIGATION_STYLES } from '../../styles/navigation.styles';
import { combineClassNames } from '../../utils/className.utils';
import StatusIndicator from '../StatusIndicator';
import NavItems from './NavItems';
import ContactButton from '../Contact/ContactButton';

const createNavClassName = (maxWidth: string, minHeight: string): string => 
  combineClassNames(NAVIGATION_STYLES.nav, maxWidth, minHeight);

const NavigationBarComponent = ({ 
  links = NAVIGATION_CONFIG.links,
  className,
  testId = 'navigation-bar'
}: NavigationBarProps) => {
  const navClassName = createNavClassName(
    NAVIGATION_CONFIG.maxWidth, 
    NAVIGATION_CONFIG.minHeight
  );

  return (
    <header 
      className={combineClassNames(NAVIGATION_STYLES.header, className)}
      data-testid={testId}
    >
      <nav className={navClassName}>
        <StatusIndicator />
        <NavItems items={links} />
        <div className={NAVIGATION_STYLES.actionsContainer}>
          <ContactButton />
        </div>
      </nav>
    </header>
  );
};

export const NavigationBar = memo(NavigationBarComponent);
NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
