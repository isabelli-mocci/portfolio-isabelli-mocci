import React from 'react';
import { BentoCard } from './BentoCard';
import { AnimatedIconWrapper } from '../About/AnimatedIconWrapper';

export const IntroCard: React.FC = () => (
  <BentoCard
    className='relative overflow-hidden'
    variant='dark'
  >
    <div>
      <div className='space-y-6'>
        <h2 className='text-2xl text-white leading-tight'>
          <span>My name is</span>
          <AnimatedIconWrapper iconKey='arrow' />
          <span className='text-primary-color'>Isabelli Mocci! </span>
          <AnimatedIconWrapper iconKey='heart' /> I'm a frontend developer from
          Brazil.
        </h2>

        <p className='text-gray-300 font-medium'>
          {' '}
          I enjoy building robust, scalable, and personalized webpages. I'm
          studying to master:
        </p>

        <div className='space-y-2 ml-4'>
          <div className='flex items-center gap-2 text-gray-200'>
            <span>Motion.</span>
          </div>
          <div className='flex items-center gap-2 text-gray-200'>
            <span>Intentional animation.</span>
          </div>
          <div className='flex items-center gap-2 text-gray-200'>
            <span>High-performance interaction.</span>
          </div>
        </div>

        <p className='text-gray-300 text-sm leading-relaxed'>
          I want to create interfaces that slide, snap, and transform — not just
          beautiful websites, but premium digital experiences that convert, win
          clients, and spark conversations.
        </p>

        <div className='mt-6 p-4 bg-black/20 rounded-xl border border-gray-700/30 backdrop-blur-sm'>
          <p className='text-gray-400 text-xs italic mb-2'>
            The kind that makes people pause and ask:
          </p>
          <p className='text-white font-medium text-sm'>
            "Wait... who made this?"
          </p>
        </div>
      </div>
    </div>
  </BentoCard>
);
