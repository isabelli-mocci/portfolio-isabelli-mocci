import React from 'react';
import { BentoGrid } from '../Bento/BentoGrid';
import { aboutSectionStyles } from '../../styles/aboutSection.styles';

interface AboutSectionProps {
  readonly onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => (
  <section
    id="about-me"
    aria-labelledby="about-heading"
    className={aboutSectionStyles.section}
  >
    <BentoGrid onContactClick={onContactClick} />
  </section>
);

export default AboutSection;
