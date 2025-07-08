import React from 'react';
import { BentoCard } from './BentoCard';
import { Globe } from 'lucide-react';

export const AvailabilityCard: React.FC = () => (
  <BentoCard className="group">
    <div className="space-y-4 h-full flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <div className="p-3 bg-green-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Globe className="w-6 h-6 text-green-400" />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-semibold">Available</span>
        </div>
        
        <div className="space-y-1">
          <p className="text-white text-xs font-medium">Remote Work</p>
        </div>
      </div>
    </div>
  </BentoCard>
);
