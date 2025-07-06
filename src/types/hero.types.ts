import type { ReactNode } from 'react';

export interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}

export interface HeroConfig {
  buttons: {
    seeWork: {
      text: string;
      variant: 'primary';
    };
    downloadCV: {
      text: string;
      variant: 'secondary';
    };
  };
  scroll: {
    targetSelector: string;
    behavior: ScrollBehavior;
  };
}

export interface HeroSectionProps {
  className?: string;
}

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
