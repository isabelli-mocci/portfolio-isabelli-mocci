import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '../../types/projectItem';
import previewWireframe from '../../assets/images/preview-wireframe.jpg';
import NavigationArrow from './NavigationArrow';
import ToolBadge from './ToolBadge';
import ProjectActionButtons from './ProjectActionButtons';
import { useHideHeaderNav } from '../../hooks/useHideHeaderNav';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNextProject?: () => void;
  onPrevProject?: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, y: -50, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNextProject, onPrevProject }) => {
  useHideHeaderNav({ isActive: !!project });
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          className="absolute inset-0 bg-bg-dark bg-opacity-70 backdrop-blur-lg"
          onClick={onClose}
        >
          {onPrevProject && (
            <NavigationArrow direction="left" onClick={onPrevProject} ariaLabel="Projeto anterior" />
          )}
          {onNextProject && (
            <NavigationArrow direction="right" onClick={onNextProject} ariaLabel="Próximo projeto" />
          )}
        </div>
        <motion.div
          className="relative flex flex-row w-full max-w-6xl h-[90vh] bg-gradient-to-br from-[#23221f]/80 via-[#23221f]/70 to-[#191917]/80 text-bg-dark rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.28)] hover:shadow-[0_24px_64px_0_rgba(0,0,0,0.55)] border border-white/10 p-0 overflow-hidden backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ minHeight: 'min(90vh, 700px)', maxHeight: '90vh' }}
          variants={modalVariants}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col justify-between items-start w-full max-w-[42%] h-full px-7 py-10 overflow-hidden gap-2">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-bg-dark transition-colors duration-200 text-2xl font-bold rounded-full p-0.5 bg-white/30 hover:bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] z-50 flex items-center justify-center w-8 h-8"
              aria-label="Fechar modal"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={2.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 14L14 6M6 6l8 8" />
              </svg>
            </button>
            <div className="flex flex-col gap-2">
              <h3 className="text-primary-color text-3xl font-medium leading-snug tracking-tight drop-shadow-sm text-left mt-4">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-lg font-semibold italic mb-4 text-left">
                {project.firmName}
              </p>
              <div className="text-neutral-400 text-sm mb-4 text-justify" style={{ textIndent: '2em', whiteSpace: 'pre-line' }}>
                <h4 className="text-neutral-200 text-lg font-bold mb-2 text-left" style={{ textIndent: 0 }}>Description</h4>
                <span className="pl-0 block">{project.description}</span>
              </div>
              {Array.isArray(project.myRole) && project.myRole.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-neutral-200 text-lg font-bold mb-2 text-left">My Role</h4>
                  <ul className="list-disc list-outside text-neutral-400 text-sm text-justify space-y-2 ml-8">
                    {project.myRole.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(project.toolsUsed) && project.toolsUsed.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-neutral-200 text-lg font-bold mb-2 text-left">Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.toolsUsed.map((tool, idx) => (
                      <ToolBadge key={idx} name={tool.name} iconUrl={tool.iconUrl} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <ProjectActionButtons codeLink={project.codeLink} websiteLink={project.websiteLink} />
          </div>
          <div className="flex items-center justify-center w-[58%] h-full bg-gradient-to-br from-[#23221f] to-[#191917] rounded-r-2xl overflow-y-auto overflow-x-hidden border-l border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.2)] custom-scrollbar-modal">
            <img
              src={previewWireframe}
              alt={`Preview of ${project.title}`}
              className="w-full object-contain scale-105 opacity-95"
              style={{ maxHeight: 'unset', maxWidth: '100%' }}
            />
          </div>
        </motion.div>
      </motion.div>
      <style>{`
.custom-scrollbar-modal::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
.custom-scrollbar-modal::-webkit-scrollbar-thumb {
  background: rgba(120,120,120,0.25);
  border-radius: 8px;
  border: 2px solid rgba(255,255,255,0.15);
}
.custom-scrollbar-modal::-webkit-scrollbar-thumb:hover {
  background: rgba(80,80,80,0.35);
}
.custom-scrollbar-modal {
  scrollbar-width: thin;
  scrollbar-color: rgba(120,120,120,0.25) transparent;
}
`}</style>
    </AnimatePresence>
  );
};

export default ProjectModal;
