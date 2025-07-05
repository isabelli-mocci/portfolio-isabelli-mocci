import { AnimatedIcon } from './AnimatedIcon';
import { CircleHighlight } from './CircleHighlight';
import { useAnimatedIcons } from '../../hooks/useAnimatedIcons';
import { aboutTextStyles } from '../../styles/aboutText.styles';

export const MissionParagraph = () => {
  const { icons } = useAnimatedIcons();
  
  return (
    <p className={aboutTextStyles.paragraphWrap}>
      <span>My mission is to build digital products that are robust</span>
      <AnimatedIcon 
        {...icons.dumbbell}
        className={aboutTextStyles.animatedIcon}
      />
      <span>, scalable</span>
      <AnimatedIcon 
        {...icons.hand}
        className={aboutTextStyles.animatedIcon}
      />
      <span>and</span>
      <CircleHighlight>
        personalized.
      </CircleHighlight>
      <span>
        The true value of my work lies in what I develop with dedication,
        purpose and intentionality.
      </span>
    </p>
  );
};
