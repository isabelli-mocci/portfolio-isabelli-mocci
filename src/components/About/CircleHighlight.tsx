import { ABOUT_TEXT_CONSTANTS } from '../../constants/aboutText.constants';

interface CircleHighlightProps {
  children: React.ReactNode;
}

export const CircleHighlight = ({ children }: CircleHighlightProps) => (
  <span className="relative inline-block">
    <span style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </span>
    <CircleOverlay />
  </span>
);

const CircleOverlay = () => (
  <span
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(2.3, 1.5)',
      zIndex: 0,
      pointerEvents: 'none',
      width: '170%',
      height: '90%',
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox={ABOUT_TEXT_CONSTANTS.SVG_PROPS.CIRCLE.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="circle-animate"
      style={{ display: 'block' }}
    >
      <path
        className="circle-animate-path"
        d="M35,45 Q25,18 65,20 Q110,5 170,25 Q210,40 175,55 Q130,75 85,65 Q45,60 35,45 Z"
        stroke={ABOUT_TEXT_CONSTANTS.COLORS.PRIMARY}
        strokeWidth={ABOUT_TEXT_CONSTANTS.SVG_PROPS.CIRCLE.strokeWidth}
        fill="none"
        opacity="0.85"
      />
    </svg>
  </span>
);
