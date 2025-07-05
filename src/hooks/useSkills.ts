import { useMemo } from 'react';
import type { SkillData } from '../types/skills.types';
import { createSkillsData } from '../data/skills.data';

export interface UseSkillsReturn {
  readonly skills: readonly SkillData[];
  readonly skillsByCategory: Record<string, readonly SkillData[]>;
  readonly categories: readonly string[];
}

export const useSkills = (customSkills?: readonly SkillData[]): UseSkillsReturn => {
  const skills = useMemo(() => customSkills ?? createSkillsData(), [customSkills]);

  const skillsByCategory = useMemo(() => {
    return skills.reduce((acc, skill) => {
      const category = skill.category || 'other';
      return {
        ...acc,
        [category]: [...(acc[category] || []), skill],
      };
    }, {} as Record<string, readonly SkillData[]>);
  }, [skills]);

  const categories = useMemo(() => 
    Object.keys(skillsByCategory).sort(), 
    [skillsByCategory]
  );

  return {
    skills,
    skillsByCategory,
    categories,
  };
};
