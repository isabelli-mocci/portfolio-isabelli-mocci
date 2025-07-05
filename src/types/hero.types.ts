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
