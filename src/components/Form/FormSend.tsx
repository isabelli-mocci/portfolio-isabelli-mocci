import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import contactSectionStyles from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

interface SubmitButtonProps {
  readonly isSubmitting: boolean;
  readonly disabled?: boolean;
  readonly className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  disabled = false,
  className = contactSectionStyles.formSubmitButton,
}) => (
  <button
    type="submit"
    disabled={isSubmitting || disabled}
    className={className}
  >
    {isSubmitting ? (
      CONTACT_SECTION_CONSTANTS.TEXTS.FORM_SUBMIT_SENDING
    ) : (
      <>
        {CONTACT_SECTION_CONSTANTS.TEXTS.FORM_SUBMIT_BUTTON}
        <FaPaperPlane className="w-4 h-4" />
      </>
    )}
  </button>
);
