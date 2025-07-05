import type { FC } from 'react';
import { ArrowIcon } from './ArrowIcon';
import { createButtonVariant, createIconTransformClasses } from '../../styles/contact-button.styles';

interface ButtonContentProps {
  readonly label: string;
}

export const ButtonContent: FC<ButtonContentProps> = ({ label }) => {
  const styles = createButtonVariant();
  const iconClasses = createIconTransformClasses();

  return (
    <span className={styles.content}>
      {label}
      <span className={iconClasses}>
        <ArrowIcon />
      </span>
    </span>
  );
};
