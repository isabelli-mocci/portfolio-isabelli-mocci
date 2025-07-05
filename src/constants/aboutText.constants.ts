export const ABOUT_TEXT_CONSTANTS = {
  COLORS: {
    PRIMARY: '#adff2f',
    WHITE: '#ffffff'
  },
  
  ICON_STYLES: {
    ARROW: {
      fontSize: '1.2em',
      width: '1.5em'
    },
    HEART: {
      fontSize: '.9em',
      width: '1.5em'
    },
    DUMBBELL: {
      fontSize: '1.1em'
    },
    HAND: {
      fontSize: '.8em'
    },
    EXCLAMATION: {
      fontSize: '1.5em'
    }
  },
  
  ANIMATION_DURATIONS: {
    ARROW: '1.2s',
    HEART: '2.2s',
    DUMBBELL: '1.3s',
    HAND: '1.1s',
    EXCLAMATION: '1.2s',
    CIRCLE: '3.2s',
    LINE: '3.2s'
  },
  
  SVG_PROPS: {
    CIRCLE: {
      viewBox: '0 0 226 80',
      strokeWidth: '3',
      strokeDasharray: '500',
      strokeDashoffset: '500'
    },
    LINE: {
      viewBox: '0 0 1100 16',
      strokeWidth: '3',
      strokeDasharray: '1150',
      strokeDashoffset: '1150'
    }
  }
} as const;
