import React from 'react';
import { BentoCard } from './BentoCard';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const softSkills = [
  { icon: Heart, label: 'Empathetic', color: 'text-red-400', bg: 'bg-red-400/20' },
  { icon: Users, label: 'Team Player', color: 'text-blue-400', bg: 'bg-blue-400/20' },
  { icon: Lightbulb, label: 'Creative', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
  { icon: Target, label: 'Detail-oriented', color: 'text-green-400', bg: 'bg-green-400/20' },
];

export const SoftSkillsCard: React.FC = () => (
  <BentoCard className="group">
    <div className="space-y-5 h-full flex flex-col">
      <h3 className="text-white font-semibold text-xs text-center">Soft Skills</h3>
      
      <div className="grid grid-cols-2 gap-3 flex-1">
        {softSkills.map(({ icon: Icon, label, color, bg }, index) => (
          <div 
            key={label} 
            className="flex flex-col items-center text-center space-y-1 group-hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`p-2 ${bg} rounded-xl`}>
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
            <span className="text-gray-300 text-xs leading-tight">{label.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    </div>
  </BentoCard>
);
