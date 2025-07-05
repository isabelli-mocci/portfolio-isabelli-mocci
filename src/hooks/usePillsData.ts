import { useMemo } from 'react';
import { pillsData, pillsPositions } from '../types/pillsData';
import type { PillData } from '../types/aboutSection.types';
import { validatePillData, validatePillPosition } from '../utils/aboutSection.utils';

export const usePillsData = () => {
  const validatedPills = useMemo(() => {
    return pillsData.filter(validatePillData);
  }, []);

  const validatedPositions = useMemo(() => {
    return pillsPositions.filter(validatePillPosition);
  }, []);

  const pillsWithPositions = useMemo(() => {
    return validatedPills.map((pill: PillData, index: number) => ({
      pill,
      position: validatedPositions[index % validatedPositions.length],
      index
    }));
  }, [validatedPills, validatedPositions]);

  return {
    pillsWithPositions,
    totalPills: validatedPills.length,
    totalPositions: validatedPositions.length
  };
};
