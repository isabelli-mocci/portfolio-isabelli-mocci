import React from 'react';
import { motion } from 'framer-motion';
import type { CtaConfig } from '../../types/footer.types';
import { FOOTER_ANIMATIONS, FOOTER_STYLES } from '../../constants/footer.constants';

interface FooterCtaProps {
  readonly config: CtaConfig;
  readonly className?: string;
}

export const FooterCta: React.FC<FooterCtaProps> = ({ config, className = '' }) => (
  <div className={`${FOOTER_STYLES.ctaSection} ${className}`}>
    <div className={FOOTER_STYLES.ctaHighlight} />
    
    <motion.div
      className={FOOTER_STYLES.ctaContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: FOOTER_ANIMATIONS.cta.duration,
        delay: FOOTER_ANIMATIONS.cta.delay,
        ease: FOOTER_ANIMATIONS.cta.ease,
      }}
    >
      <h2 className={`footer-cta ${FOOTER_STYLES.ctaHeading}`}>
        <span className={`footer-cta ${FOOTER_STYLES.ctaPrimary}`}>
          {config.primaryText}
        </span>
        <br />
        <span className={`footer-cta-secondary ${FOOTER_STYLES.ctaSecondary}`}>
          {config.secondaryText}
        </span>
      </h2>
    </motion.div>
  </div>
);
