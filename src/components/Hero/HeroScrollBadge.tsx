import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';
import AnimatedCircle from './AnimatedCircle';
import CircularText from './CircularText';
import { createScrollHandler, validateSelector } from '../../utils/heroScrollBadge.utils';
import { SCROLL_BADGE_CONFIG } from '../../config/heroScrollBadge.config';
import { SCROLL_BADGE_DEFAULTS } from '../../constants/heroScrollBadge.constants';
import { SCROLL_BADGE_STYLES, createContainerStyle, createElementStyle, combineClassNames } from '../../styles/heroScrollBadge.styles';
import type { ScrollBadgeProps } from '../../types/heroScrollBadge.types';

const HeroScrollBadge: React.FC<ScrollBadgeProps> = ({
  onClick,
  targetSelector = SCROLL_BADGE_CONFIG.target.defaultSelector,
  className = '',
  disabled = false,
  ariaLabel = SCROLL_BADGE_DEFAULTS.ARIA_LABEL,
  testId = SCROLL_BADGE_DEFAULTS.TEST_ID,
}) => {
  const isValidTarget = useMemo(() => {
    return validateSelector(targetSelector);
  }, [targetSelector]);

  const handleScrollAction = useCallback(() => {
    const scrollHandler = createScrollHandler(targetSelector, onClick);
    scrollHandler();
  }, [targetSelector, onClick]);

  const containerClassName = useMemo(() => {
    return combineClassNames(SCROLL_BADGE_STYLES.container, className);
  }, [className]);

  const buttonClassName = useMemo(() => {
    return combineClassNames(
      SCROLL_BADGE_STYLES.button.base,
      disabled ? SCROLL_BADGE_STYLES.button.disabled : undefined
    );
  }, [disabled]);

  const containerStyle = useMemo(() => {
    return createContainerStyle(
      SCROLL_BADGE_CONFIG.dimensions.container.width,
      SCROLL_BADGE_CONFIG.dimensions.container.height
    );
  }, []);

  if (!isValidTarget) {
    console.warn(`Invalid target selector: ${targetSelector}`);
    return null;
  }

  return (
    <motion.div
      className={containerClassName}
      style={containerStyle}
      data-testid={testId}
      {...SCROLL_BADGE_CONFIG.animation.fadeTransition}
    >
      <button
        type="button"
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? undefined : handleScrollAction}
        className={buttonClassName}
        style={createElementStyle(SCROLL_BADGE_DEFAULTS.Z_INDEX.BUTTON)}
        role="button"
        disabled={disabled}
      >
        <AnimatedCircle
          radius={SCROLL_BADGE_CONFIG.dimensions.outerCircle.radius}
          strokeColor={SCROLL_BADGE_CONFIG.styling.colors.stroke}
          strokeWidth={SCROLL_BADGE_CONFIG.dimensions.outerCircle.strokeWidth}
          dashArray={SCROLL_BADGE_CONFIG.styling.spacing.dashArray}
          className={SCROLL_BADGE_STYLES.elements.circle}
        />

        <CircularText
          text={SCROLL_BADGE_CONFIG.text.content}
          radius={SCROLL_BADGE_CONFIG.dimensions.innerCircle.radius}
          fontSize={SCROLL_BADGE_CONFIG.text.fontSize}
          letterSpacing={SCROLL_BADGE_CONFIG.text.letterSpacing}
          pathLength={SCROLL_BADGE_CONFIG.text.pathLength}
          rotationDuration={SCROLL_BADGE_CONFIG.animation.rotationDuration}
          className={SCROLL_BADGE_STYLES.elements.text}
        />

        <div className={SCROLL_BADGE_STYLES.elements.arrowContainer}>
          <ScrollArrow
            width={SCROLL_BADGE_CONFIG.dimensions.arrow.width}
            height={SCROLL_BADGE_CONFIG.dimensions.arrow.height}
            strokeColor={SCROLL_BADGE_CONFIG.styling.colors.stroke}
            strokeWidth={1}
          />
        </div>
      </button>
    </motion.div>
  );
};

export default HeroScrollBadge;
