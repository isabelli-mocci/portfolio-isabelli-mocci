import type { ContactSectionConfig } from '../types/contactSection.types';
import { CONTACT_SECTION_CONSTANTS } from '../constants/contactSection.constants';
import { FaSquareGithub } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

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
      icon: IoLogoLinkedin,
      isExternal: true,
    },
    {
      id: 'dev',
      href: '#',
      label: 'DEV Community',
      icon: FaDev,
      isExternal: true,
    },
    {
      id: 'github',
      href: CONTACT_SECTION_CONSTANTS.CONTACT_INFO.GITHUB_URL,
      label: 'GitHub',
      icon: FaSquareGithub,
      isExternal: true,
    },
    {
      id: 'email',
      href: `mailto:${CONTACT_SECTION_CONSTANTS.CONTACT_INFO.EMAIL}`,
      label: 'E-mail',
      icon: FaSquareEnvelope,
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
      icon: FaSquareEnvelope,
    },
    {
      id: 'linkedin',
      type: 'linkedin',
      title: CONTACT_SECTION_CONSTANTS.TEXTS.LINKEDIN_TITLE,
      description: CONTACT_SECTION_CONSTANTS.TEXTS.LINKEDIN_DESCRIPTION,
      href: CONTACT_SECTION_CONSTANTS.CONTACT_INFO.LINKEDIN_URL,
      isExternal: true,
      icon: IoLogoLinkedin,
    },
  ],
  
  availability: {
    isAvailable: true,
    statusText: CONTACT_SECTION_CONSTANTS.TEXTS.AVAILABILITY_STATUS,
    statusColor: 'green',
  },
};
