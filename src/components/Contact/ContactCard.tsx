import React from 'react';
import type { ContactMethodData } from '../../types/contactSection.types';
import { ContactIcon } from './ContactIcon';
import { contactSectionStyles } from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

interface ContactCardProps {
  readonly contactMethod: ContactMethodData;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contactMethod }) => {
  const getCta = (type: ContactMethodData['type']) => {
    switch (type) {
      case 'email':
        return CONTACT_SECTION_CONSTANTS.TEXTS.EMAIL_CTA;
      case 'linkedin':
        return CONTACT_SECTION_CONSTANTS.TEXTS.LINKEDIN_CTA;
      default:
        return 'Get in touch';
    }
  };

  return (
    <div className={contactSectionStyles.contactCard}>
      <div className={contactSectionStyles.contactHeader}>
        <ContactIcon 
          icon={contactMethod.icon}
          className={contactSectionStyles.contactIcon}
        />
        <h4 className={contactSectionStyles.contactTitle}>
          {contactMethod.title}
        </h4>
      </div>
      <p className={contactSectionStyles.contactDescription}>
        {contactMethod.description}
      </p>
      <a
        href={contactMethod.href}
        className={contactSectionStyles.contactLink}
        {...(contactMethod.isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {getCta(contactMethod.type)}
      </a>
    </div>
  );
};
