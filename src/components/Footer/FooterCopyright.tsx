import React from 'react';
import { motion } from 'framer-motion';
import type { CopyrightConfig } from '../../types/footer.types';
import { FOOTER_ANIMATIONS, FOOTER_STYLES } from '../../constants/footer.constants';

interface FooterCopyrightProps {
  readonly config: CopyrightConfig;
  readonly className?: string;
}

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({ 
  config, 
  className = '' 
}) => (
  <div className={`${FOOTER_STYLES.copyrightSection} ${className}`}>
    <div className={FOOTER_STYLES.copyrightContainer}>
      <motion.p
        className={FOOTER_STYLES.copyrightText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: FOOTER_ANIMATIONS.copyright.duration,
          delay: FOOTER_ANIMATIONS.copyright.delay,
        }}
      >
        © {config.year} {config.owner}. All rights reserved.
        <span className={FOOTER_STYLES.copyrightSeparator}>•</span>
        <a
          href={config.privacyPolicyUrl}
          className={FOOTER_STYLES.copyrightLink}
        >
          Privacy Policy
        </a>
      </motion.p>
    </div>
  </div>
);
