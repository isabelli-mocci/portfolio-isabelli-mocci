import React from 'react';
import type { ReactNode } from 'react';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
  testId?: string;
}

const BUTTON_STYLES = {
  base: 'relative flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition group',
  variants: {
    primary: 'bg-primary-color text-black hover:bg-lime-300',
    secondary: 'bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 overflow-hidden',
  },
} as const;

export const HeroButton: React.FC<HeroButtonProps> = ({
  variant,
  icon,
  text,
  onClick,
  className = '',
  testId,
}) => {
  const buttonClasses = [
    BUTTON_STYLES.base,
    BUTTON_STYLES.variants[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
      data-testid={testId}
    >
      <span className="inline-block align-middle">{icon}</span>
      {text}
    </button>
  );
};
