import { memo } from 'react';
import type { FC } from 'react';
import { ARROW_ICON_CONFIG } from '../../constants/contact-button.constants';

export const ArrowIcon: FC = memo(() => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox={ARROW_ICON_CONFIG.VIEW_BOX}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d={ARROW_ICON_CONFIG.PATH} />
  </svg>
));

ArrowIcon.displayName = 'ArrowIcon';
