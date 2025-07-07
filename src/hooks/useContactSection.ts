import { useState, useCallback } from 'react';
import type { ContactTabType } from '../types/contactSection.types';

interface ContactSectionState {
  readonly activeTab: ContactTabType;
}

interface ContactSectionActions {
  readonly setActiveTab: (tab: ContactTabType) => void;
  readonly closeModal: (onClose: () => void) => void;
  readonly preventEventBubbling: (event: React.MouseEvent) => void;
}

const INITIAL_STATE: ContactSectionState = {
  activeTab: 'quick',
};

export const useContactSection = (): ContactSectionState & ContactSectionActions => {
  const [activeTab, setActiveTab] = useState<ContactTabType>(INITIAL_STATE.activeTab);

  const handleTabChange = useCallback((tab: ContactTabType) => {
    setActiveTab(tab);
  }, []);

  const handleModalClose = useCallback((onClose: () => void) => {
    onClose();
  }, []);

  const handleEventPrevention = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return {
    activeTab,
    setActiveTab: handleTabChange,
    closeModal: handleModalClose,
    preventEventBubbling: handleEventPrevention,
  };
};
