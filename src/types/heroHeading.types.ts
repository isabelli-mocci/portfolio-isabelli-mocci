export interface HeroHeadingProps {
  className?: string;
  personName?: string;
  profession?: string;
  description?: HeroDescription;
  testId?: string;
}

export interface HeroDescription {
  prefix: string;
  suffix: string;
  highlight: string;
}

export interface HeadingTextProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
}

export interface DecoratedNameProps {
  name: string;
  starIcon: React.ReactNode;
  rayIcon: React.ReactNode;
  className?: string;
}

export interface HeroIconWrapperProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  animation?: string;
  className?: string;
}

export interface HeroHeadingConfig {
  text: {
    defaultPersonName: string;
    defaultProfession: string;
    defaultDescription: HeroDescription;
  };
  styling: {
    container: string;
    headingPrimary: string;
    headingSecondary: string;
    highlight: string;
    iconWrapper: {
      base: string;
      positions: {
        left: string;
        right: string;
      };
    };
  };
}
