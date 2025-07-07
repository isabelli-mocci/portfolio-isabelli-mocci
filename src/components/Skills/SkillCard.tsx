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
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 z-40"
        style={{ minWidth: 'max-content', maxWidth: '140px' }}
      >
        <span
          className="px-2 py-1 rounded-md bg-neutral-800/95 text-gray-100 text-[11px] md:text-xs font-medium shadow-lg backdrop-blur-sm border border-neutral-700 whitespace-nowrap"
          style={{
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
            letterSpacing: '0.01em',
          }}
        >
          {skill.name}
        </span>
        <span
          className="w-2 h-2 mt-[-2px] bg-neutral-800/95 border-l border-t border-neutral-700 rotate-45"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
        />
      </div>
      <button
        type="button"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-inner backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 group z-20 focus:outline-none focus:ring-2 focus:ring-text-white focus:ring-opacity-50 transition-all duration-200 hover:cursor-pointer"
        tabIndex={0}
        aria-label={SKILLS_ACCESSIBILITY.SKILL_BUTTON_LABEL(skill.name)}
        role="gridcell"
        onClick={() => handleSkillClick(skill.url)}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-300 z-20"
          style={{
            boxShadow:
              'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
        <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-30">
          <span className="w-full h-full flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-5 transition-transform">
            <IconWrapper icon={skill.icon} />
          </span>
        </div>
      </button>
    </div>
  </div>
));

SkillCard.displayName = 'SkillCard';

export default SkillCard;
