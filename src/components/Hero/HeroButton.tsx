import React from 'react';
import type { HeroButtonProps } from '../../types/hero.types';

const BUTTON_VARIANTS = {
  primary: 'bg-primary-color text-black hover:bg-lime-300',
  secondary:
    'bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 overflow-hidden',
} as const;

const HeroButton: React.FC<HeroButtonProps> = ({
  variant,
  icon,
  text,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'relative flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition group';
  const variantClasses = BUTTON_VARIANTS[variant];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      type='button'
    >
      <span className='inline-block align-middle'>{icon}</span>
      {text}
    </button>
  );
};

export default HeroButton;
