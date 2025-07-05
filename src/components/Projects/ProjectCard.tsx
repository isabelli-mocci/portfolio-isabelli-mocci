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
    const [hovered, setHovered] = useState(false);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [buttonVisible, setButtonVisible] = useState(false);
    const [buttonOrigin, setButtonOrigin] = useState({ x: 0, y: 0 });
    const buttonSize = 74;

    return (
      <motion.div
        ref={cardRef}
        className='flex-none w-full max-w-[calc(100vw-2rem)] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[740px] xl:max-w-[860px] h-auto min-h-[520px] md:min-h-[640px] lg:min-h-[720px] p-6 md:p-10 
        bg-gradient-to-br from-[#23221f]/80 via-[#23221f]/70 to-[#191917]/80 
        backdrop-blur-md 
        rounded-2xl 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.28)] 
        hover:shadow-[0_24px_64px_0_rgba(0,0,0,0.55)] 
        border border-white/10 
        flex flex-col justify-between mx-[clamp(0.5rem,1vw,1rem)] md:mx-[clamp(1rem,2vw,2rem)] my-6 
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        relative group focus:outline-none focus:ring-4 focus:ring-[#b0e57c]/20'
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28)' }}
        whileHover={{
          scale: 1.035,
          y: -8,
          boxShadow: '0 24px 64px 0 rgba(0,0,0,0.55)',
          transition: {
            type: 'spring',
            stiffness: 180,
            damping: 18,
            mass: 1,
            duration: 0.45,
          },
        }}
        whileTap={{ scale: 0.98, y: 0 }}
        tabIndex={0}
        role='button'
        aria-label={`Open project details ${project.title}`}
        onClick={handleOpenModal}
        onKeyPress={e => {
          if (e.key === 'Enter') handleOpenModal();
        }}
        onMouseEnter={e => {
          setHovered(true);
          setButtonVisible(true);
          if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setButtonOrigin({
              x: rect.width / 2 - buttonSize / 2,
              y: rect.height / 2 - buttonSize / 2,
            });
            setMouse({
              x: e.clientX - rect.left - buttonSize / 2,
              y: e.clientY - rect.top - buttonSize / 2,
            });
          }
        }}
        onMouseLeave={() => {
          setHovered(false);
          setButtonVisible(false);
        }}
        onMouseMove={e => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          setMouse({
            x: e.clientX - rect.left - buttonSize / 2,
            y: e.clientY - rect.top - buttonSize / 2,
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
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1.18 : 0.95,
            left: hovered ? mouse.x : buttonOrigin.x,
            top: hovered ? mouse.y : buttonOrigin.y,
            transition: {
              type: 'spring',
              stiffness: 320,
              damping: 18,
              mass: 0.7,
              delay: 0.07,
            },
          }}
          initial={{
            opacity: 0,
            scale: 0.95,
            left: buttonOrigin.x,
            top: buttonOrigin.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 22,
            mass: 0.9,
          }}
        >
          <GlassMorphismButton
            onClick={(event?: React.MouseEvent) => {
              event?.stopPropagation();
              handleOpenModal();
            }}
            aria-label={`View details for ${project.title}`}
            className='!bg-white/10 !backdrop-blur-lg !border !border-white/20 !shadow-[0_2px_8px_0_rgba(0,0,0,0.18)] hover:!bg-white/25 hover:!border-white/30 hover:shadow-[0_0_12px_rgba(176,229,124,0.2)] focus:!ring-2 focus:!ring-[#b0e57c] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
          />
        </motion.div>
        <div
          ref={previewRef}
          className='relative flex justify-center w-full h-[240px] md:h-[320px] lg:h-[400px] aspect-[16/9] bg-gradient-to-br from-[#23221f] to-[#191917] rounded-xl overflow-hidden mb-6 mx-[clamp(-1rem,-2vw,-1.25rem)] mt-[clamp(-1rem,-2vw,-1.25rem)] shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-sm group-hover:scale-[1.03] group-hover:border-[#b0e57c]/20 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'
        >
          <motion.img
            src={previewImage || previewWebsite}
            alt={`Screenshot of ${project.title} project website`}
            className='self-center w-full h-full object-cover scale-105 opacity-95'
            loading='lazy'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 520px, 740px'
            initial={{ scale: 1.05 }}
            animate={{ scale: hovered ? 1.13 : 1.05 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
              mass: 0.8,
              duration: 0.7,
            }}
          />
        </div>

        <div className='mb-6 text-left'>
          <h3 className='text-white text-4xl md:text-5xl leading-snug mb-4 tracking-tight drop-shadow-sm'>
            {project.title}
          </h3>
          <p className='text-neutral-300 text-xl md:text-2xl font-medium'>
            {project.firmName}
          </p>
        </div>
        <div className='flex flex-wrap gap-2 mt-4 text-left'>
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className='px-4 py-1.5 border text-neutral-100 text-sm md:text-base rounded-full cursor-default'
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
