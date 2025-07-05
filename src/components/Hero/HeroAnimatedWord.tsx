import React, { useMemo } from 'react';
import { useWordCycle } from '../../hooks/useWordCycle';
import { createTransitionStyle } from '../../styles/animatedWord.styles';
import { validateWords, validateDuration, calculateMinWidth } from '../../utils/animatedWord.utils';
import { ANIMATED_WORD_CONFIG } from '../../config/animatedWord.config';
import type { AnimatedWordProps } from '../../types/animatedWord.types';

const HeroAnimatedWord: React.FC<AnimatedWordProps> = ({
  words = ANIMATED_WORD_CONFIG.words,
  intervalDuration = ANIMATED_WORD_CONFIG.intervalDuration,
  transitionDuration = ANIMATED_WORD_CONFIG.transitionDuration,
  className = ANIMATED_WORD_CONFIG.className,
  style,
  onWordChange,
  testId = 'hero-animated-word',
}) => {
  const validatedWords = useMemo(() => {
    return validateWords(words) ? words : ANIMATED_WORD_CONFIG.words;
  }, [words]);

  const validatedIntervalDuration = useMemo(() => {
    return validateDuration(intervalDuration, ANIMATED_WORD_CONFIG.intervalDuration);
  }, [intervalDuration]);

  const validatedTransitionDuration = useMemo(() => {
    return validateDuration(transitionDuration, ANIMATED_WORD_CONFIG.transitionDuration);
  }, [transitionDuration]);

  const dynamicMinWidth = useMemo(() => {
    return calculateMinWidth(validatedWords);
  }, [validatedWords]);

  const { currentWord, isTransitioning } = useWordCycle({
    words: validatedWords,
    intervalDuration: validatedIntervalDuration,
    onWordChange,
  });

  const combinedStyle = useMemo(() => ({
    ...createTransitionStyle(isTransitioning, validatedTransitionDuration),
    minWidth: dynamicMinWidth,
    ...style,
  }), [isTransitioning, validatedTransitionDuration, dynamicMinWidth, style]);

  if (!currentWord) {
    return null;
  }

  return (
    <span
      className={className}
      style={combinedStyle}
      data-testid={testId}
      data-word={currentWord}
      data-transitioning={isTransitioning}
    >
      {currentWord}
    </span>
  );
};

export default HeroAnimatedWord;
