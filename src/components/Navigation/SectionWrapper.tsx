import React from 'react';
import ContactButton from '../Navigation/ContactButton';

interface SectionWrapperProps {
  readonly onClick?: () => void;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ onClick }) => (
  <div className="flex items-center justify-center w-full mt-2 mb-8">
    <div className="scale-125 md:scale-150">
      <ContactButton onClick={onClick} />
    </div>
  </div>
);
