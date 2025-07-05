import React, { memo, useCallback } from 'react';
import type { SkillsSectionProps, SkillData } from '../../types/skills.enhanced.types';
import { SKILLS_SECTION_CONFIG, SKILLS_SECTION_CLASSES } from '../../config/skills.enhanced.config';
import { SKILLS_ACCESSIBILITY } from '../../constants/skills.enhanced.constants';
import { useSkillsData } from '../../hooks/useSkills.enhanced';
import { SkillsSectionHeader } from './SkillsSectionHeader.enhanced';
import { SkillsGrid } from './SkillsGrid.enhanced';

export const SkillsSection: React.FC<SkillsSectionProps> = memo(({
  skills: customSkills,
  title = SKILLS_SECTION_CONFIG.title,
  subtitle = SKILLS_SECTION_CONFIG.subtitle,
  showCategories = false,
  filterByCategory,
}) => {
  const { skills } = useSkillsData(customSkills);

  const filteredSkills = React.useMemo(() => {
    if (!filterByCategory) return skills;
    return skills.filter(skill => skill.category === filterByCategory);
  }, [skills, filterByCategory]);

  const handleSkillClick = useCallback((skill: SkillData) => {
    console.log(`Skill clicked: ${skill.name}`);
  }, []);

  return (
    <section
      id="skills"
      className={SKILLS_SECTION_CLASSES.container}
      style={{ 
        minHeight: SKILLS_SECTION_CONFIG.layout.minHeight, 
        height: 'auto' 
      }}
      aria-label={SKILLS_ACCESSIBILITY.sectionLabel}
      aria-describedby="skills-description"
    >
      <div 
        className={SKILLS_SECTION_CLASSES.content}
        role="main"
      >
        <SkillsSectionHeader 
          title={title} 
          subtitle={subtitle} 
        />
        
        <div id="skills-description" className="sr-only">
          {SKILLS_ACCESSIBILITY.sectionDescription}
        </div>

        <SkillsGrid 
          skills={filteredSkills} 
          onSkillClick={handleSkillClick}
        />
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';
