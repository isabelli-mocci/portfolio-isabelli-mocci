import React from 'react';

export interface SkillData {
  readonly name: string;
  readonly icon: React.ReactNode;
  readonly category?: string;
}

export interface SkillsSectionProps {
  readonly skills?: SkillData[];
  readonly title?: string;
  readonly subtitle?: string;
}
