// path: src/components/AboutSection.tsx

import { motion } from 'framer-motion';
import WordPill from './AboutWordPill';
import ContactButton from './ContactButton';
import RayIcon from '../assets/icons/ray.svg';
import AboutTextSection from './AboutTextSection';
import { pillsData, pillsPositions } from '../types/pillsData';

const AboutSection = () => {
  return (
    <section
      id='about-me'
      aria-labelledby='about-heading'
      className='min-h-screen flex flex-col justify-center items-center py-0 px-0 bg-gradient-to-b from-bg-medium to-bg-dark text-text-white relative overflow-x-hidden'
    >
      <div className='w-full flex flex-col md:flex-row items-start md:items-end justify-center relative flex-1 min-h-[80vh] gap-8 md:gap-0'>
        <div
          className='flex flex-col justify-end items-start h-full pl-8 pb-4 md:pb-8 z-10 w-full md:w-auto'
          style={{ flex: '0 0 auto' }}
        >
          <h2
            id='about-heading'
            className='text-primary-color mb-0 leading-none text-left relative'
            style={{
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              textShadow: '0 4px 24px rgba(0,0,0,0.25)',
            }}
          >
            <span style={{ position: 'relative', display: 'inline-block' }}>
              A
              <span style={{ position: 'relative', display: 'inline-block' }}>
                b
                <span
                  style={{
                    position: 'absolute',
                    left: '55%',
                    top: '58%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                >
                  <img
                    src={RayIcon}
                    alt='ray'
                    style={{ width: '.15em', height: '.15em' }}
                  />
                </span>
              </span>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                o
                <span
                  style={{
                    position: 'absolute',
                    left: '55%',
                    top: '58%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                >
                  <img
                    src={RayIcon}
                    alt='ray'
                    style={{ width: '.15em', height: '.15em' }}
                  />
                </span>
              </span>
              ut
            </span>
          </h2>
          <div className='h-1 w-24 bg-primary-color rounded-full mt-4 mb-2 mx-auto md:mx-0 opacity-80' />
        </div>

        <div
          className='relative flex-1 min-h-[300px] md:min-h-[500px] w-full md:w-auto mt-8 md:mt-0'
          style={{
            minWidth: '320px',
            width: '40vw',
            maxWidth: '600px',
            height: '80vh',
          }}
        >
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            {pillsData.map((pill, index) => {
              const pos = pillsPositions[index % pillsPositions.length];
              return (
                <motion.div
                  key={pill.text}
                  style={{
                    position: 'absolute',
                    left: pos.left,
                    top: pos.top,
                    zIndex: 20 + index,
                    pointerEvents: 'auto',
                  }}
                  initial={{ rotate: pill.initialRotation }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                >
                  <WordPill
                    text={pill.text}
                    initialRotation={pill.initialRotation}
                    initialX={pos.left}
                    initialY={pos.top}
                    delay={index * 0.1}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <AboutTextSection />

      <div className='flex items-center justify-center w-full mt-2 mb-8'>
        <div className='scale-125 md:scale-150'>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
