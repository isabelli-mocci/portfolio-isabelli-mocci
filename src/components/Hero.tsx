import React, { useCallback } from 'react';
import Logo from './Logo';
import HeroScrollBadge from './HeroScrollBadge';
import HeroBackground from './HeroBackground';
import HeroHeading from './HeroHeading';
import HeroActions from './HeroActions';
import { createScrollHandler } from '../utils/scroll.utils';
import { HERO_CONFIG } from '../config/hero.config';
import { HERO_STYLES } from '../styles/hero.styles';
import type { HeroSectionProps } from '../types/hero.types';

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const handleScrollToNextSection = useCallback(() => {
    const scrollHandler = createScrollHandler(
      HERO_CONFIG.scroll.targetSelector,
      HERO_CONFIG.scroll.behavior
    );
    scrollHandler();
  }, []);

  const handleSeeWorkClick = useCallback(() => {
    handleScrollToNextSection();
  }, [handleScrollToNextSection]);

  const handleDownloadCVClick = useCallback(() => {
    console.info('Download CV functionality to be implemented');
  }, []);

  return (
    <section className={`${HERO_STYLES.section} ${className}`}>
      <HeroBackground />
      <Logo />
      <HeroHeading />
      
      <HeroActions
        onSeeWorkClick={handleSeeWorkClick}
        onDownloadCVClick={handleDownloadCVClick}
      />

      <div className={HERO_STYLES.scrollBadge}>
        <HeroScrollBadge onClick={handleScrollToNextSection} />
      </div>
    </section>
  );
};

export default HeroSection;
