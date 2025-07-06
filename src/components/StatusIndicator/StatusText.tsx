import React from 'react';

interface StatusTextProps {
  readonly text: string;
  readonly textColor: string;
  readonly textStyles: string;
}

const StatusText: React.FC<StatusTextProps> = ({ 
  text, 
  textColor, 
  textStyles 
}) => (
  <span className="flex flex-col leading-tight">
    <span className={`flex items-center gap-1 ${textColor} ${textStyles}`}>
      {text}
    </span>
  </span>
);

export default StatusText;
