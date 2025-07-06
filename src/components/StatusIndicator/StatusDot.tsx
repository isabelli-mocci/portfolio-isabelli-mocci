import React from 'react';

interface StatusDotProps {
  readonly dotColor: string;
  readonly dotStyles: string;
}

const StatusDot: React.FC<StatusDotProps> = ({ 
  dotColor, 
  dotStyles 
}) => (
  <span
    className={`${dotStyles} ${dotColor}`}
    role="presentation"
    aria-hidden="true"
  />
);

export default StatusDot;
