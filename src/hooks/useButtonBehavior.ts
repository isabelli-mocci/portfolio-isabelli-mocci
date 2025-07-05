import { useCallback, type MouseEvent } from 'react';
import { useWiggleAnimation } from './useWiggleAnimation';

interface UseButtonBehaviorParams {
  disabled: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const useButtonBehavior = ({ disabled, onClick }: UseButtonBehaviorParams) => {
  const triggerWiggleAnimation = useWiggleAnimation();

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    const button = event.currentTarget;
    triggerWiggleAnimation(button);
    onClick?.(event);
  }, [disabled, triggerWiggleAnimation, onClick]);

  return { handleClick };
};
