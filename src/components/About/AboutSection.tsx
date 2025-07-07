import React from 'react';
import { AboutTextSection } from './AboutTextSection';
import { SectionWrapper } from '../ContactButton/SectionWrapper';
import { AboutHeading } from './AboutHeading';
import { InteractivePillsContainer } from './InteractivePillsContainer';
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
    <MainContentContainer />
    <AboutTextSection />
    <SectionWrapper onClick={onContactClick} />
  </section>
);

const MainContentContainer = () => (
  <div className={aboutSectionStyles.container}>
    <HeaderSection />
    <InteractivePillsContainer />
  </div>
);

const HeaderSection = () => (
  <header 
    className={aboutSectionStyles.headingContainer}
    style={{ flex: '0 0 auto' }}
  >
    <AboutHeading />
    <div className={aboutSectionStyles.divider} />
  </header>
);

export default AboutSection;
