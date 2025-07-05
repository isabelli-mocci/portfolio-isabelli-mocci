import React, { memo } from 'react';
import { Sparkle, Zap } from 'lucide-react';
import { SKILLS_SECTION_CONFIG, SKILLS_SECTION_STYLES } from '../../config/skills.config';

interface SkillsSectionHeaderProps {
  readonly title?: string;
  readonly subtitle?: string;
}

const SkillsSectionHeader: React.FC<SkillsSectionHeaderProps> = memo(({
  title = SKILLS_SECTION_CONFIG.TITLE,
  subtitle = SKILLS_SECTION_CONFIG.SUBTITLE,
}) => (
  <>
    <h2 className={SKILLS_SECTION_STYLES.TITLE}>
      <span className={SKILLS_SECTION_STYLES.ICON_ACCENT}>
        <Sparkle className={SKILLS_SECTION_STYLES.ICON_SPARKLE} />
      </span>
      <span>{title}</span>
      <span className={SKILLS_SECTION_STYLES.ICON_ACCENT}>
        <Zap className={SKILLS_SECTION_STYLES.ICON_ZAP} />
      </span>
    </h2>

    <p className={SKILLS_SECTION_STYLES.SUBTITLE}>
      {subtitle}
    </p>
  </>
));

SkillsSectionHeader.displayName = 'SkillsSectionHeader';

export default SkillsSectionHeader;
