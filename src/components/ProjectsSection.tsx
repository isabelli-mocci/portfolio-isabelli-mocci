// path: src/components/ProjectsSection.tsx

import React, { useState, useRef, useEffect } from 'react';
import InfiniteMarquee from './InfiniteMarquee';
import ProjectsGrid from './ProjectsGrid';
import ProjectModal from './ProjectModal';
import SectionTitle from './ProjectsTitle';
import { projectsData } from '../types/projectsData';

const marqueeItems = [
  'MAINTAINABLE',
  'SEARCH OPTIMIZED',
  'USABLE',
  'RELIABLE',
  'PERFORMANT',
  'ACCESSIBLE',
  'SECURE',
  'INTERACTIVE',
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<import('../types/projectItem').ProjectItem | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = horizontalRef.current;
    if (!el) return;
    el.style.overflowY = 'hidden';
    el.style.overflowX = 'auto';
    const onWheel = (e: WheelEvent) => {
      if (!isActive) return;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if ((e.deltaY < 0 && el.scrollLeft > 0) || (e.deltaY > 0 && el.scrollLeft < maxScrollLeft)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
      if (el.scrollLeft >= maxScrollLeft - 1 && e.deltaY > 0) {
        document.body.style.overflowY = '';
      } else if (el.scrollLeft <= 0 && e.deltaY < 0) {
        document.body.style.overflowY = '';
      } else {
        document.body.style.overflowY = 'hidden';
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [isActive]);

  useEffect(() => {
    const el = horizontalRef.current;
    if (!el) return;
    if (isActive) {
      const atEnd = Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) < 1;
      if (!atEnd) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = '';
      }
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [isActive]);

  useEffect(() => {
    const styleId = 'hide-scrollbar-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section ref={sectionRef} className='relative flex flex-col items-center justify-center min-h-screen text-white px-6 text-center overflow-hidden bg-gradient-to-b from-bg-dark to-bg-medium'>
      <div className='w-full flex flex-col items-center relative z-10'>
        <div className='w-full mt-12'>
          <InfiniteMarquee items={marqueeItems} />
        </div>
        <SectionTitle />
        <div className='mb-16 sm:mb-24 md:mb-32'></div>
        <div
          ref={horizontalRef}
          className='w-full flex items-center justify-start py-8 min-h-[500px] md:min-h-[700px] lg:min-h-[900px] scrollbar-none hide-scrollbar'
          tabIndex={0}
          style={{
            scrollBehavior: 'smooth',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            minWidth: '100vw',
            minHeight: '500px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', minWidth: '1500px' }}>
            <ProjectsGrid
              projects={projectsData}
              onOpenModal={(project) => setSelectedProject(project)}
            />
          </div>
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
