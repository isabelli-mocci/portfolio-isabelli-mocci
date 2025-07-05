import React from 'react';

interface ToolBadgeProps {
  name: string;
  iconUrl: string;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ name, iconUrl }) => (
  <div className='flex flex-col items-center justify-center text-center'>
    <button
      type='button'
      className='relative flex items-center justify-center w-14 h-14 rounded-2xl shadow-inner backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 group z-20 focus:outline-none transition-all duration-200 mb-1'
      tabIndex={0}
      aria-label={`${name} info`}
    >
      <span
        className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-300 z-20'
        style={{
          boxShadow:
            'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div className='w-6 h-6 md:w-7 md:h-7 flex items-center justify-center z-30'>
        <span className='w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform'>
          <img
            src={iconUrl}
            alt={name}
            className='w-full h-full object-contain'
          />
        </span>
      </div>
    </button>
    <span className='text-neutral-400 text-xs'>{name}</span>
  </div>
);

export default ToolBadge;
