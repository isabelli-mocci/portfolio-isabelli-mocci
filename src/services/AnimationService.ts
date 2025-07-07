import type { Variants } from 'framer-motion';
import { CONTACT_SECTION_CONSTANTS } from '../constants/contactSection.constants';

export class AnimationService {
  static getModalAnimations(): Variants {
    return {
      hidden: { 
        opacity: 0, 
        y: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_OFFSET, 
        scale: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_SCALE 
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_DURATION, 
          ease: 'easeOut' 
        } 
      },
      exit: { 
        opacity: 0, 
        y: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_OFFSET, 
        scale: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_SCALE, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.MODAL_EXIT_DURATION, 
          ease: 'easeIn' 
        } 
      },
    };
  }

  static getOverlayAnimations(): Variants {
    return {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.OVERLAY_DURATION 
        } 
      },
      exit: { 
        opacity: 0, 
        transition: { 
          duration: CONTACT_SECTION_CONSTANTS.ANIMATION.OVERLAY_EXIT_DURATION 
        } 
      },
    };
  }
}
