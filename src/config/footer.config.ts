import { FaSquareGithub, FaDev, FaSquareEnvelope } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import type { FooterConfig } from '../types/footer.types';

export const FOOTER_CONFIG: FooterConfig = {
  marquee: {
    labels: ['AVAILABLE'],
    speed: 60,
    direction: 'left',
    rotationAngle: -3,
    duplicateCount: 12,
  },
  
  logo: {
    alt: 'Isabelli Mocci Logo',
    height: 'h-32',
  },
  
  cta: {
    primaryText: "Let's work together",
    secondaryText: 'and create something amazing',
  },
  
  copyright: {
    year: 2025,
    owner: 'Isabelli Mocci',
    privacyPolicyUrl: '/privacy-policy',
  },
  
  socialLinks: [
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/isabelli-mocci/',
      label: 'LinkedIn',
      icon: IoLogoLinkedin,
      isExternal: true,
    },
    {
      id: 'dev',
      href: 'https://dev.to/isabelli_mocci',
      label: 'Dev.to',
      icon: FaDev,
      isExternal: true,
    },
    {
      id: 'github',
      href: 'https://github.com/isabelli-mocci',
      label: 'GitHub',
      icon: FaSquareGithub,
      isExternal: true,
    },
    {
      id: 'email',
      href: 'mailto:isabellimocci.tech@gmail.com',
      label: 'E-mail',
      icon: FaSquareEnvelope,
      isExternal: false,
    },
  ],
} as const;
