import React from 'react';
import { HeroButton } from './HeroButton';
import { RayIcon, DownloadIcon } from '../../components/Hero/HeroIcons';
import { HERO_SECTION_CONFIG } from '../../config/hero.config';

interface HeroActionsProps {
  onSeeWorkClick?: () => void;
  onDownloadCVClick?: () => void;
  className?: string;
}

const HeroActions: React.FC<HeroActionsProps> = ({
  onSeeWorkClick,
  onDownloadCVClick,
  className = '',
}) => {
  return (
    <div className={`z-10 mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-md mx-auto ${className}`}>
      <HeroButton
        variant="primary"
        icon={<RayIcon className="ray-icon" />}
        text={HERO_SECTION_CONFIG.actions.seeWork.text}
        onClick={onSeeWorkClick}
        className="w-full sm:w-auto"
      />
      
      <HeroButton
        variant="secondary"
        icon={<DownloadIcon className="download-icon" />}
        text={HERO_SECTION_CONFIG.actions.downloadCV.text}
        onClick={onDownloadCVClick}
        className="w-full sm:w-auto"
      />
    </div>
  );
};

export default HeroActions;
