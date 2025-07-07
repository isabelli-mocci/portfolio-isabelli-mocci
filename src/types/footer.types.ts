import type { ComponentType } from 'react';

export interface SocialLink {
  readonly id: string;
  readonly href: string;
  readonly label: string;
  readonly icon: ComponentType<{ className?: string }>;
  readonly isExternal: boolean;
}

export interface MarqueeConfig {
  readonly labels: readonly string[];
  readonly speed: number;
  readonly direction: 'left' | 'right';
  readonly rotationAngle: number;
  readonly duplicateCount: number;
}

export interface LogoConfig {
  readonly alt: string;
  readonly height: string;
}

export interface CtaConfig {
  readonly primaryText: string;
  readonly secondaryText: string;
}

export interface CopyrightConfig {
  readonly year: number;
  readonly owner: string;
  readonly privacyPolicyUrl: string;
}

export interface FooterConfig {
  readonly marquee: MarqueeConfig;
  readonly logo: LogoConfig;
  readonly cta: CtaConfig;
  readonly copyright: CopyrightConfig;
  readonly socialLinks: readonly SocialLink[];
}

export interface AnimationConfig {
  readonly duration: number;
  readonly delay: number;
  readonly ease: readonly [number, number, number, number];
}

export interface FooterAnimations {
  readonly logo: AnimationConfig;
  readonly socialLinks: AnimationConfig;
  readonly cta: AnimationConfig;
  readonly copyright: AnimationConfig;
}
