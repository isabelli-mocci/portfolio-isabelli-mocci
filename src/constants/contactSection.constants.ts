export const CONTACT_SECTION_CONSTANTS = {
  ANIMATION: {
    MODAL_DURATION: 0.3,
    MODAL_EXIT_DURATION: 0.2,
    OVERLAY_DURATION: 0.2,
    OVERLAY_EXIT_DURATION: 0.15,
    MODAL_SCALE: 0.95,
    MODAL_OFFSET: 50,
  },
  
  TIMING: {
    TRANSITION_DURATION: 200,
  },
  
  LAYOUT: {
    MODAL_MAX_WIDTH: 'max-w-lg',
    MODAL_PADDING: 'p-6',
    MODAL_BORDER_RADIUS: 'rounded-3xl',
    GRID_BREAKPOINT: 'md:grid-cols-2',
  },
  
  COLORS: {
    OVERLAY_OPACITY: 'bg-opacity-70',
    MODAL_BACKGROUND: 'bg-gray-800',
    TAB_CONTAINER: 'bg-gray-700',
    TAB_ACTIVE: 'bg-gray-500',
    CARD_BACKGROUND: 'bg-gray-700',
    PRIMARY_TEXT: 'text-white',
    SECONDARY_TEXT: 'text-gray-300',
    MUTED_TEXT: 'text-gray-400',
    PRIMARY_COLOR: 'text-primary-color',
    AVAILABILITY_BACKGROUND: 'bg-green-500/20',
    AVAILABILITY_TEXT: 'text-green-400',
    AVAILABILITY_DOT: 'bg-green-400',
  },
  
  SPACING: {
    ICON_SIZE: 'w-6 h-6',
    STATUS_DOT_SIZE: 'w-2.5 h-2.5',
    MODAL_PADDING: 'p-4',
    SECTION_MARGIN: 'mb-6',
    CARD_PADDING: 'p-4',
    BUTTON_PADDING: 'py-2 px-4',
  },
  
  Z_INDEX: {
    MODAL: 'z-50',
  },
  
  CONTACT_INFO: {
    EMAIL: 'isabellimocci.tech@gmail.com',
    LINKEDIN_URL: 'https://www.linkedin.com/in/isabellimocci/',
  },
  
  TEXTS: {
    CLOSE_BUTTON_ARIA: 'Fechar',
    QUICK_CONTACT_TAB: 'Quick contact',
    FORM_TAB: 'Contact Form',
    EMAIL_TITLE: 'E-mail',
    EMAIL_CTA: 'Contact me via email',
    LINKEDIN_TITLE: 'LinkedIn',
    LINKEDIN_DESCRIPTION: 'Prefer Linkedin?',
    LINKEDIN_CTA: 'Send me a message on LinkedIn.',
    FORM_PLACEHOLDER: 'Formulário de contato em construção...',
    AVAILABILITY_STATUS: 'Available for full-time opportunities',
  },
} as const;
