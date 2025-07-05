import { ABOUT_TEXT_CONSTANTS } from '../constants/aboutText.constants';

interface StraightLineHighlightProps {
  children: React.ReactNode;
}

export const StraightLineHighlight = ({ children }: StraightLineHighlightProps) => (
  <span className="relative inline-block">
    {children}
    <LineUnderlay />
  </span>
);

const LineUnderlay = () => (
  <span className="animated-straight-line">
    <svg
      viewBox={ABOUT_TEXT_CONSTANTS.SVG_PROPS.LINE.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animated-straight-line-path"
        d="M10 14 Q 200 2, 400 12 Q 700 20, 900 8 Q 1000 2, 1090 14"
        stroke={ABOUT_TEXT_CONSTANTS.COLORS.PRIMARY}
        strokeWidth={ABOUT_TEXT_CONSTANTS.SVG_PROPS.LINE.strokeWidth}
        fill="none"
      />
    </svg>
  </span>
);
