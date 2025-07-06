export const combineClassNames = (...classNames: (string | undefined | null)[]): string => 
  classNames.filter(Boolean).join(' ');
