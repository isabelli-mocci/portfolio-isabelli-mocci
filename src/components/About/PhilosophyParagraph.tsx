import { AnimatedIconWrapper } from './AnimatedIconWrapper';
import { StraightLineHighlight } from './StraightLineHighlight';
import { aboutTextStyles } from '../../styles/aboutText.styles';

export const PhilosophyParagraph = () => (
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
    <ExclamationIconSpan />
  </p>
);

const ExclamationIconSpan = () => (
  <span>
    digital experiences
    <AnimatedIconWrapper
      iconKey="exclamation"
      className={aboutTextStyles.exclamationIcon}
    />
  </span>
);
