import React from 'react';

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
  const duplicatedItems = [...items, ...items, ...items]; // Triplicamos para garantir continuidade
  
  // Calcula a duração baseada na velocidade
  const duration = Math.max(10, 100 - speed); // Entre 10s e 100s

  return (
    <div
      className='relative w-full overflow-hidden bg-bg-dark py-4 border-t border-b border-text-gray flex items-center mt-20'
      style={{ transform: 'rotate(-3deg)', transformOrigin: 'left center' }}
      aria-hidden='true'
    >
      <div
        className='inline-block whitespace-nowrap select-none animate-marquee'
        style={{
          '--marquee-duration': `${duration}s`,
          '--marquee-direction': direction === 'left' ? 'normal' : 'reverse',
        } as React.CSSProperties}
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
