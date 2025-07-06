import React from 'react';
import type { ContactMethodData } from '../../types/contactSection.types';
import { ContactCard } from './ContactCard';
import { contactSectionStyles } from '../../styles/contactSection.styles';

interface QuickContactTabProps {
  readonly contactMethods: readonly ContactMethodData[];
}

export const QuickContactTab: React.FC<QuickContactTabProps> = ({ contactMethods }) => (
  <div className={contactSectionStyles.contentGrid}>
    {contactMethods.map((method) => (
      <ContactCard key={method.id} contactMethod={method} />
    ))}
  </div>
);
