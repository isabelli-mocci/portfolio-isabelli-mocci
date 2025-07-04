// path: src/components/AnimatedStrokeSVG.tsx

import React from 'react';

type AnimatedStrokeSVGProps = {
  type: 'wavy' | 'circle';
  dash: number;
  length: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
};

const AnimatedStrokeSVG: React.FC<AnimatedStrokeSVGProps> = ({
  type,
  dash,
  length,
  color = '#adff2f',
  strokeWidth = 2,
  className = '',
  style = {},
}) => {
  if (type === 'wavy') {
    return (
      <svg
        className={className}
        viewBox="0 0 65 8"
        width="100%"
        height="0.7em"
        aria-label="wavy underline"
        style={style}
      >
        <title>wavy underline</title>
        <path
          d="M2,6 Q10,2 18,6 Q26,10 34,6 Q42,2 50,6 Q58,10 60,6"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          style={{ strokeDasharray: length, strokeDashoffset: length * (1 - dash) }}
        />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 120 50"
      width="100%"
      height="auto"
      aria-label="organic circle"
      style={style}
    >
      <title>organic circle</title>
      <ellipse
        cx="60"
        cy="25"
        rx="56"
        ry="20"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        style={{ strokeDasharray: length, strokeDashoffset: length * (1 - dash) }}
      />
    </svg>
  );
};

export default AnimatedStrokeSVG;
