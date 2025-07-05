import { LiaDumbbellSolid } from 'react-icons/lia';
import { BsArrowRight, BsHandIndex, BsExclamation } from 'react-icons/bs';
import { GoHeartFill } from 'react-icons/go';

import { ABOUT_TEXT_CONSTANTS } from '../constants/aboutText.constants';
import type { AboutTextConfig } from '../types/aboutText.types';

export const aboutTextConfig: AboutTextConfig = {
  icons: {
    arrow: {
      Icon: BsArrowRight,
      ariaLabel: 'arrow right',
      animationClass: 'arrow-animate',
      style: ABOUT_TEXT_CONSTANTS.ICON_STYLES.ARROW
    },
    heart: {
      Icon: GoHeartFill,
      ariaLabel: 'heart',
      animationClass: 'heart-animate',
      style: ABOUT_TEXT_CONSTANTS.ICON_STYLES.HEART
    },
    dumbbell: {
      Icon: LiaDumbbellSolid,
      ariaLabel: 'dumbbell',
      animationClass: 'dumbbell-animate',
      style: ABOUT_TEXT_CONSTANTS.ICON_STYLES.DUMBBELL
    },
    hand: {
      Icon: BsHandIndex,
      ariaLabel: 'hand up',
      animationClass: 'hand-animate',
      style: ABOUT_TEXT_CONSTANTS.ICON_STYLES.HAND
    },
    exclamation: {
      Icon: BsExclamation,
      ariaLabel: 'exclamation',
      animationClass: 'exclamation-animate',
      style: ABOUT_TEXT_CONSTANTS.ICON_STYLES.EXCLAMATION
    }
  }
};
