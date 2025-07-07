import { memo } from 'react';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';

export const ModalHeader = memo(() => (
  <div className="text-center mb-3">
    <h2 className="text-xl font-bold text-white mb-1">
      {CONTACT_SECTION_CONSTANTS.TEXTS.MODAL_TITLE}
    </h2>
    <p className="text-white/70 text-sm">
      {CONTACT_SECTION_CONSTANTS.TEXTS.MODAL_SUBTITLE}
    </p>
  </div>
));

ModalHeader.displayName = 'ModalHeader';
