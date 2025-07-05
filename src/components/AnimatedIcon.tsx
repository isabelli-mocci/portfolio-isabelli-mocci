import { ABOUT_TEXT_CONSTANTS } from '../constants/aboutText.constants';
import type { AnimatedIconProps } from '../types/aboutText.types';

interface AnimatedIconComponentProps extends Omit<AnimatedIconProps, 'Icon'> {
  Icon: React.ComponentType<{ style?: React.CSSProperties }>;
  className?: string;
}

export const AnimatedIcon = ({ 
  Icon, 
  ariaLabel, 
  animationClass, 
  style = {},
  className = "inline-block align-middle"
}: AnimatedIconComponentProps) => (
  <span
    className={`${animationClass} ${className}`}
    aria-label={ariaLabel}
  >
    <Icon
      style={{
        color: ABOUT_TEXT_CONSTANTS.COLORS.PRIMARY,
        verticalAlign: 'middle',
        ...style
      }}
    />
  </span>
);
