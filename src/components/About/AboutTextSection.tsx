import { aboutTextStyles } from '../../styles/aboutText.styles';
import { AboutTextAnimations } from './AboutTextAnimations';
import { AboutContentParagraphs } from './AboutContentParagraphs';

export const AboutTextSection = () => (
  <>
    <AboutContent />
    <AboutTextAnimations />
  </>
);

const AboutContent = () => (
  <section
    className={aboutTextStyles.section}
    role="region"
    aria-label="About Isabelli Mocci"
  >
    <div className={aboutTextStyles.container}>
      <AboutContentParagraphs />
    </div>
  </section>
);

export default AboutTextSection;
