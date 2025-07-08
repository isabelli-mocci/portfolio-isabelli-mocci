import { useRef, useEffect, useCallback } from 'react';

interface UseDragToScrollOptions {
  sensitivity?: number;
  friction?: number;
}

export const useDragToScroll = (options: UseDragToScrollOptions = {}) => {
  const { sensitivity = 1, friction = 0.95 } = options;
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number | undefined>(undefined);

  const stopMomentumScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  }, []);

  const momentumScroll = useCallback(() => {
    if (!scrollRef.current) return;
    
    velocity.current *= friction;
    
    if (Math.abs(velocity.current) > 0.5) {
      scrollRef.current.scrollLeft += velocity.current;
      animationFrame.current = requestAnimationFrame(momentumScroll);
    }
  }, [friction]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!scrollRef.current) return;
    
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    velocity.current = 0;
    stopMomentumScroll();
    
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grabbing';
      scrollRef.current.style.userSelect = 'none';
    }
  }, [stopMomentumScroll]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    
    // Only prevent default if we're actually dragging to scroll
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * sensitivity;
    
    if (Math.abs(walk) > 2) { // Only prevent if significant movement
      e.preventDefault();
    }
    
    const newScrollLeft = scrollLeft.current - walk;
    
    velocity.current = scrollRef.current.scrollLeft - newScrollLeft;
    scrollRef.current.scrollLeft = newScrollLeft;
  }, [sensitivity]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    
    isDragging.current = false;
    
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.userSelect = '';
    }
    
    if (Math.abs(velocity.current) > 1) {
      momentumScroll();
    }
  }, [momentumScroll]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging.current) {
      handleMouseUp();
    }
  }, [handleMouseUp]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!scrollRef.current || e.touches.length !== 1) return;
    
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    velocity.current = 0;
    stopMomentumScroll();
  }, [stopMomentumScroll]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !scrollRef.current || e.touches.length !== 1) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * sensitivity;
    const newScrollLeft = scrollLeft.current - walk;
    
    velocity.current = scrollRef.current.scrollLeft - newScrollLeft;
    scrollRef.current.scrollLeft = newScrollLeft;
  }, [sensitivity]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    
    isDragging.current = false;
    
    if (Math.abs(velocity.current) > 1) {
      momentumScroll();
    }
  }, [momentumScroll]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Mouse events
    element.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Touch events
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd);

    // Prevent default drag behavior
    element.addEventListener('dragstart', (e) => e.preventDefault());

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mouseleave', handleMouseLeave);
      
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      
      element.removeEventListener('dragstart', (e) => e.preventDefault());
      
      stopMomentumScroll();
    };
  }, [
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    stopMomentumScroll,
  ]);

  return scrollRef;
};
