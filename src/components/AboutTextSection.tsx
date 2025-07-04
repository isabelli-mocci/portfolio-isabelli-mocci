// path: src/components/AboutTextSection.tsx

import React from 'react';
import { LiaDumbbellSolid } from 'react-icons/lia';
import { BsArrowRight } from 'react-icons/bs';
import { GoHeartFill } from 'react-icons/go';
import { BsHandIndex } from 'react-icons/bs';
import { BsExclamation } from 'react-icons/bs';

const AboutTextSection: React.FC = () => {
  return (
    <>
      <section
        className='w-full flex flex-col items-center justify-center mt-16 mb-16 z-30 max-w-3xl mx-auto px-4 md:px-0 relative'
        role='region'
        aria-label='About Isabelli Mocci'
      >
        <div className='relative z-10 w-full'>
          <p className='text-white text-justify text-2xl mb-4 md:mb-6 leading-relaxed font-light'>
            <span>My name is</span>
            <span
              className='arrow-animate inline-block align-middle mr-1'
              aria-label='arrow right'
            >
              <BsArrowRight
                style={{
                  color: '#adff2f',
                  fontSize: '1.2em',
                  verticalAlign: 'middle',
                  width: '1.5em',
                }}
              />
            </span>
            <span className='ml-1'>Isabelli Mocci!</span>
            <span
              className='heart-animate inline-block align-middle'
              aria-label='heart'
            >
              <GoHeartFill
                style={{
                  color: '#adff2f',
                  fontSize: '.9em',
                  verticalAlign: 'middle',
                  width: '1.5em',
                }}
              />
            </span>
            <span>I'm a frontend developer from Brazil.</span>
          </p>

          <p className='text-white text-justify text-2xl mb-4 md:mb-6 leading-relaxed font-light flex flex-wrap items-center gap-2'>
            <span>My mission is to build digital products that are robust</span>
            <span
              className='dumbbell-animate inline-block align-middle'
              aria-label='dumbbell'
            >
              <LiaDumbbellSolid
                style={{
                  color: '#adff2f',
                  fontSize: '1.1em',
                  verticalAlign: 'middle',
                }}
              />
            </span>
            <span>, scalable</span>
            <span
              className='hand-animate inline-block align-middle'
              aria-label='hand up'
            >
              <BsHandIndex
                style={{
                  color: '#adff2f',
                  fontSize: '.8em',
                  verticalAlign: 'middle',
                }}
              />
            </span>
            <span>and</span>
            <span className='relative inline-block'>
              <span style={{ position: 'relative', zIndex: 1 }}>
                personalized.
              </span>
              <span
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%) scale(2.3, 1.5)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  width: '170%',
                  height: '90%',
                }}
              >
                <svg
                  width='100%'
                  height='100%'
                  viewBox='0 0 226 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='circle-animate'
                  style={{ display: 'block' }}
                >
                  <path
                    className='circle-animate-path'
                    d='M35,45 Q25,18 65,20 Q110,5 170,25 Q210,40 175,55 Q130,75 85,65 Q45,60 35,45 Z'
                    stroke='#adff2f'
                    strokeWidth='3'
                    fill='none'
                    opacity='0.85'
                  />
                </svg>
              </span>
            </span>
            <span>
              The true value of my work lies in what I develop with dedication,
              purpose and intentionality.
            </span>
          </p>

          <p className='text-white text-justify text-2xl mb-8 leading-relaxed font-light'>
            To me,{' '}
            <span className='relative inline-block'>
              web development isn’t just about writing code
              <span className='animated-straight-line'>
                <svg
                  viewBox='0 0 1100 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='animated-straight-line-path'
                    d='M10 14 Q 200 2, 400 12 Q 700 20, 900 8 Q 1000 2, 1090 14'
                  />
                </svg>
              </span>
            </span>
            , it’s about thinking critically about how technology can truly
            serve people through{' '}
            <span className='text-white font-semibold'>
              engaging, intuitive and immersive{' '}
            </span>
            <span>
              digital experiences
              <span
                className='exclamation-animate inline-block align-middle ml-0 mr-1'
                aria-label='exclamation'
                style={{ marginLeft: '-0.35em', marginRight: '0.1em' }}
              >
                <BsExclamation
                  style={{
                    color: '#adff2f',
                    fontSize: '1.5em',
                  }}
                />
              </span>
            </span>
          </p>
        </div>
      </section>
      <style>{`
        .arrow-animate {
          animation: arrowMove 1.2s infinite alternate cubic-bezier(.4,0,.2,1);
        }
        @keyframes arrowMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(10px); }
        }
        .heart-animate {
          animation: heartBeat 2.2s infinite cubic-bezier(.4,0,.2,1);
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.18); }
          40% { transform: scale(0.97); }
          60% { transform: scale(1.09); }
          80% { transform: scale(0.99); }
        }
        .dumbbell-animate {
          animation: dumbbellLift 1.3s infinite cubic-bezier(.4,0,.2,1);
        }
        @keyframes dumbbellLift {
          0%, 100% { transform: rotate(-8deg); }
          30% { transform: rotate(13deg) translateY(-2px); }
          60% { transform: rotate(-3deg) translateY(0); }
        }
        .hand-animate {
          animation: handPoint 1.1s infinite alternate cubic-bezier(.4,0,.2,1);
        }
        @keyframes handPoint {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px) scale(1.07); }
        }
        .circle-animate {
          filter: none;
        }
        .exclamation-animate {
          animation: exclamationBounce 1.2s infinite cubic-bezier(.4,0,.2,1);
        }
        @keyframes exclamationBounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          20% { transform: scale(1.25) rotate(-10deg); }
          40% { transform: scale(0.95) rotate(8deg); }
          60% { transform: scale(1.1) rotate(-6deg); }
          80% { transform: scale(0.98) rotate(4deg); }
        }
        .circle-animate-path {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: circleDraw 3.2s cubic-bezier(.3,0,1,.1) infinite;
        }
        @keyframes circleDraw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animated-straight-line {
          position: absolute;
          left: 0; right: 0;
          bottom: -0.05em;
          width: 100%; height: 8px;
          pointer-events: none;
          border-radius: 2px;
          background: none;
        }
        .animated-straight-line svg {
          width: 100%; height: 100%; display: block;
        }
        .animated-straight-line-path {
          stroke: #adff2f;
          stroke-width: 3;
          fill: none;
          stroke-dasharray: 1150;
          stroke-dashoffset: 1150;
          animation: organicLineDraw 3.2s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes organicLineDraw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  );
};

export default AboutTextSection;
