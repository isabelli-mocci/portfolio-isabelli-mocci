import { memo } from 'react';
import contactSectionStyles from '../../styles/contactSection.styles';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

interface CloseButtonProps {
  readonly onClose: () => void;
  readonly ariaLabel: string;
}

export const CloseButton = memo<CloseButtonProps>(({ onClose, ariaLabel }) => (
  <button
    onClick={onClose}
    className={contactSectionStyles.closeButton}
    aria-label={ariaLabel}
    type="button"
  >
    <svg
      className={CONTACT_SECTION_CONSTANTS.SPACING.ICON_SIZE}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
));

CloseButton.displayName = 'CloseButton';
