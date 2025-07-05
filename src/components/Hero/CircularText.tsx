import React from 'react';
import type { CircularTextProps } from '../../types/heroScrollBadge.types';
import { generateCirclePath } from '../../utils/heroScrollBadge.utils';
import { SVG_VIEWBOX, ANIMATION_CONSTANTS } from '../../constants/heroScrollBadge.constants';

const CircularText: React.FC<CircularTextProps> = ({
  text,
  radius,
  fontSize,
  letterSpacing,
  pathLength,
  rotationDuration,
  className = '',
}) => {
  const pathId = `circlePath-${Math.random().toString(36).substr(2, 9)}`;
  const circularPath = generateCirclePath(radius);

  return (
    <svg
      width="96"
      height="96"
      viewBox={SVG_VIEWBOX.TEXT_CIRCLE}
      className={className}
    >
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={ANIMATION_CONSTANTS.ROTATION_FROM}
          to={ANIMATION_CONSTANTS.ROTATION_TO}
          dur={rotationDuration}
          repeatCount="indefinite"
        />
        <defs>
          <path
            id={pathId}
            d={circularPath}
          />
        </defs>
        <text
          fill="currentColor"
          fontSize={fontSize}
          fontFamily="sans-serif"
          fontWeight="400"
          letterSpacing={letterSpacing}
        >
          <textPath
            xlinkHref={`#${pathId}`}
            startOffset="0%"
            textLength={pathLength}
            lengthAdjust="spacingAndGlyphs"
          >
            {text}
          </textPath>
        </text>
      </g>
    </svg>
  );
};

export default CircularText;
