import React from 'react';
import type { StatusIndicatorProps } from '../../types/statusIndicator.types';
import { STATUS_INDICATOR_CONSTANTS } from '../../constants/statusIndicator.constants';

interface StatusPulseProps {
  readonly pulseColor: string;
  readonly size: NonNullable<StatusIndicatorProps['size']>;
  readonly animated: boolean;
}

const StatusPulse: React.FC<StatusPulseProps> = ({ 
  pulseColor, 
  size, 
  animated 
}) => {
  if (!animated) return null;

  const sizeClass = size === 'small' ? 'h-3 w-3' : 
                  size === 'medium' ? 'h-5 w-5' : 'h-7 w-7';

  return (
    <span
      className={`
        ${STATUS_INDICATOR_CONSTANTS.ANIMATION.PULSE_CLASS}
        absolute
        inline-flex
        ${sizeClass}
        rounded-full
        ${pulseColor}
        ${STATUS_INDICATOR_CONSTANTS.ANIMATION.PULSE_OPACITY}
      `}
      aria-hidden={STATUS_INDICATOR_CONSTANTS.ACCESSIBILITY.PULSE_ARIA_HIDDEN}
    />
  );
};

export default StatusPulse;
