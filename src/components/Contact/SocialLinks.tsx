import React from 'react';
import type { SocialLinkData } from '../../types/contactSection.types';
import { contactSectionStyles } from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

interface SocialLinksProps {
  readonly socialLinks: readonly SocialLinkData[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => (
  <div className={contactSectionStyles.socialContainer}>
    {socialLinks.map((link) => (
      <a
        key={link.id}
        href={link.href}
        className={contactSectionStyles.socialLink}
        {...(link.isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        <img 
          src={link.iconPath} 
          alt={link.label} 
          className={CONTACT_SECTION_CONSTANTS.SPACING.ICON_SIZE} 
        />
      </a>
    ))}
  </div>
);
