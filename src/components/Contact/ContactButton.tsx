import type { FC } from 'react';
import type { ContactButtonProps } from '../../types/contact-button.types';
import { useButtonBehavior } from '../../hooks/useButtonBehavior';
import { ButtonContent } from './ButtonContent';
import { ButtonBackground, ButtonOverlay } from './ButtonElements';
import { createButtonVariant } from '../../styles/contact-button.styles';
import { createButtonClassName, createAriaLabel, shouldDisableNavigation } from '../../utils/contact-button.utils';
import { BUTTON_DEFAULTS } from '../../constants/contact-button.constants';

export const ContactButton: FC<ContactButtonProps> = ({
  href = BUTTON_DEFAULTS.HREF,
  label = BUTTON_DEFAULTS.LABEL,
  className = BUTTON_DEFAULTS.CLASS_NAME,
  disabled = BUTTON_DEFAULTS.DISABLED,
  onClick,
}) => {
  const { handleClick } = useButtonBehavior({ disabled, onClick });
  const styles = createButtonVariant();
  const isNavigationDisabled = shouldDisableNavigation(disabled);
  const buttonClassName = createButtonClassName(styles.container, className);
  const ariaLabel = createAriaLabel(label);

  return (
    <a 
      href={isNavigationDisabled ? undefined : href}
      aria-label={ariaLabel}
      tabIndex={isNavigationDisabled ? -1 : 0}
    >
      <button
        type="button"
        className={buttonClassName}
        onClick={handleClick}
        disabled={disabled}
        aria-label={label}
      >
        <ButtonBackground />
        <ButtonContent label={label} />
        <ButtonOverlay />
      </button>
    </a>
  );
};

export default ContactButton;
export type { ContactButtonProps };
