import React, { useCallback } from 'react';

interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AnimationConfig {
  wiggleDuration: number;
  spinDuration: string;
  transitionDuration: string;
}

interface ButtonStyles {
  container: string;
  background: string;
  content: string;
  overlay: string;
}

const ANIMATION_CONFIG: AnimationConfig = {
  wiggleDuration: 400,
  spinDuration: '2s',
  transitionDuration: '150ms',
};

const BUTTON_STYLES: ButtonStyles = {
  container: 'relative inline-flex h-10 w-auto overflow-hidden rounded-full p-[1px] focus:outline-none group active:scale-95 transition-transform',
  background: 'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#adff2f_0%,#7fff00_25%,#1a3d00_50%,#eaffc2_75%,#adff2f_100%)] opacity-90 group-hover:opacity-100 transition-opacity duration-300',
  content: 'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bg-dark px-5 text-sm font-medium text-white gap-2 relative z-10 duration-200',
  overlay: 'absolute inset-0 rounded-full ring-1 pointer-events-none',
};

const ARROW_ICON_PATH = 'M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z';

const WIGGLE_ANIMATION_CLASS = 'animate-[wiggle_0.4s]';

const DEFAULT_PROPS = {
  href: '#about',
  label: 'Contact me',
  className: '',
  disabled: false,
} as const;

const createArrowIcon = (): React.ReactElement => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d={ARROW_ICON_PATH} />
  </svg>
);

const useWiggleAnimation = () => {
  return useCallback((element: HTMLButtonElement) => {
    try {
      element.classList.remove(WIGGLE_ANIMATION_CLASS);
      void element.offsetWidth;
      element.classList.add(WIGGLE_ANIMATION_CLASS);
      
      const timeoutId = setTimeout(() => {
        element.classList.remove(WIGGLE_ANIMATION_CLASS);
      }, ANIMATION_CONFIG.wiggleDuration);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.warn('Failed to apply wiggle animation:', error);
    }
  }, []);
};

const ButtonContent: React.FC<{ label: string }> = ({ label }) => (
  <span className={BUTTON_STYLES.content}>
    {label}
    <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
      {createArrowIcon()}
    </span>
  </span>
);

const ButtonBackground: React.FC = () => (
  <span className={BUTTON_STYLES.background} />
);

const ButtonOverlay: React.FC = () => (
  <span className={BUTTON_STYLES.overlay} />
);

const ContactButton: React.FC<ContactButtonProps> = ({
  href = DEFAULT_PROPS.href,
  label = DEFAULT_PROPS.label,
  className = DEFAULT_PROPS.className,
  disabled = DEFAULT_PROPS.disabled,
  onClick,
}) => {
  const triggerWiggleAnimation = useWiggleAnimation();

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    const button = event.currentTarget;
    triggerWiggleAnimation(button);
    
    onClick?.(event);
  }, [disabled, triggerWiggleAnimation, onClick]);

  const buttonClassName = `${BUTTON_STYLES.container} duration-${ANIMATION_CONFIG.transitionDuration} ${className}`;

  return (
    <a 
      href={disabled ? undefined : href} 
      aria-label={`${label} - Navigate to contact section`}
      tabIndex={disabled ? -1 : 0}
    >
      <button
        type="button"
        className={buttonClassName}
        onClick={handleButtonClick}
        disabled={disabled}
        aria-label={label}
      >
        <ButtonBackground />
        <ButtonContent label={label} />
        <ButtonOverlay />
      </button>
    </a>
  );
};

export default ContactButton;
export type { ContactButtonProps, AnimationConfig, ButtonStyles };
