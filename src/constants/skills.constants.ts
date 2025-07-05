export const SKILLS_ERROR_MESSAGES = {
  SKILLS_LOAD_FAILED: 'Failed to load skills data',
  INVALID_SKILL_DATA: 'Invalid skill data provided',
  ANIMATION_ERROR: 'Animation initialization failed',
} as const;

export const SKILLS_ACCESSIBILITY = {
  SECTION_LABEL: 'Technical skills and technologies',
  SKILL_BUTTON_LABEL: (skillName: string) => `View details for ${skillName}`,
  GRID_ROLE: 'grid',
  GRIDCELL_ROLE: 'gridcell',
} as const;
