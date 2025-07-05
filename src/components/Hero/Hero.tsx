import React from 'react';
import Logo from './Logo';
import HeroScrollBadge from './HeroScrollBadge';
import HeroBackground from '../Background/HeroBackground';
import HeroHeading from './HeroHeading';
import HeroActions from './HeroActions';
import { useHeroActions } from '../../hooks/useHeroActions';
import { HERO_STYLES } from '../../styles/hero.styles';
import type { HeroSectionProps } from '../../types/hero.types';

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const { handleSeeWork, handleDownloadCV } = useHeroActions();

  return (
    <section className={`${HERO_STYLES.section} ${className}`}>
      <HeroBackground />
      <Logo />
      <HeroHeading />
      
      <HeroActions
        onSeeWorkClick={handleSeeWork}
        onDownloadCVClick={handleDownloadCV}
      />

      <div className={HERO_STYLES.scrollBadge}>
        <HeroScrollBadge onClick={handleSeeWork} />
      </div>
    </section>
  );
};

export default HeroSection;
