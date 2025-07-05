import React, { memo } from 'react';
import type { SkillData } from '../../types/skills.types';
import { SKILLS_SECTION_CONFIG } from '../../config/skills.config';
import SkillCard from './SkillCard';

interface SkillsGridItemProps {
  readonly skill: SkillData;
  readonly index: number;
}

const SkillsGridItem: React.FC<SkillsGridItemProps> = memo(({ skill }) => (
  <div className={SKILLS_SECTION_CONFIG.styles.gridItem}>
    <SkillCard skill={skill} />
  </div>
));

SkillsGridItem.displayName = 'SkillsGridItem';

export default SkillsGridItem;
