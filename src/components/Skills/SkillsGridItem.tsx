import React, { memo } from 'react';
import type { SkillData } from '../../types/skills.types';
import { SKILLS_SECTION_STYLES } from '../../config/skills.config';
import SkillCard from './SkillCard';

interface SkillsGridItemProps {
  readonly skill: SkillData;
  readonly index: number;
}

const SkillsGridItem: React.FC<SkillsGridItemProps> = memo(({ skill }) => (
  <div className={SKILLS_SECTION_STYLES.GRID_ITEM}>
    <SkillCard skill={skill} />
  </div>
));

SkillsGridItem.displayName = 'SkillsGridItem';

export default SkillsGridItem;
