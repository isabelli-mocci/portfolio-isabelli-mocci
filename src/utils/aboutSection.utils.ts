import type { PillData, PillPosition } from '../types/aboutSection.types';

export const getPillPosition = (
  positions: readonly PillPosition[], 
  index: number
): PillPosition => {
  if (positions.length === 0) {
    throw new Error('Positions array cannot be empty');
  }
  
  return positions[index % positions.length];
};

export const calculatePillZIndex = (baseZIndex: number, index: number): number => {
  if (baseZIndex < 0 || index < 0) {
    throw new Error('Base z-index and index must be non-negative');
  }
  
  return baseZIndex + index;
};

export const calculatePillDelay = (index: number, multiplier: number): number => {
  if (index < 0 || multiplier < 0) {
    throw new Error('Index and multiplier must be non-negative');
  }
  
  return index * multiplier;
};

export const validatePillData = (pill: unknown): pill is PillData => {
  if (!pill || typeof pill !== 'object') {
    return false;
  }
  
  const pillData = pill as Record<string, unknown>;
  
  return !!(
    pillData.text && 
    typeof pillData.text === 'string' && 
    pillData.text.trim() !== '' &&
    typeof pillData.initialRotation === 'number' &&
    !isNaN(pillData.initialRotation)
  );
};

export const validatePillPosition = (position: unknown): position is PillPosition => {
  if (!position || typeof position !== 'object') {
    return false;
  }
  
  const positionData = position as Record<string, unknown>;
  
  return !!(
    positionData.left && 
    typeof positionData.left === 'string' &&
    positionData.left.trim() !== '' &&
    positionData.top && 
    typeof positionData.top === 'string' &&
    positionData.top.trim() !== ''
  );
};

export const createPillWithPosition = (
  pill: PillData, 
  position: PillPosition, 
  index: number
) => ({
  pill,
  position,
  index
} as const);
