import type { ReactNode } from 'react';

export interface HeroComponentProps {
  className?: string;
  testId?: string;
}

export interface HeroActionProps extends HeroComponentProps {
  onSeeWork?: () => void;
  onDownloadCV?: () => void;
}

export interface HeroSectionConfig {
  actions: {
    seeWork: {
      text: string;
      targetSelector: string;
    };
    downloadCV: {
      text: string;
      downloadUrl?: string;
    };
  };
  scroll: {
    behavior: ScrollBehavior;
    fallbackSelector?: string;
  };
}

export interface ButtonVariant {
  type: 'primary' | 'secondary';
  icon: ReactNode;
  text: string;
  action: () => void;
}

export type HeroSectionProps = HeroComponentProps;
