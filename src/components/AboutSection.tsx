import { AboutTextSection } from './AboutTextSection';

import { aboutSectionStyles } from '../styles/aboutSection.styles';
import { AboutHeading } from './AboutHeading';
import { InteractivePillsContainer } from './InteractivePillsContainer';
import { ContactSection } from './ContactSection';

export const AboutSection = () => {
  return (
    <section
      id="about-me"
      aria-labelledby="about-heading"
      className={aboutSectionStyles.section}
    >
      <div className={aboutSectionStyles.container}>
        <HeaderSection />
        <InteractivePillsContainer />
      </div>

      <AboutTextSection />
      <ContactSection />
    </section>
  );
};

const HeaderSection = () => (
  <div 
    className={aboutSectionStyles.headingContainer}
    style={{ flex: '0 0 auto' }}
  >
    <AboutHeading />
    <div className={aboutSectionStyles.divider} />
  </div>
);

export default AboutSection;
