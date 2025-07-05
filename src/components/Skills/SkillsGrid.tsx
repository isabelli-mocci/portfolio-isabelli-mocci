import React, { memo } from 'react';
import { motion } from 'framer-motion';
import type { SkillData } from '../../types/skills.types';
import { SKILLS_SECTION_STYLES } from '../../config/skills.config';
import { createSkillsAnimationVariants } from '../../utils/skills.utils';
import SkillsGridItem from './SkillsGridItem';

interface SkillsGridProps {
  readonly skills: readonly SkillData[];
}

const SkillsGrid: React.FC<SkillsGridProps> = memo(({ skills }) => {
  const { containerVariants, itemVariants } = createSkillsAnimationVariants();

  return (
    <motion.div
      className={SKILLS_SECTION_STYLES.GRID}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          animate={false}
          layout
          layoutRoot
        >
          <SkillsGridItem skill={skill} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
});

SkillsGrid.displayName = 'SkillsGrid';

export default SkillsGrid;
