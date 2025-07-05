export interface ScrollBadgeProps {
  onClick?: () => void;
  targetSelector?: string;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  testId?: string;
}

export interface ScrollBadgeConfig {
  target: {
    defaultSelector: string;
    scrollBehavior: ScrollBehavior;
  };
  animation: {
    initialDelay: number;
    rotationDuration: string;
    fadeTransition: {
      initial: { opacity: number };
      animate: { opacity: number };
      transition: { delay: number };
    };
  };
  dimensions: {
    container: { width: number; height: number };
    outerCircle: { radius: number; strokeWidth: number };
    innerCircle: { radius: number };
    arrow: { width: number; height: number };
  };
  text: {
    content: string;
    fontSize: number;
    letterSpacing: number;
    pathLength: number;
  };
  styling: {
    colors: {
      stroke: string;
      fill: string;
      text: string;
    };
    spacing: {
      dashArray: string;
    };
  };
}

export interface CircularTextProps {
  text: string;
  radius: number;
  fontSize: number;
  letterSpacing: number;
  pathLength: number;
  rotationDuration: string;
  className?: string;
}

export interface ScrollArrowProps {
  width: number;
  height: number;
  strokeColor: string;
  strokeWidth: number;
  className?: string;
}

export interface AnimatedCircleProps {
  radius: number;
  strokeColor: string;
  strokeWidth: number;
  dashArray: string;
  className?: string;
}
