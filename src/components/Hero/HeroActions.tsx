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
    <div className={`z-10 mt-10 flex flex-col sm:flex-row gap-4 ${className}`}>
      <HeroButton
        variant="primary"
        icon={<RayIcon className="ray-icon" />}
        text={HERO_SECTION_CONFIG.actions.seeWork.text}
        onClick={onSeeWorkClick}
      />
      
      <HeroButton
        variant="secondary"
        icon={<DownloadIcon className="download-icon" />}
        text={HERO_SECTION_CONFIG.actions.downloadCV.text}
        onClick={onDownloadCVClick}
      />
    </div>
  );
};

export default HeroActions;
