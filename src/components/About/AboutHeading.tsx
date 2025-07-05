import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';
import { RayIconDecorator } from './RayIconDecorator';

export const AboutHeading = () => {
  const { heading: headingConfig } = ABOUT_SECTION_CONFIG.layout;
  
  return (
    <h2
      id="about-heading"
      className="text-primary-color mb-0 leading-none text-left relative"
      style={{
        fontSize: headingConfig.fontSize,
        lineHeight: headingConfig.lineHeight,
        letterSpacing: headingConfig.letterSpacing,
        textShadow: headingConfig.textShadow,
      }}
    >
      <span style={{ position: 'relative', display: 'inline-block' }}>
        A
        <CharacterWithRay letter="b" />
        <CharacterWithRay letter="o" />
        ut
      </span>
    </h2>
  );
};

const CharacterWithRay = ({ letter }: { letter: string }) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {letter}
    <RayIconDecorator />
  </span>
);
