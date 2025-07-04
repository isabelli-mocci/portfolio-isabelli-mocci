// path: src/components/ContactButton.tsx

import React from 'react';

const ContactButton: React.FC = () => (
  <a href='#about'>
    <button
      className='relative inline-flex h-10 w-auto overflow-hidden rounded-full p-[1px] focus:outline-none group active:scale-95 transition-transform duration-150'
      onClick={e => {
        const btn = e.currentTarget;
        btn.classList.remove('animate-[wiggle_0.4s]');
        void btn.offsetWidth;
        btn.classList.add('animate-[wiggle_0.4s]');
        setTimeout(() => btn.classList.remove('animate-[wiggle_0.4s]'), 400);
      }}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#adff2f_0%,#7fff00_25%,#1a3d00_50%,#eaffc2_75%,#adff2f_100%)] opacity-90 group-hover:opacity-100 transition-opacity duration-300'></span>
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bg-dark px-5 text-sm font-medium text-white gap-2 relative z-10 duration-200'>
        Contact me
        <span className='inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 448 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z'></path>
          </svg>
        </span>
      </span>
      <span className='absolute inset-0 rounded-full ring-1 pointer-events-none'></span>
    </button>
  </a>
);

export default ContactButton;
