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
    MODAL_MAX_WIDTH: 'max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl',
    MODAL_PADDING: 'p-8',
    MODAL_BORDER_RADIUS: 'rounded-2xl',
    GRID_BREAKPOINT: 'md:grid-cols-1',
    BACKDROP_BLUR: 'backdrop-blur-xl',
    SHADOW: 'shadow-2xl',
    BORDER: 'border border-white/10',
  },
  
  COLORS: {
    OVERLAY_OPACITY: 'bg-black/40',
    MODAL_BACKGROUND: 'bg-bg-dark/95',
    TAB_CONTAINER: 'bg-white/5',
    TAB_ACTIVE: 'bg-white/10',
    TAB_INACTIVE: 'bg-transparent',
    CARD_BACKGROUND: 'bg-white/5',
    PRIMARY_TEXT: 'text-white',
    SECONDARY_TEXT: 'text-white/70',
    MUTED_TEXT: 'text-white/50',
    PRIMARY_COLOR: 'text-primary-color',
    AVAILABILITY_BACKGROUND: 'bg-green-500/10',
    AVAILABILITY_TEXT: 'text-green-400',
    AVAILABILITY_DOT: 'bg-green-400',
    HOVER_OVERLAY: 'hover:bg-white/5',
    CARD_BORDER: 'border border-white/10',
    TAB_BORDER: 'border border-white/10',
  },
  
  SPACING: {
    ICON_SIZE: 'w-5 h-5',
    STATUS_DOT_SIZE: 'w-2 h-2',
    MODAL_PADDING: 'py-6 px-4 sm:py-8 sm:px-6',
    SECTION_MARGIN: 'mb-6',
    CARD_PADDING: 'p-4 sm:p-6',
    BUTTON_PADDING: 'py-3 px-6',
    CARD_GAP: 'gap-6',
    ICON_MARGIN: 'mr-3',
  },
  
  Z_INDEX: {
    MODAL: 'z-50',
  },
  
  CONTACT_INFO: {
    EMAIL: 'isabellimocci.tech@gmail.com',
    LINKEDIN_URL: 'https://www.linkedin.com/in/isabelli-mocci/',
    GITHUB_URL: 'https://github.com/isabelli-mocci',
  },
  
  TEXTS: {
    MODAL_TITLE: "Let's Connect",
    MODAL_SUBTITLE: 'Ready to discuss your next project?',
    CLOSE_BUTTON_ARIA: 'Close',
    QUICK_CONTACT_TAB: 'Quick Contact',
    FORM_TAB: 'Send Message',
    EMAIL_TITLE: 'Email',
    EMAIL_CTA: 'Drop me a line',
    LINKEDIN_TITLE: 'LinkedIn',
    LINKEDIN_DESCRIPTION: 'Connect professionally',
    LINKEDIN_CTA: "Let's connect on LinkedIn",
    AVAILABILITY_STATUS: 'Available for full time opportunities',
    FORM_NAME_LABEL: 'Name',
    FORM_NAME_PLACEHOLDER: 'Your complete name',
    FORM_EMAIL_LABEL: 'E-mail',
    FORM_EMAIL_PLACEHOLDER: 'seu.email@exemplo.com',
    FORM_SUBJECT_LABEL: 'Subject',
    FORM_SUBJECT_PLACEHOLDER: 'Select a subject',
    FORM_MESSAGE_LABEL: 'Message',
    FORM_MESSAGE_PLACEHOLDER: 'What would you like to discuss?',
    FORM_SUBMIT_BUTTON: 'Send Message',
    FORM_SUBMIT_SENDING: 'Sending...',
  },
  
  FORM: {
    SUBJECT_OPTIONS: [
      { value: 'job', label: 'Job Opportunity' },
      { value: 'freelance', label: 'Freelance Project' },
      { value: 'other', label: 'Other Subjects' },
    ],
  },
} as const;
