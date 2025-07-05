import React from 'react';

const StatusIndicator: React.FC = () => (
  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-green-700/40 via-green-800/30 to-green-900/30 border border-green-400/30 shadow-md backdrop-blur-md ml-0">
    <span className="relative flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-md m-auto"></span>
    </span>
    <span className="flex flex-col leading-tight">
      <span className="flex items-center gap-1 text-green-300 font-bold text-xs tracking-wide uppercase">
        AVAILABLE
      </span>
    </span>
  </div>
);

export default StatusIndicator;
