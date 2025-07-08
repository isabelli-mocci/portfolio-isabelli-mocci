/**
 * Border radius constants for consistent styling across the project
 */
export const BORDER_RADIUS = {
  // Primary border radius for most components
  PRIMARY: 'rounded-2xl',       // 16px - Cards, containers, main elements
  
  // Secondary border radius for buttons and interactive elements
  SECONDARY: 'rounded-xl',      // 12px - Buttons, form elements, smaller cards
  
  // Pills and circular elements
  PILL: 'rounded-full',         // Full rounded - Pills, circular buttons, navigation
  
  // Small elements and badges
  SMALL: 'rounded-lg',          // 8px - Badges, small cards, tooltips
  
  // Medium elements
  MEDIUM: 'rounded-2xl',        // 16px - Same as primary for consistency
  
  // Large containers and modals
  LARGE: 'rounded-3xl',         // 24px - Large modals, main containers
} as const;

/**
 * Border radius values in pixels for style objects
 */
export const BORDER_RADIUS_VALUES = {
  PRIMARY: 16,
  SECONDARY: 12,
  PILL: 9999,
  SMALL: 8,
  MEDIUM: 16,
  LARGE: 24,
} as const;

/**
 * Component-specific border radius mapping
 * All components now use rounded-2xl for consistency
 */
export const COMPONENT_BORDER_RADIUS = {
  // Navigation
  NAVBAR: BORDER_RADIUS.PRIMARY,
  NAV_ITEMS: BORDER_RADIUS.PRIMARY,
  
  // Buttons
  CONTACT_BUTTON: BORDER_RADIUS.PRIMARY,
  ACTION_BUTTON: BORDER_RADIUS.PRIMARY,
  CLOSE_BUTTON: BORDER_RADIUS.PRIMARY,
  
  // Cards
  PROJECT_CARD: BORDER_RADIUS.PRIMARY,
  PROJECT_PREVIEW: BORDER_RADIUS.PRIMARY,
  BENTO_CARD: BORDER_RADIUS.PRIMARY,
  SKILL_CARD: BORDER_RADIUS.PRIMARY,
  TOOL_BADGE: BORDER_RADIUS.PRIMARY,
  
  // Forms
  FORM_INPUT: BORDER_RADIUS.PRIMARY,
  FORM_TEXTAREA: BORDER_RADIUS.PRIMARY,
  FORM_SELECT: BORDER_RADIUS.PRIMARY,
  
  // Social Links
  SOCIAL_LINK: BORDER_RADIUS.PRIMARY,
  
  // Tech Pills/Badges
  TECH_PILL: BORDER_RADIUS.PRIMARY,
  
  // Modals
  MODAL: BORDER_RADIUS.PRIMARY,
  MODAL_LARGE: BORDER_RADIUS.PRIMARY,
  
  // Tooltips and overlays
  TOOLTIP: BORDER_RADIUS.PRIMARY,
  OVERLAY: BORDER_RADIUS.PRIMARY,
} as const;
