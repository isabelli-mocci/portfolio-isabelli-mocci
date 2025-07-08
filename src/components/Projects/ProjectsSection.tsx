import React, { useState } from 'react';
import InfiniteMarquee from '../Marquee/InfiniteMarquee';
import ProjectsGrid from './ProjectsGrid';
import ProjectModal from './ProjectModal';
import ProjectsTitle from './ProjectsTitle';
import { projectsData } from '../../data/projects.data';

const MARQUEE_LABELS = [
  'MAINTAINABLE',
  'SEARCH OPTIMIZED',
  'USABLE',
  'RELIABLE',
  'PERFORMANT',
  'ACCESSIBLE',
  'SECURE',
  'INTERACTIVE',
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<
    import('../../types/projectItem').ProjectItem | null
  >(null);

  return (
    <section
      id='projects'
      className='projects-section relative flex flex-col items-center justify-center min-h-screen text-white px-6 text-center overflow-hidden bg-gradient-to-b from-bg-dark to-bg-medium'
    >
      <div className='w-full flex flex-col items-center relative z-10'>
        <div className='w-full mt-12'>
          <InfiniteMarquee
            items={[...MARQUEE_LABELS]}
            configuration={{
              speed: 30,
              direction: 'left',
              rotationAngle: -3,
              duplicateCount: 12,
            }}
            styleConfiguration={{
              containerClassName:
                'relative w-full overflow-hidden bg-bg-dark/80 backdrop-blur-sm py-4 border-t border-b border-white/10 flex items-center',
              itemClassName:
                'text-lg md:text-xl px-8 inline-flex items-center tracking-[0.2em] uppercase font-medium',
              separatorClassName: 'ml-16 text-primary-color/70',
              separatorSymbol: '✦',
            }}
          />
        </div>
        <ProjectsTitle />
        <div className='mb-16 sm:mb-24 md:mb-32'></div>
        <div className='w-full flex items-center justify-center py-8 min-h-[500px] md:min-h-[700px] lg:min-h-[900px] overflow-x-auto scrollbar-none'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              minWidth: 'max-content',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
          >
            <ProjectsGrid
              projects={projectsData}
              onOpenModal={project => setSelectedProject(project)}
            />
          </div>
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNextProject={
            selectedProject
              ? () => {
                  const idx = projectsData.findIndex(
                    p => p.id === selectedProject.id
                  );
                  if (idx !== -1 && idx < projectsData.length - 1) {
                    setSelectedProject(projectsData[idx + 1]);
                  } else if (idx === projectsData.length - 1) {
                    setSelectedProject(projectsData[0]); // loop para o primeiro
                  }
                }
              : undefined
          }
          onPrevProject={
            selectedProject
              ? () => {
                  const idx = projectsData.findIndex(
                    p => p.id === selectedProject.id
                  );
                  if (idx > 0) {
                    setSelectedProject(projectsData[idx - 1]);
                  } else if (idx === 0) {
                    setSelectedProject(projectsData[projectsData.length - 1]); // loop para o último
                  }
                }
              : undefined
          }
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
