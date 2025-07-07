import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo/logo-code-animated-dark.gif';
import { FOOTER_CONFIG } from '../../config/footer.config';
import { FOOTER_ANIMATIONS, FOOTER_STYLES } from '../../constants/footer.constants';

interface FooterLogoProps {
  className?: string;
}

export const FooterLogo: React.FC<FooterLogoProps> = ({ className = '' }) => (
  <motion.div
    className={`${FOOTER_STYLES.logoContainer} ${className}`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: FOOTER_ANIMATIONS.logo.duration,
      delay: FOOTER_ANIMATIONS.logo.delay,
      ease: FOOTER_ANIMATIONS.logo.ease,
    }}
  >
    <img
      src={Logo}
      alt={FOOTER_CONFIG.logo.alt}
      className={`${FOOTER_CONFIG.logo.height} ${FOOTER_STYLES.logoImage}`}
    />
  </motion.div>
);
