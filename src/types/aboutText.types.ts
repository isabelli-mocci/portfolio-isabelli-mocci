import type { IconType } from 'react-icons';

export interface AnimatedIconProps {
  Icon: IconType;
  ariaLabel: string;
  animationClass: string;
  style?: React.CSSProperties;
}

export interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export interface CircleHighlightProps {
  text: string;
}

export interface StraightLineHighlightProps {
  text: string;
}

export interface AboutTextConfig {
  icons: {
    arrow: AnimatedIconProps;
    heart: AnimatedIconProps;
    dumbbell: AnimatedIconProps;
    hand: AnimatedIconProps;
    exclamation: AnimatedIconProps;
  };
}
