import React from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-6 h-6 focus:outline-none ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="absolute inset-0 flex flex-col justify-center space-y-1">
        <motion.span
          className="block h-0.5 w-6 bg-white rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-6 bg-white rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-6 bg-white rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
