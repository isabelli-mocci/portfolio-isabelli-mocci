import { useCallback } from 'react';
import { scrollService } from '../services/ScrollService';
import { HERO_SECTION_CONFIG } from '../config/hero.refactored.config';
import type { ButtonVariant } from '../types/hero.refactored.types';

export const useHeroActions = () => {
  const handleSeeWork = useCallback(() => {
    const { targetSelector } = HERO_SECTION_CONFIG.actions.seeWork;
    const { fallbackSelector, behavior } = HERO_SECTION_CONFIG.scroll;
    
    scrollService.scrollToTarget(
      { selector: targetSelector, fallbackSelector },
      { behavior }
    );
  }, []);

  const handleDownloadCV = useCallback(() => {
    const { downloadUrl } = HERO_SECTION_CONFIG.actions.downloadCV;
    
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'isabelli-mocci-cv.pdf';
      link.click();
    }
  }, []);

  const createButtonVariants = useCallback((): ButtonVariant[] => {
    return [
      {
        type: 'primary',
        icon: '⚡',
        text: HERO_SECTION_CONFIG.actions.seeWork.text,
        action: handleSeeWork,
      },
      {
        type: 'secondary', 
        icon: '📄',
        text: HERO_SECTION_CONFIG.actions.downloadCV.text,
        action: handleDownloadCV,
      },
    ];
  }, [handleSeeWork, handleDownloadCV]);

  return {
    handleSeeWork,
    handleDownloadCV,
    createButtonVariants,
  };
};
