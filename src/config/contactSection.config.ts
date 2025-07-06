import type { ContactSectionConfig } from '../types/contactSection.types';
import { CONTACT_SECTION_CONSTANTS } from '../constants/contactSection.constants';

export const CONTACT_SECTION_CONFIG: ContactSectionConfig = {
  animations: {
    modal: {
      hidden: { 
        opacity: 0, 
        y: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_OFFSET, 
        scale: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_SCALE 
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_DURATION, 
          ease: 'easeOut' 
        } 
      },
      exit: { 
        opacity: 0, 
        y: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_OFFSET, 
        scale: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_SCALE, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_EXIT_DURATION, 
          ease: 'easeIn' 
        } 
      },
    },
    overlay: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.OVERLAY_DURATION 
        } 
      },
      exit: { 
        opacity: 0, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.OVERLAY_EXIT_DURATION 
        } 
      },
    },
  },
  
  tabs: ['quick', 'form'] as const,
  
  socialLinks: [
    {
      id: 'linkedin',
      href: CONTACT_SECTION_CONSTANTS.CONTACT_INFO.LINKEDIN_URL,
      label: 'LinkedIn',
      iconPath: '/path/to/linkedin-icon.svg',
      isExternal: true,
    },
    {
      id: 'dev',
      href: '#',
      label: 'DEV Community',
      iconPath: '/path/to/dev-icon.svg',
      isExternal: true,
    },
    {
      id: 'github',
      href: '#',
      label: 'GitHub',
      iconPath: '/path/to/github-icon.svg',
      isExternal: true,
    },
    {
      id: 'email',
      href: `mailto:${CONTACT_SECTION_CONSTANTS.CONTACT_INFO.EMAIL}`,
      label: 'E-mail',
      iconPath: '/path/to/email-icon.svg',
      isExternal: false,
    },
  ],
  
  contactMethods: [
    {
      id: 'email',
      type: 'email',
      title: CONTACT_SECTION_CONSTANTS.TEXTS.EMAIL_TITLE,
      description: CONTACT_SECTION_CONSTANTS.CONTACT_INFO.EMAIL,
      href: `mailto:${CONTACT_SECTION_CONSTANTS.CONTACT_INFO.EMAIL}`,
      isExternal: false,
      icon: {
        viewBox: '0 0 24 24',
        path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        strokeWidth: '2',
      },
    },
    {
      id: 'linkedin',
      type: 'linkedin',
      title: CONTACT_SECTION_CONSTANTS.TEXTS.LINKEDIN_TITLE,
      description: CONTACT_SECTION_CONSTANTS.TEXTS.LINKEDIN_DESCRIPTION,
      href: CONTACT_SECTION_CONSTANTS.CONTACT_INFO.LINKEDIN_URL,
      isExternal: true,
      icon: {
        viewBox: '0 0 24 24',
        path: 'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.5a2.5 2.5 0 00-5 0V12',
        strokeWidth: '2',
      },
    },
  ],
  
  availability: {
    isAvailable: true,
    statusText: CONTACT_SECTION_CONSTANTS.TEXTS.AVAILABILITY_STATUS,
    statusColor: 'green',
  },
};
