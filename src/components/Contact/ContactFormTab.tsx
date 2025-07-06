import React from 'react';
import { contactSectionStyles } from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

export const ContactFormTab: React.FC = () => (
  <div className={contactSectionStyles.formPlaceholder}>
    <p>{CONTACT_SECTION_CONSTANTS.TEXTS.FORM_PLACEHOLDER}</p>
  </div>
);
