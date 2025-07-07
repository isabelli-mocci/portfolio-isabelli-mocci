import React from 'react';
import { FooterLogo } from './FooterLogo';
import { FooterSocialLinks } from './FooterSocialLinks';
import { FooterCta } from './FooterCta';
import { FooterCopyright } from './FooterCopyright';
import { FooterMarquee } from './FooterMarquee';
import { FOOTER_CONFIG } from '../../config/footer.config';
import { FOOTER_STYLES } from '../../constants/footer.constants';

interface FooterProps {
  readonly className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => (
  <footer className={`${FOOTER_STYLES.container} ${className}`}>
    <div className={FOOTER_STYLES.backdrop} />

    <div className={FOOTER_STYLES.content}>
      <FooterMarquee config={FOOTER_CONFIG.marquee} />

      <div className={FOOTER_STYLES.logoSection}>
        <FooterLogo />
        <FooterSocialLinks socialLinks={FOOTER_CONFIG.socialLinks} />
      </div>
    </div>

    <FooterCta config={FOOTER_CONFIG.cta} />
    <FooterCopyright config={FOOTER_CONFIG.copyright} />
  </footer>
);

export default Footer;
