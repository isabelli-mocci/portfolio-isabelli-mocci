import { useMemo } from 'react';
import { pillsData, pillsPositions, pillsPositionsCompact } from '../data/pills.data';
import type { PillData, PillPosition, PillWithPosition } from '../types/aboutSection.types';
import { validatePillData, validatePillPosition, createPillWithPosition } from '../utils/aboutSection.utils';

interface PillsDataResult {
  readonly pillsWithPositions: readonly PillWithPosition[];
  readonly totalPills: number;
  readonly totalPositions: number;
}

interface UsePillsDataOptions {
  compact?: boolean;
}

export const usePillsData = (options: UsePillsDataOptions = {}): PillsDataResult => {
  const { compact = false } = options;
  
  const validatedPills = useMemo(() => 
    pillsData.filter(validatePillData) as readonly PillData[]
  , []);

  const validatedPositions = useMemo(() => {
    const positions = compact ? pillsPositionsCompact : pillsPositions;
    return positions.filter(validatePillPosition) as readonly PillPosition[];
  }, [compact]);

  const pillsWithPositions = useMemo(() => {
    if (validatedPositions.length === 0) {
      return [];
    }
    
    return validatedPills.map((pill, index) => 
      createPillWithPosition(
        pill,
        validatedPositions[index % validatedPositions.length],
        index
      )
    );
  }, [validatedPills, validatedPositions]);

  return {
    pillsWithPositions,
    totalPills: validatedPills.length,
    totalPositions: validatedPositions.length
  };
};
