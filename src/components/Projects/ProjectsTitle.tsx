import React from 'react';
import RayIcon from '../../assets/icons/ray.svg';

const ProjectsTitle: React.FC = () => (
  <div className="mt-32 sm:mt-40 md:mt-[8rem] pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-[22rem] w-full flex flex-col items-start">
    <h2
      id="projects"
      className="text-primary-color mb-0 leading-none text-left relative"
      style={{
        fontSize: 'clamp(5rem, 18vw, 16rem)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        textShadow: '0 4px 24px rgba(0,0,0,0.25)',
      }}
    >
      <span style={{ position: 'relative', display: 'inline-block' }}>
        Pr
        <span style={{ position: 'relative', display: 'inline-block' }}>
          o
          <span
            style={{
              position: 'absolute',
              left: '55%',
              top: '58%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          >
            <img src={RayIcon} alt="ray" style={{ width: '.15em', height: '.15em' }} />
          </span>
        </span>
        jects
      </span>
    </h2>
    <div className="h-1 w-24 bg-primary-color rounded-full mt-4 mb-2 opacity-80" />
  </div>
);

export default ProjectsTitle;
