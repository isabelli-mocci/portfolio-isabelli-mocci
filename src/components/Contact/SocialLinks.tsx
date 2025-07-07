import { memo } from 'react';
import type { SocialLinkData } from '../../types/contactSection.types';
import contactSectionStyles from '../../styles/contactSection.styles';

interface SocialLinksProps {
  readonly socialLinks: readonly SocialLinkData[];
}

export const SocialLinks = memo<SocialLinksProps>(({ socialLinks }) => (
  <div className={contactSectionStyles.socialContainer}>
    {socialLinks.map((link) => {
      const IconComponent = link.icon;
      return (
        <a
          key={link.id}
          href={link.href}
          className={contactSectionStyles.socialLink}
          {...(link.isExternal && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
        >
          <IconComponent className="w-5 h-5" />
        </a>
      );
    })}
  </div>
));

SocialLinks.displayName = 'SocialLinks';
