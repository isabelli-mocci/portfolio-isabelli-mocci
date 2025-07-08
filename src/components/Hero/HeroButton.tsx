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
  base: 'relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group min-h-[44px] hover:scale-[1.02] active:scale-[0.98] will-change-transform',
  variants: {
    primary: 'bg-gradient-to-r from-[#adff2f] via-[#adff2f] to-[#adff2f] text-black hover:from-[#9ef52a] hover:via-[#9ef52a] hover:to-[#9ef52a] shadow-lg hover:shadow-xl hover:shadow-[#adff2f]/20',
    secondary: 'bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] text-white/90 border border-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 hover:bg-gradient-to-r hover:from-white/[0.06] hover:via-white/[0.1] hover:to-white/[0.06] hover:border-white/[0.15] hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] overflow-hidden supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-white/[0.03] supports-[backdrop-filter]:via-white/[0.06] supports-[backdrop-filter]:to-white/[0.03]',
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
    variant === 'primary' ? 'hero-btn-primary' : 'hero-btn-secondary',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
      data-testid={testId}
    >
      <span className="hero-btn-icon inline-block align-middle">{icon}</span>
      <span className="hero-btn-text">{text}</span>
    </button>
  );
};
