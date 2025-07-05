import { ANIMATION_DEFAULTS } from '../constants/animatedWord.constants';

export const validateWords = (words: readonly string[]): boolean => {
  if (!Array.isArray(words)) {
    console.warn('Words must be an array');
    return false;
  }
  
  if (words.length === 0) {
    console.warn('Words array cannot be empty');
    return false;
  }
  
  const hasInvalidWords = words.some(word => 
    typeof word !== 'string' || word.trim().length === 0
  );
  
  if (hasInvalidWords) {
    console.warn('All words must be non-empty strings');
    return false;
  }
  
  return true;
};

export const sanitizeWord = (word: string): string => {
  return word.trim().toLowerCase();
};

export const calculateMinWidth = (words: readonly string[]): number => {
  if (!validateWords(words)) return ANIMATION_DEFAULTS.MIN_WIDTH;
  
  const averageCharLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
  return Math.max(
    ANIMATION_DEFAULTS.MIN_WIDTH, 
    averageCharLength * ANIMATION_DEFAULTS.CHAR_WIDTH_ESTIMATE
  );
};

export const validateDuration = (duration: number, defaultValue: number): number => {
  if (typeof duration !== 'number' || duration <= 0 || !isFinite(duration)) {
    console.warn(`Invalid duration: ${duration}. Using default: ${defaultValue}`);
    return defaultValue;
  }
  return duration;
};
