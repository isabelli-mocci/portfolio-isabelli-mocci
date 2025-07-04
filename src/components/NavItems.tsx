// path: src/components/NavItems.tsx

import React from 'react';
import NavLink from './NavLink';
import NavIconLink from './NavIconLink';

interface NavItemsProps {
  items: { name: string; href: string; icon?: boolean }[];
}

const NavItems: React.FC<NavItemsProps> = ({ items }) => (
  <div className='flex items-center gap-4 flex-1 justify-center'>
    {items.map(item =>
      item.icon ? (
        <NavIconLink key={item.name} href={item.href} />
      ) : (
        <NavLink key={item.name} name={item.name} href={item.href} />
      )
    )}
  </div>
);

export default NavItems;
