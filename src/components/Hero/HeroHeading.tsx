import React from 'react';
import HeroStar from './HeroStar';
import HeroRay from './HeroRay';
import HeadingText from './HeadingText';
import DecoratedName from './DecoratedName';
import DescriptionLines from './DescriptionLines';
import type { HeroHeadingProps } from '../../types/heroHeading.types';
import { HERO_HEADING_CONFIG } from '../../config/heroHeading.config';
import { validateHeroHeadingProps, formatPersonName, formatProfession } from '../../utils/heroHeading.utils';

const HeroHeading: React.FC<HeroHeadingProps> = ({
  className = '',
  personName,
  profession,
  description,
  testId = 'hero-heading',
}) => {

  const {
    defaultPersonName,
    defaultProfession,
    defaultDescription,
  } = HERO_HEADING_CONFIG.text;

  const finalPersonName = formatPersonName(personName || defaultPersonName);
  const finalProfession = formatProfession(profession || defaultProfession);
  const finalDescription = description || defaultDescription;

  if (process.env.NODE_ENV === 'development') {
    const validation = validateHeroHeadingProps({
      personName: finalPersonName,
      profession: finalProfession,
      description: finalDescription,
    });
    
    if (!validation.isValid) {
      console.warn('HeroHeading validation errors:', validation.errors);
    }
  }

  const containerClasses = `${HERO_HEADING_CONFIG.styling.container} ${className}`.trim();

  return (
    <div className={containerClasses} data-testid={testId}>
      <HeadingText variant="primary">
        <DecoratedName
          name={finalPersonName}
          starIcon={<HeroStar />}
          rayIcon={<HeroRay />}
        />
        {' '}is a {finalProfession}
      </HeadingText>
      
      <DescriptionLines description={finalDescription} />
    </div>
  );
};

export default HeroHeading;
