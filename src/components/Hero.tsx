// path: src/components/Hero.tsx

import React, { useCallback } from 'react';
import DraggableLogo from './Logo';
import ScrollBadge from './HeroScrollBadge';
import Background from './HeroBackground';
import HeroHeading from './HeroHeading';

const Hero: React.FC = () => {
  const handleScrollBadgeClick = useCallback(() => {
    const nextSection = document.querySelector('[data-hero-next]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className='relative flex flex-col items-center justify-center h-screen text-white px-6 text-center overflow-hidden'>
      <Background />

      <DraggableLogo />

      <HeroHeading />

      <div className='z-10 mt-10 flex flex-col sm:flex-row gap-4'>
        <button className='relative flex items-center gap-2 bg-lime-400 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-lime-500 transition group'>
          <span className='inline-block align-middle'>
            <svg
              className='ray-anim'
              width='18'
              height='18'
              viewBox='0 0 20 20'
              fill='black'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.3 1.046a1 1 0 0 1 .7 1.054l-.3 5.9h4.8a1 1 0 0 1 .8 1.6l-8 10.5c-.7.9-2.1.2-1.9-.9l1.3-6.2H3.1a1 1 0 0 1-.8-1.6l7-10.5a1 1 0 0 1 2-.054z' />
            </svg>
          </span>
          SEE MY WORK
          <style>{`.ray-anim {transition: transform 0.4s cubic-bezier(.4,2,.6,1);}.group:hover .ray-anim {transform: rotate(-25deg) scale(1.15);}`}</style>
        </button>

        <button className='relative flex items-center gap-2 bg-white/10 text-white px-6 py-2 rounded-full font-semibold text-sm border border-white/30 backdrop-blur-md hover:bg-white/20 transition group overflow-hidden'>
          <span className='inline-block align-middle'>
            <svg
              className='download-anim'
              width='18'
              height='18'
              viewBox='0 0 20 20'
              fill='none'
              stroke='#adff2f'
              strokeWidth='2.2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <g className='arrow-group'>
                <path
                  className='arrow-shaft'
                  d='M10 3v7'
                />
                <path
                  className='arrow-head'
                  d='M7 9l3 3 3-3'
                />
              </g>
              <rect
                x='4'
                y='16'
                width='12'
                height='2'
                rx='1'
                fill='#adff2f'
              />
            </svg>
          </span>
          DOWNLOAD CV
          <style>{`
            .download-anim {transition: transform 0.3s cubic-bezier(.4,2,.6,1);}
            .group:hover .download-anim .arrow-group {transition: transform 0.6s cubic-bezier(.4,1,.10,1); transform: translateY(2px);}
            .group:active .download-anim {transform: translateY(1px) scaleY(0.1);}
          `}</style>
        </button>
      </div>

      <div className='absolute left-1/2 bottom-8 transform -translate-x-1/2 z-40'>
        <ScrollBadge onClick={handleScrollBadgeClick} />
      </div>
    </section>
  );
};

export default Hero;
