import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactSectionProps } from '../../types/contactSection.types';
import { useContactSection } from '../../hooks/useContactSection';
import { CONTACT_SECTION_CONFIG } from '../../config/contactSection.config';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';
import { contactSectionStyles } from '../../styles/contactSection.styles';
import { CloseButton } from './CloseButton';
import { SocialLinks } from './SocialLinks';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';
import { AvailabilityStatus } from './AvailabilityStatus';

export const ContactSection: React.FC<ContactSectionProps> = ({ isOpen, onClose }) => {
  const { activeTab, handleTabChange, handleOverlayClick, handleModalClick } = useContactSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={contactSectionStyles.overlay}
          variants={CONTACT_SECTION_CONFIG.animations.overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => handleOverlayClick(onClose)}
        >
          <motion.div
            className={contactSectionStyles.modal}
            variants={CONTACT_SECTION_CONFIG.animations.modal}
            onClick={handleModalClick}
          >
            <CloseButton 
              onClose={onClose} 
              ariaLabel={CONTACT_SECTION_CONSTANTS.TEXTS.CLOSE_BUTTON_ARIA} 
            />

            <SocialLinks socialLinks={CONTACT_SECTION_CONFIG.socialLinks} />

            <TabNavigation
              tabs={CONTACT_SECTION_CONFIG.tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            <TabContent 
              activeTab={activeTab} 
              contactMethods={CONTACT_SECTION_CONFIG.contactMethods}
            />

            <AvailabilityStatus availability={CONTACT_SECTION_CONFIG.availability} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSection;