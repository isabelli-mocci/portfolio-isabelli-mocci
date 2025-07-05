import { useState, useEffect, useRef, useCallback } from 'react';
import type { MousePosition } from '../types/heroBackground.types';
import { normalizeMousePosition } from '../utils/heroBackground.utils';
import { MOUSE_POSITION_DEFAULTS } from '../constants/heroBackground.constants';

interface UseParallaxMouseOptions {
  enabled?: boolean;
}

interface UseParallaxMouseReturn {
  mousePosition: MousePosition;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const useParallaxMouse = ({
  enabled = true,
}: UseParallaxMouseOptions = {}): UseParallaxMouseReturn => {
  const [mousePosition, setMousePosition] = useState<MousePosition>(MOUSE_POSITION_DEFAULTS);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const updateMousePosition = useCallback((event: MouseEvent) => {
    if (!enabled || !containerRef.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = normalizeMousePosition(event.clientX, event.clientY, rect);
      setMousePosition(newPosition);
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const throttledUpdate = (event: MouseEvent) => {
      updateMousePosition(event);
    };

    window.addEventListener('mousemove', throttledUpdate, { passive: true });

    return () => {
      window.removeEventListener('mousemove', throttledUpdate);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [enabled, updateMousePosition]);

  return {
    mousePosition,
    containerRef,
  };
};
