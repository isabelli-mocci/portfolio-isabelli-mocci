// path: src/components/HeroScrollBadge.tsx

import { motion } from 'framer-motion';

interface ScrollBadgeProps {
  onClick?: () => void;
}

const ScrollBadge: React.FC<ScrollBadgeProps> = ({ onClick }) => {
  const handleScroll = () => {
    const nextSection = document.querySelector('#projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <motion.div
      className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5 }}
      style={{ width: 120, height: 120 }}
    >
      <button
        type='button'
        aria-label='Scroll to explore'
        tabIndex={0}
        onClick={handleScroll}
        className='relative flex items-center justify-center w-full h-full bg-transparent border-none outline-none cursor-pointer'
        style={{ zIndex: 10 }}
        role='button'
      >
        <svg
          width='120'
          height='120'
          className='absolute'
          style={{ zIndex: 1 }}
        >
          <circle
            cx='60'
            cy='60'
            r='58'
            fill='none'
            stroke='#fff'
            strokeWidth='1.5'
            strokeDasharray='12 8'
          />
        </svg>

        <svg
          width='96'
          height='96'
          viewBox='0 0 96 96'
          className='absolute drop-shadow-lg'
          style={{ zIndex: 3 }}
        >
          <g>
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              from='0 48 48'
              to='360 48 48'
              dur='7s'
              repeatCount='indefinite'
            />
            <defs>
              <path
                id='circlePath'
                d='M48,8 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80'
              />
            </defs>
            <text
              fill='#fff'
              fontSize='11'
              fontFamily='sans-serif'
              fontWeight='400'
              letterSpacing='3'
            >
              <textPath
                xlinkHref='#circlePath'
                startOffset='0%'
                textLength='251'
                lengthAdjust='spacingAndGlyphs'
              >
              SCROLL TO EXPLORE • SCROLL TO EXPLORE •&nbsp;
              </textPath>
            </text>
          </g>
        </svg>
        <div className='flex items-center justify-center w-20 h-20 rounded-full z-10 shadow-xl'>
          <svg
            width='32'
            height='40'
            viewBox='0 0 32 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='16'
              y1='4'
              x2='16'
              y2='30'
              stroke='white'
              strokeWidth='1'
              strokeLinecap='round'
            />
            <polyline
              points='8,24 16,32 24,24'
              fill='none'
              stroke='white'
              strokeWidth='1'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
    </motion.div>
  );
};

export default ScrollBadge;
