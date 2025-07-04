// path: src/components/HeroBackground.tsx

import React, { useEffect, useRef, useState } from 'react';
import binaryNumber from '../assets/images/binary-number-snail.png';
import organicGreen2 from '../assets/images/organic-green-2.svg';
import organicGreen from '../assets/images/organic-green.svg';

const Star = ({
  className,
  stroke = 'white',
  fill = 'none',
  strokeWidth = 2,
}: {
  className?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
}) => (
  <svg
    className={className}
    width='32'
    height='32'
    viewBox='0 0 40 40'
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    xmlns='http://www.w3.org/2000/svg'
  >
    <polygon points='20,4 24,20 36,20 24,24 20,36 16,24 4,20 16,20' />
  </svg>
);

const Background: React.FC = React.memo(() => {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const offsetX = (pos.x - 0.5) * 6; // -3vw a +3vw
  const offsetY = (pos.y - 0.5) * 6; // -3vh a +3vh

  return (
    <>
      <div
        ref={containerRef}
        className='pointer-events-none select-none absolute inset-0 w-full h-full z-[-1]'
      >
        <div className='absolute right-[-10vw] top-[-10vw] w-[32vw] h-[32vw] bg-gradient-radial from-[#737373]/40 to-transparent rounded-full blur-2xl' />

        <img
          src={binaryNumber}
          alt='binary number'
          style={{
            transform: `translate(-50%, -50%) translate(${offsetX}vw, ${offsetY}vh)`,
            transition: 'transform 0.25s cubic-bezier(.4,2,.6,1)',
          }}
          className='absolute left-1/2 top-1/2 w-[70vw] h-[70vh] max-w-none max-h-none opacity-20'
        />

        <img
          src={organicGreen}
          alt='organic green'
          className='absolute right-[3vw] top-[2vw] w-[18vw] max-w-[200px] opacity-80'
        />

        <img
          src={organicGreen2}
          alt='organic green 2'
          className='absolute left-0 bottom-0 w-[22vw] max-w-[260px] opacity-80'
        />

        <Star className='absolute left-[8vw] top-[14vw] w-6 h-6 opacity-90' />

        <Star className='absolute right-[18vw] bottom-[8vw] w-7 h-7 opacity-90' />

        <Star className='absolute right-[8vw] top-[25vw] w-5 h-5 opacity-90' />
      </div>
    </>
  );
});

export default Background;
