import React from 'react';
import { FiGithub } from 'react-icons/fi';

interface ProjectActionButtonsProps {
  codeLink?: string;
  websiteLink?: string;
}

const ProjectActionButtons: React.FC<ProjectActionButtonsProps> = ({ codeLink, websiteLink }) => (
  <div className='flex justify-start gap-4 mt-6'>
    {codeLink && (
      <a
        href={codeLink}
        target='_blank'
        rel='noopener noreferrer'
        className='hero-btn-secondary relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group min-h-[44px] hover:scale-[1.02] active:scale-[0.98] will-change-transform bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] text-white/90 border border-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 hover:bg-gradient-to-r hover:from-white/[0.06] hover:via-white/[0.1] hover:to-white/[0.06] hover:border-white/[0.15] hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] overflow-hidden supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-white/[0.03] supports-[backdrop-filter]:via-white/[0.06] supports-[backdrop-filter]:to-white/[0.03]'
      >
        <span className="hero-btn-text">CHECK CODE</span>
        <FiGithub className='hero-btn-icon w-5 h-5' />
      </a>
    )}
    {websiteLink && (
      <a
        href={websiteLink}
        target='_blank'
        rel='noopener noreferrer'
        className='hero-btn-primary relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group min-h-[44px] hover:scale-[1.02] active:scale-[0.98] will-change-transform bg-gradient-to-r from-[#adff2f] via-[#adff2f] to-[#adff2f] text-black hover:from-[#9ef52a] hover:via-[#9ef52a] hover:to-[#9ef52a] shadow-lg hover:shadow-xl hover:shadow-[#adff2f]/20'
      >
        <span className="hero-btn-text">VISIT SITE</span>
        <svg className='hero-btn-icon w-7 h-6 text-black' fill='none' stroke='currentColor' strokeWidth='3.5' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M7 17L17 7M7 7h10v10' />
        </svg>
      </a>
    )}
  </div>
);

export default ProjectActionButtons;
