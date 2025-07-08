import type { LucideIcon } from 'lucide-react';

export interface PillData {
  readonly text: string;
  readonly icon?: LucideIcon;
  readonly initialRotation: number;
  readonly initialX?: string;
  readonly initialY?: string;
}

export interface PillPosition {
  readonly left: string;
  readonly top: string;
}

export interface PillWithPosition {
  readonly pill: PillData;
  readonly position: PillPosition;
  readonly index: number;
}

export interface DragAnimationConfig {
  readonly momentum: boolean;
  readonly elastic: number;
  readonly transition: BounceTransitionConfig;
}

export interface BounceTransitionConfig {
  readonly bounceStiffness: number;
  readonly bounceDamping: number;
}

export interface PillAnimationConfig {
  readonly delayMultiplier: number;
}

export interface AnimationsConfig {
  readonly drag: DragAnimationConfig;
  readonly pill: PillAnimationConfig;
}

export interface ContainerDimensions {
  readonly minWidth: string;
  readonly width: string;
  readonly maxWidth: string;
  readonly height: string;
}

export interface ResponsiveMinHeight {
  readonly mobile: string;
  readonly desktop: string;
}

export interface PillsContainerConfig extends ContainerDimensions {
  readonly minHeight: ResponsiveMinHeight;
}

export interface HeadingLayoutConfig {
  readonly fontSize: string;
  readonly lineHeight: number;
  readonly letterSpacing: string;
  readonly textShadow: string;
}

export interface IconPosition {
  readonly left: string;
  readonly top: string;
}

export interface RayIconConfig {
  readonly size: string;
  readonly position: IconPosition;
}

export interface PillsLayoutConfig {
  readonly container: PillsContainerConfig;
}

export interface LayoutConfig {
  readonly pills: PillsLayoutConfig;
  readonly heading: HeadingLayoutConfig;
  readonly rayIcon: RayIconConfig;
}

export interface ZIndexConfig {
  readonly base: number;
  readonly content: number;
  readonly pills: number;
}

export interface AboutSectionConfig {
  readonly animations: AnimationsConfig;
  readonly layout: LayoutConfig;
  readonly zIndex: ZIndexConfig;
}
