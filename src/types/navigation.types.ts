export interface NavigationLink {
  readonly name: string;
  readonly href: string;
  readonly icon?: boolean;
}

export interface NavigationConfig {
  readonly links: ReadonlyArray<NavigationLink>;
  readonly maxWidth: string;
  readonly minHeight: string;
  readonly zIndex: number;
}

export interface NavigationStyles {
  readonly header: string;
  readonly nav: string;
  readonly actionsContainer: string;
}
