import React, { useEffect, useRef, useCallback } from 'react';
import { ARROW_ICON_CONFIG } from '../../constants/contact-button.constants';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  const updateCursorPosition = useCallback((x: number, y: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
    }
  }, []);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (cursorRef.current) {
          cursorRef.current.style.display = 'block';
        }
      }
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleMouseOut = () => {
      isVisibleRef.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseleave', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [updateCursorPosition]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-arrow"
      style={{
        display: 'none',
        transform: 'translate(-12px, -12px)',
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox={ARROW_ICON_CONFIG.VIEW_BOX}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        transform="scale(-1, 1)"
      >
        <path d={ARROW_ICON_CONFIG.PATH} />
      </svg>
    </div>
  );
};

export default CustomCursor;