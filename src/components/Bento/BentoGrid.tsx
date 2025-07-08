import React from 'react';
import { IntroCard } from './IntroCard';
import { WordPillsCard } from './WordPillsCard';
import { LocationCard } from './LocationCard';
import { AvailabilityCard } from './AvailabilityCard';
import { SoftSkillsCard } from './SoftSkillsCard';
import { ContactCard } from './ContactCard';
import { AboutHeading } from '../About/AboutHeading';

interface BentoGridProps {
  readonly onContactClick?: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onContactClick }) => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="mb-12">
      <AboutHeading />
    </div>
    
    <div >
      <div className="grid md:hidden grid-cols-1 gap-4">
        <div className="col-span-1">
          <IntroCard />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <AvailabilityCard />
          </div>
          <div className="col-span-1">
            <LocationCard />
          </div>
          <div className="col-span-1">
            <ContactCard onContactClick={onContactClick} />
          </div>
          <div className="col-span-1">
            <SoftSkillsCard />
          </div>
        </div>
        
        <div className="col-span-1">
          <WordPillsCard />
        </div>
      </div>

      <div className="hidden md:grid lg:hidden grid-cols-4 gap-6 auto-rows-[220px]">
        <div className="col-span-2 row-span-2">
          <IntroCard />
        </div>
        
        <div className="col-span-1">
          <AvailabilityCard />
        </div>
        <div className="col-span-1">
          <LocationCard />
        </div>
        <div className="col-span-1">
          <ContactCard onContactClick={onContactClick} />
        </div>
        <div className="col-span-1">
          <SoftSkillsCard />
        </div>
        
        <div className="col-span-2">
          <WordPillsCard />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-6 gap-6 auto-rows-[220px]">
        <div className="col-span-3 row-span-2">
          <IntroCard />
        </div>
        
        <div className="col-span-1">
          <AvailabilityCard />
        </div>
        <div className="col-span-1">
          <LocationCard />
        </div>
        <div className="col-span-1">
          <ContactCard onContactClick={onContactClick} />
        </div>
        
        <div className="col-span-1">
          <SoftSkillsCard />
        </div>
        <div className="col-span-2">
          <WordPillsCard />
        </div>
      </div>
    </div>
  </div>
);
