import type { AboutSectionConfig } from '../types/aboutSection.types';
import { ABOUT_SECTION_CONSTANTS } from '../constants/aboutSection.constants';

export const ABOUT_SECTION_CONFIG: AboutSectionConfig = {
  animations: {
    drag: {
      momentum: false,
      elastic: ABOUT_SECTION_CONSTANTS.ANIMATION.DEFAULT_DRAG_ELASTIC,
      transition: { 
        bounceStiffness: ABOUT_SECTION_CONSTANTS.ANIMATION.DEFAULT_BOUNCE_STIFFNESS, 
        bounceDamping: ABOUT_SECTION_CONSTANTS.ANIMATION.DEFAULT_BOUNCE_DAMPING 
      }
    },
    pill: {
      delayMultiplier: ABOUT_SECTION_CONSTANTS.ANIMATION.DEFAULT_DELAY_MULTIPLIER
    }
  },
  layout: {
    pills: {
      container: {
        minWidth: ABOUT_SECTION_CONSTANTS.LAYOUT.MIN_CONTAINER_WIDTH,
        width: ABOUT_SECTION_CONSTANTS.LAYOUT.CONTAINER_WIDTH_VW,
        maxWidth: ABOUT_SECTION_CONSTANTS.LAYOUT.MAX_CONTAINER_WIDTH,
        height: ABOUT_SECTION_CONSTANTS.LAYOUT.CONTAINER_HEIGHT_VH,
        minHeight: {
          mobile: ABOUT_SECTION_CONSTANTS.LAYOUT.MIN_HEIGHT_MOBILE,
          desktop: ABOUT_SECTION_CONSTANTS.LAYOUT.MIN_HEIGHT_DESKTOP
        }
      }
    },
    heading: {
      fontSize: ABOUT_SECTION_CONSTANTS.LAYOUT.HEADING_FONT_SIZE,
      lineHeight: 1,
      letterSpacing: ABOUT_SECTION_CONSTANTS.LAYOUT.HEADING_LETTER_SPACING,
      textShadow: ABOUT_SECTION_CONSTANTS.LAYOUT.HEADING_TEXT_SHADOW
    },
    rayIcon: {
      size: ABOUT_SECTION_CONSTANTS.LAYOUT.RAY_ICON_SIZE,
      position: {
        left: ABOUT_SECTION_CONSTANTS.LAYOUT.RAY_ICON_LEFT,
        top: ABOUT_SECTION_CONSTANTS.LAYOUT.RAY_ICON_TOP
      }
    }
  },
  zIndex: {
    base: ABOUT_SECTION_CONSTANTS.Z_INDEX.BASE,
    content: ABOUT_SECTION_CONSTANTS.Z_INDEX.CONTENT,
    pills: ABOUT_SECTION_CONSTANTS.Z_INDEX.PILLS_BASE
  }
} as const;
