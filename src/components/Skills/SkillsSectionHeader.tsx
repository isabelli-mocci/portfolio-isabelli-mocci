import React, { memo } from 'react';
import { Sparkle, Zap } from 'lucide-react';
import { SKILLS_SECTION_CONFIG } from '../../config/skills.config';

interface SkillsSectionHeaderProps {
  readonly title?: string;
  readonly subtitle?: string;
}

const SkillsSectionHeader: React.FC<SkillsSectionHeaderProps> = memo(({
  title = SKILLS_SECTION_CONFIG.content.title,
  subtitle = SKILLS_SECTION_CONFIG.content.subtitle,
}) => (
  <>
    <h2 className={SKILLS_SECTION_CONFIG.styles.title}>
      <span className={SKILLS_SECTION_CONFIG.styles.iconAccent}>
        <Sparkle className={SKILLS_SECTION_CONFIG.styles.iconSparkle} />
      </span>
      <span>{title}</span>
      <span className={SKILLS_SECTION_CONFIG.styles.iconAccent}>
        <Zap className={SKILLS_SECTION_CONFIG.styles.iconZap} />
      </span>
    </h2>

    <p className={SKILLS_SECTION_CONFIG.styles.subtitle}>
      {subtitle}
    </p>
  </>
));

SkillsSectionHeader.displayName = 'SkillsSectionHeader';

export default SkillsSectionHeader;
