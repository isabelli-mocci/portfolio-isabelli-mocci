import { AnimatedIcon } from './AnimatedIcon';
import { GoHeartFill } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';

interface AnimatedIconWrapperProps {
  iconKey: 'heart' | 'arrow';
  className?: string;
}

const iconConfig = {
  heart: {
    Icon: GoHeartFill,
    ariaLabel: 'heart',
    animationClass: 'heart-animate',
    style: { fontSize: '.9em', width: '1.5em' }
  },
  arrow: {
    Icon: BsArrowRight,
    ariaLabel: 'arrow right',
    animationClass: 'arrow-animate',
    style: { fontSize: '1.2em', width: '1.5em' }
  }
};

export const AnimatedIconWrapper = ({ iconKey, className }: AnimatedIconWrapperProps) => {
  const icon = iconConfig[iconKey];
  
  return (
    <AnimatedIcon 
      {...icon}
      className={className || 'inline-block mx-1 text-primary-color'}
    />
  );
};
