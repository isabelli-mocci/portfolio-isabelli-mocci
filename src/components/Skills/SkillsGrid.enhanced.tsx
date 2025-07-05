import React, { memo } from 'react';
import { motion } from 'framer-motion';
import type { SkillData } from '../../types/skills.enhanced.types';
import { SKILLS_SECTION_CLASSES } from '../../config/skills.enhanced.config';
import { createSkillsAnimationVariants } from '../../animations/skills.animations';
import { SkillCard } from './SkillCard.enhanced';

interface SkillsGridProps {
  readonly skills: readonly SkillData[];
  readonly onSkillClick?: (skill: SkillData) => void;
  readonly showTooltips?: boolean;
}

const SkillGridItem = memo(({ 
  skill, 
  index, 
  onSkillClick, 
  showTooltips 
}: {
  readonly skill: SkillData;
  readonly index: number;
  readonly onSkillClick?: (skill: SkillData) => void;
  readonly showTooltips?: boolean;
}) => (
  <motion.div
    className={SKILLS_SECTION_CLASSES.grid.item}
    custom={index}
    layout
    layoutId={`skill-${skill.id}`}
  >
    <SkillCard 
      skill={skill} 
      onClick={onSkillClick}
      showTooltip={showTooltips}
    />
  </motion.div>
));

SkillGridItem.displayName = 'SkillGridItem';

export const SkillsGrid: React.FC<SkillsGridProps> = memo(({ 
  skills, 
  onSkillClick,
  showTooltips = true 
}) => {
  const { containerVariants, itemVariants } = createSkillsAnimationVariants();

  return (
    <motion.div
      className={SKILLS_SECTION_CLASSES.grid.container}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      role="grid"
      aria-label="Grade de habilidades técnicas"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          variants={itemVariants}
        >
          <SkillGridItem
            skill={skill}
            index={index}
            onSkillClick={onSkillClick}
            showTooltips={showTooltips}
          />
        </motion.div>
      ))}
    </motion.div>
  );
});

SkillsGrid.displayName = 'SkillsGrid';
