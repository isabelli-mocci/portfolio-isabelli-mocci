export interface PillData {
  text: string;
  initialRotation: number;
  initialX?: string;
  initialY?: string;
}

export interface PillPosition {
  left: string;
  top: string;
}

export interface AnimationConfig {
  momentum: boolean;
  elastic: number;
  transition: {
    bounceStiffness: number;
    bounceDamping: number;
  };
}

export interface LayoutConfig {
  pills: {
    container: {
      minWidth: string;
      width: string;
      maxWidth: string;
      height: string;
      minHeight: {
        mobile: string;
        desktop: string;
      };
    };
  };
  heading: {
    fontSize: string;
    lineHeight: number;
    letterSpacing: string;
    textShadow: string;
  };
  rayIcon: {
    size: string;
    position: {
      left: string;
      top: string;
    };
  };
}

export interface AboutSectionConfig {
  animations: {
    drag: AnimationConfig;
    pill: {
      delayMultiplier: number;
    };
  };
  layout: LayoutConfig;
  zIndex: {
    base: number;
    content: number;
    pills: number;
  };
}
