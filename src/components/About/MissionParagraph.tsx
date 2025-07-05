import { AnimatedIconWrapper } from './AnimatedIconWrapper';
import { CircleHighlight } from './CircleHighlight';
import { aboutTextStyles } from '../../styles/aboutText.styles';

export const MissionParagraph = () => (
  <p className={aboutTextStyles.paragraphWrap}>
    <span>My mission is to build digital products that are robust</span>
    <AnimatedIconWrapper iconKey="dumbbell" />
    <span>, scalable</span>
    <AnimatedIconWrapper iconKey="hand" />
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
