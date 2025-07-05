export interface AnimatedWordConfig {
  words: readonly string[];
  intervalDuration: number;
  transitionDuration: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface AnimatedWordProps {
  words?: readonly string[];
  intervalDuration?: number;
  transitionDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  onWordChange?: (word: string, index: number) => void;
  testId?: string;
}

export interface UseWordCycleOptions {
  words: readonly string[];
  intervalDuration: number;
  onWordChange?: (word: string, index: number) => void;
}

export interface UseWordCycleReturn {
  currentWord: string;
  currentIndex: number;
  isTransitioning: boolean;
}
