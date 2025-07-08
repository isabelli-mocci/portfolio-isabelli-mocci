import React from 'react';
import { BentoCard } from './BentoCard';
import { InteractivePillsContainer } from '../About/InteractivePillsContainer';

export const WordPillsCard: React.FC = () => (
  <BentoCard className="min-h-[180px] group overflow-hidden">
    <div className="text-center h-full flex flex-col">
      <h3 className="text-sm font-semibold text-white mb-2">My Interests</h3>
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-full h-full scale-75 md:scale-60 lg:scale-75 xl:scale-85 transform origin-center transition-transform duration-300 group-hover:scale-80 md:group-hover:scale-65 lg:group-hover:scale-80 xl:group-hover:scale-90">
          <InteractivePillsContainer compact />
        </div>
      </div>
    </div>
  </BentoCard>
);
