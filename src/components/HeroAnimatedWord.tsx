// path: src/components/HeroAnimatedWord.tsx

import React, { useEffect, useRef, useState } from 'react';

const words = [
  'beautiful',
  'engaging',
  'intuitive',
  'polished',
  'dynamic',
  'stunning',
];

const HeroAnimatedWord: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 1800);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [wordIndex]);

  return (
    <span
      className='text-text-green transition-all duration-500 inline-block'
      key={words[wordIndex]}
      style={{
        minWidth: 120,
        willChange: 'opacity,transform',
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >
      {words[wordIndex]}
    </span>
  );
};

export default HeroAnimatedWord;
