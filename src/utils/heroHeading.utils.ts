export const validatePersonName = (name: string): boolean => {
  if (typeof name !== 'string' || name.trim().length === 0) {
    console.warn('Person name must be a non-empty string');
    return false;
  }
  
  if (name.trim().length > 100) {
    console.warn('Person name is too long (max 100 characters)');
    return false;
  }
  
  return true;
};

export const validateProfession = (profession: string): boolean => {
  if (typeof profession !== 'string' || profession.trim().length === 0) {
    console.warn('Profession must be a non-empty string');
    return false;
  }
  
  if (profession.trim().length > 200) {
    console.warn('Profession description is too long (max 200 characters)');
    return false;
  }
  
  return true;
};

export const sanitizeText = (text: string): string => {
  return text.trim().replace(/\s+/g, ' ');
};

export const formatPersonName = (name: string): string => {
  if (!validatePersonName(name)) {
    return '';
  }
  
  return sanitizeText(name);
};

export const formatProfession = (profession: string): string => {
  if (!validateProfession(profession)) {
    return '';
  }
  
  return sanitizeText(profession);
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateDecoratedNameProps = (props: {
  name: string;
  starIcon: React.ReactNode;
  rayIcon: React.ReactNode;
  className?: string;
}): ValidationResult => {
  const errors: string[] = [];

  if (!props.name || typeof props.name !== 'string' || props.name.trim().length === 0) {
    errors.push('Name is required and must be a non-empty string');
  }

  if (!props.starIcon) {
    errors.push('Star icon is required');
  }

  if (!props.rayIcon) {
    errors.push('Ray icon is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateHeroHeadingProps = (props: {
  personName?: string;
  profession?: string;
  description?: {
    prefix: string;
    suffix: string;
    highlight: string;
  };
}): ValidationResult => {
  const errors: string[] = [];

  if (props.personName && !validatePersonName(props.personName)) {
    errors.push('Invalid person name');
  }

  if (props.profession && !validateProfession(props.profession)) {
    errors.push('Invalid profession');
  }

  if (props.description) {
    const { prefix, suffix, highlight } = props.description;
    
    if (!prefix || typeof prefix !== 'string' || prefix.trim().length === 0) {
      errors.push('Description prefix is required');
    }
    
    if (!suffix || typeof suffix !== 'string' || suffix.trim().length === 0) {
      errors.push('Description suffix is required');
    }
    
    if (!highlight || typeof highlight !== 'string' || highlight.trim().length === 0) {
      errors.push('Description highlight is required');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const formatHeadingText = (text: string, variant: 'primary' | 'secondary' = 'primary'): string => {
  const sanitized = sanitizeText(text);
  
  if (variant === 'secondary') {
    return sanitized.toLowerCase();
  }
  
  return sanitized;
};
