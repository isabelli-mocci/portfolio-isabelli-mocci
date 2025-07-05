import React from 'react';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  ariaLabel: string;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, onClick, ariaLabel }) => (
  <button
    onClick={e => {
      e.stopPropagation();
      onClick();
    }}
    className={`fixed ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-[9999] bg-white/80 hover:bg-primary-color text-bg-dark rounded-full shadow-lg p-2 transition-colors duration-200 flex items-center justify-center w-10 h-10 border border-white/30`}
    aria-label={ariaLabel}
    style={{ outline: 'none' }}
    type="button"
  >
    {direction === 'left' ? (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3.2' strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'>
        <path d='M15 6l-6 6 6 6' />
      </svg>
    ) : (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3.2' strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'>
        <path d='M9 6l6 6-6 6' />
      </svg>
    )}
  </button>
);

export default NavigationArrow;
