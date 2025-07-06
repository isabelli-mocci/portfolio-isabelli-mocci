import React from 'react';
import type { AvailabilityStatusData } from '../../types/contactSection.types';
import { contactSectionStyles } from '../../styles/contactSection.styles';

interface AvailabilityStatusProps {
  readonly availability: AvailabilityStatusData;
}

export const AvailabilityStatus: React.FC<AvailabilityStatusProps> = ({ availability }) => (
  <div className={contactSectionStyles.availabilityContainer}>
    <div className={contactSectionStyles.availabilityBadge}>
      <span className={contactSectionStyles.availabilityDot} />
      {availability.statusText}
    </div>
  </div>
);
