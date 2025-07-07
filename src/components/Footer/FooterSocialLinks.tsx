import React from 'react';
import { motion } from 'framer-motion';
import type { SocialLink } from '../../types/footer.types';
import { FOOTER_ANIMATIONS, FOOTER_STYLES } from '../../constants/footer.constants';

interface SocialLinkItemProps {
  readonly link: SocialLink;
  readonly index: number;
}

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({ link, index }) => {
  const IconComponent = link.icon;
  
  return (
    <motion.a
      href={link.href}
      className={FOOTER_STYLES.socialLink}
      aria-label={link.label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.6 + index * 0.1,
        ease: FOOTER_ANIMATIONS.socialLinks.ease,
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...(link.isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      <div className={FOOTER_STYLES.socialLinkBackground} />
      
      <div className={FOOTER_STYLES.socialLinkContent}>
        <IconComponent className={FOOTER_STYLES.socialLinkIcon} />
      </div>
      
      <div className={FOOTER_STYLES.socialLinkGlow} />
    </motion.a>
  );
};

interface FooterSocialLinksProps {
  readonly socialLinks: readonly SocialLink[];
  readonly className?: string;
}

export const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({ 
  socialLinks, 
  className = '' 
}) => (
  <motion.div
    className={`${FOOTER_STYLES.socialLinksContainer} ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: FOOTER_ANIMATIONS.socialLinks.duration,
      delay: FOOTER_ANIMATIONS.socialLinks.delay,
      ease: FOOTER_ANIMATIONS.socialLinks.ease,
    }}
  >
    {socialLinks.map((link, index) => (
      <SocialLinkItem key={link.id} link={link} index={index} />
    ))}
  </motion.div>
);
