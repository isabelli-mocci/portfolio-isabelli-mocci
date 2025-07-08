import { useRef, useEffect, useCallback } from 'react';

interface UseHorizontalScrollOptions {
  sensitivity?: number;
  smoothScroll?: boolean;
}

export const useHorizontalScroll = (options: UseHorizontalScrollOptions = {}) => {
  const { sensitivity = 2.5, smoothScroll = true } = options;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!scrollRef.current) return;

    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    const hasVerticalScroll = scrollRef.current.scrollHeight > scrollRef.current.clientHeight;
    
    if (!hasVerticalScroll || isHorizontalScroll) {
      e.preventDefault();
      
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      const scrollAmount = delta * sensitivity;
      
      if (smoothScroll) {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  }, [sensitivity, smoothScroll]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return scrollRef;
};
