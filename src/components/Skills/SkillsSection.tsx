import React, { memo } from 'react';
import type { SkillsSectionProps } from '../../types/skills.types';
import { SKILLS_SECTION_CONFIG, SKILLS_SECTION_STYLES } from '../../config/skills.config';
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
    className={SKILLS_SECTION_STYLES.CONTAINER}
    style={{ 
      minHeight: SKILLS_SECTION_CONFIG.LAYOUT.MIN_HEIGHT, 
      height: 'auto' 
    }}
  >
    <div className={SKILLS_SECTION_STYLES.CONTENT}>
      <SkillsSectionHeader title={title} subtitle={subtitle} />
      <SkillsGrid skills={skills} />
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
