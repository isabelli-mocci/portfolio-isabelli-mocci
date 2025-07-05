import { AboutTextSection } from './AboutTextSection';
import { ContactSection } from '../Contact/ContactSection';
import { AboutHeading } from './AboutHeading';
import { InteractivePillsContainer } from './InteractivePillsContainer';
import { aboutSectionStyles } from '../../styles/aboutSection.styles';

export const AboutSection = () => (
  <section
    id="about-me"
    aria-labelledby="about-heading"
    className={aboutSectionStyles.section}
  >
    <MainContentContainer />
    <AboutTextSection />
    <ContactSection />
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
