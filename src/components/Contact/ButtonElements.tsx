import type { FC } from 'react';
import { createButtonVariant } from '../../styles/contact-button.styles';

export const ButtonBackground: FC = () => {
  const styles = createButtonVariant();
  return <span className={styles.background} />;
};

export const ButtonOverlay: FC = () => {
  const styles = createButtonVariant();
  return <span className={styles.overlay} />;
};
