// path: src/components/NavIconLink.tsx

import React from 'react';

interface NavIconLinkProps {
  href: string;
}

const NavIconLink: React.FC<NavIconLinkProps> = ({ href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className='group flex items-center justify-center h-8 w-8 text-text-light-1 transition-colors duration-300 relative'
    >
      <svg
        width='22'
        height='22'
        fill='none'
        viewBox='0 0 24 24'
        className='mx-1'
      >
        <circle cx='5' cy='12' r='2' fill='currentColor' />
        <circle cx='12' cy='12' r='2' fill='currentColor' />
        <circle cx='19' cy='12' r='2' fill='currentColor' />
      </svg>
      <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-primary-color scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 rounded'></span>
    </a>
  );
};

export default NavIconLink;
