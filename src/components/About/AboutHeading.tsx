import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';
import { RayIconDecorator } from './RayIconDecorator';

const DECORATED_LETTERS = ['b', 'o'] as const;

export const AboutHeading = () => {
  const { heading: headingConfig } = ABOUT_SECTION_CONFIG.layout;
  
  return (
    <h2
      id="about-heading"
      className="about-title text-primary-color mb-0 leading-none text-left relative"
      style={headingConfig}
    >
      <HeadingContent />
    </h2>
  );
};

const HeadingContent = () => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    A{DECORATED_LETTERS.map(letter => (
      <CharacterWithRay key={letter} letter={letter} />
    ))}ut
  </span>
);

interface CharacterWithRayProps {
  letter: string;
}

const CharacterWithRay = ({ letter }: CharacterWithRayProps) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {letter}
    <RayIconDecorator />
  </span>
);
