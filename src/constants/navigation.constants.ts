export const NAVIGATION_CONSTANTS = {
  DEFAULT_SCROLL_OFFSET: 72,
  TRANSITION_DURATION: 300,
  ACTIVE_DETECTION_THRESHOLD: 100,
  
  ACCESSIBILITY: {
    MAIN_NAV_LABEL: 'Main navigation',
    CURRENT_PAGE_INDICATOR: 'page',
  },
  
  TEST_IDS: {
    NAVIGATION_BAR: 'navigation-bar',
    NAVIGATION_LIST: 'navigation-list',
    NAVIGATION_ITEM: 'nav-item',
  },
  
  VARIANTS: {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
  } as const,
  
  BEHAVIOR: {
    SMOOTH_SCROLL: 'smooth',
    AUTO_SCROLL: 'auto',
  } as const,
} as const;

export const NAVIGATION_ERRORS = {
  INVALID_LINK: 'Invalid navigation link provided',
  MISSING_HREF: 'Navigation link must have a valid href',
  MISSING_ID: 'Navigation link must have a unique id',
  MISSING_NAME: 'Navigation link must have a name',
} as const;
