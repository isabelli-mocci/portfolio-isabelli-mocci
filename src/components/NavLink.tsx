// path: src/components/NavLink.tsx

import React from 'react';

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
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
      className='relative group text-text-light-1 text-sm font-medium hover:text-link-hover transition-colors duration-300 px-2 whitespace-nowrap'
    >
      {name}
      <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-primary-color scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 rounded'></span>
    </a>
  );
};

export default NavLink;
