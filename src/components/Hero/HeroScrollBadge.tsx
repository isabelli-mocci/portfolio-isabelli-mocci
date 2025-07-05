import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';
import AnimatedCircle from './AnimatedCircle';
import CircularText from './CircularText';
import { createScrollHandler, validateSelector } from '../../utils/heroScrollBadge.utils';
import { HERO_SCROLL_BADGE_CONFIG } from '../../config/hero.config';
import { SCROLL_BADGE_DEFAULTS } from '../../constants/heroScrollBadge.constants';
import { SCROLL_BADGE_STYLES, createContainerStyle, createElementStyle, combineClassNames } from '../../styles/heroScrollBadge.styles';
import type { ScrollBadgeProps } from '../../types/heroScrollBadge.types';

const HeroScrollBadge: React.FC<ScrollBadgeProps> = ({
  onClick,
  targetSelector = HERO_SCROLL_BADGE_CONFIG.target.defaultSelector,
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
      HERO_SCROLL_BADGE_CONFIG.dimensions.container.width,
      HERO_SCROLL_BADGE_CONFIG.dimensions.container.height
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
      {...HERO_SCROLL_BADGE_CONFIG.animation.fadeTransition}
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
          radius={HERO_SCROLL_BADGE_CONFIG.dimensions.outerCircle.radius}
          strokeColor={HERO_SCROLL_BADGE_CONFIG.styling.colors.stroke}
          strokeWidth={HERO_SCROLL_BADGE_CONFIG.dimensions.outerCircle.strokeWidth}
          dashArray={HERO_SCROLL_BADGE_CONFIG.styling.spacing.dashArray}
          className={SCROLL_BADGE_STYLES.elements.circle}
        />

        <CircularText
          text={HERO_SCROLL_BADGE_CONFIG.text.content}
          radius={HERO_SCROLL_BADGE_CONFIG.dimensions.innerCircle.radius}
          fontSize={HERO_SCROLL_BADGE_CONFIG.text.fontSize}
          letterSpacing={HERO_SCROLL_BADGE_CONFIG.text.letterSpacing}
          pathLength={HERO_SCROLL_BADGE_CONFIG.text.pathLength}
          rotationDuration={HERO_SCROLL_BADGE_CONFIG.animation.rotationDuration}
          className={SCROLL_BADGE_STYLES.elements.text}
        />

        <div className={SCROLL_BADGE_STYLES.elements.arrowContainer}>
          <ScrollArrow
            width={HERO_SCROLL_BADGE_CONFIG.dimensions.arrow.width}
            height={HERO_SCROLL_BADGE_CONFIG.dimensions.arrow.height}
            strokeColor={HERO_SCROLL_BADGE_CONFIG.styling.colors.stroke}
            strokeWidth={1}
          />
        </div>
      </button>
    </motion.div>
  );
};

export default HeroScrollBadge;
