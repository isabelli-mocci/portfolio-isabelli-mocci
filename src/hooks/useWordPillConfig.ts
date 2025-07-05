import { useMemo } from 'react';
import type { WordPillProps, ValidatedWordPillProps } from '../types/wordPill.types';
import { validateAndTransformProps } from '../utils/wordPill.utils';
import { createWordPillConfig } from '../config/wordPill.config';

export const useWordPillConfig = (props: WordPillProps) => {
  const validatedProps = useMemo(() => {
    try {
      return validateAndTransformProps(props);
    } catch (error) {
      console.error('WordPill configuration error:', error);
      // Return safe defaults com garantia de push válido
      return {
        text: 'Error',
        animation: {
          initialRotation: 0,
          delay: 0,
          push: { x: 0, y: 0 } // Garantir que push sempre exista
        },
        drag: {
          enabled: false,
          momentum: false,
          elastic: 0.12,
          constraints: { left: -40, right: 40, top: -40, bottom: 40 }
        },
        style: {
          background: '',
          boxShadow: '',
          zIndex: 10
        },
        className: ''
      } as ValidatedWordPillProps;
    }
  }, [props]);

  const config = useMemo(() => createWordPillConfig(), []);

  const motionProps = useMemo(() => {
    const { animation, drag, style } = validatedProps;
    
    // Dupla verificação para garantir que animation.push existe
    if (!animation.push) {
      console.warn('WordPill: Missing push configuration, using defaults');
      animation.push = { x: 0, y: 0 };
    }
    
    return {
      initial: config.animation.initial(animation.initialRotation),
      animate: config.animation.floating(animation),
      transition: config.animation.transition(animation.delay),
      ...config.drag(drag),
      style: config.style(style)
    };
  }, [validatedProps, config]);

  return {
    validatedProps,
    motionProps
  };
};
