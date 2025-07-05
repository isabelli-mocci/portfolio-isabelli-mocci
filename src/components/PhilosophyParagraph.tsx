import { AnimatedIcon } from './AnimatedIcon';
import { StraightLineHighlight } from './StraightLineHighlight';
import { useAnimatedIcons } from '../hooks/useAnimatedIcons';
import { aboutTextStyles } from '../styles/aboutText.styles';
import { formatMarginStyle } from '../utils/aboutText.utils';

export const PhilosophyParagraph = () => {
  const { icons } = useAnimatedIcons();
  
  return (
    <p className={aboutTextStyles.paragraphLast}>
      To me,{' '}
      <StraightLineHighlight>
        web development isn't just about writing code
      </StraightLineHighlight>
      , it's about thinking critically about how technology can truly
      serve people through{' '}
      <span className={aboutTextStyles.emphasized}>
        engaging, intuitive and immersive{' '}
      </span>
      <span>
        digital experiences
        <AnimatedIcon 
          {...icons.exclamation}
          className={aboutTextStyles.exclamationIcon}
          style={{ 
            ...icons.exclamation.style,
            ...formatMarginStyle('-0.35em', '0.1em')
          }}
        />
      </span>
    </p>
  );
};
