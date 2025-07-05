import type { PillData, PillPosition } from '../types/aboutSection.types';

export const getPillPosition = (
  positions: PillPosition[], 
  index: number
): PillPosition => {
  return positions[index % positions.length];
};

export const calculatePillZIndex = (baseZIndex: number, index: number): number => {
  return baseZIndex + index;
};

export const calculatePillDelay = (index: number, multiplier: number): number => {
  return index * multiplier;
};

export const validatePillData = (pill: PillData): boolean => {
  return !!(pill.text && typeof pill.initialRotation === 'number');
};

export const validatePillPosition = (position: PillPosition): boolean => {
  return !!(position.left && position.top);
};
