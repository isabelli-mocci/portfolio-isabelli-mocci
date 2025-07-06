import React from 'react';
import type { ContactIconConfig } from '../../types/contactSection.types';

interface ContactIconProps {
  readonly icon: ContactIconConfig;
  readonly className?: string;
}

export const ContactIcon: React.FC<ContactIconProps> = ({ icon, className = '' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox={icon.viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={icon.strokeWidth || '2'}
      d={icon.path}
    />
  </svg>
);
