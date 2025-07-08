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
    className={`fixed ${direction === 'left' ? 'left-4 md:left-6' : 'right-4 md:right-6'} top-1/2 -translate-y-1/2 z-[9999] 
      bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] 
      backdrop-blur-2xl backdrop-saturate-150 
      border border-white/[0.08] 
      text-white/90 
      rounded-2xl 
      shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
      hover:bg-gradient-to-r hover:from-white/[0.06] hover:via-white/[0.1] hover:to-white/[0.06] 
      hover:border-white/[0.15] hover:text-white 
      hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)]
      hover:shadow-white/10
      active:scale-[0.95] 
      transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] 
      p-3 md:p-4 
      flex items-center justify-center 
      w-12 h-12 md:w-14 md:h-14 
      will-change-transform
      focus:outline-none focus:ring-2 focus:ring-white/20
      supports-[backdrop-filter]:bg-gradient-to-r 
      supports-[backdrop-filter]:from-white/[0.03] 
      supports-[backdrop-filter]:via-white/[0.06] 
      supports-[backdrop-filter]:to-white/[0.03]`}
    aria-label={ariaLabel}
    type="button"
  >
    {direction === 'left' ? (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110'>
        <path d='M15 6l-6 6 6 6' />
      </svg>
    ) : (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110'>
        <path d='M9 6l6 6-6 6' />
      </svg>
    )}
  </button>
);

export default NavigationArrow;
