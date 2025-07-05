import { useState, useEffect, useRef, useCallback } from 'react';
import type { UseWordCycleOptions, UseWordCycleReturn } from '../types/animatedWord.types';

export const useWordCycle = ({
  words,
  intervalDuration,
  onWordChange,
}: UseWordCycleOptions): UseWordCycleReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  const cycleToNextWord = useCallback(() => {
    setIsTransitioning(true);
    
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % words.length;
        const nextWord = words[nextIndex];
        
        onWordChange?.(nextWord, nextIndex);
        setIsTransitioning(false);
        
        return nextIndex;
      });
    }, 250);
  }, [words, onWordChange]);

  useEffect(() => {
    if (words.length === 0) return;

    timeoutRef.current = setTimeout(cycleToNextWord, intervalDuration);

    return clearTimeouts;
  }, [currentIndex, intervalDuration, cycleToNextWord, clearTimeouts, words.length]);

  useEffect(() => {
    return clearTimeouts;
  }, [clearTimeouts]);

  const currentWord = words[currentIndex] || '';

  return {
    currentWord,
    currentIndex,
    isTransitioning,
  };
};
