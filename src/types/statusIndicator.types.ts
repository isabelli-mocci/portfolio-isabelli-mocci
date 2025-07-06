export type StatusType = 'available' | 'busy' | 'away' | 'offline';

export interface StatusConfig {
  readonly label: string;
  readonly bgGradient: string;
  readonly borderColor: string;
  readonly textColor: string;
  readonly dotColor: string;
  readonly pulseColor: string;
}

export interface StatusIndicatorProps {
  readonly status?: StatusType;
  readonly customLabel?: string;
  readonly className?: string;
  readonly size?: 'small' | 'medium' | 'large';
  readonly animated?: boolean;
  readonly testId?: string;
  readonly ariaLabel?: string;
}

export type StatusTheme = {
  readonly [K in StatusType]: StatusConfig;
}

export interface StatusIndicatorStyleConfig {
  readonly container: {
    readonly base: string;
    readonly sizes: {
      readonly small: string;
      readonly medium: string;
      readonly large: string;
    };
  };
  readonly pulseContainer: {
    readonly base: string;
    readonly sizes: {
      readonly small: string;
      readonly medium: string;
      readonly large: string;
    };
  };
  readonly dot: {
    readonly base: string;
    readonly sizes: {
      readonly small: string;
      readonly medium: string;
      readonly large: string;
    };
  };
  readonly text: {
    readonly base: string;
    readonly sizes: {
      readonly small: string;
      readonly medium: string;
      readonly large: string;
    };
  };
}
