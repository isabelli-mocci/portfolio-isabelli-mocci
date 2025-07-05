import { AnimatedIconWrapper } from './AnimatedIconWrapper';
import { aboutTextStyles } from '../../styles/aboutText.styles';

export const IntroductionParagraph = () => (
  <p className={aboutTextStyles.paragraph}>
    <span>My name is</span>
    <AnimatedIconWrapper 
      iconKey="arrow"
      className={aboutTextStyles.spacedIcon}
    />
    <span className="ml-1">Isabelli Mocci!</span>
    <AnimatedIconWrapper iconKey="heart" />
    <span>I'm a frontend developer from Brazil.</span>
  </p>
);
