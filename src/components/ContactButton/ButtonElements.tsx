import { memo } from 'react';
import type { FC } from 'react';
import { createButtonVariant } from '../../styles/contact-button.styles';

export const ButtonBackground: FC = memo(() => {
  const styles = createButtonVariant();
  return <span className={styles.background} />;
});

ButtonBackground.displayName = 'ButtonBackground';

export const ButtonOverlay: FC = memo(() => {
  const styles = createButtonVariant();
  return <span className={styles.overlay} />;
});

ButtonOverlay.displayName = 'ButtonOverlay';
