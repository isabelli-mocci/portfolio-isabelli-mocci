// path: src/components/HeroHeading.tsx

import React from 'react';
import HeroStar from './HeroStar';
import HeroRay from './HeroRay';
import HeroAnimatedWord from './HeroAnimatedWord';

const HeroHeading: React.FC = () => (
  <div className='z-10 flex flex-col items-center justify-center text-4xl md:text-6xl leading-tight text-center w-full'>
    <h1 className='text-text-white'>
      <span className='inline-block mr-2 align-middle'>
        <HeroStar />
      </span>
      Isabelli Mocci
      <span
        className='relative inline-block'
        style={{ width: 24 }}
      >
        <span
          className='absolute left-0 top-[-0.6em] animate-bounce'
          style={{ pointerEvents: 'none' }}
        >
          <HeroRay />
        </span>
      </span>{' '}
      is a front-end developer
    </h1>
    <h1 className='text-text-gray'>
      <span className='text-text-white'>who</span> blends technical expertise
      and
    </h1>
    <h1 className='text-text-gray'>
      creativity to deliver <HeroAnimatedWord /> websites.
    </h1>
  </div>
);

export default HeroHeading;
