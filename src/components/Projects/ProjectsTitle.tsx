import React from 'react';
import { RayIconDecorator } from '../About/RayIconDecorator';
import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';

const DECORATED_LETTERS = ['o'] as const;

const ProjectsTitle: React.FC = () => (
  <div className="mt-32 sm:mt-40 md:mt-[8rem] pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-[22rem] w-full flex flex-col items-start">
    <h2
      id="projects"
      className="projects-title text-primary-color mb-0 leading-none text-left relative"
      style={ABOUT_SECTION_CONFIG.layout.heading}
    >
      <HeadingContent />
    </h2>
  </div>
);

const HeadingContent = () => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    Pr{DECORATED_LETTERS.map(letter => (
      <CharacterWithRay key={letter} letter={letter} />
    ))}jects
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

export default ProjectsTitle;
