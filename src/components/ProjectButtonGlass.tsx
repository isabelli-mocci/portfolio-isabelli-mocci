import React from 'react';

interface ProjectButtonGlassProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  title?: string;
  circleText?: string;
  icon?: React.ReactElement;
  size?: number;
}

const DefaultEyeIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-7 w-7 text-[#FFF]'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={1.5}
    role='img'
    aria-label='Eye'
    aria-hidden='false'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    />
  </svg>
);

const ProjectButtonGlass: React.FC<ProjectButtonGlassProps> = React.memo(
  ({
    onClick,
    className = '',
    ariaLabel = 'View project details',
    title,
    circleText = 'VIEW DETAILS • VIEW DETAILS • VIEW DETAILS • VIEW DETAILS • ',
    icon,
  }) => {
    const idealTextPathRadius = 45;
    const textPadding = 10;
    const svgSize = 2 * (idealTextPathRadius + textPadding);
    const center = svgSize / 2;
    const calculatedStartOffset = 0;
    const buttonRadius = idealTextPathRadius + 14 / 2 + 5;
    const buttonSize = 2 * buttonRadius;
    const fixedInnerCircleSize = 64;

    return (
      <button
        type='button'
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        className={`relative flex items-center justify-center rounded-full cursor-pointer overflow-hidden group transition-all duration-300 focus:ring-4 focus:ring-primary/40 focus:outline-none shadow-2xl backdrop-blur-lg ${className}`}
        style={{
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          background: `linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(30,41,59,0.18) 100%)`,
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,255,255,0.10) inset',
          borderTop: '1.5px solid rgba(255,255,255,0.45)',
          borderBottom: '1.5px solid rgba(30,41,59,0.18)',
        }}
      >
        <span className='sr-only'>{ariaLabel}</span>
        <div
          className='relative flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 bg-white/10 shadow-inner'
          style={{
            width: `${fixedInnerCircleSize}px`,
            height: `${fixedInnerCircleSize}px`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(30,41,59,0.10) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(255,255,255,0.35)',
            boxShadow: '0 1.5px 8px 0 rgba(255,255,255,0.10) inset',
          }}
        >
          {icon || <DefaultEyeIcon />}
        </div>
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className='absolute inset-0 pointer-events-none animate-spin-slow'
          style={{ zIndex: 2 }}
          aria-hidden='true'
        >
          <g>
            <defs>
              <path
                id='glassCirclePath'
                d={`M ${center - idealTextPathRadius},${center}
                  a ${idealTextPathRadius},${idealTextPathRadius} 0 1,1 ${
                  idealTextPathRadius * 2
                },0
                  a ${idealTextPathRadius},${idealTextPathRadius} 0 1,1 -${
                  idealTextPathRadius * 2
                },0`}
              />
            </defs>
            <text
              fill='#FFF'
              fontSize='14'
              fontFamily='sans-serif'
              fontWeight='100'
              letterSpacing='2'
              style={{ filter: 'drop-shadow(0 0 2px #000)' }}
            >
              <textPath
                href='#glassCirclePath'
                dominantBaseline='middle'
                startOffset={`${calculatedStartOffset}%`}
              >
                {circleText}
              </textPath>
            </text>
          </g>
        </svg>
      </button>
    );
  }
);

ProjectButtonGlass.displayName = 'ProjectButtonGlass';
export default ProjectButtonGlass;
