export interface NavigationLink {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon?: string;
  readonly isExternal?: boolean;
  readonly ariaLabel?: string;
}

export interface NavigationItemProps {
  readonly link: NavigationLink;
  readonly isActive?: boolean;
  readonly onClick?: (link: NavigationLink) => void;
}

export interface NavigationListProps {
  readonly items: ReadonlyArray<NavigationLink>;
  readonly activeItemId?: string;
  readonly onItemClick?: (link: NavigationLink) => void;
  readonly variant?: 'horizontal' | 'vertical';
  readonly className?: string;
}

export interface NavigationBarProps {
  readonly links?: ReadonlyArray<NavigationLink>;
  readonly className?: string;
  readonly testId?: string;
  readonly activeItemId?: string;
  readonly onItemClick?: (link: NavigationLink) => void;
  readonly showStatusIndicator?: boolean;
  readonly showContactButton?: boolean;
  readonly onContactClick?: () => void;
}

export interface NavigationConfig {
  readonly links: ReadonlyArray<NavigationLink>;
  readonly layout: {
    readonly maxWidth: string;
    readonly minHeight: string;
    readonly zIndex: number;
  };
  readonly behavior: {
    readonly smooth: boolean;
    readonly offset: number;
  };
}

export interface NavigationStyles {
  readonly container: {
    readonly header: string;
    readonly nav: string;
    readonly actionsContainer: string;
  };
  readonly list: {
    readonly horizontal: string;
    readonly vertical: string;
  };
  readonly item: {
    readonly base: string;
    readonly active: string;
    readonly hover: string;
  };
}

export interface NavigationTheme {
  readonly primary: string;
  readonly secondary: string;
  readonly accent: string;
  readonly text: string;
  readonly background: string;
}
