import { AnimatedIcon } from './AnimatedIcon';
import { useAnimatedIcons } from '../../hooks/useAnimatedIcons';
import { aboutTextStyles } from '../../styles/aboutText.styles';

export const IntroductionParagraph = () => {
  const { icons } = useAnimatedIcons();
  
  return (
    <p className={aboutTextStyles.paragraph}>
      <span>My name is</span>
      <AnimatedIcon 
        {...icons.arrow}
        className={aboutTextStyles.spacedIcon}
      />
      <span className="ml-1">Isabelli Mocci!</span>
      <AnimatedIcon 
        {...icons.heart}
        className={aboutTextStyles.animatedIcon}
      />
      <span>I'm a frontend developer from Brazil.</span>
    </p>
  );
};
