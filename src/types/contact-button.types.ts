import type { MouseEvent } from 'react';

export interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface AnimationState {
  readonly isAnimating: boolean;
}

export interface ButtonVariant {
  readonly container: string;
  readonly background: string;
  readonly content: string;
  readonly overlay: string;
}
