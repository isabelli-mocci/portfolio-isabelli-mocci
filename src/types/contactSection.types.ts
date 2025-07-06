import type { Variants } from 'framer-motion';

export type ContactTabType = 'quick' | 'form';

export interface ContactSectionProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export interface SocialLinkData {
  readonly id: string;
  readonly href: string;
  readonly label: string;
  readonly iconPath: string;
  readonly isExternal?: boolean;
}

export interface ContactMethodData {
  readonly id: string;
  readonly type: 'email' | 'linkedin' | 'phone' | 'other';
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly isExternal?: boolean;
  readonly icon: ContactIconConfig;
}

export interface ContactIconConfig {
  readonly viewBox: string;
  readonly path: string;
  readonly strokeWidth?: string;
}

export interface AvailabilityStatusData {
  readonly isAvailable: boolean;
  readonly statusText: string;
  readonly statusColor: 'green' | 'yellow' | 'red';
}

export interface MotionVariantsConfig {
  readonly modal: Variants;
  readonly overlay: Variants;
}

export interface ContactSectionConfig {
  readonly animations: MotionVariantsConfig;
  readonly tabs: readonly ContactTabType[];
  readonly socialLinks: readonly SocialLinkData[];
  readonly contactMethods: readonly ContactMethodData[];
  readonly availability: AvailabilityStatusData;
}
