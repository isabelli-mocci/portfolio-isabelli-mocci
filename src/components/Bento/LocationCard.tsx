import React from 'react';
import { BentoCard } from './BentoCard';
import { MapPin } from 'lucide-react';

export const LocationCard: React.FC = () => (
  <BentoCard className="text-center group">
    <div className="flex flex-col items-center justify-center h-full space-y-3">
      <div className="relative">
        <div className="p-3 bg-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <MapPin className="w-6 h-6 text-orange-400" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-bg-dark"></div>
      </div>
      <div className="space-y-1">
        <p className="text-white font-semibold text-sm">São Paulo, SP</p>
        <p className="text-gray-400 text-xs">🇧🇷 Brazil</p>
      </div>
    </div>
  </BentoCard>
);
