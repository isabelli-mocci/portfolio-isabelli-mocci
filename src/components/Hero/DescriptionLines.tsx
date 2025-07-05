import React from 'react';
import HeadingText from './HeadingText';
import HeroAnimatedWord from './HeroAnimatedWord';
import type { HeroDescription } from '../../types/heroHeading.types';
import { HERO_HEADING_CONFIG } from '../../config/heroHeading.config';

interface DescriptionLinesProps {
  description: HeroDescription;
  className?: string;
}

export const DescriptionLines: React.FC<DescriptionLinesProps> = ({
  description,
  className = '',
}) => {
  const { highlight } = HERO_HEADING_CONFIG.styling;

  return (
    <div className={className} data-testid="description-lines">
      <HeadingText variant="secondary">
        <span className={highlight}>{description.prefix}</span> blends technical expertise and
      </HeadingText>
      <HeadingText variant="secondary">
        creativity to deliver <HeroAnimatedWord /> websites.
      </HeadingText>
    </div>
  );
};

export default DescriptionLines;
