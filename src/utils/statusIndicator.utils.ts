import type { StatusType } from '../types/statusIndicator.types';
import { STATUS_INDICATOR_CONSTANTS } from '../constants/statusIndicator.constants';

export const combineClassNames = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const validateStatus = (status: unknown): status is StatusType => {
  return typeof status === 'string' && 
    ['available', 'busy', 'away', 'offline'].includes(status);
};

export const createTestId = (baseTestId?: string): string => {
  return baseTestId || STATUS_INDICATOR_CONSTANTS.TEST_ID_PREFIX;
};

export const createAriaLabel = (
  status: StatusType, 
  customLabel?: string,
  customAriaLabel?: string
): string => {
  if (customAriaLabel) {
    return customAriaLabel;
  }
  
  const label = customLabel || status;
  return `${STATUS_INDICATOR_CONSTANTS.ACCESSIBILITY.DEFAULT_ARIA_LABEL}: ${label}`;
};

export const sanitizeCustomLabel = (label?: string): string | undefined => {
  if (!label) return undefined;
  
  return label.trim().toUpperCase().slice(0, 20);
};
