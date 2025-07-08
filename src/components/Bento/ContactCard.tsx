import React from 'react';
import { BentoCard } from './BentoCard';
import { Mail, ArrowUpRight } from 'lucide-react';

interface ContactCardProps {
  onContactClick?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onContactClick }) => (
  <BentoCard 
    variant="default" 
    hover={false}
    className="cursor-pointer group overflow-hidden relative"
  >
    {/* Background gradient animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0"></div>
    
    <div 
      className="relative flex flex-col items-center justify-center h-full space-y-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
      onClick={onContactClick}
    >
      <div className="relative">
        <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all duration-500 shadow-inner backdrop-blur-md border border-white/20">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <ArrowUpRight className="w-3 h-3 text-white absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12" />
      </div>
      
      <div className="text-center">
        <h3 className="text-white font-semibold text-sm group-hover:text-white transition-colors">Let's Chat!</h3>
        <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">Get in touch</p>
      </div>
      
      <div className="w-8 h-1 bg-white/40 rounded-full group-hover:w-12 group-hover:bg-white/80 transition-all duration-500"></div>
    </div>
  </BentoCard>
);
