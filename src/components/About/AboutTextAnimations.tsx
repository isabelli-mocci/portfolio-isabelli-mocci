import { ABOUT_TEXT_CONSTANTS } from '../../constants/aboutText.constants';

export const AboutTextAnimations = () => (
  <style>{`
    .arrow-animate {
      animation: arrowMove ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.ARROW} infinite alternate cubic-bezier(.4,0,.2,1);
    }
    @keyframes arrowMove {
      0% { transform: translateX(0); }
      100% { transform: translateX(10px); }
    }
    
    .heart-animate {
      animation: heartBeat ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.HEART} infinite cubic-bezier(.4,0,.2,1);
    }
    @keyframes heartBeat {
      0%, 100% { transform: scale(1); }
      20% { transform: scale(1.18); }
      40% { transform: scale(0.97); }
      60% { transform: scale(1.09); }
      80% { transform: scale(0.99); }
    }
    
    .dumbbell-animate {
      animation: dumbbellLift ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.DUMBBELL} infinite cubic-bezier(.4,0,.2,1);
    }
    @keyframes dumbbellLift {
      0%, 100% { transform: rotate(-8deg); }
      30% { transform: rotate(13deg) translateY(-2px); }
      60% { transform: rotate(-3deg) translateY(0); }
    }
    
    .hand-animate {
      animation: handPoint ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.HAND} infinite alternate cubic-bezier(.4,0,.2,1);
    }
    @keyframes handPoint {
      0% { transform: translateY(0); }
      100% { transform: translateY(-6px) scale(1.07); }
    }
    
    .exclamation-animate {
      animation: exclamationBounce ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.EXCLAMATION} infinite cubic-bezier(.4,0,.2,1);
    }
    @keyframes exclamationBounce {
      0%, 100% { transform: scale(1) rotate(0deg); }
      20% { transform: scale(1.25) rotate(-10deg); }
      40% { transform: scale(0.95) rotate(8deg); }
      60% { transform: scale(1.1) rotate(-6deg); }
      80% { transform: scale(0.98) rotate(4deg); }
    }
    
    .circle-animate {
      filter: none;
    }
    
    .circle-animate-path {
      stroke-dasharray: ${ABOUT_TEXT_CONSTANTS.SVG_PROPS.CIRCLE.strokeDasharray};
      stroke-dashoffset: ${ABOUT_TEXT_CONSTANTS.SVG_PROPS.CIRCLE.strokeDashoffset};
      animation: circleDraw ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.CIRCLE} cubic-bezier(.3,0,1,.1) infinite;
    }
    @keyframes circleDraw {
      to {
        stroke-dashoffset: 0;
      }
    }
    
    .animated-straight-line {
      position: absolute;
      left: 0; 
      right: 0;
      bottom: -0.05em;
      width: 100%; 
      height: 8px;
      pointer-events: none;
      border-radius: 2px;
      background: none;
    }
    
    .animated-straight-line svg {
      width: 100%; 
      height: 100%; 
      display: block;
    }
    
    .animated-straight-line-path {
      stroke: ${ABOUT_TEXT_CONSTANTS.COLORS.PRIMARY};
      stroke-width: ${ABOUT_TEXT_CONSTANTS.SVG_PROPS.LINE.strokeWidth};
      fill: none;
      stroke-dasharray: ${ABOUT_TEXT_CONSTANTS.SVG_PROPS.LINE.strokeDasharray};
      stroke-dashoffset: ${ABOUT_TEXT_CONSTANTS.SVG_PROPS.LINE.strokeDashoffset};
      animation: organicLineDraw ${ABOUT_TEXT_CONSTANTS.ANIMATION_DURATIONS.LINE} cubic-bezier(.4,0,.2,1) infinite;
    }
    @keyframes organicLineDraw {
      to {
        stroke-dashoffset: 0;
      }
    }
  `}</style>
);
