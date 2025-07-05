import React, { memo } from 'react';
import type { SkillsSectionProps } from '../../types/skills.types';
import { SKILLS_SECTION_CONFIG } from '../../config/skills.config';
import { createSkillsData } from '../../data/skills.data';
import SkillsSectionHeader from './SkillsSectionHeader';
import SkillsGrid from './SkillsGrid';

const SkillsSection: React.FC<SkillsSectionProps> = memo(({
  skills = createSkillsData(),
  title,
  subtitle,
}) => (
  <section
    id="skills"
    className={SKILLS_SECTION_CONFIG.styles.container}
    style={{ 
      minHeight: SKILLS_SECTION_CONFIG.layout.minHeight, 
      height: 'auto' 
    }}
  >
    <div className={SKILLS_SECTION_CONFIG.styles.content}>
      <SkillsSectionHeader title={title} subtitle={subtitle} />
      <SkillsGrid skills={skills} />
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
