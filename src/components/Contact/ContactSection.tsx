import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactSectionProps } from '../../types/contactSection.types';
import { useContactSection } from '../../hooks/useContactSection';
import { CONTACT_SECTION_CONFIG } from '../../config/contactSection.config';
import { CONTACT_SECTION_CONSTANTS } from '../../constants/contactSection.constants';
import { AnimationService } from '../../services/AnimationService';
import contactSectionStyles from '../../styles/contactSection.styles';
import { CloseButton } from './CloseButton';
import { ModalHeader } from './ModalHeader';
import { SocialLinks } from './SocialLinks';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';
import { AvailabilityStatus } from './AvailabilityStatus';

export const ContactSection: React.FC<ContactSectionProps> = ({ isOpen, onClose }) => {
  const { activeTab, setActiveTab, closeModal, preventEventBubbling } = useContactSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={contactSectionStyles.overlay}
          variants={AnimationService.getOverlayAnimations()}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => closeModal(onClose)}
        >
          <motion.div
            className={contactSectionStyles.modal}
            variants={AnimationService.getModalAnimations()}
            onClick={preventEventBubbling}
          >
            <CloseButton 
              onClose={onClose} 
              ariaLabel={CONTACT_SECTION_CONSTANTS.TEXTS.CLOSE_BUTTON_ARIA} 
            />

            <ModalHeader />

            <SocialLinks socialLinks={CONTACT_SECTION_CONFIG.socialLinks} />

            <TabNavigation
              tabs={CONTACT_SECTION_CONFIG.tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <TabContent 
              activeTab={activeTab} 
              contactMethods={CONTACT_SECTION_CONFIG.contactMethods}
            />

            {activeTab === 'quick' && (
              <AvailabilityStatus availability={CONTACT_SECTION_CONFIG.availability} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSection;
