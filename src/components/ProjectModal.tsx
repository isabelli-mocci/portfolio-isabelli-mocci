// path: src/components/ProjectModal.tsx

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '../types/projectItem';
import previewWireframe from '../assets/images/preview-wireframe.jpg';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -50,
      transition: { duration: 0.2 },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8'
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <div
            className='absolute inset-0 bg-bg-dark bg-opacity-70 backdrop-blur-lg'
            onClick={onClose}
          />

          <motion.div
            className='relative flex flex-row w-full max-w-6xl h-[90vh] bg-gradient-to-br from-[#23221f]/80 via-[#23221f]/70 to-[#191917]/80 text-bg-dark rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.28)] hover:shadow-[0_24px_64px_0_rgba(0,0,0,0.55)] border border-white/10 p-0 overflow-hidden backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'
            style={{ minHeight: 'min(90vh, 700px)', maxHeight: '90vh' }}
            variants={modalVariants}
            onClick={e => e.stopPropagation()}
          >
            {/* Left side: textual content */}
            <div className='flex flex-col justify-between items-start w-full max-w-[42%] h-full px-7 py-10 overflow-hidden gap-2'>
              <button
                onClick={onClose}
                className='absolute top-4 right-4 text-bg-dark  transition-colors duration-200 text-3xl font-bold rounded-full p-1 bg-white/10 hover:bg-white/25 backdrop-blur-lg border border-white/20 shadow-[0_2px_8px_0_rgba(0,0,0,0.18)]'
                aria-label='Close modal'
              >
                &times;
              </button>

              <div className='flex flex-col gap-2'>
                <h3 className='text-primary-color text-3xl font-medium leading-snug tracking-tight drop-shadow-sm text-left mt-4'>
                  {project.title}
                </h3>
                <p className='text-neutral-400 text-lg font-semibold mb-4 text-left'>
                  {project.firmName}
                </p>
                <p className='text-neutral-200 text-sm mb-4 text-justify'>
                  <h4 className='text-neutral-200 text-lg font-bold mb-2 text-left'>
                    Description
                  </h4>
                  {project.description}
                </p>

                {project.myRole && project.myRole.length > 0 && (
                  <div className='mb-5'>
                    <h4 className='text-neutral-200 text-lg font-bold mb-2 text-left'>
                      My Role
                    </h4>
                    <ul className='list-disc list-outside text-neutral-200 text-sm text-justify space-y-2 ml-8'>
                      {project.myRole.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.toolsUsed && project.toolsUsed.length > 0 && (
                  <div className='mb-5'>
                    <h4 className='text-neutral-200 text-lg font-bold mb-2 text-left'>
                      Tools
                    </h4>
                    <div className='flex flex-wrap gap-3'>
                      {project.toolsUsed.map((tool, index) => (
                        <div
                          key={index}
                          className='flex flex-col items-center justify-center text-center'
                        >
                          <button
                            type='button'
                            className='relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-inner backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 group z-20 focus:outline-none transition-all duration-200 mb-1'
                            tabIndex={0}
                            aria-label={`${tool.name} info`}
                          >
                            <span
                              className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-300 z-20'
                              style={{
                                boxShadow:
                                  'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)',
                              }}
                            />
                            <div className='w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-30'>
                              <span className='w-full h-full flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-5 transition-transform'>
                                <img
                                  src={tool.iconUrl}
                                  alt={tool.name}
                                  className='w-full h-full object-contain'
                                />
                              </span>
                            </div>
                          </button>
                          <span className='text-neutral-200 text-xs md:text-sm font-medium'>
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex justify-start gap-4 mt-6'>
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-6 py-2 bg-primary-color text-black rounded-full font-semibold text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-color border border-primary-color/30 shadow-[0_2px_8px_0_rgba(0,0,0,0.18)]'
                  >
                    <span>Check code</span>
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-6 py-2 bg-primary-color text-black rounded-full font-semibold text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-color border border-primary-color/30 shadow-[0_2px_8px_0_rgba(0,0,0,0.18)]'
                  >
                    <span>Live Site</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right side: main image with custom vertical scroll */}
            <div className='flex items-center justify-center w-[58%] h-full bg-gradient-to-br from-[#23221f] to-[#191917] rounded-r-2xl overflow-y-auto overflow-x-hidden border-l border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.2)] custom-scrollbar-modal'>
              <img
                src={previewWireframe}
                alt={`Preview of ${project.title}`}
                className='w-full object-contain scale-105 opacity-95'
                style={{ maxHeight: 'unset', maxWidth: '100%' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
