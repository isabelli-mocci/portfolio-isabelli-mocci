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
        className='inline-flex items-center px-6 py-2 bg-bg-medium text-primary-color rounded-full text-base'
      >
        <span>Check code</span>
        <FiGithub className='ml-2 w-5 h-5' />
      </a>
    )}
    {websiteLink && (
      <a
        href={websiteLink}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center px-6 py-2 bg-primary-color rounded-full text-base'
      >
        <span>Visit Site</span>
        <svg className='ml-2 w-7 h-6 text-black' fill='none' stroke='currentColor' strokeWidth='3.5' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M7 17L17 7M7 7h10v10' />
        </svg>
      </a>
    )}
  </div>
);

export default ProjectActionButtons;
