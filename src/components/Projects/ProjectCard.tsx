import React, { memo, useRef, useState } from 'react';
import type { ProjectItem } from '../../types/projectItem';
import { motion } from 'framer-motion';
import GlassMorphismButton from './ProjectButtonGlass';
import previewWebsite from '../../assets/images/preview-website.jpg';

interface ProjectCardProps extends ProjectItem {
  onOpenModal: (project: ProjectItem) => void;
  previewImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(
  ({ onOpenModal, previewImage, ...project }) => {
    const handleOpenModal = () => onOpenModal(project);
    const previewRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [buttonOrigin, setButtonOrigin] = useState({ x: 0, y: 0 });
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const buttonSize = 74;

    return (
      <motion.div
        ref={cardRef}
        className='flex-none w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw] 2xl:w-[40vw]
        max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px]
        h-[65vh] min-h-[520px] max-h-[700px] p-3 sm:p-4 md:p-6 lg:p-8
        bg-gradient-to-br from-[#23221f]/80 via-[#23221f]/70 to-[#191917]/80 
        backdrop-blur-md 
        rounded-2xl 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.28)] 
        hover:shadow-[0_24px_64px_0_rgba(0,0,0,0.55)] 
        border border-white/10 
        flex flex-col justify-between project-card-snap
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        relative group focus:outline-none focus:ring-4 focus:ring-[#b0e57c]/20
        cursor-none overflow-hidden'
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28)' }}
        whileTap={{ scale: 0.98 }}
        tabIndex={0}
        role='button'
        aria-label={`Open project details ${project.title}`}
        onClick={handleOpenModal}
        onKeyPress={e => {
          if (e.key === 'Enter') handleOpenModal();
        }}
        onMouseEnter={e => {
          setButtonVisible(true);
          if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            
            setButtonOrigin({
              x: rect.width / 2 - buttonSize / 2,
              y: rect.height / 2 - buttonSize / 2,
            });
            
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const padding = buttonSize / 2 + 10;
            const maxX = rect.width - padding;
            const maxY = rect.height - padding;
            
            const constrainedX = Math.max(padding, Math.min(mouseX - buttonSize / 2, maxX));
            const constrainedY = Math.max(padding, Math.min(mouseY - buttonSize / 2, maxY));
            
            setMouse({
              x: constrainedX,
              y: constrainedY,
            });
          }
        }}
        onMouseLeave={() => {
          setButtonVisible(false);
        }}
        onMouseMove={e => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          const padding = buttonSize / 2 + 10;
          const maxX = rect.width - padding;
          const maxY = rect.height - padding;
          
          const constrainedX = Math.max(padding, Math.min(mouseX - buttonSize / 2, maxX));
          const constrainedY = Math.max(padding, Math.min(mouseY - buttonSize / 2, maxY));
          
          setMouse({
            x: constrainedX,
            y: constrainedY,
          });
        }}
        onFocus={() => setButtonVisible(true)}
        onBlur={() => setButtonVisible(false)}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: buttonVisible ? mouse.x : buttonOrigin.x,
            top: buttonVisible ? mouse.y : buttonOrigin.y,
            pointerEvents: 'auto',
            zIndex: 20,
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            filter: 'drop-shadow(0 4px 16px rgba(176,229,124,0.15))',
          }}
          animate={{
            opacity: buttonVisible ? 1 : 0,
            scale: buttonVisible ? 1.18 : 0.95,
            left: buttonVisible ? mouse.x : buttonOrigin.x,
            top: buttonVisible ? mouse.y : buttonOrigin.y,
          }}
          initial={{
            opacity: 0,
            scale: 0.95,
            left: buttonOrigin.x,
            top: buttonOrigin.y,
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
            left: { 
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            },
            top: { 
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            },
          }}
        >
          <GlassMorphismButton
            onClick={(event?: React.MouseEvent) => {
              event?.stopPropagation();
              handleOpenModal();
            }}
            aria-label={`View details for ${project.title}`}
            className='!bg-white/10 !backdrop-blur-lg !border !border-white/20 !shadow-[0_2px_8px_0_rgba(0,0,0,0.18)] hover:!bg-white/25 hover:!border-white/30 hover:shadow-[0_0_12px_rgba(176,229,124,0.2)] focus:!ring-0 focus:!outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
          />
        </motion.div>
        <div
          ref={previewRef}
          className='relative flex justify-center w-full h-[65%] min-h-[300px] max-h-[450px] aspect-[16/9] 
          bg-gradient-to-br from-[#23221f] to-[#191917] rounded-xl overflow-hidden mb-3 sm:mb-4 
          shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-sm 
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer'
        >
          <motion.img
            src={previewImage || previewWebsite}
            alt={`Screenshot of ${project.title} project website`}
            className='self-center w-full h-full object-cover'
            loading='lazy'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 520px, 740px'
            initial={{ scale: 1, filter: 'brightness(1) saturate(1)' }}
            whileHover={{ 
              scale: 1.1,
              filter: 'brightness(1.1) saturate(1.2)',
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 0.8,
                duration: 0.6,
              }
            }}
            whileTap={{ 
              scale: 1.05,
              filter: 'brightness(1.05) saturate(1.1)'
            }}
          />
          
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
            -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none'
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
          />
        </div>

        <div className='mb-2 sm:mb-3 text-left flex-shrink-0'>
          <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-1 tracking-tight drop-shadow-sm line-clamp-2'>
            {project.title}
          </h3>
          <p className='text-neutral-300 text-sm sm:text-base md:text-lg font-medium line-clamp-1'>
            {project.firmName}
          </p>
        </div>
        <div className='flex flex-wrap gap-1 mt-auto text-left flex-shrink-0 max-h-12 overflow-hidden'>
          {project.technologies.slice(0, 5).map((tech: string) => (
            <span
              key={tech}
              className='px-2 py-0.5 border text-neutral-100 text-xs rounded-md cursor-default flex-shrink-0'
              style={{
                boxShadow:
                  '0 2px 8px 0 rgba(255,255,255,0.08), 0 1.5px 6px 0 rgba(255,255,255,0.04) inset',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
