import React, { memo } from 'react';
import type { SkillData } from '../../types/skills.types';

const SKILLS_ACCESSIBILITY = {
  SKILL_BUTTON_LABEL: (skillName: string) => `Visit ${skillName} official website`,
} as const;

interface SkillCardProps {
  readonly skill: SkillData;
}

const handleSkillClick = (url?: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const IconWrapper = memo(({ icon }: { readonly icon: React.ReactNode }) => <>{icon}</>);
IconWrapper.displayName = 'IconWrapper';

const SkillCard: React.FC<SkillCardProps> = memo(({ skill }) => (
  <div className="flex flex-col items-center h-full justify-between group">
    <div className="relative flex flex-col items-center">
      <div
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 z-40"
        style={{ minWidth: 'max-content', maxWidth: '140px' }}
      >
        <span
          className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-white text-[11px] md:text-xs font-medium shadow-lg border border-white/20 whitespace-nowrap"
          style={{
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
            letterSpacing: '0.01em',
          }}
        >
          {skill.name}
        </span>
        <span
          className="w-2 h-2 mt-[-2px] bg-white/10 backdrop-blur-md border-l border-t border-white/20 rotate-45"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
        />
      </div>
      <button
        type="button"
        className="group relative focus:outline-none focus:ring-2 focus:ring-text-white focus:ring-opacity-50 rounded-2xl"
        tabIndex={0}
        aria-label={SKILLS_ACCESSIBILITY.SKILL_BUTTON_LABEL(skill.name)}
        role="gridcell"
        onClick={() => handleSkillClick(skill.url)}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500" />
        
        <div className="relative p-4 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
          <span className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <IconWrapper icon={skill.icon} />
          </span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500" />
      </button>
    </div>
  </div>
));

SkillCard.displayName = 'SkillCard';

export default SkillCard;
