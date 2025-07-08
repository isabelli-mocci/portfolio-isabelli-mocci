import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationItem } from './NavigationItem';
import ContactButton from './ContactButton';
import type { NavigationLink } from '../../types/navigation.types';

interface MobileMenuProps {
  isOpen: boolean;
  links: ReadonlyArray<NavigationLink>;
  activeItemId?: string;
  onItemClick?: (link: NavigationLink) => void;
  onContactClick?: () => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  links,
  activeItemId,
  onItemClick,
  onContactClick,
  onClose
}) => {
  const handleItemClick = (link: NavigationLink) => {
    onItemClick?.(link);
    onClose();
  };

  const handleContactClick = () => {
    onContactClick?.();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-bg-dark/95 to-bg-medium/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  {links.map((link) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <NavigationItem
                        link={link}
                        isActive={activeItemId === link.id}
                        onClick={handleItemClick}
                      />
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pb-8"
              >
                <ContactButton onClick={handleContactClick} />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
