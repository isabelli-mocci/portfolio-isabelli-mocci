// path: src/components/InfiniteMarquee.tsx

import React, { useRef, useState, useCallback } from 'react';

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  speed = 60,
  direction = 'left',
}) => {
  const duplicatedItems = [...items, ...items];
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const lastTimestamp = useRef<number>(0);

  React.useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [items]);

  React.useEffect(() => {
    function animate(ts: number) {
      if (!lastTimestamp.current) lastTimestamp.current = ts;
      const elapsed = ts - lastTimestamp.current;
      lastTimestamp.current = ts;
      const pxPerMs = speed / 1000;
      const step = (direction === 'left' ? -1 : 1) * pxPerMs * elapsed;
      setOffset(prev => {
        let newOffset = prev + step;
        if (direction === 'left' && newOffset <= -contentWidth)
          newOffset += contentWidth;
        if (direction === 'right' && newOffset >= 0) newOffset -= contentWidth;
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      lastTimestamp.current = 0;
    };
  }, [contentWidth, direction, speed]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      let newOffset = offset - e.deltaY;
      if (contentWidth > 0) {
        if (newOffset < -contentWidth) newOffset += contentWidth;
        if (newOffset > 0) newOffset -= contentWidth;
      }
      setOffset(newOffset);
    },
    [offset, contentWidth]
  );

  return (
    <div
      className='relative w-full overflow-hidden bg-bg-dark py-4 border-t border-b border-text-gray flex items-center mt-20'
      style={{ transform: 'rotate(-3deg)', transformOrigin: 'left center' }}
      onWheel={handleWheel}
      aria-hidden='true'
    >
      <div
        ref={marqueeRef}
        className='inline-block whitespace-nowrap select-none'
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className='text-text-white text-lg md:text-xl px-8 inline-flex items-center'
          >
            {item}
            <span className='ml-8 text-primary-color'>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
