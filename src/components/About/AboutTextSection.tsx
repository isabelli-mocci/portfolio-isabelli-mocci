import React from 'react';
import { aboutTextStyles } from '../../styles/aboutText.styles';
import { AboutTextAnimations } from './AboutTextAnimations';
import { IntroductionParagraph } from './IntroductionParagraph';
import { MissionParagraph } from './MissionParagraph';
import { PhilosophyParagraph } from './PhilosophyParagraph';

export const AboutTextSection: React.FC = () => (
  <>
    <section
      className={aboutTextStyles.section}
      role="region"
      aria-label="About Isabelli Mocci"
    >
      <div className={aboutTextStyles.container}>
        <IntroductionParagraph />
        <MissionParagraph />
        <PhilosophyParagraph />
      </div>
    </section>
    <AboutTextAnimations />
  </>
);

export default AboutTextSection;
