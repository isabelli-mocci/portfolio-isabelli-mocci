import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface WordPillPosition {
  x: number;
  y: number;
}

export interface WordPillAnimationConfig {
  initialRotation: number;
  delay: number;
  push: WordPillPosition;
}

export interface WordPillDragConfig {
  enabled: boolean;
  momentum: boolean;
  elastic: number;
  constraints: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

export interface WordPillStyleConfig {
  background: string;
  boxShadow: string;
  zIndex: number;
}

export interface WordPillProps {
  text: string;
  icon?: LucideIcon;
  initialRotation?: number;
  initialX?: string | number;
  initialY?: string | number;
  delay?: number;
  push?: WordPillPosition;
  drag?: boolean;
  className?: string;
  style?: CSSProperties;
}

export interface ValidatedWordPillProps {
  text: string;
  animation: WordPillAnimationConfig;
  drag: WordPillDragConfig;
  style: WordPillStyleConfig;
  className: string;
}
