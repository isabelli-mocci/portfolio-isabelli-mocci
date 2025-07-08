import React from 'react';

interface ToolBadgeProps {
  name: string;
  iconUrl: string;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ name, iconUrl }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <button
      type="button"
      className="group relative mb-2"
      tabIndex={0}
      aria-label={`${name} info`}
      role="gridcell"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500" />
      
      <div className="relative p-3 flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
        <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
          <img
            src={iconUrl}
            alt={name}
            className='w-full h-full object-contain'
          />
        </span>
      </div>
      
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500" />
    </button>
    <span className='text-neutral-400 text-xs'>{name}</span>
  </div>
);

export default ToolBadge;
