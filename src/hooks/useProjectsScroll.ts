import { useRef, useEffect, useCallback } from 'react';

interface UseProjectsScrollOptions {
  sensitivity?: number;
  friction?: number;
  wheelSensitivity?: number;
  onReachEnd?: () => void;
  onReachStart?: () => void;
}

export const useProjectsScroll = (options: UseProjectsScrollOptions = {}) => {
  const { sensitivity = 1, friction = 0.95, wheelSensitivity = 1, onReachEnd, onReachStart } = options;
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number | undefined>(undefined);
  const lastEndReachTime = useRef(0);
  const lastStartReachTime = useRef(0);

  // Momentum scroll functionality
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

  // Mouse wheel horizontal scroll
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!scrollRef.current) return;

    const element = scrollRef.current;
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    const hasVerticalScroll = element.scrollHeight > element.clientHeight;
    
    if (!hasVerticalScroll || isHorizontalScroll) {
      e.preventDefault();
      
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      const scrollAmount = delta * wheelSensitivity;
      
      // Check if we're at the end or start and trying to scroll more
      const isAtEnd = element.scrollLeft >= (element.scrollWidth - element.clientWidth - 10);
      const isAtStart = element.scrollLeft <= 10;
      const isTryingToScrollRight = scrollAmount > 0;
      const isTryingToScrollLeft = scrollAmount < 0;
      const now = Date.now();
      const timeSinceLastEndTrigger = now - lastEndReachTime.current;
      const timeSinceLastStartTrigger = now - lastStartReachTime.current;
      
      if (isAtEnd && isTryingToScrollRight && onReachEnd && timeSinceLastEndTrigger > 2000) {
        lastEndReachTime.current = now;
        setTimeout(() => {
          onReachEnd();
        }, 200);
      } else if (isAtStart && isTryingToScrollLeft && onReachStart && timeSinceLastStartTrigger > 2000) {
        lastStartReachTime.current = now;
        setTimeout(() => {
          onReachStart();
        }, 200);
      } else {
        element.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }, [wheelSensitivity, onReachEnd, onReachStart]);

  // Drag to scroll functionality
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
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * sensitivity;
    
    if (Math.abs(walk) > 2) {
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

    // Wheel events for horizontal scroll
    element.addEventListener('wheel', handleWheel, { passive: false });

    // Mouse events for drag to scroll
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

    // Set initial cursor
    element.style.cursor = 'grab';

    return () => {
      element.removeEventListener('wheel', handleWheel);
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
    handleWheel,
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
