import { useState, useCallback } from 'react';
import type { ContactTabType } from '../types/contactSection.types';

export const useContactSection = () => {
  const [activeTab, setActiveTab] = useState<ContactTabType>('quick');

  const handleTabChange = useCallback((tab: ContactTabType) => {
    setActiveTab(tab);
  }, []);

  const handleOverlayClick = useCallback((onClose: () => void) => {
    onClose();
  }, []);

  const handleModalClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return {
    activeTab,
    handleTabChange,
    handleOverlayClick,
    handleModalClick,
  };
};
