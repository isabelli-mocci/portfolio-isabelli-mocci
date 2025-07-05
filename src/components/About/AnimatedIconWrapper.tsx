import { AnimatedIcon } from './AnimatedIcon';
import { useAnimatedIcons } from '../../hooks/useAnimatedIcons';
import { aboutTextStyles } from '../../styles/aboutText.styles';

interface AnimatedIconWrapperProps {
  iconKey: keyof ReturnType<typeof useAnimatedIcons>['icons'];
  className?: string;
}

export const AnimatedIconWrapper = ({ iconKey, className }: AnimatedIconWrapperProps) => {
  const { icons } = useAnimatedIcons();
  const icon = icons[iconKey];
  
  return (
    <AnimatedIcon 
      {...icon}
      className={className || aboutTextStyles.animatedIcon}
    />
  );
};
