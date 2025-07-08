import React from 'react';
import { COMPONENT_BORDER_RADIUS } from '../../constants/borderRadius.constants';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
  hover?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'rounded-2xl p-6 h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-gradient-to-br from-[#23221f]/60 via-[#23221f]/50 to-[#191917]/60 border border-white/10 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)]',
    dark: 'bg-gradient-to-br from-[#23221f]/80 via-[#23221f]/70 to-[#191917]/80 border border-white/10 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
  };
  
  const hoverClasses = hover
    ? 'hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:border-white/20 hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
