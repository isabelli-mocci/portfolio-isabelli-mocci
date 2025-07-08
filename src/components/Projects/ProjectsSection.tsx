import React, { useState } from 'react';
import InfiniteMarquee from '../Marquee/InfiniteMarquee';
import ProjectsGrid from './ProjectsGrid';
import ProjectModal from './ProjectModal';
import ProjectsTitle from './ProjectsTitle';
import { projectsData } from '../../data/projects.data';
import { useGlobalProjectsScroll } from '../../hooks/useGlobalProjectsScroll';
import { scrollToNextSection, getNextSectionId, getPreviousSectionId } from '../../utils/scrollUtils';

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

const ProjectsSection: React.FC = () => {  const [selectedProject, setSelectedProject] = useState<
    import('../../types/projectItem').ProjectItem | null
  >(null);

  const handleReachEnd = () => {
    const nextSectionId = getNextSectionId('projects');
    if (nextSectionId) {
      setTimeout(() => {
        scrollToNextSection(nextSectionId, 80);
      }, 200);
    }
  };

  const handleReachStart = () => {
    const previousSectionId = getPreviousSectionId('projects');
    if (previousSectionId) {
      setTimeout(() => {
        scrollToNextSection(previousSectionId, 80);
      }, 200);
    }
  };

  const { scrollRef, sectionRef } = useGlobalProjectsScroll({ 
    wheelSensitivity: 6,
    onReachEnd: handleReachEnd,
    onReachStart: handleReachStart
  });

  return (
    <section
      ref={sectionRef}
      id='projects'
      className='projects-section relative flex flex-col items-center justify-center min-h-screen text-white text-center bg-gradient-to-b from-bg-dark to-bg-medium'
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
        <div className='mb-8 sm:mb-12 md:mb-16'></div>
        <div className='relative w-full'>
          <div 
            ref={scrollRef}
            className='projects-scroll-container w-full overflow-x-auto hide-scrollbar py-8 sm:py-12 md:py-16'
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className='flex flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 min-w-max pb-4 items-center'>
              <ProjectsGrid
                projects={projectsData}
                onOpenModal={project => setSelectedProject(project)}
              />
            </div>
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
                    setSelectedProject(projectsData[0]);
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
                    setSelectedProject(projectsData[projectsData.length - 1])
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
