import React from 'react';
import type { NavigationLink } from '../../types/navigation.types';

interface NavItemsProps {
  items: ReadonlyArray<NavigationLink>;
}

const NavItems: React.FC<NavItemsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-8">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-white hover:text-primary-color transition-colors duration-200 text-sm font-medium"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default NavItems;
